import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getMovies } from "../api";

const Contaier = styled.div`
  width: 100%;
  height: 200vh;
  /* margin-top: 80px; */
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const Home = () => {
  const { isLoading, data } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  return <Contaier>{isLoading ? <Loader>Loading</Loader> : null}</Contaier>;
};

export default Home;
