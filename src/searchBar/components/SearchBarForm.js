import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

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
    const { handleSubmit } = this.props;
    return <div>
        <form name="search" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <Field type="text" component="input" name="inputSearch" className="form-control" placeholder="Enter your city to get the weather" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">
                ADD CITY
              </button>
            </div>
          </div>
        </form>
      </div>;
  }
}

export default reduxForm({
  form: "search"
})(SearchBarForm);
