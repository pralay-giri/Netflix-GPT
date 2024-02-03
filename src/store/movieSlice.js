import { createSlice } from "@reduxjs/toolkit";

const moviSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        movieTraler: null,
        populerMovie: null,
        topRatedMovie: null,
        upcommingMovie: null,
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        addMovieTraler: (state, action) => {
            state.movieTraler = action.payload;
        },
        addPopulerMovie: (state, action) => {
            state.populerMovie = action.payload;
        },

        addTopRatedMovie: (state, action) => {
            state.topRatedMovie = action.payload;
        },

        addUpcommingMovie: (state, action) => {
            state.upcommingMovie = action.payload;
        },
    },
});

export const {
    addNowPlayingMovie,
    addMovieTraler,
    addPopulerMovie,
    addTopRatedMovie,
    addUpcommingMovie,
} = moviSlice.actions;
export default moviSlice.reducer;
