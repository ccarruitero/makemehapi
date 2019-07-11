const fs = require('fs');
const path = require('path');
const colorsTmpl = require('colors-tmpl');
const combinedStream = require('combined-stream');

function read (file) {
  return fs.createReadStream(path.join(__dirname, file), { encoding: 'utf8' });
}

function credits (workshopper) {
  combinedStream
    .create()
    .append(read(`./i18n/credits/${workshopper.lang}.txt`))
    .append(read('./credits.txt'))
    .on('error', (err) => {
      console.log(err);
      throw err;
    })
    .on('data', (data) => {
      console.log(colorsTmpl(data));
    })
    .resume();
}

module.exports = credits;
