import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';

const ROOT_URL = 'http://127.0.0.1:8000/taxationBE/';

export function createUser(values, callback) {
  const request = axios.post(`${ROOT_URL}user_infos/`, values)
    .then(() => callback());

  return {
    type: CREATE_USER,
    payload: request
  }
}
