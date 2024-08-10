import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import noImgPath from "../assets/No-Image.png";

const Movies = ({ customState, customMovies, info }) => {
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
                <Link
                    key={customMovies.results[i].id}
                    className="col-10 col-sm-4 col-md-3 col-lg-2"
                    to={`/movie/${customMovies.results[i].id}`}
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
                </Link>
            );
            movies.push(mov);
        }
    }

    return (
        <div className="movies">
            <div className="row justify-content-center gap-4">{movies}</div>
        </div>
    );
};

export default Movies;
