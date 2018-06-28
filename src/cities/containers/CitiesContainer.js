import React, { Component } from "react";
import { connect } from "react-redux";

import CityWeatherContainer from "./../../cityWeather/containers/CityWeatherContainer";
import SearchBarContainer from "../../searchBar/containers/SearchBarContainer";

class CitiesContainer extends Component {
  static defaultProps = {};

  render() {
    const cityWeather = this.props.cities.map(city => {
      if (city)
        return (
          <div className="col">
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

export default connect(mapStateToProps)(CitiesContainer);
