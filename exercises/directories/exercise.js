const exercise = require('../../lib/exercise')

exercise.queryUrl = (port) => `http://localhost:${port}/foo/bar/baz/file.html`;

module.exports = exercise;
