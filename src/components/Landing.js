import testImg from "../assets/landing.jpg";

import React, { useContext } from "react";
import { global } from "./GlobalContext";
import { api } from "./ApiContext";
import "./Landing.css";
import Rate from "./Rate";
import WatchButton from "./WatchButton";
import Likes from "./Likes";
import {
    AttentionSeeker,
    Bounce,
    Fade,
    Flip,
    JackInTheBox,
    Roll,
    Slide,
    Zoom,
} from "react-awesome-reveal";

const getNumberFromRate = (avgRate) => {
    return Math.round(avgRate / 2);
};

const Landing = () => {
    const { info } = useContext(global);
    const { movieToShow } = useContext(api);

    if (info.language === "en-US") {
        return (
            <>
                <Movie movie={movieToShow} />
            </>
        );
    } else {
        return (
            <div dir="rtl">
                <Movie movie={movieToShow} />
            </div>
        );
    }
};

export default Landing;

const Movie = ({ movie }) => {
    const { info } = useContext(global);
    if (movie !== null) {
        const baseImgUrl = "https://image.tmdb.org/t/p/original";
        return (
            <Fade>
                <div className="Landing">
                    <img src={`${baseImgUrl}${movie.poster_path}`} />
                    <section>
                        <div className="container">
                            <Zoom>
                                <h1
                                    className={`main-title ${
                                        info.language === "ar"
                                            ? "marhey-font"
                                            : "merienda-font"
                                    }`}
                                >
                                    {movie.title}
                                </h1>
                            </Zoom>
                            <AttentionSeeker>
                                <div className="action">
                                    <Rate
                                        number={getNumberFromRate(
                                            movie.vote_average
                                        )}
                                    />
                                    <WatchButton link={movie.homepage} />
                                    <Likes number={movie.vote_count} />
                                </div>
                            </AttentionSeeker>
                            {movie.overview === "" ? (
                                <NoDataFound />
                            ) : (
                                <p className="description text-center">
                                    {movie.overview}
                                </p>
                            )}
                        </div>
                    </section>
                </div>
            </Fade>
        );
    }
};

const NoDataFound = () => {
    const { info } = useContext(global);
    return (
        <>
            {info.language === "en-US" ? (
                <h4>No overview with this language .. !</h4>
            ) : (
                <h4>لآ يتوفر وصف بهذه اللغة .. !</h4>
            )}
        </>
    );
};
