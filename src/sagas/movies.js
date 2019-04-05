import { put, takeLatest, call } from 'redux-saga/effects';
import Api from './../services/Api';

import { Types } from '../reducers/movies';

export function* fetchMovies() {
  try {
    const response = yield call(Api.fetchMovies);

    yield put({ type: Types.FETCH_MOVIES_SUCCESS, payload: response.results });
  } catch (err) {
    yield put({
      type: Types.FETCH_MOVIES_FAILURE,
      payload: err
    });
  }
}

export default function* root() {
  yield takeLatest(Types.FETCH_MOVIES, fetchMovies);
};
