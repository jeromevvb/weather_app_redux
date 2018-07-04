import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CityWeatherContainer from "../cityWeather/CityWeatherContainer";
import SearchBarContainer from "../searchBar/containers/SearchBarContainer";

class CitiesContainer extends Component {
  static defaultProps = {};

  render() {
    const cityWeatherContainer = this.props.cities.map((city, i) => {
      return <CityWeatherContainer key={i} cityName={city} />;
    });

    return (
      <div>
        <div className="container">
          <SearchBarContainer />
        </div>
        {cityWeatherContainer}
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    cities: store.cities.data
  };
};

export default withRouter(connect(mapStateToProps)(CitiesContainer));
