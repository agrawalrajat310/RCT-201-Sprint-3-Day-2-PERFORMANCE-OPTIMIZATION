import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
function ProductsTable({ data }) {
  return (
    <table border="1px">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* map through the data */}
        {data?.map((item) => (
          <ProductCard
            id={item.id}
            brand={item.brand}
            key={item.id}
            category={item.category}
            price={item.price}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
