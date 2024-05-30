const Converter = require("./converter");

function Speed(input, options) {
    const conversionFactors = {
        "m/s": 1,            
        "km/h": 1 / 3.6,     
        "m/h": 1 / 1609.344, 
        "knot": 1 / 1.943844, 
        "ft/s": 1 / 3.28084  
    };

    return Converter(input, options, conversionFactors);
}

module.exports = Speed;
