import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const getData = () => {
    setloading(true)
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((res) => {
        setloading(false)
        setData(res)})
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(data)
if(loading) {<h1>Loading......</h1>}
  return (
    <div>
      <div>All Products</div>
      <div data-testid="products-wrapper">
        {data.map((el) => (
          <div key={el.id}>
            <Link to={`/products/${el.id}`}>
              {el.id} - {el.name} - {el.price}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
