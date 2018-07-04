import React, { Component } from "react";
import moment from "moment";
import WeatherInfoComponent from "./WeatherInfoComponent";
import Giphy from "../../giphy/components/Giphy";

const style = {
  td: {
    verticalAlign: "middle"
  }
};

class ForecastCityWeather extends Component {
  render() {
    const lines = this.props.model.map(line => {
      return (
        <tr key={line.dt}>
          <td style={style.td}>{moment(line.dt_txt).format("dddd DD MMMM")}</td>
          <td>
            <WeatherInfoComponent model={line.currentWeather} />
          </td>
          <td>
            <Giphy cityName={this.props.cityName} />
          </td>
        </tr>
      );
    });

    return (
      <div className="custom-card">
        <div className="card-body text-center">
          <table className="table">
            <tbody>{lines}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ForecastCityWeather;
