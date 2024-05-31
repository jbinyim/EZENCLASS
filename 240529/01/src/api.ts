const API_KEY = "59b4be61d805cacbf60b7127d2470338";

const BASE_PATH = "https://api.themoviedb.org/3";

interface Dates {
  maximum: string;
  minimum: string;
}

export interface MovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieResponse {
  dates: Dates;
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

export interface ApiResponse {
  page: number;
  results: Movie[];
}

interface Movie {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  title: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-kr`
  ).then((response) => response.json());
};

export const getMulti = (word: string | undefined) => {
  return fetch(
    `${BASE_PATH}/search/multi?query=${word}&include_adult=false&language=ko-kr&page=1&api_key=${API_KEY}`
  ).then((response) => response.json());
};
