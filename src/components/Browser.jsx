import React from "react";
import Header from "./Header";
import { useFetchNowPlayingMovie } from "../hooks/useFetchNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryMovieListContainer from "./SecondaryMovieListContainer";
import useFetchPopulerMovie from "../hooks/useFetchPopulerMovie";
import useFetchTopRatedMovie from "../hooks/useFetchTopRatedMovie";
import useFetchUpcommingMovie from "../hooks/useFetchUpcommingMovie";

const Browser = () => {
    useFetchNowPlayingMovie();
    useFetchPopulerMovie();
    useFetchTopRatedMovie();
    useFetchUpcommingMovie();

    return (
        <div className="relative bg-black">
            <Header />
            <MainContainer />
            <SecondaryMovieListContainer />
        </div>
    );
};

export default Browser;
