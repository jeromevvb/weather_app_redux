import { mixerStore } from "react-arc";
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import configCityWeather from "./../cityWeather/config/reactArc";
import citiesReducer from "./reducers/citiesReducer";
import cityWeatherDetail from "./reducers/cityWeatherDetailReducer";

const middleware = applyMiddleware(thunk);

const reducers = {
  viewWeather: mixerStore({ config: configCityWeather }),
  citiesReducer: citiesReducer,
  cityWeatherDetail: cityWeatherDetail,
  form: formReducer
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(middleware);

const store = createStore(combineReducers(reducers), enhancer);

export default store;
