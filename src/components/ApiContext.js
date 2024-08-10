import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { global } from "./GlobalContext";
import { useParams } from "react-router-dom";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const api = createContext();
const ApiContext = ({ children }) => {
    const { info } = useContext(global);
    const [movieToShow, setMovieToShow] = useState(null);
    // =============================
    const [popularMovies, setPopularMovies] = useState(null);
    const [trendingMovies, setTrendingMovies] = useState(null);
    const [topRatedMovies, setTopRatedMovies] = useState(null);
    const [upComingMovies, setUpComingMovies] = useState(null);
    const [searchingMovies, setSearchingMovies] = useState(null);
    // =============================
    const [popularState, setPopularState] = useState({
        page: 1,
        type: "first",
    });
    const [trendState, setTrendState] = useState({
        page: 1,
        type: "first",
    });
    const [topRatedState, setTopRatedState] = useState({
        page: 1,
        type: "first",
    });
    const [upComingState, setUpComingState] = useState({
        page: 1,
        type: "first",
    });
    const [searchState, setSearchState] = useState({
        word: "",
        page: 1,
        type: "first",
    });

    const getRandomMovie = async () => {
        // if (params.id === undefined) {
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
        // }
    };

    const setMovieById = (id) => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=4f5e80c01207f943fc88c878e8b72839&language=${info.language}`
            )
            .then((response) => {
                const movie = response.data;
                setMovieToShow(movie);
            })
            .catch((err) => {
                console.log(err, "Movie Id Not Valid ..");
                window.location.href = "/";
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

    const getTopRatedMovies = async (pageNumber) => {
        //
        axios
            .get(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=4f5e80c01207f943fc88c878e8b72839&language=${info.language}&page=${pageNumber}`
            )
            .then((response) => {
                setTopRatedMovies(response.data);
            });
    };

    const getUpComingMovies = async (pageNumber) => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=4f5e80c01207f943fc88c878e8b72839&language=${info.language}&page=${pageNumber}`
            )
            .then((response) => {
                setUpComingMovies(response.data);
            });
    };

    const getSearchingMovies = async (pageNumber, word) => {
        //
        axios
            //
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=4f5e80c01207f943fc88c878e8b72839&query=${word}&include_adult=false&language=${info.language}&page=${pageNumber}`
            )
            .then((response) => {
                setSearchingMovies(response.data);
            });
    };

    useEffect(() => {
        movieToShow !== null && setMovieById(movieToShow.id);
    }, [info.language]);

    useEffect(() => {
        getPopularMovies(popularState.page);
    }, [info.language, popularState.page]);

    useEffect(() => {
        getTrendingMovies(trendState.page);
    }, [info.language, trendState.page]);

    useEffect(() => {
        getTopRatedMovies(topRatedState.page);
    }, [info.language, topRatedState.page]);

    useEffect(() => {
        getUpComingMovies(upComingState.page);
    }, [info.language, upComingState.page]);

    useEffect(() => {
        if (searchState.word !== "") {
            getSearchingMovies(searchState.page, searchState.word);
        } else {
            setSearchingMovies(null);
        }
    }, [info.language, searchState.page, searchState.word, searchState.type]);

    return (
        <api.Provider
            value={{
                movieToShow,
                popularMovies,
                popularState,
                trendingMovies,
                trendState,
                topRatedMovies,
                topRatedState,
                upComingMovies,
                upComingState,
                searchingMovies,
                searchState,
                setPopularState,
                setTrendState,
                setTopRatedState,
                setUpComingState,
                setSearchState,
                setMovieById,
                getRandomMovie,
                getSearchingMovies,
            }}
        >
            {children}
        </api.Provider>
    );
};

export { ApiContext, api };
