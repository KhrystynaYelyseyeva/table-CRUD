import initialUsersList from '../api/MOCK_DATA (2).json';
import { ADD, DELETE, EDIT } from '../constants';


const usersReducer = (state = {usersList: initialUsersList}, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: [...state.usersList, action.user],
      };
    case EDIT:
      return {
        ...state,
        usersList: state.usersList.map( user => {
          if (user.id === action.userID) {
            return {
              ...action.newData,
            };
          }

          return user;
        }),
      };
    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.userID),
      };
    default:
      return state;
  }
};

export default usersReducer;