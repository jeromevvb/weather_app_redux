import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchCityFromId } from "../store/actions/cityWeatherDetailActions";
import CurrentCityWeather from "./components/CurrentCityWeather";
import ForecastCityWeather from "./components/ForecastCityWeather";
import moment from "moment";

class CityWeatherDetailContainer extends Component {
  static defaultProps = {
    //react-router
    match: ""
  };

  componentDidMount() {
    this.props.dispatch(fetchCityFromId(this.props.match.params.id));
  }

  /**
   * @Get only weather for 12:00 everyday except today
   * this.props.data.list is an array of object who contains weather for every 3 hours for the next five days.
   *
   * @memberof CityWeatherDetailContainer
   */
  getForecastWeather = data => {
    return data.filter(weather => {
      if (!moment().isBefore(weather.dt_txt, "day")) return;

      if (moment(weather.dt_txt).format("HH:mm") !== "12:00") return;

      return weather;
    });
  };

  render() {
    if (this.props.fetching) {
      return "loading...";
    }

    if (this.props.error) {
      return "An unexpected error occured =(";
    }

    if (!this.props.fetched) {
      return null;
    }

    return (
      <div className="row">
        <div className="col-4">
          <CurrentCityWeather
            cityName={this.props.data.city.name}
            model={this.props.data.list[0]}
          />
        </div>
        <div className="col-8">
          <ForecastCityWeather
            model={this.getForecastWeather(this.props.data.list)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  // const data = store.cityWeatherDetail.data.find(city => {
  //   return city.city.id == ownProps.match.params.id;
  // });

  return {
    fetching: store.cityWeatherDetail.fetching,
    fetched: store.cityWeatherDetail.fetched,
    error: store.cityWeatherDetail.error,
    data: store.cityWeatherDetail.currentCity
  };
};

export default withRouter(connect(mapStateToProps)(CityWeatherDetailContainer));
