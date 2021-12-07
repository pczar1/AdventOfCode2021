const calculate = fishes => {
    const timer = 6;
    const days = 80;
    const newFishTimer = 8;
    let pond = [...fishes];
    for (let day = 0; day < days; day++) {
        let newFishes = [];
        for (let i = 0; i < pond.length; i++) {
            let fishTimer = pond[i];
            if (fishTimer == 0) {
                fishTimer = timer;
                newFishes.push(newFishTimer);
            } else {
                fishTimer--;
            }
            pond[i] = fishTimer;
        }
        pond = [...pond, ...newFishes];
    }

    return pond.length;
}

module.exports = {
    calculate
}