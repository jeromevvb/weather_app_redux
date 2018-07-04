// AN EXEMPLE OF OBJECT DEFINITION
// {
//   name: "Paris",
//     data: "",
//       metas: {
//     fetched: false,
//       fetching: false,
//         error: ""
//   }
// }

const defaultState = {
  cities: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        cities: [
          ...state.cities,
          {
            name: action.payload,
            data: "",
            metas: { fetched: false, fetching: false, error: "" }
          }
        ]
      };
      break;
    case "FETCH_CITY_WEATHER":
      return {
        ...state,
        cities: state.cities.map(
          obj =>
            obj.name === action.payload
              ? { ...obj, metas: { fetched: false, fetching: true, error: "" } }
              : obj
        )
      };

      break;
    case "FETCH_CITY_WEATHER_FULFILLED":
      return {
        ...state,
        cities: state.cities.map(
          obj =>
            obj.name === action.payload.city
              ? {
                  ...obj,
                  data: action.payload.data,
                  metas: { fetched: true, fetching: false, error: "" }
                }
              : obj
        )
      };
      break;
    case "FETCH_CITY_WEATHER_REJECTED":
      return {
        ...state,
        cities: state.cities.map(
          obj =>
            obj.name === action.payload.city
              ? {
                  ...obj,
                  metas: {
                    fetched: true,
                    fetching: false,
                    error: action.payload.data
                  }
                }
              : obj
        )
      };
      break;
    default:
      return state;
      break;
  }
}
