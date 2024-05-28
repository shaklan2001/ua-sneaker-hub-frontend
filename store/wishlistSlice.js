import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "favourites",
    initialState: {
        favouritesItems: [],
    },
    reducers: {
        addToFavourites: (state, action) => {
            const item = state.favouritesItems.find(
                (p) => p.id === action.payload.id
            );
            if (item) {
                state.favouritesItems = state.favouritesItems.filter(
                    (p) => p.id !== action.payload.id
                );
            } else {
                state.favouritesItems.push({ ...action.payload });
            }
        },

        removeFromFavourites: (state, action) => {
            state.favouritesItems = state.favouritesItems.filter(
                (p) => p.id !== action.payload.id
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToFavourites, removeFromFavourites } = wishlistSlice.actions;

export default wishlistSlice.reducer;