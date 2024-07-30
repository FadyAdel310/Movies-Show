import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { global } from "./GlobalContext";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function detectLanguage(text) {
    // Regular expression to match Arabic characters
    var arabicPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;

    // Regular expression to match English characters
    var englishPattern = /[a-zA-Z]/;

    // Check if the text contains Arabic characters
    if (arabicPattern.test(text)) {
        return 1; // Arabic detected
    } else if (englishPattern.test(text)) {
        return 0; // English detected
    } else {
        return -1; // Neither Arabic nor English detected (could be another language or symbols)
    }
}

const api = createContext();
const ApiContext = ({ children }) => {
    const { info } = useContext(global);

    const [movieToShow, setMovieToShow] = useState(null);
    const [trendingMovies, setTrendingMovies] = useState(null);
    const [popularMovies, setPopularMovies] = useState(null);

    const getRandomMovie = async () => {
        let pageNum = getRandomInt(0, 500);
        axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=4f5e80c01207f943fc88c878e8b72839&language=${info.language}&page=${pageNum}`
            )
            .then((response) => {
                let movieNum = getRandomInt(
                    0,
                    response.data.results.length - 1
                );
                const movie = response.data.results[movieNum];
                setMovieToShow(movie);
            });
    };

    const getTrendingMovies = async () => {
        axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=4f5e80c01207f943fc88c878e8b72839&language=${info.language}&page=1`
            )
            .then((response) => {
                setTrendingMovies(response.data);
            });
    };

    const getPopularMovies = async () => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=4f5e80c01207f943fc88c878e8b72839&language=${info.language}&page=1`
            )
            .then((response) => {
                setPopularMovies(response.data);
            });
    };

    useEffect(() => {
        getPopularMovies();
    }, [info.language]);

    useEffect(() => {
        getTrendingMovies();
    }, [info.language]);

    useEffect(() => {
        getRandomMovie();
    }, [info.language]);

    return (
        <api.Provider value={{ movieToShow, trendingMovies, popularMovies }}>
            {children}
        </api.Provider>
    );
};

export { ApiContext, api };
