import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SearchBarForm from "../components/SearchBarForm";
import { addCity } from "../../cities/actions/index";

class SearchBarContainer extends Component {
  render() {
    return (
      <div>
        <SearchBarForm
          onSubmitCity={city => this.props.dispatch(addCity(city))}
        />
      </div>
    );
  }
}

export default withRouter(connect()(SearchBarContainer));
