import React, { Component } from 'react';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
import './App.css';


const API_KEY = '0acfd168b9529003e6f7117fef463178';


class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    humidity: undefined,
    temperature: undefined,
    description: undefined,
    wind: undefined,
    error: undefined

  }


  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
     const data = await API_CALL.json();
     console.log(data);


     if(city && country){
      this.setState({
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        temperature: data.main.temp ,
        description: data.weather[0].description,
        wind: data.wind.speed,
        error: " "
      });
    }else{
      this.setState({
        city: undefined,
        country: undefined,
        humidity: undefined,
        temperature: undefined,
        description: undefined,
        wind: undefined,
        error: "Please enter the Location."
      });        
    }
  }

  render() {
    return (
      <div className="App">
        <div className='container mt-5'>
          <div className="row">
            <div className="col-lg-4 col-sm-3 left">
              <Title />
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
              />
            </div>
            <div className="col-lg-8 col-sm-9 right">
              <Form getWeather={this.getWeather} />
              <Weather
                humidity={this.state.humidity}
                description={this.state.description}
                wind={this.state.wind}
                error={this.state.error}                
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
