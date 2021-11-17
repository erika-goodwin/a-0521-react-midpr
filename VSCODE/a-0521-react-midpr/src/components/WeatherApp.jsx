import React, { Component } from "react";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";

export default class WeatherApp extends Component {
  state = {
    temp: "",
    cityName: "",
    weather: "",
    high: "",
    low: "",
    icon: "",
    airpress: "",
    humidity: "",
    wind: "",
  };

  // Default [Vancouver] ===================================
  componentDidMount() {
    const defaultCity = "Vancouver";
    this.getCityWeather(defaultCity);
  }

  // onSubmit Event ===================================
  searchCity = (event) => {
    event.preventDefault();
    const city = document.querySelector("#city").value;
    this.getCityWeather(city);
  };

  // fetch Data ===================================
  getCityWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
    //fetch
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((result) => console.log(result))
    //   .catch();

    //axios
    axios(url).then((response) => {
      console.log(response);
      this.setState({
        temp: response.data.main.temp,
        cityName: response.data.name,
        weather: response.data.weather[0].description,
        high: response.data.main.temp_max,
        low: response.data.main.temp_min,
        icon: response.data.weather[0].icon,
        airpress: response.data.main.pressure,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Weather</h1>
        <div>
          <form onSubmit={this.searchCity}>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter a City Name"
            />
          </form>
        </div>

        {this.state.cityName && (
          <WeatherDetails
            cityName={this.state.cityName}
            temp={this.state.temp}
            weather={this.state.weather}
            high={this.state.high}
            low={this.state.low}
            icon={this.state.icon}
            airpress={this.state.airpress}
            humidity={this.state.humidity}
            wind={this.state.wind}
          />
        )}
      </div>
    );
  }
}
