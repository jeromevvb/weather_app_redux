import { mixerStore } from "react-arc";
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import cities from "./cities/reducers/index";

import { reactArc as reactArcGiphy } from "./giphy/config";
import { reactArc as reactArcCityWeather } from "./cityWeather/config";

const middleware = applyMiddleware(thunk);

const reducers = {
  cities: cities,
  giphy: mixerStore({ config: reactArcGiphy }),
  cityWeather: mixerStore({ config: reactArcCityWeather })
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(middleware);

const store = createStore(combineReducers(reducers), enhancer);

export default store;
