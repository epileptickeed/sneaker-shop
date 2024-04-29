import { UseMainContext } from "../../context/MainContext";
import { CiHeart } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { GoPlus } from "react-icons/go";

const Favorite = () => {
  const { handleFavoriteClick, handleAddClick, favoriteSneakers } =
    UseMainContext();

  return (
    <div className="container">
      <div className="favorite">
        {favoriteSneakers.map((item, index) => {
          return (
            <div key={index} className="product_card">
              <button
                className={item.isFavorite ? "favoriteActive" : "favorite"}
                onClick={() => handleFavoriteClick(item.id)}
              >
                <CiHeart />
              </button>
              <img src={item.imageUrl} alt={item.title} />
              <p>{item.title}</p>
              <div className="product_card__price">
                <div className="product_card__price_inner">
                  <span>Цена:</span>
                  <p>{item.price} руб.</p>
                </div>
                <button
                  onClick={() => handleAddClick(item.id)}
                  className={item.isAdded ? "buttonActive" : ""}
                >
                  <GoPlus className={item.isAdded ? "notActive" : ""} />
                  <IoMdCheckmark className={item.isAdded ? "" : "notActive"} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorite;
