import axios from "axios";
import { useEffect, useRef } from "react";
import { API_OPTION, SEARCH_API } from "../utils/constant";
import { addSearchedMovies } from "../store/gptSlice";
import { useDispatch } from "react-redux";

const useSearch = (timePreiod) => {
    const dispatch = useDispatch();
    const timer = useRef(null);

    const fetchData = async (query, PAGE) => {
        if (!query.trim().length) {
            return;
        }

        try {
            const responce = await axios(
                SEARCH_API + `query=${query}&page=${PAGE}`,
                API_OPTION
            );
            dispatch(
                addSearchedMovies({
                    query,
                    movies: responce?.data?.results,
                    page: responce?.data?.page,
                })
            );
        } catch (error) {}
    };

    const debouncing = (query, PAGE) => {
        clearTimeout(timer.current);
        timer.current = window.setTimeout(() => {
            fetchData(query, PAGE);
        }, timePreiod);
    };

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    return debouncing;
};

export default useSearch;
