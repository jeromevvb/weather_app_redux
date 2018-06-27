import React, { Component } from "react";
import WeatherInfoComponent from "./WeatherInfoComponent";
import WeatherTempComponent from "./WeatherTempComponent";
const style = {
  card: {
    borderRadius: "25px",
    width: "18rem"
  },
  cardFooter: {
    background: "none",
    fontSize: "1.5em",
    textAlign: "center"
  }
};

class CardCityComponent extends Component {
  static defaultProps = {
    city: ""
  };

  render() {
    const { city } = this.props;
    console.log(this.props);

    return (
      <div className="card" style={style.card}>
        <div className="card-body text-center">
          <WeatherInfoComponent weather={city.weather} />
          <WeatherTempComponent city={city} />
        </div>
        <div className="card-footer" style={style.cardFooter}>
          <small className="text-muted">{city.name}</small>
        </div>
      </div>
    );
  }
}

export default CardCityComponent;
