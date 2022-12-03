import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getData = () => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  });
  console.log(data);

  return (
    <div data-testid="product-details">
      <div>
        <h3>ID - {data.id}</h3>{" "}
        <h1>
          Name: {data.name}
          <br />
          Price: {data.price}{" "}
        </h1>
      </div>
    </div>
  );
}
