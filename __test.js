const { Length } = require("./module")

const __test = () => {
    console.info("Init tests!")
    console.info("Length");

    const tests = [
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
}

__test();