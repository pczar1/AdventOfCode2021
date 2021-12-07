const fs = require('fs');
const { calculate } = require("./fuelCalc.js")

let positions = fs.readFileSync('input.txt', 'utf8').split(',').map(x => Number(x));

console.time('calculate')

const result = calculate(positions);

console.timeEnd('calculate')

console.log(result);