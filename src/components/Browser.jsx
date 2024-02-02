import React from "react";
import Header from "./Header";
import { useFetchNowPlayingMovie } from "../hooks/useFetchNowPlayingMovie";
import MainContainer from "./MainContainer";

const Browser = () => {
    useFetchNowPlayingMovie();
    return (
        <div>
            <Header />
            <MainContainer />
        </div>
    );
};

export default Browser;
