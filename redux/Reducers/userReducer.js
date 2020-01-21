  
import { FETCH_USER, NEW_USER } from '../Actions/users/type';

const initialState = {
  users: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.payload,
      };
    case NEW_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}