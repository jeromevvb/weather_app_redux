import React, { Component } from "react";

class SearchBarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmitCity(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <div className="input-group mb-3">
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="Enter your city to get the weather"
              aria-describedby="basic-addon2"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">
                ADD CITY
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBarForm;
