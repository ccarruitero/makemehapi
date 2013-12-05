// Load modules

var ChildProcess = require('child_process');
var Lab = require('lab');
var Path = require('path');


// Declare internals

var internals = {};


// Test shortcuts

var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;
var describe = Lab.experiment;
var it = Lab.test;


describe('makemehapi', function () {

    it('can be ran', function (done) {

        var execPath = Path.join(__dirname, '../', 'makemehapi');
        var makemehapi = ChildProcess.spawn(execPath);
        expect(makemehapi).to.exist;
        makemehapi.kill();
        done();
    });
});