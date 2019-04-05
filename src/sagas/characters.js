import { put, takeEvery, call, all } from 'redux-saga/effects';
import Api from './../services/Api';

import { Types } from '../reducers/characters';

function* fetchCharacter(url) {
  try {
    const response = yield call(Api.fetchCharacter, url);

    yield put({ type: Types.FETCH_CHARACTERS_SUCCESS, payload: response });
  } catch (err) {
    yield put({
      type: Types.FETCH_CHARACTERS_FAILURE,
      payload: err
    });
  }
}

export function* fetchCharacters({ characters }) {
  yield all(characters.map(fetchCharacter));

  yield put({ type: Types.FETCH_CHARACTERS_FINALLY });
}

export default function* root() {
  yield takeEvery(Types.FETCH_CHARACTERS, fetchCharacters);
};
