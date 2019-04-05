export const Types = {
  FETCH_CHARACTERS: 'characters/FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS: 'characters/FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_FAILURE: 'characters/FETCH_CHARACTERS_FAILURE',
  FETCH_CHARACTERS_FINALLY: 'characters/FETCH_CHARACTERS_FINALLY',
  RESET_CHARACTERS: 'characters/RESET_CHARACTERS'
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
        data: [...state.data, action.payload]
      });
    case Types.FETCH_CHARACTERS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload
      });
    case Types.FETCH_CHARACTERS_FINALLY:
      return Object.assign({}, state, {
        loading: false
      });
    case Types.RESET_CHARACTERS:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};

export default reducer;

export function fetchCharacters(characters) {
  return { type: Types.FETCH_CHARACTERS, characters };
};

export function resetCharacters() {
  return { type: Types.RESET_CHARACTERS };
};
