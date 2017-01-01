export function addEmail(email) {
  return { type: 'ADD_EMAIL', email }
}

export function addPassword(password) {
  return { type: 'ADD_PASSWORD', password }
}

export function addZip(zip) {
  return { type: 'ADD_ZIP', zip }
}
