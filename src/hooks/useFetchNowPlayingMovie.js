import axios from "axios";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../store/movieSlice";
import { API_OPTION, NOW_PLAYING_MOVIE_API_LINK } from "../utils/constant";
import { useEffect } from "react";

export const useFetchNowPlayingMovie = (page = 1) => {
    const dispatch = useDispatch();

    const getNowPlayingMovie = async () => {
        try {
            const responce = await axios.get(
                NOW_PLAYING_MOVIE_API_LINK + `?&page=${page}`,
                API_OPTION
            );

            dispatch(addNowPlayingMovie(responce?.data?.results));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getNowPlayingMovie();
    }, [page]);
};
