import { UseMainContext } from "../../../context/MainContext";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";
import OrderConfirmed from "./OrderConfirmed";

const Cart = () => {
  const {
    addedSneakers,
    cartPrice,
    isOrderConfirmed,
    handleOrderConfirmation,
  } = UseMainContext();

  const discountPrice = cartPrice * 0.05;

  return (
    <div className="cart">
      <h1>Корзина</h1>
      <div className={isOrderConfirmed ? "notActive" : "cart_inner"}>
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
          <button onClick={() => handleOrderConfirmation(addedSneakers)}>
            Оформите заказ
          </button>
        </div>
      </div>
      <div className={isOrderConfirmed ? "cart_order_confirmed" : "notActive"}>
        <OrderConfirmed />
      </div>
    </div>
  );
};

export default Cart;
