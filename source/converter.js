function Converter (input, options, conversionFactors) {
    if (!options || typeof options !== 'object')
        throw new Error(`Options object with 'from' and 'to' properties is required.`);

    const { from, to } = options;

    if (!(from in conversionFactors)) throw new Error(`Invalid 'from' unit: ${from}`);
    if (!(to in conversionFactors)) throw new Error(`Invalid 'to' unit: ${to}`);

    const convert = (value, unit) => (value * conversionFactors[unit]) / conversionFactors[to];
    return convert(input, from);
}

module.exports = Converter;