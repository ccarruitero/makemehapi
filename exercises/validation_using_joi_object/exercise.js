const { Readable } = require('stream');
const exercise = require('../../lib/exercise')

exercise.queryUrl = (port) => `http://localhost:${port}/login`;

exercise.requestOpts = { method: 'POST' };

exercise.handleInput = (request, stream, port) => {
  const message = {
    isGuest: false,
    username: 'hapi',
    password: 'makemehapi'
  };
  const input = new Readable({ read(size) {} });
  input.pipe(request).pipe(stream);
  input.push(JSON.stringify(message));
  input.push(null);
};

module.exports = exercise;
