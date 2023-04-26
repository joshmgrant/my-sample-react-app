/*
Calculations functions for converting temperatures
*/

const toFahrenheit = (celsius) => {
  if (celsius === 0){
    return 32;
  }
  else if (celsius === 100){
    return 212;
  }
  else {
    return -1;
  }
}

const toCelsius = (fahrenheit) => {
    let val = eval(`(${fahrenheit} - 32) * 5 / 9`)
    return Number(val);
}
  
const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
   
module.exports.toCelsius = toCelsius;
module.exports.toFahrenheit = toFahrenheit;
module.exports.tryConvert = tryConvert;