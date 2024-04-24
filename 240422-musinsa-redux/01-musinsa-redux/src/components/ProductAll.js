import ProductCard from "./ProductCard";
import { productAction } from "../redux/actions/productAction";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((item, idx) => (
          <Col key={idx} lg={3}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
