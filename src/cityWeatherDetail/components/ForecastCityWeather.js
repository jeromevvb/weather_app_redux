import React, { Component } from "react";
import moment from "moment";
import WeatherInfoComponent from "../../cityWeather/components/WeatherInfoComponent";
import WeatherTempComponent from "../../cityWeather/components/WeatherTempComponent";

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
          <td style={style.td}>
            <WeatherTempComponent city={line} />
          </td>
          <td>
            <WeatherInfoComponent weather={line.weather} />
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
