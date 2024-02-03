import axios from "axios";
import { API_OPTION, POPULER_PLAYING_MOVIE_API_LINK } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopulerMovie } from "../store/movieSlice";

const useFetchPopulerMovie = (page = 1) => {
    const dispatch = useDispatch();
    const fetchData = async (page) => {
        try {
            const responce = await axios(
                POPULER_PLAYING_MOVIE_API_LINK + `?page${page}`,
                API_OPTION
            );
            console.log(responce.data?.results);
            dispatch(addPopulerMovie(responce?.data?.results));
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData(page);
    }, [page]);
};

export default useFetchPopulerMovie;
