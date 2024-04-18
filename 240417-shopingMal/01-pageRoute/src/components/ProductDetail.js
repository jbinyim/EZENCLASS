import React from "react";
import { useParams } from "react-router-dom";
// 파라미터 값을 가져올수 있는 리액트 훅

const ProductDetail = () => {
  const { category, device, productnum } = useParams(); // 객체형식으로 아이디값가져온다
  console.log(category, device, productnum);
  return (
    <div>
      <div>ProductDetail</div>
      <div>상품카테고리 : {category}</div>
      <div>상품 번호 : {productnum}</div>
      <div>상품매체출력 : {device}</div>
    </div>
  );
};

export default ProductDetail;
