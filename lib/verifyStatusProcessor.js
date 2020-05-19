const verifyStatusProcessor = (exercise) => {
  exercise.addVerifyProcessor(function (callback) {
    const { response, url } = this.submissionResult;
    const { statusCode } = response;
    const expected = 200;
    let pass = false;

    if (statusCode === expected) {
      exercise.emit('pass', exercise.__('pass.status_code'));
      pass = true;
    } else {
      const msg = exercise.__('fail.wrong_status_code', { statusCode, url, expected });
      exercise.emit('fail', msg);
    }

    callback(null, pass);
  });
  return exercise;
}

module.exports = verifyStatusProcessor;
