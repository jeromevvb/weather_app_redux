import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBarForm from "../components/SearchBarForm";
import { addCity } from "../../store/actions/citiesActions";

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

export default connect()(SearchBarContainer);
