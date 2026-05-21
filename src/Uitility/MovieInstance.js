import axios from 'axios';

const API_KEY = '5ac6356fb4aa2fc76af2ddf9d1b4a06c';
const BASE_URL = 'https://api.themoviedb.org/3';

const movieInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
});

export {movieInstance};