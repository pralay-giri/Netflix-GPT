import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movieSlice,
    },
});

export default appStore;
