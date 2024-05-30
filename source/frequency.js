const Converter = require("./converter");

function Frequency(input, options) {
    const conversionFactors = {
        Hz: 1,
        mHz: 1e-3,
        kHz: 1e3,
        MHz: 1e6,
        GHz: 1e9,
        THz: 1e12,
        rpm: 1 / 60,
        "deg/s": 1 / 360,
        "rad/s": 1 / (2 * Math.PI)
    };

    return Converter(input, options, conversionFactors);
}

module.exports = Frequency;
