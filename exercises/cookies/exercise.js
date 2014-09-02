var through2 = require('through2');
var hyperquest = require('hyperquest');
var bl = require('bl');
var workshopper = require('workshopper');
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

  setTimeout(query.bind(this, mode), 500);
  process.nextTick(function () {
    callback(null, true)
  });
});


// compare stdout of solution and submissionexercise = comparestdout(exercise)
exercise = comparestdout(exercise);

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query (mode) {
  var exercise = this
  function verify (port, stream) {

    function error (err) {
      exercise.emit('fail', 'Error connecting to http://localhost:' + port + ': ' + err.code)
    }


    var loginUrl = 'http://localhost:' + port + '/login';
    var profileUrl = 'http://localhost:' + port + '/profile';
    
    hyperquest.get(loginUrl)
      .on('error', error)
      .on('response', function(res) {
        if (res.statusCode != 200 && mode == 'verify') {
          exercise.emit('fail', 'Status code ' + res.statusCode + ' returned from url ' + url + ', expected 200.')
          workshopper.prototype.exerciseFail(null, exercise)
        } else {
          stream.write(JSON.stringify(res.headers['set-cookie']) + '\n')
          hyperquest.get(profileUrl, {
            headers : {Cookie : res.headers['set-cookie']}
          })
          .pipe(bl(function (err, data) {

            if (err)
              return stream.emit('error', err)

            stream.write(data.toString());
            stream.end();
          }));
        }
      }
   )
  }

    verify(this.submissionPort, this.submissionStdout)

    if (mode == 'verify') {
      verify(this.solutionPort, this.solutionStdout);
    }
}


module.exports = exercise;

