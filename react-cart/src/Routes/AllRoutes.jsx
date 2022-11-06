import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Login from "../components/Auth/Login";
import Cart from "../components/Cart";
import ContactUS from "../components/ContactUS";
import ContactUSs from "../components/ContactUS";
import Home from "../components/Home";
import Nav from "../components/Nav";
import Products from "../components/Product/Products";
import SignleProduct from "../components/Product/SignleProduct";
import PrivateRoute from "./PrivateRoute";
const AllRoutes = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<SignleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
