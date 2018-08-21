import axios from 'axios';

const API_KEY = 'AIzaSyAeQwHqTUoBEFr0hTMUPsIlBvnxAYAictA';

export const FETCH_SHOPS = 'FETCH_SHOPS';

export function fetchShops(city) {
  const url = `https://api.citygridmedia.com/content/places/v2/search/where?what=restaurant&where=${city}`;
  const request = axios.get(url);

  console.log(request)
}
//working on API end points for shopping by city
