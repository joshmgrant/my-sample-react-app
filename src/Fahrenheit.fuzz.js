const calc = require("./Calculations");
const { FuzzedDataProvider } = require("@jazzer.js/core");

/**
 * @param { Buffer } fuzzerInputData
 */
module.exports.fuzz = function (fuzzerInputData) {

    const data = new FuzzedDataProvider(fuzzerInputData);
	const myInt = data.consumeIntegral(4);
    calc.toFahrenheit(myInt);
   
};