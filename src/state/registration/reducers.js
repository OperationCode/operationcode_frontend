import { ADD_EMAIL, ADD_PASSWORD, ADD_ZIP } from './actions';

// const intialState = {};

export default function register(state = null, action) {
  switch (action.type) {
    case ADD_EMAIL:
      return state;
    case ADD_PASSWORD:
      return state;
    case ADD_ZIP:
      return state;
    default:
      return state;
  }
}
