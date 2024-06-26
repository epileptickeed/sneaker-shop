import { OrdersType } from "../redux/Slices/Orders/OrderSlices";

export default interface SneakersType {
  id: number;
  imageUrl: string;
  isAdded: boolean;
  isFavorite: boolean;
  price: number;
  title: string;
  favoriteId: null;
  orderNumber: number;
}

export default interface ContextType {
  cartPrice: number;
  // setCartPrice: React.Dispatch<React.SetStateAction<number>>;

  sneakers: SneakersType[];
  sneakersData: SneakersType[];

  navVisible: boolean;
  favoriteSneakers: SneakersType[];
  addedSneakers: SneakersType[];
  numberOfOrders: number;
  status: string;
  isOrderConfirmed: boolean;
  orders: OrdersType[];
  searchValue: string;

  removeAddedSneaker: (id: number) => void;
  handleAddClick: (id: number) => void;
  handleFavoriteClick: (id: number) => void;
  handleOrderConfirmation: (addedSneakers: SneakersType[]) => void;
  handleReturn: () => void;
}
