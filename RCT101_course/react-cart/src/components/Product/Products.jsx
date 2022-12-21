import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../Context/AppContext";
import ProductCard from "./ProductCard";
const Wrapper = styled.div``;

const Products = () => {
  const { getProducts, state } = useContext(AppContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Wrapper>
      {state.products?.map((el) => {
        return <ProductCard key={el._id} {...el} />;
      })}
    </Wrapper>
  );
};

export default Products;
