import axios from 'axios';

const API_KEY = 'AIzaSyAeQwHqTUoBEFr0hTMUPsIlBvnxAYAictA';

export const FETCH_SHOPS = 'FETCH_SHOPS';

export function fetchShops(city) {
  const url = ``;
  const request = axios.get(url);
  return {
    type: FETCH_SHOPS,
    payload: request
  }
}
