import React from "react";

const Baner = ({ movie }) => {
  console.log(movie);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
      }}
    >
      <div className="banner-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Baner;

// src =
//   "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8uUU2pxm6IYZw8UgnKJyx7Dqwu9.jpg";
