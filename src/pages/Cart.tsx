import { UseMainContext } from "../../context/MainContext";
import { IoClose } from "react-icons/io5";

const Cart = () => {
  const { addedSneakers, removeAddedSneaker } = UseMainContext();

  return (
    <div className="cart">
      <h1>Корзина</h1>
      {addedSneakers ? (
        <div className="added_items">
          {addedSneakers?.map((item) => {
            return (
              <div className="added_items_card" key={item.id}>
                <div className="card_inner">
                  <img src={item.imageUrl} alt={item.title} />
                  <div className="card_info">
                    <p>{item.title}</p>
                    <span>{item.price} руб.</span>
                  </div>
                </div>
                <IoClose
                  size={40}
                  onClick={() => removeAddedSneaker(item.id)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        "hello world"
      )}

      <div className="confirm_order">
        <p>Итого:</p>
        <p>Налог 5%:</p>
      </div>
    </div>
  );
};

export default Cart;
