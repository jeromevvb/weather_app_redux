import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CityWeatherContainer from "../cityWeather/CityWeatherContainer";
import SearchBarContainer from "../searchBar/containers/SearchBarContainer";

class CitiesContainer extends Component {
  static defaultProps = {};

  render() {
    return (
      <div>
        <div className="container">
          <SearchBarContainer />
        </div>
        <CityWeatherContainer />
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    cities: store.citiesWeather.cities
  };
};

export default withRouter(connect(mapStateToProps)(CitiesContainer));
