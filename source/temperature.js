const Converter = require("./converter");

function Temperature(input, options) {
    const { from, to } = options, conversionFactors = {
        C: { toC: (v) => v, fromC: (v) => v },
        F: { toC: (v) => (v - 32) * 5/9, fromC: (v) => (v * 9/5) + 32 },
        K: { toC: (v) => v - 273.15, fromC: (v) => v + 273.15 },
        R: { toC: (v) => (v - 491.67) * 5/9, fromC: (v) => (v * 9/5) + 491.67 }
    };

    if (conversionFactors[from] && conversionFactors[to]) {
        const valueInC = conversionFactors[from].toC(input);
        const convertedValue = conversionFactors[to].fromC(valueInC);
        return convertedValue;
    } else throw new Error('Unsupported unit');
}

module.exports = Temperature;
