const through2 = require('through2');
const hyperquest = require('hyperquest');
const bl = require('bl');
let exercise = require('workshopper-exercise')();
const filecheck = require('workshopper-exercise/filecheck');
const execute = require('workshopper-exercise/execute');
const comparestdout = require('workshopper-exercise/comparestdout');

// the output will be long lines so make the comparison take that into account
exercise.longCompareOutput = true;

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

function rndport () {
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
  if (mode === 'verify') {
    this.solutionStdout = through2();
  }

  setTimeout(query.bind(this, mode), 2000);

  process.nextTick(() => {
    callback(null, true);
  });
});

// compare stdout of solution and submission
exercise = comparestdout(exercise);

// delayed for 2000ms to wait for servers to start so we can start
// playing with them
function query (mode) {
  const exercise = this;

  function verify (port, stream) {
    const url = `http://localhost:${port}/foo/bar/baz/file.html`;

    function error (err) {
      const msg = exercise.__('fail.cannot_connect', port, err.code);
      exercise.emit('fail', msg);
    }

    hyperquest.get(url)
      .on('error', error)
      .on('response', (res) => {
        if (res.statusCode !== 200 && mode === 'verify') {
          const msg = exercise.__('fail.wrong_status_code', res.statusCode, url, 200);
          exercise.emit('fail', msg);
          exercise.workshopper.exerciseFail(null, exercise);
        }
      })
      .pipe(bl((err, data) => {
        if (err) return stream.emit('error', err);

        stream.write(`${data.toString()}\n`);
        stream.end();
      }));
  }

  verify(this.submissionPort, this.submissionStdout);

  if (mode === 'verify') {
    verify(this.solutionPort, this.solutionStdout);
  }
}

module.exports = exercise;
