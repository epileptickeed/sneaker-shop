import React, { createContext, useContext, useEffect, useState } from 'react';
import ContextType from '../interfaces/interfaces';
import SneakersType from '../interfaces/interfaces';
import sneakers from '../data/sneakers.json';
import axios from 'axios';

const Context = createContext({} as ContextType);

type ChildrenType = {
  children: React.ReactNode;
};

export const MainContext = ({ children }: ChildrenType) => {
  const [cartPrice, setCartPrice] = useState(0);

  //если сервак упадет или ещё что-то случиться воткнуть в state (sneakers as SneakersType[])
  const [sneakersData, setSneakersData] = useState<SneakersType[]>([]);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    axios.get(`https://66324e21c51e14d695640a4c.mockapi.io/sneakers/sneakers`).then((response) => {
      setSneakersData(response.data);
      setIsContentLoaded(true);
    });
  }, []);

  const [favoriteSneakers, setFavoriteSneakers] = useState(sneakersData);
  const [addedSneakers, setAddedSneakers] = useState(sneakersData);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const [numberOfOrders, setNumberOfOrders] = useState(0);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

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
    const filteredSneakers = sneakersData.filter((item) => item.isFavorite === true);
    setFavoriteSneakers(filteredSneakers);

    const filteredAddedSneakers = sneakersData.filter((item) => item.isAdded === true);
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

  const [orders, setOrders] = useState<SneakersType[]>([]);

  //ПРИ НАЖАТИИ ДОБАВИТЬ В ПРОФИЛЬ КОРОЧЕ, И ЧТОБЫ КАРЗИНА ОЧИЩАЛАСЬ
  const handleOrderConfirmation = (addedSneakers: SneakersType[]) => {
    setIsOrderConfirmed(true);
    setNumberOfOrders((currentNumber) => currentNumber + 1);

    setOrders((currentOrders: any) => {
      return [
        ...currentOrders,
        {
          id: crypto.randomUUID(),
          orderNumber: numberOfOrders,
          sneakers: addedSneakers,
        },
      ];
    });

    const filteredAddedSneakers = sneakersData.map((item) => {
      return item.isAdded ? { ...item, isAdded: false } : item;
    });
    setSneakersData(filteredAddedSneakers);
  };

  const handleReturn = () => {
    setIsNavVisible(false);
    setIsOrderConfirmed(false);
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

    isContentLoaded,

    numberOfOrders,
    setNumberOfOrders,

    isOrderConfirmed,
    setIsOrderConfirmed,

    orders,
    setOrders,

    handleFavoriteClick,
    handleAddClick,
    handleCartClick,
    removeAddedSneaker,
    handleOrderConfirmation,
    handleReturn,

    id: 0,
    imageUrl: '',
    isAdded: false,
    isFavorite: false,
    title: '',
    favoriteId: null,
    sneakers: [],
    price: 0,
    orderNumber: 0,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const UseMainContext = () => {
  return useContext(Context);
};
