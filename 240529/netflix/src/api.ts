const API_KEY = "0bc8bd2db453d7413d1c2844ec617b61";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  title: string;
  name: string;
  overview: string;
  first_air_date: string;
  release_date: string;
  adult: boolean;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
  genre_ids: number[];
  poster_path: string;
}

export interface IGetmoviesResult {
  dates: {
    maximum: string;
    minimun: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const getMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-kr&region=kr`
  ).then((response) => response.json());
};

export const getGenRes = () => {
  return fetch(
    `${BASE_PATH}/genre/movie/list?language=ko-kr&api_key=${API_KEY}`
  ).then((response) => response.json());
};

export interface IGenRes {
  genres: IGenResDetail;
}

export interface IGenResDetail {
  id: number;
  name: string;
}
