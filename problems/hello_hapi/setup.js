// Require modules

var PassThrough = require('stream').PassThrough;
var hyperquest = require('hyperquest');


module.exports = function () {

    var submissionOut = new PassThrough();
    var solutionOut = new PassThrough();

    setTimeout(function () {

        hyperquest.get('http://localhost:8080').pipe(submissionOut);
        hyperquest.get('http://localhost:8081').pipe(solutionOut);
    }, 500);

    return {
        submissionArgs: [8080],
        solutionArgs: [8081],
        a: submissionOut,
        b: solutionOut
    };
};