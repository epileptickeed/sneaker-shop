import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  sneakers: [],
  error: "",
};

export const fetchSneakers = createAsyncThunk(
  `sneakers/fetchSneakers`,
  async () => {
    return axios
      .get(`https://705099b380a00023.mokky.dev/sneakers`)
      .then((response) => response.data);
  }
);

const sneakersDataSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {},
});

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { Sneakers } from "./type";
// import pickBy from "lodash";

// export const fetchPizzas = createAsyncThunk(
//   "sneakers/fetchSneakers",
//   async (params) => {
//     const { id, price, title, isAdded, isFavorite, favoriteId } = params;
//     console.log(params, 4444);
//     const { data } = await axios.get<Sneakers[]>(
//       `https://66324e21c51e14d695640a4c.mockapi.io/sneakers/sneakers`,
//       {
//         params: pickBy(
//           {
//             page: currentPage,
//             limit: 4,
//             category,
//             sortBy,
//             order,
//             search,
//           },
//           identity
//         ),
//       }
//     );

//     return data;
//   }
// );
