import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const updatedFavorites = [...state.favorite, action.payload];
      state.favorite = updatedFavorites;
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    },
    removeFavorite: (state, action) => {
      const updatedFavorites = state.favorite.filter(
        (item) => item._id !== action.payload._id
      );
      state.favorite = updatedFavorites;
      if (updatedFavorites.length === 0) {
        localStorage.removeItem("favorites");
      } else {
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
