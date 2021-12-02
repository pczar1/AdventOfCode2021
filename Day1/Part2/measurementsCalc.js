const calculate = depths => {
    let increaseCounter = 0;
    for (let i = 0; i < depths.length; i++) {
        if (!canCreateRightSum(i, depths.length)) {
            return increaseCounter;
        }
        let leftSum = depths[i] + depths[i + 1] + depths[i + 2];
        let rightSum = depths[i + 1] + depths[i + 2] + depths[i + 3];
        if (rightSum > leftSum) {
            increaseCounter++;
        }
    }

    return increaseCounter;
}

const canCreateRightSum = (index, depthsLength) => {
    return index + 3 < depthsLength;
}


module.exports = {
    calculate
}