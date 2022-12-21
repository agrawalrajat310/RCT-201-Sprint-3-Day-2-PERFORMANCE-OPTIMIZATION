import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { AppContext } from "../Context/AppContext";

const getRestaurants = (page = 1, type = "") => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10&filter=${type}`
  ).then((res) => res.json());
};

function Dashboard() {
  const { authState, logoutUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    getRestaurants(page, type).then((res) => {
      setLoading(false);
      setData(res);
    });
  }, [page, type]);
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          data-testid="filter-box"
        >
          <option value="">All</option>
          <option value="fine_dining">Fine Dining</option>
          <option value="ethnic">Ethnic</option>
          <option value="cafe">Cafe</option>
          <option value="casual_dining">Casual Dining</option>
          <option value="fast_food">Fast Food</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? <Loader /> : <RestaurantTable data={data && data?.data} />}
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      <br />
      <div data-testid="pagination-container">
        <Pagination
          totalPages={data?.totalPages}
          currentPage={page}
          handlePageChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}

export default Dashboard;
