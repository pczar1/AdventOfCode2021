const fs = require('fs');
const { calculate } = require("./fishCalc.js")

let fishes = fs.readFileSync('input.txt', 'utf8').split(',').map(x => Number(x));

console.time('calculate')

const result = calculate(fishes);

console.timeEnd('calculate')

console.log(result);