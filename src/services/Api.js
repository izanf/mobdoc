import { API_URL } from './../config/constants';

export default {
  fetchMovies: () =>
    fetch(`${API_URL}/films/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain'
      }
    }).then(res => res.json()),
  fetchCharacter: url =>
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain'
      }
    }).then(res => res.json())
};
