import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const SignleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useContext(AppContext);

  const [product, setProduct] = useState({});

  useEffect(() => {
    getData(id);
  }, []);

  const getData = async (id) => {
    try {
      let res = await fetch(
        `https://bestbuy-backend.onrender.com/products/${id}`
      );
      let data = await res.json();
      console.log(data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };
//   console.log(id);
  return (
    <div>
      <img src={product.imgUrl} alt={product.title} />
      <p>{product.title}</p>
      <h3>$ {product.price}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default SignleProduct;