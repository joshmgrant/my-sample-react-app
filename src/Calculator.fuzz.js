const calc = require("./Calculations");
const { FuzzedDataProvider } = require("@jazzer.js/core");


describe("Fuzzed temperature calculations", () => {

  it.fuzz('calculates Celsius correctly', (data) => {
    const provider = new FuzzedDataProvider(data)
    calc.toFahrenheit(provider.consumeIntegral());
  });

  it('calculates Fahrenheit correctly', () => {
    const provider = new FuzzedDataProvider(data)
    calc.toCelsius(provider.consumeIntegral());
  });

});