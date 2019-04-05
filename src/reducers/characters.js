export const Types = {
  FETCH_CHARACTERS: 'characters/FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS: 'characters/FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_FAILURE: 'characters/FETCH_CHARACTERS_FAILURE',
};

const initialState = {
  loading: false,
  data: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CHARACTERS:
      return Object.assign({}, state, {
        loading: true
      });
    case Types.FETCH_CHARACTERS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: [...state.data, action.payload]
      });
    case Types.FETCH_CHARACTERS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default reducer;

export function fetchCharacter(url) {
  return { type: Types.FETCH_CHARACTERS, url };
};
