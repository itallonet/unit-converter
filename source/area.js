const Converter = require("./converter");

function Area(input, options) {
    const conversionFactors = {
        mm2: 1,
        cm2: 100,
        m2: 1000000,
        ha: 10000000000,
        km2: 1000000000000,
        in2: 645.16,
        ft2: 92903.04,
        ac: 4046856422.4,
        mi2: 2589988110336
    };

    return Converter(input, options, conversionFactors);
}

module.exports = Area;
