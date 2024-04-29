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
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  sneakers: SneakersType[];
  sneakersData: SneakersType[];
  setSneakersData: React.Dispatch<React.SetStateAction<SneakersType[]>>;
  handleAddClick: (id: number) => void;
  handleFavoriteClick: (id: number) => void;
  favoriteSneakers: SneakersType[];
}
