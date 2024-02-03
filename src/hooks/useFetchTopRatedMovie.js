import axios from "axios";
import { API_OPTION, TOP_RATED_MOVIE_API_LINK } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../store/movieSlice";

const useFetchTopRatedMovie = (page = 1) => {
    const dispatch = useDispatch();
    const fetchData = async (page) => {
        try {
            const responce = await axios(
                TOP_RATED_MOVIE_API_LINK + `?page${page}`,
                API_OPTION
            );
            console.log(responce.data?.results);
            dispatch(addTopRatedMovie(responce?.data?.results));
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData(page);
    }, [page]);
};

export default useFetchTopRatedMovie;
