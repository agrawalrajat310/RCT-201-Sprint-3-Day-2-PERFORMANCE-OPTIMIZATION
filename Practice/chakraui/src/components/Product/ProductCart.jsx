import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ imgUrl, price, title, _id }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "250px",
        margin: "auto",
      }}
    >
      <Link
        to={`${_id}`}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <img src={imgUrl} alt={title} width={"150px"} />
        <p>{title}</p>
        <p>$ {price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;