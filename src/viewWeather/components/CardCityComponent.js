import React, { Component } from "react";
import WeatherInfoComponent from "./WeatherInfoComponent";

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

    const temp = Math.round(city.main.temp);

    return (
      <div className="card" style={style.card}>
        <div className="card-body text-center">
          <WeatherInfoComponent weather={city.weather} />
          <h5 className="card-title">{temp}°</h5>
        </div>
        <div className="card-footer" style={style.cardFooter}>
          <small className="text-muted">{city.name}</small>
        </div>
      </div>
    );
  }
}

export default CardCityComponent;
