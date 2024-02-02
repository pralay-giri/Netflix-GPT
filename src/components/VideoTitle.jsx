import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, describtion }) => {
    return (
        <div className="absolute z-10 pl-10 flex  flex-col justify-center pt-40 text-white w-full aspect-video bg-gradient-to-r from-black">
            <h1 className="text-4xl py-2 font-bold">{title}</h1>
            <p className="w-2/6 text-lg py-2 opacity-90">{describtion}</p>
            <div className="flex items-center gap-2  *:flex *:justify-evenly *:items-center *:px-4 *:py-2 *:gap-2 *:rounded-sm *:bg-opacity-80 *:text-white">
                <button className="bg-red-600 hover:bg-opacity-90">
                    <FaPlay /> play
                </button>
                <button className="bg-gray-500 hover:bg-opacity-90">
                    <BsInfoCircle /> info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
