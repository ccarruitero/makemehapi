const hyperquest = require('hyperquest');
const exercise = require('../../lib/exercise');

exercise.queryUrl = (port) => `http://localhost:${port}/set-cookie`;

exercise.handleInput = (request, stream, port) => {
  const checkCookiesUrl = `http://localhost:${port}/check-cookie`;

  request.on('response', (res) => {
    stream.write(`${JSON.stringify(res.headers['set-cookie'])}\n`);
    hyperquest.get(checkCookiesUrl, {
      headers: { Cookie: res.headers['set-cookie'] }
    }).pipe(stream);
  })
};

module.exports = exercise;
