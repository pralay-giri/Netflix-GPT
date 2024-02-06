import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTraler } from "../store/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const useMovieTraler = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async (movieId) => {
        try {
            const responce = await axios(
                `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                API_OPTION
            );

            const tralers = responce?.data?.results?.filter(
                (video) => video.type === "Trailer"
            );

            const selectedTraler = tralers.length
                ? tralers[0]
                : responce?.data?.results[0];

            dispatch(addMovieTraler(selectedTraler));
        } catch (error) {}
    };

    useEffect(() => {
        getMovieVideos(movieId);
    }, []);
};

export default useMovieTraler;
