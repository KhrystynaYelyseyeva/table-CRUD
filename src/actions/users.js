import { ADD, UPDATE, DELETE} from '../constants';

export const usersActions = {
  add: user => ({
    type: ADD,
    user,
  }),
  update: (userID, newData) => ({
    type: UPDATE,
    userID,
    newData,
  }),
  delete: userID => ({
    type: DELETE,
    userID,
  }),
};
