import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/action/movieAction";
import Baner from "../components/Baner";
import Movieslide from "../components/Movieslide";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader
          color="#f00"
          loading={loading}
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {
    return (
      <div className="slide">
        {popularMovies.results && <Baner movie={popularMovies.results[0]} />}
        <div className="movieContents">
          <h1>popular Movie</h1>
          <Movieslide movies={popularMovies} />
          <h1>TopRated Movie</h1>
          <Movieslide movies={topRatedMovies} />
          <h1>Upcoming Movie</h1>
          <Movieslide movies={upComingMovies} />
        </div>
      </div>
    );
  }
};

export default Home;
