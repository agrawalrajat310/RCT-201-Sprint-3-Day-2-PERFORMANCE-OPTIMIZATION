import React from "react";
import { Routes, Route } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";
import ProductDetails from "../Pages/ProductDetails";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllProducts />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}
export default AllRoutes;
