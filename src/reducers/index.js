import { combineReducers } from "redux";
import users from "./users";

export const getUsers = (state) => state.users.usersList;
export const getUserFromHistory = (state) =>
  state.users.history[state.users.history.length - 1];

const reducer = combineReducers({
  users,
});

export default reducer;
