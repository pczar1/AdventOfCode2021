const calculate = inputs => {
    let gammaRate = '';
    let epsilonRate = '';

    for (let c = 0; c < inputs[0].length; c++) {
        let bit0Counter = 0;
        let bit1Counter = 0;

        for (let i = 0; i < inputs.length; i++) {
            let bit = inputs[i].charAt(c);
            if (bit == '0') {
                bit0Counter++;
            } else {
                bit1Counter++;
            }
        }

        if (bit0Counter > bit1Counter) {
            gammaRate += '0';
            epsilonRate += '1';
        } else {
            gammaRate += '1';
            epsilonRate += '0';
        }
    }

    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

module.exports = {
    calculate
}