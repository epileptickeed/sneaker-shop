import { CiHeart } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import SneakersType from "../../../interfaces/interfaces";
import { UseMainContext } from "../../../context/MainContext";

const Card = ({
  id,
  isFavorite,
  title,
  imageUrl,
  isAdded,
  price,
}: SneakersType) => {
  const { handleFavoriteClick, handleAddClick } = UseMainContext();

  return (
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
  );
};

export default Card;
