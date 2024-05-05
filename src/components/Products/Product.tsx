import { UseMainContext } from "../../../context/MainContext";
import ProductsCards from "./ProductsCards";
import { CiSearch } from "react-icons/ci";
import Skeleton from "../Skeleton/Skeleton";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux/Slices/Sneakers/SneakerSlice";

const Product = () => {
  const { sneakersData, status, searchValue } = UseMainContext();

  const dispatch = useDispatch();
  const filteredBySearch = sneakersData
    .filter((item) => {
      if (item.title.toLowerCase().includes(searchValue)) {
        return true;
      }
      return false;
    })
    .map((item) => {
      return <ProductsCards key={item.id} {...item} />;
    });

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
            onChange={(event) => dispatch(setSearchValue(event.target.value))}
          />
        </div>
      </div>
      <div className="product_shop">
        {status === "success"
          ? filteredBySearch
          : [...new Array(10)].map((_, index) => {
              return <Skeleton key={index} />;
            })}
      </div>
    </div>
  );
};

export default Product;
