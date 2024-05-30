const Converter = require("./converter");

function Mass(input, options) {
    const conversionFactors = {
        mcg: 1,
        mg: 1000,
        g: 1000000,
        kg: 1000000000,
        oz: 28349523.125,
        lb: 453592370,
        mt: 1000000000000,
        t: 1000000000000
    };

    return Converter(input, options, conversionFactors);
}

module.exports = Mass;
