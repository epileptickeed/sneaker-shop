import { useState } from "react";
import { UseMainContext } from "../../../context/MainContext";
import ProductsCards from "./ProductsCards";
import { CiSearch } from "react-icons/ci";

const Product = () => {
  const { sneakersData } = UseMainContext();
  const [searchValue, setSearchValue] = useState("");

  const filteredBySearch = sneakersData
    .filter((item) => {
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((item) => <ProductsCards key={item.id} {...item} />);

  return (
    <div className="product">
      <div className="product_title">
        <h1>Все кроссовки</h1>
        <div className="inputDiv">
          <CiSearch size={20} />
          <input
            type="text"
            placeholder="Поиск..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
      </div>
      <div className="product_shop">{filteredBySearch}</div>
    </div>
  );
};

export default Product;
