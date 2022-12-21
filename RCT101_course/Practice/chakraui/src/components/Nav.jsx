import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Wrapper = styled.div`
  border: 1px solid black;
  height: 45px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 45px;
  }

  .cart {
    /* border: 1px solid black; */
    position: relative;
  }

  .cartCount {
    position: absolute;
    font-size: 15px;
    right: -12px;
    top: -8px;
    background-color: red;
    color: white;
    aspect-ratio: 1;
    height: 15px;
    border-radius: 50%;
    font-weight: bold;
  }
`;

const Nav = () => {
  const { state } = useContext(AppContext);
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"about"}>About Us</Link>
        </li>
        <li>
          <Link to={"products"}>Products</Link>
        </li>

        <li>
          <Link to={"contact"}>Contact Us</Link>
        </li>

        <li>
          <Link to={"login"}>Login</Link>
        </li>

        <li className="cart">
          <Link to={"cart"}>
            Cart{" "}
            <span className="cartCount">
              {state.cart.length === 0 ? 0 : state.cart.length}
            </span>{" "}
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Nav;