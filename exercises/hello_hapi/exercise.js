var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
// var compareserver = require('lib/comparestdout');


// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

//prepare the compareserver
var compare_config = {
    url: '/',
    submission_port: 8080,
    example_port: 8081
};

// compare stdout of solution and submission
exercise = comparestdout(exercise);



module.exports = exercise;

// Require modules

// var PassThrough = require('stream').PassThrough;
// var hyperquest = require('hyperquest');


// module.exports = function (run) {

//     var submissionOut = new PassThrough();
//     var solutionOut = new PassThrough();

//     setTimeout(function () {

//         hyperquest.get('http://localhost:8080').pipe(submissionOut);
//         if (!run) {
//             hyperquest.get('http://localhost:8081').pipe(solutionOut);
//         }
//     }, 500);

//     return {
//         submissionArgs: [8080],
//         solutionArgs: [8081],
//         a: submissionOut,
//         b: solutionOut
//     };
// };