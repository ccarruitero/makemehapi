const exercise = require('../../lib/exercise')

exercise.queryUrl = (port) => `http://localhost:${port}/?name=${exercise.__('name_param')}`;

module.exports = exercise;
