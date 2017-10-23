import { ADD_EMAIL, ADD_PASSWORD } from './actions';

const initialState = {
  email: '',
  password: ''
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case ADD_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      });
    case ADD_PASSWORD:
      return Object.assign({}, state, {
        email: action.password
      });
    default:
      return state;
  }
}
