#!/usr/bin/env node

var Workshopper = require('workshopper-adventure');
var path = require('path');
var credits = require('./credits');

var name = 'makemehapi';

function fpath (f) {
  return path.join(__dirname, f);
}

const workshopper = Workshopper({
    name : name,
    exerciseDir : fpath('./exercises/'),
    appDir : __dirname,
    languages : ['en', 'fr', 'ja', 'ko'],
    helpFile : fpath('./i18n/help/{lang}.txt'),
    menuItems : [{
        name : 'credits',
        handler : credits
    }]
});

workshopper.addAll(require('./exercises/menu.json'));

module.exports = workshopper;
