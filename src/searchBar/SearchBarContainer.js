import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SearchBarForm from "./components/SearchBarForm";
import { addCity } from "../store/actions/citiesActions";

class SearchBarContainer extends Component {
  onSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <SearchBarForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default withRouter(connect()(SearchBarContainer));

/* onSubmit={city => this.props.dispatch(addCity(city))} */
