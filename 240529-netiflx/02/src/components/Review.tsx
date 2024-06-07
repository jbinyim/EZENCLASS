import React from "react";
import styled from "styled-components";

const ReviewTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.red};
`;

interface IReview {
  content: string;
}

const Review = () => {
  return <div>review</div>;
};

export default Review;
