#!/usr/bin/env node

var Workshopper = require('workshopper');
var path = require('path');
var credits = require('./credits');

var name = 'makemehapi';

function fpath (f) {
  return path.join(__dirname, f);
}

Workshopper({
    name : name,
    exerciseDir : fpath('./exercises/'),
    appDir : __dirname,
    languages : ['en', 'fr'],
    helpFile : fpath('./i18n/help/{lang}.txt'),
    menuItems : [{
        name : 'credits',
        handler : credits
    }]
});
