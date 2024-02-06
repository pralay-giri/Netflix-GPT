import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="w-[100%] container px-10">
            <h1 className="text-2xl font-bold py-5">{title}</h1>
            <div className="flex overflow-x-auto">
                <div className="flex gap-2">
                    {movies?.map((movie) => {
                        return <MovieCard movie={movie} key={movie.id} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
