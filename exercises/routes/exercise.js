const exercise = require('../../lib/exercise')

exercise.queryUrl = (port) => `http://localhost:${port}/world`;

module.exports = exercise;
