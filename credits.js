const Fs = require('fs');
const Path = require('path');
const Colors = require('colors-tmpl');


function credits () {

  Fs.readFile(Path.join(__dirname, './credits.txt'), 'utf8', function (err, data) {

    if(err) {
      throw err;
    }

    console.log(Colors(data));
  });
}

module.exports = credits;