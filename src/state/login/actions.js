// actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_PASSWORD = 'ADD_PASSWORD';

// action creators
export function addEmail(email) {
  return { type: ADD_EMAIL, email };
}

export function addPassword(password) {
  return { type: ADD_PASSWORD, password };
}
