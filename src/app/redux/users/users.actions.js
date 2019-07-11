import { createAction } from 'redux-actions';
import { createActionSet } from 'utils/redux-actions';

export const GET_USERS_LIST = 'GET_USERS_LIST';
export const usersActions = createActionSet(GET_USERS_LIST);

export const getUsersList = createAction(usersActions.SUCCESS);