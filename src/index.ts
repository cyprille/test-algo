import * as calculator from './calculator';

// Retrieves input arguments
const digits = process.argv[2];
const number = parseInt(process.argv[3]);

// Starts the calculation
const result = calculator.getMaxProduct(digits, number);

// Displays the result
console.log(result);
