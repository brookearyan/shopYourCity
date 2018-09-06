import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';

export function createUser(state){
  const url = `http://127.0.0.1:8000/taxationBE/user_infos`;
  const request = axios.post(url);
  console.log(request)
}
