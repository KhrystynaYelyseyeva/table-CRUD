import initialUsersList from "../api/MOCK_DATA (2).json";
import { ADD, CLEAN_HISTORY, DELETE, EDIT } from "../constants";

const usersReducer = (
  state = { usersList: initialUsersList, history: [] },
  action
) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: [...state.usersList, action.user],
      };
    case EDIT:
      return {
        ...state,
        usersList: state.usersList.map((user) => {
          if (user.id === action.userID) {
            return {
              ...action.newData,
            };
          }
          return user;
        }),
      };
    case DELETE:
      const deletedUser = state.usersList.find(
        (user) => user.id === action.userID
      );

      const preparedUserToHistory = {
        ...deletedUser,
        id: state.usersList.length,
      };

      return {
        ...state,
        history: [...state.history, preparedUserToHistory],
        usersList: state.usersList.filter((user) => user.id !== action.userID),
      };

    case CLEAN_HISTORY: {
      const isEmpty = !state.history.length;
      if (isEmpty) return state;
      return {
        ...state,
        history: [],
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
