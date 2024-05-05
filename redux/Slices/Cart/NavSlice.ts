import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  value: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: false,
};

export const NavSlice = createSlice({
  name: "isNavVisible",
  initialState,
  reducers: {
    setIsNavVisible: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsNavVisible } = NavSlice.actions;

export default NavSlice.reducer;
