import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Likes = ({ number }) => {
    return (
        <div className="likes py-1 px-3">
            <FontAwesomeIcon className="like-icon fs-4" icon={faThumbsUp} />
            <span className="fs-4">: {number}</span>
        </div>
    );
};

export default Likes;
