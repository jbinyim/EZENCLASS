import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getMovies, MovieResponse } from "../api";
import { makeImgPath } from "../util";
import { motion, AnimatePresence, delay } from "framer-motion";
import Modal from "../components/Modal";

const Contaier = styled.div`
  width: 100%;
  height: 100%;
  /* margin-top: 80px; */
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const Banner = styled.div<{ bgPhoto: string | undefined }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -50px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Box = styled(motion.div)<{ bgPhto: string }>`
  /* position: relative; */
  background: #fff;
  height: 200px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 30px;
  background-image: url(${(props) => props.bgPhto});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  position: absolute;
  width: 100%;
  bottom: 0;
  background: ${(props) => props.theme.black.lighter};
  padding: 20px;
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    zIndex: 2,
    scale: 1.3,
    y: -50,
    transition: { delay: 0.3, type: "tween" },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: { delay: 0.3, type: "tween" },
  },
};

const offset = 6;

const Home = () => {
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { isLoading, data } = useQuery<MovieResponse>(
    ["movies", "nowPlaying"],
    getMovies
  );

  const increase = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };

  const openModal = (movieId: number) => {
    setModalId(movieId);
    setModal((prev) => !prev);
  };

  return (
    <Contaier>
      {isLoading ? (
        <Loader>Loading</Loader>
      ) : (
        <>
          <Banner
            onClick={increase}
            bgPhoto={makeImgPath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  type: "tween",
                  duration: 1,
                }}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, index * offset + offset)
                  .map((movie) => (
                    <Box
                      onClick={() => openModal(movie.id)}
                      key={movie.id}
                      bgPhto={makeImgPath(movie.backdrop_path) || ""}
                      variants={boxVariants}
                      initial="normal"
                      whileHover="hover"
                      transition={{ type: "tween" }}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          {data?.results.map((item) => (
            <div>
              {item.id === modalId && !modal ? (
                <Modal setModal={setModal} item={item} />
              ) : null}
            </div>
          ))}
        </>
      )}
    </Contaier>
  );
};

export default Home;
