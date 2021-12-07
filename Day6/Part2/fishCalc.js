const calculate = fishes => {
    const timer = 6;
    const days = 256;
    const newFishTimer = 8;

    let groupedFishes = [];
    for (let i = 0; i <= newFishTimer; i++) {
        groupedFishes[i] = fishes.filter(f => f === i).length;
    }

    let newFishesGroups = Array(newFishTimer + 1).fill(0);
    let modifiedFishGroups = [...groupedFishes];

    for (let day = 0; day < days; day++) {
        for (let i = modifiedFishGroups.length - 1; i >= 0; i--) {
            let fishCount = modifiedFishGroups[i];
            if (i == 0) {
                let legacyFishValue = newFishesGroups[timer];
                newFishesGroups[timer] = legacyFishValue + fishCount;
                newFishesGroups[newFishTimer] = fishCount;
            } else {
                newFishesGroups[i - 1] = fishCount;
            }
        }

        for (let i = 0; i <= newFishTimer; i++) {
            modifiedFishGroups[i] = newFishesGroups[i];
        }
    }

    return modifiedFishGroups.reduce((a, b) => a + b, 0)
}

module.exports = {
    calculate
}