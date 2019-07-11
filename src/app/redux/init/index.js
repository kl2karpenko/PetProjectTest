import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import { usersReduser } from '../users';

export default (history) => combineReducers({
  router: connectRouter(history),
  users: usersReduser
});