import { faGithub, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import "../global.css";
import "./Footer.css";
import profilePhoto from "../assets/my-profile.png";
import { global } from "./GlobalContext";

function toArabicNumerals(year) {
    const digitsMap = {
        0: "٠",
        1: "١",
        2: "٢",
        3: "٣",
        4: "٤",
        5: "٥",
        6: "٦",
        7: "٧",
        8: "٨",
        9: "٩",
    };

    const arabicYear = year.toString().replace(/[0-9]/g, function (digit) {
        return digitsMap[digit];
    });

    return arabicYear;
}

const year_en = new Date().getFullYear();
const year_ar = toArabicNumerals(year_en);

const EnglishInfo = () => {
    return (
        <div className="info fs-4">
            <img src={profilePhoto} />
            <p className="merienda-font text-center">
                <span>&copy;</span> {year_en} Copyright :
            </p>
            <span className="merienda-font">Fady Adel</span>
        </div>
    );
};
const ArabicInfo = () => {
    return (
        <div className="info fs-4">
            <img src={profilePhoto} />
            <p className="marhey-font text-center">
                <span>&copy;</span> {year_ar} حقوق الملكية :
            </p>
            <span className="marhey-font">فادي عادل</span>
        </div>
    );
};

const Footer = () => {
    const { info } = useContext(global);
    return (
        <footer dir={info.language === "en-US" ? "ltr" : "rtl"}>
            <div className="container">
                {info.language === "en-US" ? <EnglishInfo /> : <ArabicInfo />}
                <ul>
                    <li>
                        <a
                            href="https://www.facebook.com/FadyElpop310"
                            target="blank"
                            className="text-decoration-none"
                        >
                            <FontAwesomeIcon icon={faSquareFacebook} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="tel:+201281536575"
                            target="blank"
                            className="text-decoration-none"
                        >
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:fadyadel310forbusiness@gmail.com"
                            target="blank"
                            className="text-decoration-none"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/FadyAdel310"
                            target="blank"
                            className="text-decoration-none"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
