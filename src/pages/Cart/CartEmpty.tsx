import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setIsNavVisible } from "../../../redux/Slices/Cart/NavSlice";

const CartEmpty = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart_empty">
      <div className="cart_empty_inner">
        <img src="/images/cart.png" alt="empty cart logo" />
        <h2>Корзина пустая</h2>
        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
        <button onClick={() => dispatch(setIsNavVisible(false))}>
          <RiArrowGoBackFill />
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default CartEmpty;
