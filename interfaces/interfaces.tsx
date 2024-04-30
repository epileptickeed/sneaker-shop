export default interface SneakersType {
  id: number;
  imageUrl: string;
  isAdded: boolean;
  isFavorite: boolean;
  price: number;
  title: string;
  favoriteId: null;
}

export default interface ContextType {
  cartPrice: number;
  setCartPrice: React.Dispatch<React.SetStateAction<number>>;
  sneakers: SneakersType[];
  sneakersData: SneakersType[];
  isNavVisible: boolean;
  setIsNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSneakersData: React.Dispatch<React.SetStateAction<SneakersType[]>>;
  handleAddClick: (id: number) => void;
  handleFavoriteClick: (id: number) => void;
  handleCartClick: () => void;
  favoriteSneakers: SneakersType[];
  addedSneakers: SneakersType[];
  setAddedSneakers: React.Dispatch<React.SetStateAction<SneakersType[]>>;
  removeAddedSneaker: (id: number) => void;
}
