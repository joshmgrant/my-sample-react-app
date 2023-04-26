const calc = require("./Calculations");

const assert = require('assert');

describe("Temperature calculations", () => {

  it('calculates Celsius correctly', () => {
    const expectedF = 32
    const actualF = calc.toFahrenheit(0);

    assert.equal(actualF, expectedF);
  });

  it('calculates Celsius correctly', () => {
    const expectedC = 100
    const actualC = calc.toCelsius(212);

    assert.equal(actualC, expectedC);
  });

});