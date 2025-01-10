import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/FavoriteSlice";

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
