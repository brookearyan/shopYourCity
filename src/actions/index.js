import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';

const ROOT_URL = 'http://127.0.0.1:8000/';

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}taxationBE/user_infos`, values)
    .then(() => callback());

  return {
    type: CREATE_USER,
    payload: request
  }
}
