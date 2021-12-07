const calculate = positions => {
    let minPosition = Math.min(...positions);
    let maxPosition = Math.max(...positions);
    let fuelCost = [];
    let movementsCosts = [];
    for (let position = minPosition; position <= maxPosition; position++) {
        let positionCost = 0;
        positions.forEach(p => {
            let steps = Math.abs(p - position);
            let costItem = movementsCosts.find(c => c.movement === steps);
            if (costItem != null) {
                positionCost += costItem.cost;
            } else {
                let cost = calculateCost(steps);
                positionCost += cost;
                movementsCosts.push({ movement: steps, cost: cost });
            }
        });

        fuelCost[position] = positionCost;
    }

    return Math.min(...fuelCost);
}

const calculateCost = steps => {
    let cost = 0;
    for (let i = 0, stepCost = 1; i < steps; i++, stepCost++) {
        cost += stepCost;
    }

    return cost;
}

module.exports = {
    calculate
}