import React from "react";
import "./action.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rate = ({ number }) => {
    const rateDate = [];
    for (let i = 0; i < number; i++) {
        rateDate.push(
            <FontAwesomeIcon
                key={i}
                style={{ color: "var(--yellow)" }}
                icon={faStar}
            />
        );
    }
    for (let i = rateDate.length + 1; i <= 5; i++) {
        rateDate.push(
            <FontAwesomeIcon
                key={i}
                style={{ color: "var(--white)" }}
                icon={faStar}
            />
        );
    }
    return <div className="rate">{rateDate}</div>;
};

export default Rate;
