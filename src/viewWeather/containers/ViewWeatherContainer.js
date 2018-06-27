import React, { Component } from "react";
import { AbstractModelComponent, mixerConnector } from "react-arc";
import { connect } from "react-redux";
import configReactArc from "../config/reactArc";
import CardCityComponent from "../components/CardCityComponent";

class ViewWeatherContainer extends AbstractModelComponent {
  static defaultProps = {
    city: "Paris",
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

export default mixerConnector(connect, configReactArc)(ViewWeatherContainer);
