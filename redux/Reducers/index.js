import { combineReducers } from 'redux';
import userReducer from './userReducer';
import gameReducer from "./gamesReducer";

export default combineReducers({
  users: userReducer,
  games: gameReducer
});