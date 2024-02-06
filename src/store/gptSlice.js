import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSlice",
    initialState: {
        toogleGptPageView: false,
        searchInfo: {
            page: 0,
            query: "",
            movies: [],
        },
    },
    reducers: {
        toogleGptPage: (state) => {
            state.toogleGptPageView = !state.toogleGptPageView;
        },
        addSearchedMovies: (state, action) => {
            state.searchInfo.movies = action.payload.movies;
            state.searchInfo.page = action.payload.page;
            state.searchInfo.query = action.payload.query;
        },
    },
});

export const { toogleGptPage, addSearchedMovies } = gptSlice.actions;
export default gptSlice.reducer;
