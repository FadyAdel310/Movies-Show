import { faRibbon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import "./page.css";
import CustomPagination from "./CustomPagination";
import { api } from "./ApiContext";
import { global } from "./GlobalContext";
import noImgPath from "../assets/No-Image.png";
import { Fade } from "react-awesome-reveal";

const PopularPage = () => {
    const { info } = useContext(global);
    const { popularMovies, popularState } = useContext(api);
    const movies = [];
    let start = 0;
    let end = 0;
    if (popularState.type === "first") {
        start = 0;
        end = 10;
    } else if (popularState.type === "last") {
        start = 10;
        end = 20;
    }
    if (popularMovies !== null) {
        const baseImgUrl = "https://image.tmdb.org/t/p/w500";
        for (let i = start; i < end; i++) {
            let customPath = `${baseImgUrl}${popularMovies.results[i].poster_path}`;
            if (
                popularMovies.results[i].poster_path === null ||
                popularMovies.results[i].poster_path === ""
            ) {
                customPath = noImgPath;
            }
            const mov = (
                <div
                    key={popularMovies.results[i].id}
                    custom-id={popularMovies.results[i].id}
                    className="col-10 col-sm-4 col-md-3 col-lg-2"
                >
                    <Fade>
                        <div className="movie-card">
                            <img src={customPath} />
                            <h4>
                                {popularMovies.results[i].title !== ""
                                    ? popularMovies.results[i].title
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

    return (
        <div className="page" id="popular">
            <div className="container">
                {info.language === "en-US" ? (
                    <EnglishHeading />
                ) : (
                    <ArabicHeading />
                )}
                <span className="separetor"></span>
                <div className="movies">
                    <div className="row justify-content-center gap-4">
                        {movies}
                    </div>
                </div>
                <CustomPagination />
            </div>
        </div>
    );
};

export default PopularPage;

const EnglishHeading = () => {
    return (
        <div className="heading">
            <span className="fs-2">
                <FontAwesomeIcon icon={faRibbon} />
            </span>
            <h1 className="page-title">Popular</h1>
        </div>
    );
};
const ArabicHeading = () => {
    return (
        <div dir="rtl" className="heading">
            <span className="fs-2">
                <FontAwesomeIcon icon={faRibbon} />
            </span>
            <h1 className="page-title">الشائع</h1>
        </div>
    );
};
