const Body = () => {
  // const numA = 1;
  // const numB = 2;
  // const strA = "안녕";
  // const strB = "리엑트";
  // const boolA = true;
  // const boolB = false;
  // const objectA = {
  //   a: 1,
  //   b: 2,
  // };
  const num = 19;
  // return (
  // <div>
  //   <h1>body</h1>
  //   <h2>
  //     {num}은(는) {num % 2 === 0 ? "짝수" : "홀수"} 입니다.
  //   </h2>
  // </div>
  // );
  if (num % 2 === 0) {
    return <div>{num}은 짝수입니다</div>;
  } else {
    return <div>{num}은 홀수입니다</div>;
  }
};

export default Body;
