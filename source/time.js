const Converter = require("./converter");

function Time(input, options) {
    const conversionFactors = {
        ns: 1,                
        mu: 1000,             
        ms: 1000000,          
        s: 1000000000,        
        min: 60000000000,     
        h: 3600000000000,     
        d: 86400000000000,    
        week: 604800000000000,
        month: 2.628e+15,     
        year: 3.154e+16
    }
    
    return Converter(input, options, conversionFactors);
}

module.exports = Time;