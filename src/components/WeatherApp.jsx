import React, { Component, createContext, useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";
import { ReactComponent as ReactLogo } from "../image/loading.svg";
import {writingData} from '../firebase/firebase'

// const  IconContext = createContext();

const WeatherApp = () => {
  const [state, setState] = useState({
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
  });

  const [isLoading, setIsLoading] = useState(false);


  // Default [Vancouver] ===================================
  useEffect(() => {
    const defaultCity = "Vancouver";
    getCityWeather(defaultCity);
  }, []);

  // onSubmit Event ===================================
  const searchCity = (event) => {
    event.preventDefault();
    const city = document.querySelector("#city").value;
    getCityWeather(city);
  };

  // fetch Data ===================================
  const getCityWeather = (city) => {
    setIsLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
    //fetch
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        console.log("resp: ", response);
        setState({
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
        console.log(error);
        alert("No such a city found");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <ReactLogo className="logo" />}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <p className="pt-2 text-4xl  font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-6xl">
            Weather
          </p>
          <p className="max-w-xl mt-1 mb-1 text-xl text-gray-500">
            Check your city's weather here
          </p>
        </div>
      </header>
      <div className="text-center sm:px-6 lg:px-8">
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 lg:w-3/4 lg:m-auto">
          <form onSubmit={searchCity}>
            <label
              htmlFor="name"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white font-medium text-gray-900 text-xl"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter a City Name"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm p-3"
            />
          </form>
        </div>
      </div>
      {/* <IconContext.Provider value={state.icon}> */}
      {state.cityName && (
        <WeatherDetails
          cityName={state.cityName}
          temp={state.temp}
          weather={state.weather}
          high={state.high}
          low={state.low}
          icon={state.icon}
          airpress={state.airpress}
          humidity={state.humidity}
          wind={state.wind}
          timezone={state.timezone}
        />
      )}
      {/* </IconContext.Provider> */}
    </>
  );
};

export default WeatherApp;
