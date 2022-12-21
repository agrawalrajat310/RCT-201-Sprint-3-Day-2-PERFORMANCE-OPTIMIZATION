import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ProductCard from "./Product/ProductCard";

const Cart = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h2>Cart</h2>
      {state.cart.map((el) => {
        return <ProductCard key={el._id} {...el} />;
      })}
    </div>
  );
};

export default Cart;
