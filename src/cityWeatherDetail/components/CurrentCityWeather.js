import React, { Component } from "react";
import WeatherInfoComponent from "../../cityWeather/components/WeatherInfoComponent";
import WeatherTempComponent from "../../cityWeather/components/WeatherTempComponent";

class CurrentCityWeather extends Component {
  render() {
    const { model, cityName } = this.props;

    return (
      <div className="custom-card">
        <div className="card-body text-center">
          <WeatherInfoComponent weather={model.weather} />
          <WeatherTempComponent city={model} />
        </div>
        <div className="card-footer">
          <small className="text-muted">{cityName}</small>
        </div>
      </div>
    );
  }
}

export default CurrentCityWeather;
