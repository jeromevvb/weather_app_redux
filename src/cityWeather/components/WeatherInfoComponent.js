import React, { Component } from "react";

class WeatherInfoComponent extends Component {
  static defaultProps = {
    weather: []
  };

  render() {
    const { weather } = this.props;

    const currentWeather = weather[0];
    const icon = `http://openweathermap.org/img/w/${currentWeather.icon}.png`;

    return (
      <div className="text-center">
        <img width="100" src={icon} /> <br />
        <p className="text-uppercase">{currentWeather.description}</p>
      </div>
    );
  }
}

export default WeatherInfoComponent;
