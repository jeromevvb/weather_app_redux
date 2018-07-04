import React, { Component } from "react";
import { connect } from "react-redux";
import { AbstractModelComponent, mixerConnector } from "react-arc";
import { reactArc } from "./../config";

class Giphy extends AbstractModelComponent {
  static defaultProps = {
    cityName: "",
    ARCConfig: reactArc
  };

  render() {
    if (!this.isLoaded()) {
      return "Loading...";
    }

    if (this.getError()) {
      return "Error...";
    }

    const model = this.getModel().data[0];
    const image = model.images.original.url;

    return <img src={image} width="100" />;
  }
}

export default mixerConnector(connect, reactArc)(Giphy);
