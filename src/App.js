import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ViewWeatherContainer from "./viewWeather/containers/ViewWeatherContainer";

class App extends Component {
  render() {
    return (
      <div className="container p-3">
        <ViewWeatherContainer />
      </div>
    );
  }
}

export default App;
