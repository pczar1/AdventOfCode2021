const calculate = inputs => {
    let oxygenGeneratorRating = null;
    let co2ScrubberRating = null;

    let filteredOxygenInputs = inputs;
    let filteredCo2Inputs = inputs;

    for (let c = 0; c < inputs[0].length; c++) {
        let bit0OxygenInputsCounter = 0;
        let bit1OxygenInputsCounter = 0;

        let bit0Co2InputsCounter = 0;
        let bit1Co2InputsCounter = 0;

        if (oxygenGeneratorRating == null) {
            for (let i = 0; i < filteredOxygenInputs.length; i++) {
                let bit = filteredOxygenInputs[i].charAt(c);
                if (bit == '0') {
                    bit0OxygenInputsCounter++;
                } else {
                    bit1OxygenInputsCounter++;
                }
            }
        }

        if (co2ScrubberRating == null) {
            for (let i = 0; i < filteredCo2Inputs.length; i++) {
                let bit = filteredCo2Inputs[i].charAt(c);
                if (bit == '0') {
                    bit0Co2InputsCounter++;
                } else {
                    bit1Co2InputsCounter++;
                }
            }
        }

        if (bit0OxygenInputsCounter > bit1OxygenInputsCounter) {
            filteredOxygenInputs = filteredOxygenInputs.filter(input => input.charAt(c) == '0');
        } else {
            filteredOxygenInputs = filteredOxygenInputs.filter(input => input.charAt(c) == '1');
        }
        if (bit1Co2InputsCounter < bit0Co2InputsCounter) {
            filteredCo2Inputs = filteredCo2Inputs.filter(input => input.charAt(c) == '1');
        } else {
            filteredCo2Inputs = filteredCo2Inputs.filter(input => input.charAt(c) == '0');
        }

        if (filteredOxygenInputs.length === 1) {
            oxygenGeneratorRating = filteredOxygenInputs[0];
        }
        if (filteredCo2Inputs.length === 1) {
            co2ScrubberRating = filteredCo2Inputs[0];
        }
    }

    return parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);
}

module.exports = {
    calculate
}