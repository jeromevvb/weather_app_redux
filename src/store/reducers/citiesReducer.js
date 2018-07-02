const defaultState = {
  cities: ["Paris"]
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case "ADD_CITY":
      return { ...state, cities: [...state.cities, action.payload] };
      break;
    default:
      return state;
      break;
  }

  return state;
}
