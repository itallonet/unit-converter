![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# Unit Converter

Simple and easy to use unit converter for javascript in general.

## Demonstration

- Length (mm, cm, m, in, ft-us, ft, mi);

``` js

import { Length } from "@itallonet/unit-converter";

const meterToCentimeterResult = Length(1000, { from: "m", to: "cm" });
console.log(meterToCentimeterResult)

```

- Area (mm2, cm2, m2, ha, km2, in2, ft2, ac, mi2)

``` js

import { Area } from "@itallonet/unit-converter";

const squareMetersToSquareCentimeters = Area(1000, { from: "m2", to: "cm2" });
console.log(squareMetersToSquareCentimeters)

```

## Author

- [@itallonet](https://www.github.com/itallonet)

## Roadmap

- Mass
- Volume
- Temperature
- Time
- Frequency
- Speed
- Pressure
- Digital