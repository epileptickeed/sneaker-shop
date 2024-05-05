import React, { createContext, useContext, useEffect } from "react";
import ContextType from "../interfaces/interfaces";
import SneakersType from "../interfaces/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import { setIsNavVisible } from "../redux/Slices/Cart/NavSlice";
import { setCartPrice } from "../redux/Slices/Cart/CartSlice";

import { sneakersSelector } from "../redux/Slices/Sneakers/selector";
import { orderSelector } from "../redux/Slices/Orders/selector";

import {
  setIsOrderConfirmed,
  setNumberOfOrders,
  setOrders,
} from "../redux/Slices/Orders/OrderSlices";
import {
  setSneakersData,
  fetchSneakers,
  setFavoriteSneakers,
  setAddedSneakers,
} from "../redux/Slices/Sneakers/SneakerSlice";

const Context = createContext({} as ContextType);

type ChildrenType = {
  children: React.ReactNode;
};

export const MainContext = ({ children }: ChildrenType) => {
  const dispatch = useDispatch<AppDispatch>();

  const navVisible = useSelector(
    (state: RootState) => state.isNavVisible.value
  );
  const cartPrice = useSelector((state: RootState) => state.cart.cartPrice);
  const { isOrderConfirmed, numberOfOrders, orders } =
    useSelector(orderSelector);
  const { sneakersData, status, favoriteSneakers, addedSneakers, searchValue } =
    useSelector(sneakersSelector);

  useEffect(() => {
    dispatch(fetchSneakers());
  }, []);

  const handleFavoriteClick = (id: number) => {
    const updatedSneakers: SneakersType[] = sneakersData.map((item) => {
      return item.id === id ? { ...item, isFavorite: !item.isFavorite } : item;
    });
    dispatch(setSneakersData(updatedSneakers));
  };

  const handleAddClick = (id: number) => {
    const updatedSneakers: SneakersType[] = sneakersData.map((item) => {
      return item.id === id ? { ...item, isAdded: !item.isAdded } : item;
    });
    dispatch(setSneakersData(updatedSneakers));
  };

  //в закладки
  useEffect(() => {
    const filteredFavoriteSneakers = sneakersData.filter(
      (item) => item.isFavorite === true
    );
    dispatch(setFavoriteSneakers(filteredFavoriteSneakers));

    const filteredAddedSneakers = sneakersData.filter(
      (item) => item.isAdded === true
    );
    dispatch(setAddedSneakers(filteredAddedSneakers));
  }, [sneakersData]);

  useEffect(() => {
    let allPrices: number[] = [];
    addedSneakers.forEach((item) => {
      allPrices.push(item.price);
    });
    const result = allPrices.reduce((acc, curval) => acc + curval, 0);
    dispatch(setCartPrice(result));
  }, [addedSneakers]);

  const removeAddedSneaker = (id: number) => {
    const filteredAddedSneakers = sneakersData.map((item) => {
      return item.id === id ? { ...item, isAdded: false } : item;
    });
    dispatch(setSneakersData(filteredAddedSneakers));
  };

  //ПРИ НАЖАТИИ ДОБАВИТЬ В ПРОФИЛЬ КОРОЧЕ, И ЧТОБЫ КАРЗИНА ОЧИЩАЛАСЬ
  const handleOrderConfirmation = (addedSneakers: SneakersType[]) => {
    dispatch(setIsOrderConfirmed(true));
    dispatch(setNumberOfOrders(numberOfOrders));

    dispatch(setOrders(addedSneakers));

    const filteredAddedSneakers = sneakersData.map((item) => {
      return item.isAdded ? { ...item, isAdded: false } : item;
    });
    dispatch(setSneakersData(filteredAddedSneakers));
  };

  const handleReturn = () => {
    dispatch(setIsNavVisible(false));
    dispatch(setIsOrderConfirmed(false));
  };

  const contextValue: ContextType = {
    cartPrice,
    sneakersData,
    status,
    favoriteSneakers,
    addedSneakers,
    navVisible,
    numberOfOrders,
    isOrderConfirmed,
    orders,
    searchValue,

    handleFavoriteClick,
    handleAddClick,
    removeAddedSneaker,
    handleOrderConfirmation,
    handleReturn,

    id: 0,
    imageUrl: "",
    isAdded: false,
    isFavorite: false,
    title: "",
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
