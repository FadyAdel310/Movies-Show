import {
    faFire,
    faHourglassStart,
    faRibbon,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import "./page.css";
import CustomPagination from "./CustomPagination";
import { api } from "./ApiContext";
import { global } from "./GlobalContext";
import noImgPath from "../assets/No-Image.png";
import { Fade } from "react-awesome-reveal";

const FullPageViewer = ({ title }) => {
    const { info } = useContext(global);
    const {
        setMovieById,
        popularMovies,
        popularState,
        trendingMovies,
        trendState,
        topRatedMovies,
        topRatedState,
    } = useContext(api);

    let customState = null;
    let customMovies = null;

    if (title === "popular") {
        customState = popularState;
        customMovies = popularMovies;
    } else if (title === "trending") {
        customState = trendState;
        customMovies = trendingMovies;
    } else if (title === "topRated") {
        customState = topRatedState;
        customMovies = topRatedMovies;
    } else if (title === "upComing") {
        customState = trendState;
        customMovies = trendingMovies;
    }

    const movies = [];
    let start = 0;
    let end = 0;
    if (customState.type === "first") {
        start = 0;
        end = 10;
    } else if (customState.type === "last") {
        start = 10;
        end = 20;
    }

    const handleMovieClick = (id) => {
        setMovieById(id);
        window.scrollTo({ top: 0 });
    };

    if (customMovies !== null) {
        const baseImgUrl = "https://image.tmdb.org/t/p/w500";
        for (let i = start; i < end; i++) {
            if (customMovies.results[i] === undefined) {
                continue;
            }
            let customPath = `${baseImgUrl}${customMovies.results[i].poster_path}`;
            if (
                customMovies.results[i].poster_path === null ||
                customMovies.results[i].poster_path === ""
            ) {
                customPath = noImgPath;
            }
            const mov = (
                <div
                    key={customMovies.results[i].id}
                    custom-id={customMovies.results[i].id}
                    className="col-10 col-sm-4 col-md-3 col-lg-2"
                    onClick={() => handleMovieClick(customMovies.results[i].id)}
                >
                    <Fade>
                        <div className="movie-card">
                            <img src={customPath} />
                            <h4>
                                {customMovies.results[i].title !== ""
                                    ? customMovies.results[i].title
                                    : info.language === "en-US"
                                    ? "No Title"
                                    : "لا يوجد عنوان"}
                            </h4>
                        </div>
                    </Fade>
                </div>
            );
            movies.push(mov);
        }
    }

    let customTitle = null;
    if (title === "popular") {
        customTitle = { en: "Popular", ar: "الشائع" };
    } else if (title === "trending") {
        customTitle = { en: "Trending", ar: "المحتوي الرايج" };
    } else if (title === "topRated") {
        customTitle = { en: "Top Rated", ar: "الأعلى تقييما" };
    } else if (title === "upComing") {
        customTitle = { en: "Up Coming", ar: "القادم" };
    }

    let customIcon = null;
    if (title === "popular") {
        customIcon = (
            <FontAwesomeIcon
                icon={faRibbon}
                style={{ color: "var(--secondary-blue)" }}
            />
        );
    } else if (title === "trending") {
        customIcon = (
            <FontAwesomeIcon icon={faFire} style={{ color: "var(--yellow)" }} />
        );
    } else if (title === "topRated") {
        customIcon = (
            <FontAwesomeIcon icon={faStar} style={{ color: "var(--yellow)" }} />
        );
    } else if (title === "upComing") {
        customIcon = (
            <FontAwesomeIcon
                icon={faHourglassStart}
                style={{ color: "var(--secondary-blue)" }}
            />
        );
    }

    return (
        <div className="page" id={title}>
            <div className="container">
                {info.language === "en-US" ? (
                    <Heading title={customTitle.en} icon={customIcon} />
                ) : (
                    <Heading
                        dir={"rtl"}
                        title={customTitle.ar}
                        icon={customIcon}
                    />
                )}
                <span className="separetor"></span>
                <div className="movies">
                    <div className="row justify-content-center gap-4">
                        {movies}
                    </div>
                </div>
                <CustomPagination
                    title={title}
                    customState={customState}
                    customMovies={customMovies}
                />
            </div>
        </div>
    );
};

export default FullPageViewer;

const Heading = ({ title, icon, dir }) => {
    return (
        <div dir={dir} className="heading">
            <span className="fs-2">{icon}</span>
            <h1 className="page-title">{title}</h1>
        </div>
    );
};
