import React, { Component } from "react";
import { Link } from "react-router-dom";

import WeatherInfoComponent from "./WeatherInfoComponent";
import WeatherTempComponent from "./WeatherTempComponent";
const style = {
  card: {
    borderRadius: "25px"
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
    const { model, name } = this.props;

    return (
      <div>
        {!this.props.error && this.props.loaded ? (
          <Link to={`/city/${model.cod}`} className="no-style">
            <div className="card" style={style.card}>
              <div className="card-body text-center">
                <WeatherInfoComponent weather={model.weather} />
                <WeatherTempComponent city={model} />
              </div>
              <div className="card-footer" style={style.cardFooter}>
                <small className="text-muted">{name}</small>
              </div>
            </div>
          </Link>
        ) : (
          <div className="card" style={style.card}>
            <div className="card-body text-center">City not found =(</div>
            <div className="card-footer" style={style.cardFooter}>
              <small className="text-muted">{name}</small>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CardCityComponent;
