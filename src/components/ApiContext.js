import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { global } from "./GlobalContext";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const api = createContext();
const ApiContext = ({ children }) => {
    const { info } = useContext(global);
    const [movieToShow, setMovieToShow] = useState(null);
    const [trendingMovies, setTrendingMovies] = useState(null);
    const [popularMovies, setPopularMovies] = useState(null);
    // =============================
    const [popularState, setPopularState] = useState({
        page: 1,
        type: "first",
    });
    const [trendState, setTrendState] = useState({
        page: 1,
        type: "first",
    });

    const getRandomMovie = async () => {
        axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=4f5e80c01207f943fc88c878e8b72839&language=${info.language}&page=1`
            )
            .then((response) => {
                let movieNum = getRandomInt(
                    0,
                    response.data.results.length - 1
                );
                const movie = response.data.results[movieNum];
                setMovieById(movie.id);
            });
    };

    const setMovieById = (id) => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=4f5e80c01207f943fc88c878e8b72839&language=${info.language}`
            )
            .then((response) => {
                const movie = response.data;
                setMovieToShow(movie);
            });
    };

    const getTrendingMovies = async (pageNumber) => {
        axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=4f5e80c01207f943fc88c878e8b72839&language=${info.language}&page=${pageNumber}`
            )
            .then((response) => {
                setTrendingMovies(response.data);
            });
    };

    const getPopularMovies = async (pageNumber) => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=4f5e80c01207f943fc88c878e8b72839&language=${info.language}&page=${pageNumber}`
            )
            .then((response) => {
                setPopularMovies(response.data);
            });
    };

    useEffect(() => {
        getRandomMovie();
    }, []);

    useEffect(() => {
        getPopularMovies(popularState.page);
    }, [info.language, popularState.page]);

    useEffect(() => {
        getTrendingMovies(trendState.page);
    }, [info.language, trendState.page]);

    useEffect(() => {
        movieToShow !== null && setMovieById(movieToShow.id);
    }, [info.language]);

    return (
        <api.Provider
            value={{
                movieToShow,
                trendingMovies,
                popularMovies,
                popularState,
                trendState,
                setTrendState,
                setPopularState,
                setMovieById,
            }}
        >
            {children}
        </api.Provider>
    );
};

export { ApiContext, api };
