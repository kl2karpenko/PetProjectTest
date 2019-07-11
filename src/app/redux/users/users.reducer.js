import { handleActions } from 'redux-actions';

import { usersActions } from './users.actions';

const initialState = {
  list: []
};

const usersReducer = handleActions(
  {
    [usersActions.SUCCESS]: (state = initialState, { payload: { users } = {} }) => ({
      ...state,
      list: users
    })
  },
  {}
);

export default usersReducer;