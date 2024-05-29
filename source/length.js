const Converter = require("./converter");

function Length(input, options) {
    const conversionFactors = {
        mm: 1,
        cm: 10,
        m: 1000,
        "in": 25.4,
        "ft-us": 304.8,
        ft: 304.8,
        mi: 1609344
    }
    
    return Converter(input, options, conversionFactors);
}

module.exports = Length;