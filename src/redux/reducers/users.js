// Used a "ducks" architecture https://github.com/erikras/ducks-modular-redux as the app is small

export const initialState = {
  list: [],
  activeUser: {}
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
        type: LOAD_USERS_FAILURE
      });
    });
  };
};

export const SELECT_ACTIVE_USER = 'users/SELECT_ACTIVE_USER';

export const selectActiveUser = user => ({
  user,
  type: SELECT_ACTIVE_USER
});

export const users = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS: {
      const newUsers = action.list
      return {
        ...state,
        list: newUsers
      }
    }

    case SELECT_ACTIVE_USER: {
      return {
        ...state,
        activeUser: action.user
      }
    }

    default:
      return state
  }
}
