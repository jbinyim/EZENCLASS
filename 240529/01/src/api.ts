const API_KEY = "59b4be61d805cacbf60b7127d2470338";

const BASE_PATH = "https://api.themoviedb.org/3";

export const getMovies = () => {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};
