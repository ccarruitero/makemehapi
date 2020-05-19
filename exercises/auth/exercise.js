const hyperquest = require('hyperquest');
const exercise = require('../../lib/exercise');

exercise.queryUrl = (port) => `http://hapi:auth@localhost:${port}/`;

exercise.handleInput = (request, stream, port) => {
  const failUrl = `http://hapi:fail@localhost:${port}/`;

  request.on('response', (res) => {
    stream.write(`${res.statusCode}\n`);

    hyperquest.get(failUrl).pipe(stream);
  })
};

module.exports = exercise;
