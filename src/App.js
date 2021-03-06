import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
//STORE
import store from "./store";

// CONTAINERS
import CitiesContainer from "./cities/CitiesContainer";
// import Test from "./Test";

//CSS
import "./App.css";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            {/* <Route path="/test" component={Test} /> */}
            <Route exact path="/" component={CitiesContainer} />
            {/* NO MATCH */}
            <Route component={CitiesContainer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
