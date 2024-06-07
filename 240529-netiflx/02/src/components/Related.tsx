import React, { useEffect } from "react";
import { getRecommend } from "../api";
import { useQuery } from "react-query";
import { makeImagePath } from "../utils";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Img = styled.div`
  width: 300px;
  height: 200px;
  background-size: cover;
  background-position: center center;
`;

interface IRelated {
  movieId: number;
}

interface Movie {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string | null;
  [key: string]: any; // 추가 속성 허용
}

type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

const Related = () => {
  return <div>related</div>;
};

export default Related;
