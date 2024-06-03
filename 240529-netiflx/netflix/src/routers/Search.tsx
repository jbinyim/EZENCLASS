import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { IGetmoviesResult, getGenRes, IGenRes } from "../api";
import styled from "styled-components";
import { makeImagePath } from "../utils";
// useSearchParms
// URL SearchParm()

const SearchBox = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  img {
    max-width: 800px;
    margin-right: 20px;
    padding: 10px;
  }
`;

const ContentSection = styled.div``;

const SearchTitle = styled.div``;

const SearchOverView = styled.div``;

const SearchDate = styled.div``;

const SearchValue = styled.div``;

const SearchPoint = styled.div``;

const SearchGenras = styled.div``;

const ReviewSection = styled.div`
  background: #f8f9fa;
`;

const ReviewTitle = styled.span``;

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const API_KEY = "0bc8bd2db453d7413d1c2844ec617b61";
  const BASE_PATH = "https://api.themoviedb.org/3";

  const searchedMovies = () => {
    return fetch(
      `${BASE_PATH}/search/multi?query=${keyword}&include_adult=false&language=ko-kr&page=1&api_key=${API_KEY}`
    ).then((response) => response.json());
  };

  const { isLoading: moviesLoading, data } = useQuery<IGetmoviesResult>(
    ["movies"],
    searchedMovies
  );

  const { isLoading: genResLoading, data: genresData } = useQuery<IGenRes>(
    ["getGenRes"],
    getGenRes
  );

  type ReviewState = {
    [key: number]: string[];
  };

  const [reviews, setReviews] = useState<ReviewState>({});

  const fetchReview = (movieId: number) => {
    return fetch(
      `${BASE_PATH}/movie/786892/reviews?language=en-US&page=1&api_key=${API_KEY}`
    ).then((response) => response.json());
  };

  useEffect(() => {
    if (data) {
      data.results.forEach((movie) => {
        fetchReview(movie.id).then((reviewData) =>
          setReviews((prev) => ({
            ...prev,
            [movie.id]: reviewData.results.map((review: any) => review.content),
          }))
        );
      });
    }
  }, [data]);

  const isLoading = moviesLoading || genResLoading;

  return (
    <div>
      {isLoading ? (
        <div>Lodaing...</div>
      ) : (
        data?.results.map((movie, idx) => (
          <SearchBox key={idx}>
            <img src={makeImagePath(movie.backdrop_path)} alt="backdrop" />
            <div>
              <SearchTitle>
                {movie.title}
                {movie.name}
              </SearchTitle>
              <SearchOverView>{movie.overview}</SearchOverView>
              <SearchDate>
                <span>개봉일</span>
                {movie.release_date}
                {movie.first_air_date}
              </SearchDate>
              <SearchValue>
                <span>관람등급</span>
                {movie.adult ? "청소년 관람불가" : "전체관람"}
              </SearchValue>
              <SearchPoint>
                <span>영화 평점</span>
                {movie?.vote_average !== undefined
                  ? movie?.vote_average.toFixed(2)
                  : "N/A"}
                {movie?.vote_count
                  ? movie?.vote_count.toLocaleString("ko-kr")
                  : "0"}
              </SearchPoint>
              <SearchGenras>
                <span>장르</span>
                {/* {movie.genre_ids
                  ? movie.genre_ids
                      .map(
                        (id) =>
                          genresData?.genres.find((item) => item.id === id).name
                      )
                      .filter((name) => name.join(","))
                  : "N/A"} */}
              </SearchGenras>
            </div>
            <ReviewSection>
              <h3>Review</h3>
              {reviews[movie.id]?.length > 0 ? (
                reviews[movie.id].map((content, reviewIdx) => (
                  <p key={reviewIdx}>
                    <div>
                      <ReviewTitle>User Talk</ReviewTitle>
                      {content}
                    </div>
                  </p>
                ))
              ) : (
                <p>No Reviews Available</p>
              )}
            </ReviewSection>
          </SearchBox>
        ))
      )}
    </div>
  );
};

export default Search;
