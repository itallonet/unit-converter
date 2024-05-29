const { Length, Area } = require("./module")

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
}

__test();