import { ADD, UPDATE, DELETE} from '../constants';

import initialUsersList from '../api/MOCK_DATA (2).json'

const usersReducer = (state = {usersList: initialUsersList}, action) => {
  switch (action.type) {
    case ADD:
      const preparedUderData = {...action.user, id: state.usersList.length + 1};
      
      return {
        ...state,
        usersList: [...state.usersList, preparedUderData],
      };
    case UPDATE:
      return {
        ...state,
        usersList: state.usersList.map( user => {
          if (user.id === action.userId) {
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
        usersList: state.usersList.filter(todo => todo.id !== action.userId),
      };
    default:
      return state;
  }
};

export default usersReducer;