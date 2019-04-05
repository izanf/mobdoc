import { put, takeEvery, call } from 'redux-saga/effects';
import Api from './../services/Api';

import { Types } from '../reducers/characters';

export function* fetchCharacter({ url }) {
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

export default function* root() {
  yield takeEvery(Types.FETCH_CHARACTERS, fetchCharacter);
};
