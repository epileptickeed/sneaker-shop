import React, { createContext, useContext, useEffect, useState } from "react";
import ContextType from "../interfaces/interfaces";
import SneakersType from "../interfaces/interfaces";
import sneakers from "../data/sneakers.json";

const Context = createContext({} as ContextType);

type ChildrenType = {
  children: React.ReactNode;
};

export const MainContext = ({ children }: ChildrenType) => {
  const [cartPrice, setCartPrice] = useState(0);

  const [sneakersData, setSneakersData] = useState<SneakersType[]>(
    sneakers as SneakersType[]
  );

  const [favoriteSneakers, setFavoriteSneakers] = useState(sneakersData);
  const [addedSneakers, setAddedSneakers] = useState(sneakersData);
  const [isNavVisible, setIsNavVisible] = useState(false);

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

  //в закладки

  useEffect(() => {
    const filteredSneakers = sneakersData.filter(
      (item) => item.isFavorite === true
    );
    setFavoriteSneakers(filteredSneakers);

    const filteredAddedSneakers = sneakersData.filter(
      (item) => item.isAdded === true
    );
    setAddedSneakers(filteredAddedSneakers);
  }, [sneakersData]);

  useEffect(() => {
    let allPrices: number[] = [];
    addedSneakers.forEach((item) => {
      allPrices.push(item.price);
    });
    const result = allPrices.reduce((acc, curval) => acc + curval, 0);
    setCartPrice(result);
  }, [addedSneakers]);

  const handleCartClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  const removeAddedSneaker = (id: number) => {
    const filteredAddedSneakers = sneakersData.map((item) => {
      return item.id === id ? { ...item, isAdded: !item.isAdded } : item;
    });
    setSneakersData(filteredAddedSneakers);
  };

  const contextValue: ContextType = {
    cartPrice,
    setCartPrice,
    sneakersData,
    setSneakersData,
    favoriteSneakers,
    addedSneakers,
    setAddedSneakers,
    isNavVisible,
    setIsNavVisible,
    handleFavoriteClick,
    handleAddClick,
    handleCartClick,
    removeAddedSneaker,

    id: 0,
    imageUrl: "",
    isAdded: false,
    isFavorite: false,
    title: "",
    favoriteId: null,
    sneakers: [],
    price: 0,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const UseMainContext = () => {
  return useContext(Context);
};
