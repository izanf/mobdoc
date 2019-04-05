import { all, fork, takeEvery } from 'redux-saga/effects';

import movies from './movies';
import characters from './characters';

export default function* root() {
  yield all([ fork(movies) ])
  yield all([ fork(characters) ])
};
