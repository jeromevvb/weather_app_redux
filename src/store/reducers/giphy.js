// {
//   name: "",
//   url : "",
//   metas: {
//     fetched: false,
//     fetching: false,
//     error: ""
//   }
// }

const defaultState = {
  data: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_GIPHY":
      const elem = state.data.find(elem => elem.name === action.payload);

      if (elem && elem.metas.fetching) {
        return state;
      }

      return {
        ...state,
        loading: true,
        data: [
          ...state.data,
          {
            name: action.payload,
            url: "",
            metas: { fetched: false, fetching: true, error: "" }
          }
        ]
      };

      break;
    case "FETCH_GIPHY_FULFILLED":
      return {
        ...state,
        loading: false,
        data: state.data.map(
          obj =>
            obj.name === action.payload.city
              ? {
                  ...obj,
                  url: action.payload.data,
                  metas: { fetched: true, fetching: false, error: "" }
                }
              : obj
        )
      };

      break;
    default:
      return state;
  }

  return state;
}
