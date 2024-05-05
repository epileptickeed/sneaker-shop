import { createSlice } from "@reduxjs/toolkit";
import SneakersType from "../../../interfaces/interfaces";

interface OrderTypeItems {
  isOrderConfirmed: boolean;
  numberOfOrders: number;
  orders: OrdersType[];
}

export type OrdersType = {
  id: string;
  orderNumber: number;
  sneakers: SneakersType[];
};

const initialState: OrderTypeItems = {
  isOrderConfirmed: false,
  numberOfOrders: 0,
  orders: [],
};

export const OrderSlise = createSlice({
  name: "order",
  initialState,
  reducers: {
    setIsOrderConfirmed: (state, action) => {
      state.isOrderConfirmed = action.payload;
    },
    setNumberOfOrders: (state, action) => {
      state.numberOfOrders = action.payload + 1;
    },
    setOrders: (state, action) => {
      state.orders.push({
        id: crypto.randomUUID(),
        orderNumber: state.numberOfOrders,
        sneakers: action.payload,
      });
    },
  },
});

export const { setIsOrderConfirmed, setNumberOfOrders, setOrders } =
  OrderSlise.actions;
export default OrderSlise.reducer;
