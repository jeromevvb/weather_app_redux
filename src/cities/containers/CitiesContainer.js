import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CityWeatherContainer from "./../../cityWeather/containers/CityWeatherContainer";
import SearchBarContainer from "../../searchBar/SearchBarContainer";

class CitiesContainer extends Component {
  static defaultProps = {};

  render() {
    const cityWeather = this.props.cities.map((city, i) => {
      if (city)
        return (
          <div className="col" key={i}>
            <CityWeatherContainer city={city} />
          </div>
        );
    });

    return (
      <div className="container">
        <SearchBarContainer />
        <div className="row">{cityWeather}</div>
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    cities: store.citiesReducer.cities
  };
};

export default withRouter(connect(mapStateToProps)(CitiesContainer));
