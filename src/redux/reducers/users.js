export const initialState = {
  list: []
};

export const LOAD_USERS_REQUEST = 'users/LOAD_USERS_REQUEST';
export const LOAD_USERS_SUCCESS = 'users/LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'users/LOAD_USERS_FAILURE';
export const loadUsers = () => {
  return dispatch => {
    dispatch({
      type: LOAD_USERS_REQUEST
    });

    fetch('https://reqres.in/api/users')
    .then(result => result.json())
    .then(users => {
      dispatch({
        type: LOAD_USERS_SUCCESS,
        list: users.data
      });
    })
    .catch(error => {
      console.error(error)
      dispatch({
        type: LOAD_USERS_REQUEST
      });
    });
  };
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS: {
      const newUsers = action.list
      return {
        ...state,
        list: newUsers
      }
    }

    default:
      return state
  }
}
