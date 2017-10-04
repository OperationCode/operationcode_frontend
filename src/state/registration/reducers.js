import { ADD_EMAIL, ADD_PASSWORD, ADD_ZIP } from './actions';

const initialState = {
  email: '',
  password: '',
  zip: ''
};

export default function register(state = initialState, action) {
  switch (action.type) {
    case ADD_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      });
    case ADD_PASSWORD:
      return Object.assign({}, state, {
        password: action.password
      });
    case ADD_ZIP:
      return Object.assign({}, state, {
        zip: action.zip
      });
    default:
      return state;
  }
}
