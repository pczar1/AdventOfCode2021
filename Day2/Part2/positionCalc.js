const calculate = commands => {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    for (let i = 0; i < commands.length; i++) {
        const splittedCommand = commands[i].split(' ');
        const direction = splittedCommand[0];
        const value = Number(splittedCommand[1]);

        switch (direction) {
            case 'forward': {
                horizontal += value;
                depth += aim * value;
                break;
            }
            case 'down': {
                aim += value;
                break;
            }
            case 'up': {
                aim -= value;
            }
            default: {
                break;
            }
        }
    }

    return horizontal * depth;
}

module.exports = {
    calculate
}