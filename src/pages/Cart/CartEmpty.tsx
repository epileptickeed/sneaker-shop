import { RiArrowGoBackFill } from "react-icons/ri";

const CartEmpty = () => {
  return (
    <div className="cart_empty">
      <div className="cart_empty_inner">
        <img src="/images/cart.png" alt="empty cart logo" />
        <h2>Корзина пустая</h2>
        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
        <button>
          <RiArrowGoBackFill />
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default CartEmpty;
