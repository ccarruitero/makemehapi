const exercise = require('../../lib/exercise')

exercise.queryUrl = (port) => `http://localhost:${port}/chickens/foo`;

module.exports = exercise;
