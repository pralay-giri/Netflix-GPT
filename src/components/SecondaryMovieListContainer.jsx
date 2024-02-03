import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryMovieListContainer = () => {
    const movies = useSelector((state) => state.movieSlice);
    return (
        <div className="text-red-50 relative z-10 -my-56 bg-gradient-to-t from-black">
            <MovieList title={"Now playing"} movies={movies.nowPlayingMovie} />
            <MovieList title={"Popular"} movies={movies.populerMovie} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovie} />
            <MovieList title={"Upcomming"} movies={movies.upcommingMovie} />
        </div>
    );
};

export default SecondaryMovieListContainer;
