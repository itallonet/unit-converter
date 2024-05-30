const { Length, Area, Mass, Volume } = require("./module")

const __test = () => {
    console.info("Init tests!")
    console.info("Length");

    let tests = [
        { from: "mm", to: "m" },
        { from: "cm", to: "m" },
        { from: "m", to: "m" },
        { from: "mm", to: "cm" },
        { from: "cm", to: "mm" },
        { from: "cm", to: "in" },
        { from: "in", to: "cm" },
        { from: "cm", to: "ft-us" },
        { from: "ft-us", to: "cm" },
        { from: "cm", to: "ft" },
        { from: "ft", to: "cm" },
        { from: "cm", to: "mi" },
        { from: "m", to: "mm" },
        { from: "m", to: "cm" },
    ]

    tests.forEach((test) => {
        const label = `Length(1000, { from: "${test.from}", to: "${test.to}" }) execution time`;
        console.time(label);
        const result = Length(1000, test);
        console.timeEnd(label);
        console.log(`Length(1000, { from: "${test.from}", to: "${test.to}" }) = ${result}`);
    });

    console.info("Area")

    tests = [
        { from: "mm2", to: "m2" },
        { from: "cm2", to: "m2" },
        { from: "m2", to: "m2" },
        { from: "mm2", to: "cm2" },
        { from: "cm2", to: "mm2" },
        { from: "cm2", to: "in2" },
        { from: "in2", to: "cm2" },
        { from: "cm2", to: "ft2" },
        { from: "ft2", to: "cm2" },
        { from: "cm2", to: "ac" },
        { from: "ac", to: "cm2" },
        { from: "cm2", to: "mi2" },
        { from: "m2", to: "mm2" },
        { from: "m2", to: "cm2" },
    ]

    tests.forEach((test) => {
        const label = `Area(1000, { from: "${test.from}", to: "${test.to}" }) execution time`;
        console.time(label);
        const result = Area(1000, test);
        console.timeEnd(label);
        console.log(`Area(1000, { from: "${test.from}", to: "${test.to}" }) = ${result}`);
    });

    console.info("Mass")

    tests = [
        { from: "mcg", to: "mg" },
        { from: "mg", to: "g" },
        { from: "g", to: "kg" },
        { from: "mcg", to: "kg" },
        { from: "mg", to: "kg" },
        { from: "oz", to: "lb" },
        { from: "lb", to: "oz" },
        { from: "oz", to: "mt" },
        { from: "mt", to: "oz" },
        { from: "oz", to: "t" },
        { from: "t", to: "oz" },
        { from: "oz", to: "g" },
        { from: "g", to: "oz" },
    ]

    tests.forEach((test) => {
        const label = `Mass(1000, { from: "${test.from}", to: "${test.to}" }) execution time`;
        console.time(label);
        const result = Mass(1000, test);
        console.timeEnd(label);
        console.log(`Mass(1000, { from: "${test.from}", to: "${test.to}" }) = ${result}`);
    });

    console.info("Volume")

    tests = [
        { from: "ml", to: "l" },
        { from: "ml", to: "cm3" },
        { from: "ml", to: "m3" },
        { from: "ml", to: "ft3" },
        { from: "ml", to: "in3" },
        { from: "ml", to: "gal" },
        { from: "ml", to: "fl-oz" },
    ]

    tests.forEach((test) => {
        const label = `Volume(1000, { from: "${test.from}", to: "${test.to}" }) execution time`;
        console.time(label);
        const result = Volume(1000, test);
        console.timeEnd(label);
        console.log(`Volume(1000, { from: "${test.from}", to: "${test.to}" }) = ${result}`);
    });
}

__test();