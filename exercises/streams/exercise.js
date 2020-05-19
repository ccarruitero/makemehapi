const exercise = require('../../lib/exercise')

exercise.queryUrl = (port) => `http://localhost:${port}/`;

module.exports = exercise;
