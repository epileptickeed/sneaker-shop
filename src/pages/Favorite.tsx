import { UseMainContext } from "../../context/MainContext";
import Empty from "./Favorite/Empty";
import Card from "./Favorite/Card";

const Favorite = () => {
  const { favoriteSneakers } = UseMainContext();

  return (
    <div className="container">
      <div className="favorite">
        {favoriteSneakers.length === 0 ? (
          <Empty />
        ) : (
          favoriteSneakers.map((item) => {
            return <Card key={item.id} {...item} />;
          })
        )}
      </div>
    </div>
  );
};

export default Favorite;
