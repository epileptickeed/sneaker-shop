import { UseMainContext } from "../../../context/MainContext";

const Profile = () => {
  const { orders } = UseMainContext();
  return (
    <div className="profile">
      <div className="orders">
        {orders.map((item) => {
          return (
            <div className="orders_card" key={item.id}>
              <h3>Заказ номер {item.orderNumber}</h3>
              <div className="orders_card_inner">
                {item.sneakers.map((sneaker) => {
                  return (
                    <div key={sneaker.id} className="orders_sneaker_card">
                      <img src={sneaker.imageUrl} alt={sneaker.title} />
                      <span>{sneaker.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
