const _ = require('lodash');
const bootstrapValidator = require('./bootstrapValidator');
const { Calculator } = require('./calculator');

const mainString = process.argv[2];
const N = process.argv[3];

bootstrapValidator.validate(mainString, N);

const calculator = new Calculator(mainString, N);
const highestResults = calculator.process();

console.log('Starting process');
console.log('----------------------------------------');
    
highestResults.forEach(result => {
    console.log(`Result: ${result.result}`);
    console.log(`Substring: ${result.parsedNumbers.join('')}`);
});

console.log('----------------------------------------');
console.log('Process ended, calculation done');
