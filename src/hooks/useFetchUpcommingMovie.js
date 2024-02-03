import axios from "axios";
import { API_OPTION, UPCOMMING_MOVIE_API_LINK } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcommingMovie } from "../store/movieSlice";

const useFetchUpcommingMovie = (page = 1) => {
    const dispatch = useDispatch();
    const fetchData = async (page) => {
        try {
            const responce = await axios(
                UPCOMMING_MOVIE_API_LINK + `?page${page}`,
                API_OPTION
            );
            console.log(responce.data?.results);
            dispatch(addUpcommingMovie(responce?.data?.results));
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData(page);
    }, [page]);
};

export default useFetchUpcommingMovie;
