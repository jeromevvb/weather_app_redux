import axios from "axios";

export function fetchCityFromId(id) {
  function fetchCityFromId(id) {
    return axios({
      url: `http://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=5fc47362925abcb0b8417e49c8cc59e0&units=metric`
    });
  }

  return dispatch => {
    dispatch({ type: "FETCH_CITY_WEATHER_DETAIL", payload: id });
    fetchCityFromId(id)
      .then(response => {
        dispatch({
          type: "FETCH_CITY_WEATHER_DETAIL_FULFILLED",
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_CITY_WEATHER_DETAIL_REJECTED",
          payload: error
        });
      });
  };
}
