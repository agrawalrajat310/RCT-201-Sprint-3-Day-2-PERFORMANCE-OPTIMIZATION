import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

function Countries() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    getData(page);
  }, [page]);

  async function getData(page = 1) {
    setLoading(true);
    try {
      let res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`
      );
      let data = await res.json();
      setLoading(false);
      console.log(data);
      setData([...data.data]);
      setTotalPages(data.totalPages);

      console.log(data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  const handleChange = (num) => {
    setPage((prev) => prev + num);
  };

  if (loading) return <LoadingIndicator />;

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {data.map((el) => {
          return (
            <CountriesCard
              country={el.country}
              population={el.population}
              key={el.id}
            />
          );
        })}
      </div>
      <div> 
        <Pagination onChange={handleChange} 
        current={page}
        total={totalPages} />
      </div>
    </div>
  );
}

export default Countries;
