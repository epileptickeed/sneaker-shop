import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SneakersType from "../../../interfaces/interfaces";
import axios from "axios";

interface SneakersTypeProps {
  sneakersData: SneakersType[];
  status: string;
  searchValue: string;
  favoriteSneakers: SneakersType[];
  addedSneakers: SneakersType[];
}

const initialState: SneakersTypeProps = {
  sneakersData: [],
  status: "loading",
  searchValue: "",
  favoriteSneakers: [],
  addedSneakers: [],
};

export const fetchSneakers = createAsyncThunk(
  "sneakers/fetchSneakersStatus",
  async () => {
    const { data } = await axios.get(
      `https://705099b380a00023.mokky.dev/sneakers`
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
    setFavoriteSneakers: (state, action) => {
      state.favoriteSneakers = action.payload;
    },
    setAddedSneakers: (state, action) => {
      state.addedSneakers = action.payload;
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

export const {
  setSneakersData,
  setSearchValue,
  setFavoriteSneakers,
  setAddedSneakers,
} = SneakerSlice.actions;
export default SneakerSlice.reducer;
