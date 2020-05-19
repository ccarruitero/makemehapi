const through2 = require('through2');
const hyperquest = require('hyperquest');
const bl = require('bl');
let exercise = require('workshopper-exercise')();
const filecheck = require('workshopper-exercise/filecheck');
const execute = require('workshopper-exercise/execute');
const comparestdout = require('workshopper-exercise/comparestdout');
const verifyStatusProcessor = require('./verifyStatusProcessor');
const { rndport } = require('./utils');

exercise.longCompareOutput = true;

exercise = filecheck(exercise);

exercise = execute(exercise);

exercise.addSetup(function (mode, callback) {
  this.submissionPort = rndport();
  this.solutionPort = this.submissionPort + 1;

  this.submissionArgs = [this.submissionPort];
  this.solutionArgs = [this.solutionPort];

  this.submissionResult = {};

  process.nextTick(callback);
});

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

exercise = comparestdout(exercise);

exercise = verifyStatusProcessor(exercise);

function killChild (exercise) {
  [ exercise.submissionChild, exercise.solutionChild ].forEach(function (child) {
    if (child && typeof child.kill == 'function') child.kill()
  })
}

// delayed for 2000ms to wait for servers to start so we can start
// playing with them
function query (mode) {
  const exercise = this;

  function connect (port, stream, result = null) {
    const url = exercise.queryUrl(port);

    function error (err) {
      const msg = exercise.__('fail.cannot_connect', { port, code: err.code });
      exercise.emit('fail', msg);
      killChild(exercise);
    }

    const opts = Object.assign({ method: 'GET' }, exercise.requestOpts || {});

    const request = hyperquest(url, opts)
      .on('error', error)
      .on('response', (res) => {
        if (result) {
          result.response = res;
          result.url = url;
        }
      });

    const handleInput = exercise.handleInput;
    if (handleInput && (typeof handleInput === 'function')) {
      handleInput(request, stream, port);
    } else {
      request.pipe(stream);
    }
  }

  connect(this.submissionPort, this.submissionStdout, this.submissionResult);

  if (mode === 'verify') {
    connect(this.solutionPort, this.solutionStdout);
  }
}

module.exports = exercise;
