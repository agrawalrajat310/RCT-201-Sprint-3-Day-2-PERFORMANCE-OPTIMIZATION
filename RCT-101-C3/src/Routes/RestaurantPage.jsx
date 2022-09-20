import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { transformTypeToString } from "../Components/RestaurantCard";

const getRestaurants = (id) => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
  ).then((res) => res.json());
};

function RestuarantPage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getRestaurants(id)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div data-testid="restaurant-container">
      <img
        data-testid="restaurant-image"
        src={data.image}
        alt={data.name}
        width={"100%"}
      />
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">
            {transformTypeToString(data.type)}
          </b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestuarantPage;
