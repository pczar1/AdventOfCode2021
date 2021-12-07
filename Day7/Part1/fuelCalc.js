const calculate = positions => {
    let minPosition = Math.min(...positions);
    let maxPosition = Math.max(...positions);
    let fuelCost = [];
    for (let position = minPosition; position <= maxPosition; position++) {
        let positionCost = 0;
        positions.forEach(p => positionCost += Math.abs(p - position));
        fuelCost[position] = positionCost;
    }

    return Math.min(...fuelCost);
}

module.exports = {
    calculate
}