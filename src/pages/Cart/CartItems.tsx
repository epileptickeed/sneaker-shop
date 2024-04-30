import SneakersType from "../../../interfaces/interfaces";
import { IoClose } from "react-icons/io5";
import { UseMainContext } from "../../../context/MainContext";

const CartItems = ({ id, title, imageUrl, price }: SneakersType) => {
  const { removeAddedSneaker } = UseMainContext();
  return (
    <div className="added_items_card" key={id}>
      <div className="card_inner">
        <img src={imageUrl} alt={title} />
        <div className="card_info">
          <p>{title}</p>
          <span>{price} руб.</span>
        </div>
      </div>
      <IoClose size={40} onClick={() => removeAddedSneaker(id)} />
    </div>
  );
};

export default CartItems;
