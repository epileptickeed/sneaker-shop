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
  setCartPrice: React.Dispatch<React.SetStateAction<number>>;

  sneakers: SneakersType[];
  sneakersData: SneakersType[];
  setSneakersData: React.Dispatch<React.SetStateAction<SneakersType[]>>;

  isNavVisible: boolean;
  setIsNavVisible: React.Dispatch<React.SetStateAction<boolean>>;

  favoriteSneakers: SneakersType[];

  addedSneakers: SneakersType[];
  setAddedSneakers: React.Dispatch<React.SetStateAction<SneakersType[]>>;

  numberOfOrders: number;
  setNumberOfOrders: React.Dispatch<React.SetStateAction<number>>;

  isContentLoaded: boolean;

  isOrderConfirmed: boolean;
  setIsOrderConfirmed: React.Dispatch<React.SetStateAction<boolean>>;

  orders: SneakersType[];
  setOrders: React.Dispatch<React.SetStateAction<SneakersType[]>>;

  removeAddedSneaker: (id: number) => void;
  handleAddClick: (id: number) => void;
  handleFavoriteClick: (id: number) => void;
  handleCartClick: () => void;
  handleOrderConfirmation: (addedSneakers: SneakersType[]) => void;
  handleReturn: () => void;
}
