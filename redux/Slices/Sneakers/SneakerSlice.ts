import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SneakersType from "../../../interfaces/interfaces";
import axios from "axios";

interface SneakersTypeProps {
  sneakersData: SneakersType[];
  status: string;
  searchValue: string;
}

const initialState: SneakersTypeProps = {
  sneakersData: [],
  status: "loading",
  searchValue: "",
};

export const fetchSneakers = createAsyncThunk(
  "sneakers/fetchSneakersStatus",
  async () => {
    const { data } = await axios.get(
      `https://66324e21c51e14d695640a4c.mockapi.io/sneakers/sneakers`
    );
    return data;
  }
);

const SneakerSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    setSneakersData: (state, action) => {
      state.sneakersData = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSneakers.pending, (state) => {
        state.status = "loading";
        state.sneakersData = [];
      })
      .addCase(fetchSneakers.fulfilled, (state, action) => {
        state.sneakersData = action.payload;
        state.status = "success";
      })
      .addCase(fetchSneakers.rejected, (state) => {
        state.status = "error";
        state.sneakersData = [];
      });
  },
});

export const { setSneakersData, setSearchValue } = SneakerSlice.actions;
export default SneakerSlice.reducer;
