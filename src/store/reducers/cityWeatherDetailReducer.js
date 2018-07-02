const defaultState = {
  fetching: false,
  fetched: false,
  error: "",
  currentCity: "",
  data: []
};

export default function cityWeatherDetail(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_CITY_WEATHER_DETAIL":
      let city = state.data.find(city => {
        return city.city.id == action.payload;
      });

      if (city) {
        return { ...state, currentCity: city, fetching: false, fetched: true };
      }

      return { ...state, fetching: true };
      break;
    case "FETCH_CITY_WEATHER_DETAIL_FULFILLED":
      return {
        ...state,
        data: [...state.data, action.payload],
        currentCity: action.payload,
        fetching: false,
        fetched: true
      };
      break;
    case "FETCH_CITY_WEATHER_DETAIL_REJECTED":
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
      break;
    default:
      return state;
      break;
  }
}
