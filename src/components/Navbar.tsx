import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { UseMainContext } from "../../context/MainContext";
import { Link } from "react-router-dom";

import Cart from "../pages/Cart";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const { cartPrice } = UseMainContext();

  const vars = {
    default: { opacity: 0, x: 400 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 400 },
  };

  const cartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: any) => {
      if (!cartRef.current?.contains(e.target)) {
        setIsNavVisible(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  }, []);

  const { handleCartClick, isNavVisible, setIsNavVisible } = UseMainContext();

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={"/images/logo.png"} alt="" />
          </Link>
          <div className="logo_title">
            <h1>React Sneakers</h1>
            <span>Магазин лучших красовок</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            ref={cartRef}
            className={"cart"}
            variants={vars}
            initial="default"
            animate={isNavVisible ? "visible" : "default"}
            exit="exit"
            transition={{ type: "tween" }}
          >
            <Cart />
          </motion.div>
        </AnimatePresence>

        <nav className="nav">
          <ul>
            <li onClick={() => handleCartClick()} className="cartLi">
              <IoCartOutline className="cartSvg" size={20} /> {cartPrice} руб.
            </li>
            <li>
              <Link to="favorite">
                <CiHeart size={20} /> Закладки
              </Link>
            </li>
            <li>
              <Link to="/">
                <CgProfile size={20} /> Профиль
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
