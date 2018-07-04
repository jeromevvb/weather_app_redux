const defaultState = {
  data: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case "ADD_CITY":
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
}
