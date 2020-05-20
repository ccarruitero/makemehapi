const exercise = require('../../lib/exercise')

exercise.queryUrl = (port) => `http://localhost:${port}/`;

exercise.addVerifyProcessor(function (callback) {
  const { response, url } = this.submissionResult;
  if (response.statusCode === 404) {
    const msg = exercise.__('fail.page_not_found', { url });
    exercise.emit('fail', msg);

    callback(null, false);
  }
});

module.exports = exercise;
