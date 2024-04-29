import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { UseMainContext } from "../../context/MainContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { price } = UseMainContext();

  return (
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
      <nav className="nav">
        <ul>
          <li>
            <IoCartOutline size={20} /> {price} руб.
          </li>
          <li>
            <Link to="favorite">
              <CiHeart size={20} /> Закладки
            </Link>
          </li>
          <li>
            <CgProfile size={20} /> Профиль
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
