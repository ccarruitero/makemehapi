// Require modules

var hyperquest = require('hyperquest');


module.exports = function (run) {

    setTimeout(function () {

        hyperquest.get('http://localhost:8080/');
        if (!run) {
            hyperquest.get('http://localhost:8081/');
        }
    }, 500);

    return {
        submissionArgs: [8080],
        solutionArgs: [8081]
    };
};