import { mixerStore } from "react-arc";
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import configViewWeather from "./viewWeather/config/reactArc";

const middleware = applyMiddleware(thunk);

const reducers = {
  viewWeather: mixerStore({ config: configViewWeather })
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(middleware);

const store = createStore(combineReducers(reducers), enhancer);

export default store;
