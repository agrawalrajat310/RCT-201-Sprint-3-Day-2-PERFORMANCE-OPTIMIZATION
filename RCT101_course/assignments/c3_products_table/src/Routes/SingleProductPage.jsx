import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";

function SingleProductPage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
    <div data-testid="products-container">
      <div>
        <h3 data-testid="product-brand">{data?.brand}</h3>
      </div>
      <div>
        <img data-testid="product-image" src={data?.img} alt={data?.brand} />
      </div>
      <div data-testid="product-category">{data?.category}</div>

      <div data-testid="product-details">{data?.details}</div>
      <div data-testid="product-price">{data?.price}</div>
    </div>
  );
}
export default SingleProductPage;
