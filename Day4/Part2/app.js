const fs = require('fs');
const { calculate, gridChunk } = require("./bingoCalc.js")

let inputs = fs.readFileSync('input.txt', 'utf8').split('\n');

console.time('calculate')

let bingoNumbers = inputs[0].split(',').map(i => Number(i));
let bingoGrids = [];

let gridInputs = (inputs.slice(1)).filter(input => input !== '');

for (let i = 0; i < gridInputs.length; i += gridChunk) {

    let grid = gridInputs.slice(i, i + gridChunk);

    let bingoGrid = [];
    for (let row = 0; row < gridChunk; row++) {
        let gridRow = grid[row].trimStart().split(/ +/);
        bingoGrid[row] = new Array(gridChunk).fill(0);
        for (let column = 0; column < gridChunk; column++) {
            bingoGrid[row][column] = Number(gridRow[column]);
        }
    }

    bingoGrids.push(bingoGrid);
}

const result = calculate(bingoNumbers, bingoGrids);

console.timeEnd('calculate')

console.log(result);