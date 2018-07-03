import { mixerStore } from "react-arc";
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import citiesWeather from "./reducers/citiesWeather";
import giphy from "./reducers/giphy";

const middleware = applyMiddleware(thunk);

const reducers = {
  citiesWeather: citiesWeather,
  giphy: giphy
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(middleware);

const store = createStore(combineReducers(reducers), enhancer);

export default store;
