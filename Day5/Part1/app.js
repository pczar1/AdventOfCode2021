const fs = require('fs');
const { calculate } = require("./coordinatesCalc.js")

let inputs = fs.readFileSync('input.txt', 'utf8').split('\n');
let lines = [];
inputs.forEach(input => {
    let coordinates = input.split(' -> ');
    let x1y1 = coordinates[0].split(',');
    let x2y2 = coordinates[1].split(',');
    lines.push({
        x1: x1y1[0],
        y1: x1y1[1],
        x2: x2y2[0],
        y2: x2y2[1],
    });
})

console.time('calculate')

const result = calculate(lines);

console.timeEnd('calculate')

console.log(result);