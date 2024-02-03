import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((state) => state.movieSlice.nowPlayingMovie);
    if (!movies) return;

    const { original_title, overview, id } =
        movies[Math.floor(Math.random() * movies.length)];

    return (
        <div>
            <VideoTitle title={original_title} describtion={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;
