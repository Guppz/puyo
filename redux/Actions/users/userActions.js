import { FETCH_USER } from './type';

export const fetchUser = (email,pass) => dispatch => {
  fetch('https://tarea-api-u.herokuapp.com/user/'+email+'/'+pass)
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: FETCH_USER,
        payload: user
      })
    );
};