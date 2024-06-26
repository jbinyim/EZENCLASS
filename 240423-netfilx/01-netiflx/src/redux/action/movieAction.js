import api from "../api";

const API_KEY = "59b4be61d805cacbf60b7127d2470338";

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
      });
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=ko&page=1`
      );
      const topRatedMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko&page=1`
      );
      const upComingMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko&page=1`
      );
      const genereApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko`
      );
      const [popularMovies, topRatedMovies, upComingMovies, genereList] =
        await Promise.all([
          popularMovieApi,
          topRatedMovieApi,
          upComingMovieApi,
          genereApi,
        ]);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genereList: genereList.data,
          loading: true,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAILURE",
      });
    }
  };
};

export const movieAction = { getMovies };
