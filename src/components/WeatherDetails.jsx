import React, { Component } from "react";
import Clock from "./Clock";

export default class WeatherDetails extends Component {
  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.props.icon}.png`;
    return (
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-3xl  font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-5xl">
            {this.props.cityName}
          </h3>
          <div className="grid grid-rows-7 grid-col-4 gap-4 text-center mt-5">
            <div className="col-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <p>show time here</p>
            </div>
            <div className="col-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <Clock timezone={this.props.timezone}/>
            </div>
            <div className="col-span-2 row-span-3 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <img src={iconUrl} alt="icon" className="text-center" />
            </div>
            <div className="col-span-2 row-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <div classNameName="flex flex-row">
                <h4 className="text-lg font-bold">Max/Min:</h4>
                <p className="pt-1">
                  {this.props.high} / {this.props.low}
                </p>
              </div>
            </div>
            <div className="col-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <p>{this.props.weather}</p>
            </div>
            <div className="col-span-2 row-span-1 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <div>
                <h4 className="text-lg font-bold text-center">Air pressure:</h4>
                <p className="pt-1">{this.props.airpress}　hPa</p>
              </div>
            </div>
            <div className="col-span-2 row-span-1 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <div>
                <h4 className="text-lg font-bold">Humidity:</h4>
                <p className="pt-1">{this.props.humidity} %</p>
              </div>
            </div>
            <div className="col-span-4 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <div className="inline-flex">
                <h4 className="text-lg font-bold ">Wind: </h4>
                <p className="pt-1">{this.props.wind} m/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
