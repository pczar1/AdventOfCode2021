const fs = require('fs');
const { calculate } = require("./lifeSupportRatingCalc.js")

let inputs = fs.readFileSync('input.txt', 'utf8').split('\n');

console.time('calculate')

const result = calculate(inputs);

console.timeEnd('calculate')

console.log(result);