import React from "react";
import { AbstractModelComponent, mixerConnector } from "react-arc";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import configReactArc from "./config/reactArc";
import moment from "moment";

import CardCityComponent from "./components/CardCityComponent";
import ForecastCityWeather from "./components/ForecastCityWeather";

class CityWeatherContainer extends AbstractModelComponent {
  static defaultProps = {
    city: "",
    ARCConfig: configReactArc
  };

  /**
   * @Get only weather for 12:00 everyday except today
   * this.props.data.list is an array of object who contains weather for every 3 hours for the next five days.
   *
   * @memberof CityWeatherContainer
   */
  getForecastWeather = model => {
    return model.list.filter(weather => {
      if (!moment().isBefore(weather.dt_txt, "day")) return;

      if (moment(weather.dt_txt).format("HH:mm") !== "12:00") return;

      weather.currentWeather = this.getCurrentWeather(weather);
      return weather;
    });
  };

  /**
   * @Get only weather for today.
   * this.props.data.list is an array of object who contains weather for every 3 hours for the next five days.
   *
   * @memberof CityWeatherContainer
   */
  getCurrentWeather = data => {
    const currentWeather = data.weather[0];

    return {
      temp: Math.round(data.main.temp),
      icon: `http://openweathermap.org/img/w/${currentWeather.icon}.png`,
      description: currentWeather.description
    };
  };

  render() {
    if (this.props.fetching) {
      return "loading...";
    }

    if (this.getError()) {
      return "An unexpected error occured =(";
    }

    if (!this.isLoaded()) {
      return null;
    }

    const forecastWeather = this.getForecastWeather(this.getModel());
    const currentWeather = this.getCurrentWeather(this.getModel().list[0]);

    return (
      <div>
        <CardCityComponent
          model={this.getModel()}
          currentWeather={currentWeather}
        />
        <br />
        <ForecastCityWeather model={forecastWeather} />
      </div>
    );
  }
}

export default withRouter(
  mixerConnector(connect, configReactArc)(CityWeatherContainer)
);
