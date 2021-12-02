const fs = require('fs');
const { calculate } = require("./measurementsCalc.js")

let depths = fs.readFileSync('input.txt', 'utf8').split('\n').map(i => Number(i));

console.time('calculate')

const increaseCounter = calculate(depths);

console.timeEnd('calculate')

console.log(increaseCounter);