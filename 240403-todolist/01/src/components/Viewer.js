import React from "react";

const Viewer = ({ number }) => {
  console.log("viewer componets update");
  return (
    // <div>{number % 2 === 0 ? <h3>짝수입니다</h3> : <h3>홀수입니다</h3>}</div>
    <div>Viwer</div>
  );
};

export default Viewer;
