import React, { Component } from "react";
import Calender from "./Calender";
import Clock from "./Clock";
import IconPick from "./IconPick";

export default class WeatherDetails extends Component {
  render() {
    return (
      <div className="bg-white shadow sm:rounded-lg sm:px-6 lg:px-15 xl:px-20">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-3xl  font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-5xl">
            {this.props.cityName}
          </h3>
          <div className="grid grid-rows-7 grid-col-4 gap-4 text-center mt-5">
            <div className="col-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
            <h4 className="text-lg font-bold text-center">Local Date:</h4>
              <Calender timezone={this.props.timezone} />
            </div>
            <div className="col-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
            <h4 className="text-lg font-bold text-center">Local Time:</h4>
              <Clock timezone={this.props.timezone} />
            </div>
            <div className="col-span-4 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-evenly">
              <h4 className="text-lg font-bold text-center">Max/Min:</h4>
              <p className="pt-1">
                {this.props.high} / {this.props.low}  &#x2103;
              </p>
            </div>
            <div className="col-span-2 row-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:justify-between flex-center">
              {/* <img src={iconUrl} alt="icon" className="text-center" /> */}

              <IconPick iconId={this.props.icon} />
              {/* <p>↑Normal↓Context</p>
              <IconContext.Consumer>
                {({ value }) => {<IconPick />}}
              </IconContext.Consumer> */}
            </div>
            <div className="col-span-2 row-span-1 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <h4 className="text-lg font-bold text-center">Air pressure:</h4>
              <p className="pt-1">{this.props.airpress}　hPa</p>
            </div>
            <div className="col-span-2 row-span-1 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <h4 className="text-lg font-bold">Humidity:</h4>
              <p className="pt-1">{this.props.humidity} %</p>
            </div>
            <div className="col-span-2 rounded-md font-bold  bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <h4 className="text-lg font-bold text-center capitalize">
                {this.props.weather}
              </h4>
            </div>
            <div className="col-span-2 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <h4 className="text-lg font-bold ">Wind: </h4>
              <p className="pt-1">{this.props.wind} m/s</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
