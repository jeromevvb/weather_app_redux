export function addCity(cityName) {
  return function(dispatch) {
    dispatch({ type: "ADD_CITY", payload: cityName });
  };
}
