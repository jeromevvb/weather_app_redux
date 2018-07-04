import React, { Component } from "react";

class WeatherInfoComponent extends Component {
  static defaultProps = {
    model: []
  };

  render() {
    const { model } = this.props;

    return (
      <div className="text-center">
        <img src={model.icon} /> <br />
        <p className="text-uppercase">{model.description}</p>
        <h5 className="card-title">{model.temp}°</h5>
      </div>
    );
  }
}

export default WeatherInfoComponent;
