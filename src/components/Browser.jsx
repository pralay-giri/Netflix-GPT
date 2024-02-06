import React from "react";
import Header from "./Header";
import { useFetchNowPlayingMovie } from "../hooks/useFetchNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryMovieListContainer from "./SecondaryMovieListContainer";
import useFetchPopulerMovie from "../hooks/useFetchPopulerMovie";
import useFetchTopRatedMovie from "../hooks/useFetchTopRatedMovie";
import useFetchUpcommingMovie from "../hooks/useFetchUpcommingMovie";
import Footer from "./Footer";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browser = () => {
    const toogleGptPageView = useSelector(
        (state) => state.gptSlice.toogleGptPageView
    );
    useFetchNowPlayingMovie();
    useFetchPopulerMovie();
    useFetchTopRatedMovie();
    useFetchUpcommingMovie();

    return (
        <div className="relative bg-black">
            <Header />
            {toogleGptPageView ? (
                <GptSearchPage />
            ) : (
                <React.Fragment>
                    <MainContainer />
                    <SecondaryMovieListContainer />
                </React.Fragment>
            )}
            <Footer />
        </div>
    );
};

export default Browser;
