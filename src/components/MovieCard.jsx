import React from "react";
import { POSTER_CDN } from "../utils/constant";

const MovieCard = (props) => {
    const { movie } = props;
    if (!movie.poster_path) return;

    return (
        <div className="w-64 px-4 cursor-pointer">
            <img
                src={POSTER_CDN + movie.poster_path}
                alt={movie.original_title}
            />
        </div>
    );
};

export default MovieCard;
