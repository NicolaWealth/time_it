![Tests Passing](https://github.com/NicolaWealth/time_it/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Ftime_it%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The `time_it` package provides functionality to time the execution of a parameterless function.

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `time_it` package with npm:

`npm install @nicolawealth/time_it`

# Usage
The `time_it` package allows for logging the execution time of both synchronous and asynchronous functions which may be useful for the following scenarios:
* Testing code efficiency
* Logging execution times for analysis
* Optimizing code execution time
* Debugging slow functions
* etc.

# Interface
The package exports two functions: `timeIt(func, logTime)` and `timeItAsync(func, logTime)` which behave in the same manner except for `timeItAsync(func, logTime)` handling asynchronous `func` arguments. Here `func` refers to the function you wish to execute and time and the result of `func` will be returned by `timeIt(func, logTime)` and `timeItAsync(func, logTime)`.
`logTime` is a function meant to log the recorded execution time in microseconds and should be of the form: `(microseconds) => void`. `logTime` consumes one number, `microseconds` and does not return anything. A simple `logTime` implementation could work as follows:
```
let ms = 0;
const logTime = (microseconds: number): void => {
  ms = microseconds;
};
```
Using this `logTime` function, the execution time in microseconds would be stored in the variable `ms`.

# Testing
Tests can be found in `time_it.test.ts` located in `time_it/src` and should be run with sinon, mocha and nyc.
