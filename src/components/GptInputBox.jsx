import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import useSearch from "../hooks/useSearch";
import { useSelector } from "react-redux";

const GptInputBox = () => {
    // const searchPage = useSelector((state) => state.gptSlice.searchInfo.page);
    const [searchValue, setSearchValue] = useState("");
    // coustom hook for debouncing
    const handleSearchUsingDebouncing = useSearch(300);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
        handleSearchUsingDebouncing(searchValue, 1);
    };

    const handleSearch = () => {
        handleSearchUsingDebouncing(searchValue, 1);
    };

    return (
        <form>
            <div className="relative z-10 w-8/12 mx-auto flex h-12 my-10 p-2 bg-[#141530] text-white rounded-lg focus-within:outline focus-within:outline-1  focus-within:transition-all group">
                <GoSearch
                    className="text-3xl text-gray-500 mx-1 group-focus-within:text-white transition-colors cursor-pointer hover:text-white"
                    onClick={handleSearch}
                />
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    placeholder="let's search your favorite movies"
                    className="w-full bg-transparent outline-none text-gray-300 mx-1"
                />
            </div>
        </form>
    );
};

export default GptInputBox;
