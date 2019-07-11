#!/usr/bin/env node

const Workshopper = require('workshopper-adventure');
const path = require('path');
const credits = require('./credits');

const name = 'makemehapi';

function fpath (f) {
  return path.join(__dirname, f);
}

const workshopper = Workshopper({
  name,
  exerciseDir: fpath('./exercises/'),
  appDir: __dirname,
  languages: ['en', 'fr', 'ja', 'ko'],
  helpFile: fpath('./i18n/help/{lang}.txt'),
  menuItems: [{
    name: 'credits',
    handler: credits
  }]
});

workshopper.addAll(require('./exercises/menu.json'));

module.exports = workshopper;
