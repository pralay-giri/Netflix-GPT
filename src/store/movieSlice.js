import { createSlice } from "@reduxjs/toolkit";

const moviSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        movieTraler: null,
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        addMovieTraler: (state, action) => {
            state.movieTraler = action.payload;
        },
    },
});

export const { addNowPlayingMovie, addMovieTraler } = moviSlice.actions;
export default moviSlice.reducer;
