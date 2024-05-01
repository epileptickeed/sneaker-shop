import { UseMainContext } from "../../../context/MainContext";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";

const Cart = () => {
  const { addedSneakers, cartPrice } = UseMainContext();

  const discountPrice = cartPrice * 0.05;
  return (
    <div className="cart">
      <h1>Корзина</h1>
      <div className="cart_inner">
        {addedSneakers.length === 0 ? (
          <CartEmpty />
        ) : (
          <div className="added_items">
            {addedSneakers.map((item) => {
              return <CartItems key={item.id} {...item} />;
            })}
          </div>
        )}

        <div
          className={addedSneakers.length === 0 ? "notActive" : "confirm_order"}
        >
          <div>
            <span>Итого: </span>
            <b>{cartPrice} руб.</b>
          </div>
          <div>
            <span>Налог 5%: </span>
            <b>{discountPrice.toFixed()} руб.</b>
          </div>
          <button>Оформите заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
