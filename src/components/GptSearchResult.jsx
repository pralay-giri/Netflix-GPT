import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptSearchResult = () => {
    const movieList = useSelector((state) => state.gptSlice.searchInfo.movies);
    if (!movieList.length) return;
    return (
        <div className="relative z-10 mb-10 p-5">
            <MovieList title={"searched result's"} movies={movieList} />
        </div>
    );
};

export default GptSearchResult;
