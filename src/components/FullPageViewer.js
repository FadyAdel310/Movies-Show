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
import Movies from "./Movies";

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
        upComingMovies,
        upComingState,
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
        customState = upComingState;
        customMovies = upComingMovies;
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

                <Movies
                    customState={customState}
                    customMovies={customMovies}
                    info={info}
                />

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
