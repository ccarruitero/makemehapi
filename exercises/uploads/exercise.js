const FormData = require('form-data');
const fs = require('fs');
const exercise = require('../../lib/exercise')

exercise.queryUrl = (port) => `http://localhost:${port}/upload`;

exercise.requestOpts = { method: 'POST' };

exercise.handleInput = (request, stream, port) => {
  const form = new FormData();
  form.append('description', 'makemehapi');
  form.append('file', fs.createReadStream(`${__dirname}/solution/input.txt`));
  const headers = form.getHeaders();
  request.setHeader('content-type', headers['content-type']);
  form.pipe(request).pipe(stream);
};

module.exports = exercise;
