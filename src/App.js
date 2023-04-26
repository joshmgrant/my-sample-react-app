import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const calc = require("./Calculations");


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    const className = "scale-type-" + scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input className={className} value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class TemperatureMessage extends React.Component {

  render() {
    const celsius = this.props.celsius;
    const fahrenheit = this.props.fahrenheit;
    
    if (!celsius || !fahrenheit) {
      return (
        <div className="temperatureMesssage"> 
          <h2>Watiting for input...</h2>
        </div>
      );
    }
    
    return (
      <div className="temperatureMesssage">
        <h2>{celsius} Celsius is {fahrenheit} Fahrenheit</h2>
      </div>);
  };
}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {

    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? calc.tryConvert(temperature, calc.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? calc.tryConvert(temperature, calc.toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
          <hr/>
          <TemperatureMessage celsius={celsius} fahrenheit={fahrenheit} />
          <hr/>
      </div>
    );
  }
}


class App extends Component {
  render() {
    
    const handleSubmit = event => {
      event.preventDefault();
      alert('You have submitted the form.')
    }   

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Celcius to Farhenheit Calculator!</h1>
        </header>
        
        <div className="App-form">
          {/* <Convert />
          <ShowFarenheit value="0" /> */}
          <Calculator />
          </div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Sign up for updates!</p>
              <input name="name" />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default App;
