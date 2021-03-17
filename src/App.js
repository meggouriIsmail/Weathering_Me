import React from 'react';
import Section from './WeatherComponent';
import Form from './Form';

const URI = "http://api.openweathermap.org/data/2.5/";
const PARAMS = {
  weather: "weather?q=",
  exclude: "&exclude=hourly",
  unit   : "&units=metric",
  onecall: "onecall?",
  lat    : "lat=",
  lon    : "&lon=",
  id     : "&appid="
};
const API_KEY = PARAMS.id + process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cityCountry: "",
      icon: undefined,
      main: undefined,
      temp: null,
      temp_max: null,
      temp_min: null,
      sys: undefined,
      wind: undefined,
      coords: undefined,
      hourly: undefined,
      description: "",
      error:false
    };
  }
  
  getWeather = async (e) => {
    
    e.preventDefault();
    e.target.style.animation = "search-animation 1s ease-in-out forwards";
    
    const city = e.target.elements.city.value;
    if(city){
      const apiCall = await fetch(URI + PARAMS.weather + city + PARAMS.unit + API_KEY);
      
      const response = await apiCall.json();

      const sec = document.querySelector('section');
    
      if(response.cod===200){
        
        if(sec.classList.contains('blur')){
          sec.classList.remove('blur');
        }
        sec.classList.add('fade_in');

        this.setState({
          cityCountry: `${response.name}, ${response.sys.country}`,
          main: response.main,
          icon: response.weather[0].icon,
          temp: response.main.temp,
          temp_max: response.main.temp_max,
          temp_min: response.main.temp_min,
          description: response.weather[0].description,
          sys: response.sys,
          wind: response.wind,
          coords: response.coord,
          error: false
        });  
      }
      else {
        sec.classList.add('blur');
        sec.classList.remove('fade_in');

        this.setState({
          error: true
        });  
      }
      if(this.state.coords){
        const {lon, lat} = this.state.coords;
        const apiCall2 = await fetch(URI + PARAMS.onecall + PARAMS.lat + lat + PARAMS.lon + lon + PARAMS.unit + API_KEY);

        const res = await apiCall2.json();
        
        let arr = [];
        
        res.hourly.forEach(data => {
          arr.push(data);
        });

        this.setState({
          hourly: arr,  
        })
      }

    }
    else {
      document.querySelector('section').classList.add('blur');
      this.setState({
        error: true
      });
    }
  }

  render() { 
    return (
      <div className="app">
        <Form loadWeather={this.getWeather} error={this.state.error} />
        <Section 
          cityCountry={this.state.cityCountry}
          icon={this.state.icon}
          temp={this.state.temp}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          main={this.state.main}
          sys={this.state.sys}
          wind={this.state.wind}
          coords={this.state.coords}
          Info={this.state.hourly}
        />
      </div>
    );
  }
}

export default App;
