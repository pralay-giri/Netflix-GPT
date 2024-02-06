import React from "react";
import GptInputBox from "./GptInputBox";
import GptSearchResult from "./GptSearchResult";
import { BACKGROUND_IMGAE } from "../utils/constant";

const GptSearchPage = () => {
    return (
        <div className="text-white pt-32 min-h-[80vh] w-10/12 mx-auto">
            <div>
                <div className="fixed top-0 left-0 z-10 w-[100%] h-[100%] bg-black bg-opacity-75"></div>
                <img
                    src={BACKGROUND_IMGAE}
                    alt="bgimage"
                    className="fixed top-0 left-0 object-cover object-center"
                />
            </div>
            <GptInputBox />
            <GptSearchResult />
        </div>
    );
};

export default GptSearchPage;
