import { FETCH_GAMES } from './type';

export const fetchGames = () => dispatch => {
  fetch('https://api.rawg.io/api/games')
    .then(res => res.json())
    .then(game =>
      dispatch({
        type: FETCH_GAMES,
        payload: game
      })
    );
};