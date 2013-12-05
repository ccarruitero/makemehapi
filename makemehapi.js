#!/usr/bin/env node

// Require modules

var Workshopper = require('workshopper');
var Path = require('path');


Workshopper({
    name: 'makemehapi',
    title: 'Make Me Hapi',
    appDir: __dirname,
    helpFile : Path.join(__dirname, 'help.txt')
}).init();