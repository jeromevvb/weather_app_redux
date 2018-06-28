import React from "react";
import { AbstractModelComponent, mixerConnector } from "react-arc";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import configReactArc from "../config/reactArc";

import CardCityComponent from "../components/CardCityComponent";

class CityWeatherContainer extends AbstractModelComponent {
  static defaultProps = {
    city: "",
    ARCConfig: configReactArc
  };

  render() {
    return (
      <div>
        {this.isLoaded() && <CardCityComponent city={this.getModel()} />}
      </div>
    );
  }
}

export default withRouter(
  mixerConnector(connect, configReactArc)(CityWeatherContainer)
);
