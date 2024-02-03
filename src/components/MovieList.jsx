import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="w-[100%] container px-10">
            <h1 className="text-2xl font-bold py-5">{title}</h1>
            <div className="flex overflow-x-auto">
                <div className="flex gap-5">
                    {movies?.map((movie) => (
                        <MovieCard
                            movie={movie}
                            key={movie.id}
                            className="w-64 px-4 cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
