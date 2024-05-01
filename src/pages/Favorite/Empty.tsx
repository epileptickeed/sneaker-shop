import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <div className="favorite_empty">
      <h1>🥺</h1>
      <p>У вас нету закладок :(</p>
      <Link to={"/"}>
        <button>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default Empty;
