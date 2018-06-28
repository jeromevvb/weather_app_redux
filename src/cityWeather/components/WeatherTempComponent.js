import React, { Component } from "react";

class WeatherTempComponent extends Component {
  static defaultProps = {
    city: ""
  };

  render() {
    const { city } = this.props;
    const temp = Math.round(city.main.temp);

    return (
      <div>
        <h4 className="card-title">{temp}°</h4>
      </div>
    );
  }
}

export default WeatherTempComponent;
