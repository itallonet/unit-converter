const Converter = require("./converter");

function Digital(input, options) {
    const conversionFactors = {
        b: 1,
        Kb: 1e3,
        Mb: 1e6,
        Gb: 1e9,
        Tb: 1e12,
        B: 8,
        KB: 8e3,
        MB: 8e6,
        GB: 8e9,
        TB: 8e12
    };

    return Converter(input, options, conversionFactors);
}

module.exports = Digital;
