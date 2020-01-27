  
import { FETCH_GAMES} from '../Actions/Games/type';

const initialState = {
  games: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    default:
      return state;
  }
}