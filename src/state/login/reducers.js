import { ADD_EMAIL, ADD_PASSWORD } from './actions';

const initialState = {
  email: '',
  password: ''
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case ADD_EMAIL:
      return state;
    case ADD_PASSWORD:
      return Object.assign({}, state, {
        email: action.email
      });
    default:
      return Object.assign({}, state, {
        password: action.password
      });
  }
}
