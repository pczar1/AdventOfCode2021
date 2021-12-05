const gridChunk = 5;
const calculate = (bingoNumbers, bingoGrids) => {
    let sumOfAllUnmarkedNumbersOnWinningBoard = null;
    let initialGridsCount = bingoGrids.length;
    let winnerGridsIndexes = [];

    for (let i = 0; i < bingoNumbers.length; i++) {
        let bingoNumber = bingoNumbers[i];
        for (let gridIndex = 0; gridIndex < bingoGrids.length; gridIndex++) {
            let bingoGrid = bingoGrids[gridIndex];
            for (let row = 0; row < gridChunk; row++) {
                for (let column = 0; column < gridChunk; column++) {
                    if (bingoGrid[row][column] == bingoNumber) {
                        bingoGrid[row][column] = null;
                    }
                }
            }
            if (isWinner(bingoGrid)) {
                if (!winnerGridsIndexes.includes(gridIndex)) {
                    winnerGridsIndexes.push(gridIndex);
                }

                if (winnerGridsIndexes.length == initialGridsCount) {
                    for (let row = 0; row < gridChunk; row++) {
                        for (let column = 0; column < gridChunk; column++) {
                            if (bingoGrid[row][column] != null) {
                                sumOfAllUnmarkedNumbersOnWinningBoard += bingoGrid[row][column];
                            }
                        }
                    }
                    return bingoNumber * sumOfAllUnmarkedNumbersOnWinningBoard;
                }
            }
        }
    }

    return 0;
}

const isWinner = bingoGrid => {
    for (let row = 0; row < gridChunk; row++) {
        let isRowFullyMarked = true;
        for (let column = 0; column < gridChunk; column++) {
            if (bingoGrid[row][column] != null) {
                isRowFullyMarked = false;
                break;
            }
        }
        if (isRowFullyMarked) {
            return true;
        }
    }

    for (let column = 0; column < gridChunk; column++) {
        let isColumnFullyMarked = true;
        for (let row = 0; row < gridChunk; row++) {
            if (bingoGrid[row][column] != null) {
                isColumnFullyMarked = false;
                break;
            }
        }
        if (isColumnFullyMarked) {
            return true;
        }
    }

    return false;
}

module.exports = {
    calculate,
    gridChunk
}