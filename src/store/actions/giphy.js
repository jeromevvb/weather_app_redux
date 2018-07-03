import axios from "axios";

export function fetchGiphy(cityName) {
  function fetch() {
    return axios({
      url: `https://api.giphy.com/v1/gifs/search?q=${cityName}&api_key=wnDUsmzi8MTW69WrqBpm507aZsI6uO36`
    });
  }

  return dispatch => {
    dispatch({ type: "FETCH_GIPHY", payload: cityName });

    fetch()
      .then(response => {
        const data = response.data.data.shift();

        dispatch({
          type: "FETCH_GIPHY_FULFILLED",
          payload: {
            city: cityName,
            data: data.images.original.url
          }
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_GIPHY_REJECTED",
          payload: {
            city: cityName,
            data: error
          }
        });
      });
  };
}
