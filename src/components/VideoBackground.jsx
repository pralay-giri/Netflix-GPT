import React from "react";
import { useSelector } from "react-redux";
import useMovieTraler from "../hooks/useMovieTraler";

const VideoBackground = ({ movieId }) => {
    const trailer = useSelector((state) => state.movieSlice.movieTraler);
    useMovieTraler(movieId);
    return (
        <div className="">
            <iframe
                className="w-full aspect-video absolute pointer-events-none"
                src={
                    `https://www.youtube.com/embed/${trailer?.key}` +
                    "?autoplay=1&mute=1&controls=0&loop=1"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
