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
      <CardCityComponent
        name={this.props.city}
        error={this.getError()}
        loaded={this.isLoaded()}
        model={this.isLoaded() ? this.getModel() : null}
      />
    );
  }
}

export default withRouter(
  mixerConnector(connect, configReactArc)(CityWeatherContainer)
);
