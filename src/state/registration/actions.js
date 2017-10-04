export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_PASSWORD = 'ADD_PASSWORD';
export const ADD_ZIP = 'ADD_ZIP';

export function addEmail(email) {
  return { type: ADD_EMAIL, email };
}

export function addPassword(password) {
  return { type: ADD_PASSWORD, password };
}

export function addZip(zip) {
  return { type: ADD_ZIP, zip };
}
