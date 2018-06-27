import React, { Component } from "react";
import { AbstractModelComponent, mixerConnector } from "react-arc";
import { connect } from "react-redux";
import configReactArc from "../config/reactArc";

class ViewWeatherContainer extends AbstractModelComponent {
  static defaultProps = {
    city: "Paris",
    ARCConfig: configReactArc
  };

  render() {
    if (this.isLoaded()) {
      const model = this.getModel();
      console.log(model);
    }

    return <div>hello</div>;
  }
}

export default mixerConnector(connect, configReactArc)(ViewWeatherContainer);
