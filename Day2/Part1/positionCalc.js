const calculate = commands => {
    let horizontal = 0;
    let depth = 0;
    for (let i = 0; i < commands.length; i++) {
        const splittedCommand = commands[i].split(' ');
        const direction = splittedCommand[0];
        const value = Number(splittedCommand[1]);

        switch (direction) {
            case 'forward': {
                horizontal += value;
                break;
            }
            case 'down': {
                depth += value;
                break;
            }
            case 'up': {
                depth -= value;
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