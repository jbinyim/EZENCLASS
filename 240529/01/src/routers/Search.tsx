import React from "react";
import { useMatch, PathMatch } from "react-router-dom";
import { useQuery } from "react-query";
import { getMulti, ApiResponse } from "../api";
import styled from "styled-components";
import { makeImgPath } from "../util";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;

const GridBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;
const Box = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const Search = () => {
  const searchText: PathMatch<string> | null = useMatch("/search/:word");
  const text =
    searchText?.params.word && decodeURIComponent(searchText?.params.word);

  const { isLoading, data } = useQuery<ApiResponse>(["multi", text], () =>
    getMulti(text)
  );

  console.log(data);

  if (isLoading) {
    return <h1>Loding</h1>;
  } else {
    return (
      <Container>
        <GridBox>
          {data?.results.map((item) => (
            <Box
              style={{
                backgroundImage: `url(${makeImgPath(item.backdrop_path)})`,
              }}
            />
          ))}
        </GridBox>
      </Container>
    );
  }
};

export default Search;
