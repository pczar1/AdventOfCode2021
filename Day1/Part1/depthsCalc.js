const calculate = depths => {
    let increaseCounter = 0;
    for (let i = 1; i < depths.length; i++) {
        if (depths[i] > depths[i - 1]) {
            increaseCounter++;
        }
    }

    return increaseCounter;
}

module.exports = {
    calculate
}