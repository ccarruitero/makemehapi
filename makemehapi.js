#!/usr/bin/env node

const Workshopper = require('workshopper');
const path        = require('path')
const credits     = require('./credits');
const menu        = require('./exercises/menu');

const name        = 'makemehapi';
const title       = 'REST WELL WITH HAPI';
const subtitle    = '\x1b[23mSelect an exercise and hit \x1b[3mEnter\x1b[23m to begin';


function fpath (f) {
  return path.join(__dirname, f)
}


Workshopper({
    name        : name,
    title       : title,
    subtitle    : subtitle,
    exerciseDir : fpath('./exercises/'),
    appDir      : __dirname,
    helpFile    : fpath('help.txt'),
    menu        : [ {
        name    : 'credits',
        handler : credits
    } ],
    menuOptions : {}
});