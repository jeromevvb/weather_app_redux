import axios from "axios";

function fetchCityWeather(name) {
  function fetchWeather(cityName) {
    return axios({
      url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=5fc47362925abcb0b8417e49c8cc59e0&units=metric`
    });
  }

  return dispatch => {
    dispatch({ type: "FETCH_CITY_WEATHER", payload: name });

    fetchWeather(name)
      .then(response => {
        dispatch({
          type: "FETCH_CITY_WEATHER_FULFILLED",
          payload: {
            city: name,
            data: response.data
          }
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_CITY_WEATHER_REJECTED",
          payload: {
            city: name,
            data: error
          }
        });
      });
  };
}

export function addCity(city) {
  return function(dispatch) {
    dispatch({ type: "ADD_CITY", payload: city });
    dispatch(fetchCityWeather(city));
  };
}
