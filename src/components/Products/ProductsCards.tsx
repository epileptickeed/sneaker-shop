import { IoMdCheckmark } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { UseMainContext } from "../../../context/MainContext";
import SneakersType from "../../../interfaces/interfaces";

const ProductsCards = ({
  id,
  imageUrl,
  title,
  price,
  isFavorite,
  isAdded,
}: SneakersType) => {
  const { handleAddClick, handleFavoriteClick } = UseMainContext();

  return (
    <div>
      <div className="product_card">
        <button
          className={isFavorite ? "favoriteActive" : "favorite"}
          onClick={() => handleFavoriteClick(id)}
        >
          <CiHeart />
        </button>
        <img src={imageUrl} alt={title} />
        <p>{title}</p>
        <div className="product_card__price">
          <div className="product_card__price_inner">
            <span>Цена:</span>
            <p>{price} руб.</p>
          </div>
          <button
            onClick={() => handleAddClick(id)}
            className={isAdded ? "buttonActive" : ""}
          >
            <GoPlus className={isAdded ? "notActive" : ""} />
            <IoMdCheckmark className={isAdded ? "" : "notActive"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;
