import React, { Component } from "react";
import WeatherDetails from "./WeatherDetails";

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
    timezone: "",
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
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        console.log("resp: ", response);
        this.setState({
          temp: response.main.temp,
          cityName: response.name,
          weather: response.weather[0].description,
          high: response.main.temp_max,
          low: response.main.temp_min,
          icon: response.weather[0].icon,
          airpress: response.main.pressure,
          humidity: response.main.humidity,
          wind: response.wind.speed,
          timezone: response.timezone,
        });
      })
      .catch((error) => {
        alert("No such a city found");
      });

    //axios
    //   axios(url).then((response) => {
    //     console.log(response);
    //     this.setState({
    //       temp: response.data.main.temp,
    //       cityName: response.data.name,
    //       weather: response.data.weather[0].description,
    //       high: response.data.main.temp_max,
    //       low: response.data.main.temp_min,
    //       icon: response.data.weather[0].icon,
    //       airpress: response.data.main.pressure,
    //       humidity: response.data.main.humidity,
    //       wind: response.data.wind.speed,
    //     });
    //   });
  };

  render() {
    return (
      <>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
            <p class="pt-2 text-4xl  font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-6xl">
              Weather
            </p>
            <p class="max-w-xl mt-1 mb-1 mx-auto text-xl text-gray-500">
              Check your city's weather here
            </p>
          </div>
        </header>
        <div className="text-center">
          <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 ">
            <form onSubmit={this.searchCity}>
              <label
                for="name"
                class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white font-medium text-gray-900 text-xl"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter a City Name"
                class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm p-3"
              />
            </form>
          </div>
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
            timezone={this.state.timezone}
          />
        )}
      </>
    );
  }
}
