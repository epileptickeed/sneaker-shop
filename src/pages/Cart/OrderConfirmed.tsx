import { UseMainContext } from "../../../context/MainContext";

const OrderConfirmed = () => {
  const { handleReturn, numberOfOrders } = UseMainContext();
  return (
    <div className="confirmed_order">
      <img src={"/images/order_confirmed.png"} alt="order_confirmed" />
      <h1>Заказ оформлен!</h1>
      <p>Ваш заказ #{numberOfOrders} скоро будет передан курьерской доставке</p>
      <button onClick={() => handleReturn()}>Вернуться назад</button>
    </div>
  );
};

export default OrderConfirmed;
