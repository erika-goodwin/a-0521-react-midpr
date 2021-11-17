import React, { Component } from "react";

export default class WeatherDetails extends Component {
  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.props.icon}.png`;
    return (
      <div>
        <div>
          <h4>{this.props.cityName}</h4>
          <p>show date here </p>
          <p>show time here</p>
        </div>
        <div>
          <img src={iconUrl} alt="icon" />
          <p>{this.props.high} / {this.props.low}</p>
          <p>{this.props.weather}</p>
        </div>
        <div>
            <p>Air pressure: {this.props.airpress}</p>
            <p>Wind: {this.props.wind}</p>
            <p>Humidity: {this.props.humidity}</p>
        </div>
      </div>
    );
  }
}
