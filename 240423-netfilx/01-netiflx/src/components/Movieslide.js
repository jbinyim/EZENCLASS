import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Movieslide = ({ movies }) => {
  return (
    <div>
      <Carousel responsive={responsive}>
        {movies.results.map((item, idx) => (
          <MovieCard key={idx} item={item} />
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Movieslide;
