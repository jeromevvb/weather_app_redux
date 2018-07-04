import React, { Component } from "react";
import { Link } from "react-router-dom";

import WeatherInfoComponent from "./WeatherInfoComponent";

class CardCityComponent extends Component {
  static defaultProps = {
    city: ""
  };

  render() {
    const { model } = this.props;

    return (
      <div className="custom-card">
        <div className="card-body text-center">
          <WeatherInfoComponent model={this.props.currentWeather} />
        </div>
        <div className="card-footer">
          <small className="text-muted">{model.city.name}</small>
        </div>
      </div>
    );
  }
}

export default CardCityComponent;
