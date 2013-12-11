// Require modules

var PassThrough = require('stream').PassThrough;
var hyperquest = require('hyperquest');


module.exports = function (run) {

    var submissionOut = new PassThrough();
    var solutionOut = new PassThrough();

    setTimeout(function () {

        hyperquest.get('http://localhost:8080/plugins').pipe(submissionOut);
        if (!run) {
            hyperquest.get('http://localhost:8081/plugins').pipe(solutionOut);
        }
    }, 500);

    return {
        submissionArgs: [8080],
        solutionArgs: [8081],
        a: submissionOut,
        b: solutionOut
    };
};