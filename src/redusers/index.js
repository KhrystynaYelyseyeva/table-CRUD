import { combineReducers } from 'redux';

import users from "./users";

export const getUsers = state => state.users.usersList;

const reducer = combineReducers({
  users,
});

export default reducer;