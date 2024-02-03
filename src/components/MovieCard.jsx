import React from "react";
import { POSTER_CDN } from "../utils/constant";

const MovieCard = ({ movie }) => {
    return (
        <div className="w-48">
            <img
                src={POSTER_CDN + movie.poster_path}
                alt={movie.original_title}
            />
        </div>
    );
};

export default MovieCard;
