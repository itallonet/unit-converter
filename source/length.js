function Length(input, options) {
    if(!options || typeof options !== 'object')
        throw new Error(`Options object with 'from' and 'to' properties is required.`);

    const { from, to } = options;
    const conversionFactors = {
        mm: 1,
        cm: 10,
        m: 1000,
        "in": 25.4,
        "ft-us": 304.8,
        ft: 304.8,
        mi: 1609344
    }

    if (!(from in conversionFactors)) throw new Error(`Invalid 'from' unit: ${from}`);
    if (!(to in conversionFactors)) throw new Error(`Invalid 'to' unit: ${to}`);

    const convert = (value, unit) => (value * conversionFactors[unit]) / conversionFactors[to];
    return convert(input, from);
}

module.exports = Length;