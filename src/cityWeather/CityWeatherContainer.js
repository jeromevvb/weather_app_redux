import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment";

import CardCityComponent from "./components/CardCityComponent";
import ForecastCityWeather from "./components/ForecastCityWeather";

class CityWeatherContainer extends Component {
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
    const citiesWeather = this.props.cities.map(elem => {
      if (elem.metas.fetching) {
        return "Loading...";
      }

      if (elem.metas.error) {
        return "Unexpected Error";
      }

      return (
        <div className="col" key={elem.data.city.id}>
          <CardCityComponent
            model={elem.data}
            currentWeather={this.getCurrentWeather(elem.data.list[0])}
          />
          <br />
          <ForecastCityWeather
            model={this.getForecastWeather(elem.data)}
            cityName={elem.name}
          />
        </div>
      );
    });

    return <div className="row">{citiesWeather}</div>;
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    cities: store.citiesWeather.cities
  };
};

export default withRouter(connect(mapStateToProps)(CityWeatherContainer));
