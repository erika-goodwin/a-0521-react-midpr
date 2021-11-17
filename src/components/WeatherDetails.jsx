import React, { Component } from "react";
import Clock from "./Clock";

export default class WeatherDetails extends Component {
  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.props.icon}.png`;
    return (
      <div class="bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-3xl font-extrabold text-gray-700 sm:text-3xl sm:tracking-tight lg:text-6xl text-left">
            {this.props.cityName}
          </h3>
          <div class="grid grid-rows-7 grid-col-4 gap-4 text-center mt-5">
            <div class="col-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <Clock timezone={this.props.timezone} />
            </div>
            <div class="col-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <p>show time here</p>
            </div>
            <div class="col-span-2 row-span-3 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <img src={iconUrl} alt="icon" className="text-center" />
            </div>
            <div class="col-span-2 row-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <p>
                {this.props.high} / {this.props.low}
              </p>
            </div>
            <div class="col-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <p>{this.props.weather}</p>
            </div>
            <div class="col-span-4 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <p>Air pressure: {this.props.airpress}</p>
            </div>
            <div class="col-span-4 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <p>Wind: {this.props.wind}</p>
            </div>
            <div class="col-span-4 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <p>Humidity: {this.props.humidity}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
