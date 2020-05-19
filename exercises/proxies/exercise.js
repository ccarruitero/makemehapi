const Hapi = require('@hapi/hapi');
const exercise = require('../../lib/exercise')

exercise.queryUrl = (port) => `http://localhost:${port}/proxy`;

exercise.addSetup(function (mode, callback) {
  const self = this;

  (async () => {
    try {
      // start the server being proxied to
      self.server = new Hapi.Server({
        host: 'localhost',
        port: 65535
      });

      self.server.route({
        method: 'GET',
        path: '/proxy',
        handler: request => exercise.__('greeting')
      });

      await self.server.start();
    } catch (error) {
      console.log(error);
    }
  })();

  process.nextTick(callback);
});

exercise.addCleanup(function (mode, passed, callback) {
  if (this.server) {
    this.server.stop();
  }

  process.nextTick(callback)
});

module.exports = exercise;
