import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import "./action.css";
import { global } from "./GlobalContext";

const WatchButton = ({ link }) => {
    const { info } = useContext(global);
    if (link !== "") {
        return (
            <a href={link} target="blank" className={`watch-btn`}>
                <FontAwesomeIcon className="watch-icon" icon={faCirclePlay} />
                <span className="fs-5">
                    {info.language === "en-US" ? "watch now" : "شاهد الان"}
                </span>
            </a>
        );
    } else {
        return (
            <a className={`watch-btn ${`in-active ${info.language}`}`}>
                <FontAwesomeIcon className="watch-icon" icon={faCirclePlay} />
                <span className="fs-5">
                    {info.language === "en-US" ? "watch now" : "شاهد الان"}
                </span>
            </a>
        );
    }
};

export default WatchButton;
