export const Types = {
  FETCH_MOVIES: 'movies/FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS: 'movies/FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE: 'movies/FETCH_MOVIES_FAILURE',
};

const initialState = {
  loading: false,
  data: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_MOVIES:
      return Object.assign({}, state, {
        loading: true
      });
    case Types.FETCH_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload
      });
    case Types.FETCH_MOVIES_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default reducer;

export function fetchMovies() {
  return { type: Types.FETCH_MOVIES };
};
