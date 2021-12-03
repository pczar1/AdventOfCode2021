const fs = require('fs');
const { calculate } = require("./positionCalc.js")

let commands = fs.readFileSync('input.txt', 'utf8').split('\n');

console.time('calculate')

const result = calculate(commands);

console.timeEnd('calculate')

console.log(result);