import { ADD, CLEAN_HISTORY, DELETE, EDIT } from "../constants";

export const usersActions = {
  add: (user) => ({
    type: ADD,
    user,
  }),
  edit: (userID, newData) => ({
    type: EDIT,
    userID,
    newData,
  }),
  delete: (userID) => ({
    type: DELETE,
    userID,
  }),
  clean_history: () => ({
    type: CLEAN_HISTORY,
  }),
};
