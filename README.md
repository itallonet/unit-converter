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

const squareMetersToSquareCentimetersResult = Area(1000, { from: "m2", to: "cm2" });
console.log(squareMetersToSquareCentimetersResult)

```

- Mass (mcg, mg, g, kg, oz, lb, mt, t)

``` js

import { Mass } from "@itallonet/unit-converter";

const gramToKiloResult = Mass(1000, { from: "g", to: "kg" });
console.log(gramToKiloResult)

```


- Volume (mm3, cm3, ml, l, kl, m3, km3, tsp, Tbs, in3, fl-oz, cup, pnt, qt, gal, ft3, yd3)

``` js

import { Volume } from "@itallonet/unit-converter";

const milliliterToLiterResult = Mass(1000, { from: "ml", to: "l" });
console.log(milliliterToLiterResult)

```

- Temperature (C, F, K, R)

``` js

import { Temperature } from "@itallonet/unit-converter";

const celsiusToFahrenheitResult = Temperature(1000, { from: "C", to: "F" });
console.log(celsiusToFahrenheitResult)

```

- Time (ns, mu, ms, s, min, h, d, week, month, year)

``` js

import { Time } from "@itallonet/unit-converter";

const minuteToYearResult = Time(1000, { from: "min", to: "year" });
console.log(minuteToYearResult)


```

- Frequency (Hz, mHz, kHz, MHz, GHz, THz, rpm, deg/s, rad/s)

``` js

import { Frequency } from "@itallonet/unit-converter";

const hertzToMegahertzResult = Frequency(1000, { from: "Hz", to: "MHz" });
console.log(hertzToMegahertzResult)


```

- Speed (m/s, km/h, m/h, knot, ft/s)

``` js

import { Speed } from "@itallonet/unit-converter";

const meterPerSecondToKilometerPerHour = Speed(1000, { from: "m/s", to: "km/h" });
console.log(meterPerSecondToKilometerPerHour)


```

## Author

- [@itallonet](https://www.github.com/itallonet)

## Roadmap

- Pressure
- Digital