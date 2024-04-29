import React, { createContext, useContext, useEffect, useState } from "react";
import ContextType from "../interfaces/interfaces";
import SneakersType from "../interfaces/interfaces";
import sneakers from "../data/sneakers.json";

const Context = createContext({} as ContextType);

type ChildrenType = {
  children: React.ReactNode;
};

export const MainContext = ({ children }: ChildrenType) => {
  const [price, setPrice] = useState(0);

  const [sneakersData, setSneakersData] = useState<SneakersType[]>(
    sneakers as SneakersType[]
  );

  const handleFavoriteClick = (id: number) => {
    const updatedSneakers: SneakersType[] = sneakersData.map((item) => {
      return item.id === id ? { ...item, isFavorite: !item.isFavorite } : item;
    });
    setSneakersData(updatedSneakers);
  };

  const handleAddClick = (id: number) => {
    const updatedSneakers: SneakersType[] = sneakersData.map((item) => {
      return item.id === id ? { ...item, isAdded: !item.isAdded } : item;
    });
    setSneakersData(updatedSneakers);
  };

  const [favoriteSneakers, setFavoriteSneakers] = useState(sneakersData);

  useEffect(() => {
    const filteredSneakers = sneakersData.filter(
      (item) => item.isFavorite === true
    );
    setFavoriteSneakers(filteredSneakers);
  }, [sneakersData]);

  const contextValue: ContextType = {
    price,
    setPrice,
    sneakersData,
    setSneakersData,
    handleFavoriteClick,
    handleAddClick,
    favoriteSneakers,
    id: 0,
    imageUrl: "",
    isAdded: false,
    isFavorite: false,
    title: "",
    favoriteId: null,
    sneakers: [],
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const UseMainContext = () => {
  return useContext(Context);
};
