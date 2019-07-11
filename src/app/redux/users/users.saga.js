import {
  call,
  cancel,
  fork,
  put,
  take,
  takeLatest
} from 'redux-saga/effects';

import { get } from 'utils/api';
import { usersActions } from './users.actions';

function* getUsers() {
  try {
    const {
      data
    } = yield call(get, 'users');

    console.log(data, ' data ');

    yield put({
      type: usersActions.SUCCESS,
      payload: { users: data || [] }
    });
  } catch (err) {
    console.error(err);
  }
}

function* watchGetUsersList() {
  while (true) {
    const fetchUsers = yield takeLatest(
      usersActions.REQUESTED,
      getUsers
    );

    yield take(usersActions.CANCEL);
    yield cancel(fetchUsers);
  }
}

const usersSaga = [
  fork(watchGetUsersList)
];

export default usersSaga;
