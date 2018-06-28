export function addCity(city) {
  return function(dispatch) {
    dispatch({ type: "ADD_CITY", payload: city });
  };
}
