import { all } from 'redux-saga/effects';

import { usersSaga } from './users';

export default function* sagas() {
  yield all([
    ...usersSaga
  ]);
}