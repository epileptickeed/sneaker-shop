import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./Slices/Cart/NavSlice";
import CartSlice from "./Slices/Cart/CartSlice";
import OrderSlice from "./Slices/Orders/OrderSlices";
import SneakerSlice from "./Slices/Sneakers/SneakerSlice";

// ...

export const store = configureStore({
  reducer: {
    isNavVisible: NavSlice,
    cart: CartSlice,
    order: OrderSlice,
    sneakers: SneakerSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
