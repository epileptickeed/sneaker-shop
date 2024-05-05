import { createSlice } from "@reduxjs/toolkit";

interface CartPriceType {
  cartPrice: number;
}

const initialState: CartPriceType = {
  cartPrice: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartPrice(state, action) {
      state.cartPrice = action.payload;
    },
  },
});

export const { setCartPrice } = CartSlice.actions;
export default CartSlice.reducer;
