var through2 = require('through2');
var hyperquest = require('hyperquest');
var bl = require('bl');
var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');

// the output will be long lines so make the comparison take that into account
exercise.longCompareOutput = true;

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

function rndport() {

    return 1024 + Math.floor(Math.random() * 64511);
}

// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {

    this.submissionPort = rndport();
    this.solutionPort = this.submissionPort + 1;

    this.submissionArgs = [this.submissionPort];
    this.solutionArgs = [this.solutionPort];

    process.nextTick(callback);
});

// add a processor for both run and verify calls, added *before*
// the comparestdout processor so we can mess with the stdouts
exercise.addProcessor(function (mode, callback) {

    this.submissionStdout.pipe(process.stdout);

    // replace stdout with our own streams
    this.submissionStdout = through2();
    if (mode == 'verify') {
        this.solutionStdout = through2();
    }

    setTimeout(query.bind(this, mode), 1000);

    process.nextTick(function () {
        callback(null, true)
    });
});


// compare stdout of solution and submission
exercise = comparestdout(exercise)


// delayed for 2000ms to wait for servers to start so we can start
// playing with them
function query (mode) {
    var exercise = this

    function verify (port, stream) {

        function error (err) {
            var msg = exercise.__('fail.cannot_connect', port, err.code);
            exercise.emit('fail', msg);
        }

        var authSuccessUrl = 'http://hapi:auth@localhost:' + port + '/';
        var failUrl = 'http://hapi:fail@localhost:' + port + '/';

        hyperquest.get(authSuccessUrl)
            .on('error', error)
            .on('response', function (res) {
                if (res.statusCode !== 200 && mode === 'verify') {
                    exercise.emit(
                        'fail',
                        exercise.__('fail.wrong_status_code', res.statusCode, authSuccessUrl, 200));

                    exercise.workshopper.exerciseFail(null, exercise);
                } else {
                    stream.write(res.statusCode + '\n');

                    hyperquest.get(failUrl)
                        .pipe(bl(function (err, data) {

                            if (err) return stream.emit('error', err)

                            stream.write(data.toString().trim());
                            stream.end();
                        }));
                }
            });
    }

    verify(this.submissionPort, this.submissionStdout)

    if (mode == 'verify') {
        verify(this.solutionPort, this.solutionStdout);
    }
}


module.exports = exercise;
