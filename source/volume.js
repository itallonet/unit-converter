const Converter = require("./converter");

function Volume(input, options) {
    const conversionFactors = {
        mm3: 1,
        cm3: 1000,
        ml: 1000,
        l: 1000000,
        kl: 1000000000,
        m3: 1000000000,
        km3: 1e+18,
        tsp: 4928.92,
        Tbs: 14786.8,
        in3: 16387.064,
        "fl-oz": 29573.53,
        cup: 236588.24,
        pnt: 473176.47,
        qt: 946352.94,
        gal: 3785411.78,
        ft3: 2.83168466e+10,
        yd3: 7.64554858e+11
    };

    return Converter(input, options, conversionFactors);
}

module.exports = Volume;
