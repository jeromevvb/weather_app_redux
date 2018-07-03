import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGiphy } from "../../store/actions/giphy";

class Giphy extends Component {
  static defaultProps = {
    cityName: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      fetched: false
    };
  }

  fetch = () => {
    this.props.dispatch(fetchGiphy(this.props.cityName));
  };

  render() {
    if (!this.props.giphy) {
      this.fetch();
    }

    if (!this.props.giphy || this.props.giphy.metas.fetching) {
      return "Loading...";
    }

    if (this.props.giphy.metas.error) {
      return "Error...";
    }

    return <img src={this.props.giphy.url} width="100" />;
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    giphy: store.giphy.data.find(elem => elem.name === ownProps.cityName)
  };
};

export default connect(mapStateToProps)(Giphy);
