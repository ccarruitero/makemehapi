const exercise = require('../../lib/exercise')

exercise.queryUrl = (port) => {
  const nameParam = encodeURIComponent(exercise.__('name_param'));
  return `http://localhost:${port}/?name=${nameParam}`;
};

module.exports = exercise;
