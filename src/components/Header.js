import React, { useContext, useState } from "react";
import { global } from "./GlobalContext";
import "./header.css";
import "../global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EnglishHeader = () => {
    const { changeLanguage, logoPath } = useContext(global);
    const [mobileShow, setMobileShow] = useState(false);
    const toggleMenuShow = () => {
        if (mobileShow) setMobileShow(false);
        else setMobileShow(true);
    };
    return (
        <nav>
            <div className="container">
                <div className="d-flex justify-content-between justify-content-lg-center align-items-center position-relative">
                    <Link to={"/"}>
                        <img src={logoPath} className="logo" />
                    </Link>

                    <ul
                        className={`links mobile-menu-${mobileShow} d-flex flex-column flex-lg-row justify-content-center align-items-start align-items-lg-center `}
                    >
                        <li className="p-2 fs-4">
                            <a className="text-decoration-none" href="#popular">
                                Popular
                            </a>
                        </li>
                        <li className="p-2 fs-4">
                            <a
                                className="text-decoration-none"
                                href="#trending"
                            >
                                Trending
                            </a>
                        </li>
                        <li className="p-2 fs-4">
                            <a
                                className="text-decoration-none"
                                href="#topRated"
                            >
                                Top Rated
                            </a>
                        </li>
                        <li className="p-2 fs-4">
                            <a
                                className="text-decoration-none"
                                href="#upComing"
                            >
                                Up Coming
                            </a>
                        </li>
                        <div className="tools">
                            <li className="pb-2 px-2 fs-3 search-icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </li>
                            <li
                                onClick={() => changeLanguage()}
                                className="py-1 px-2 fs-6 language-icon"
                            >
                                عربي
                            </li>
                        </div>
                    </ul>
                    <button onClick={toggleMenuShow} className="fs-3">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

const ArabicHeader = () => {
    const { logoPath, changeLanguage } = useContext(global);
    const [mobileShow, setMobileShow] = useState(false);
    const toggleMenuShow = () => {
        if (mobileShow) setMobileShow(false);
        else setMobileShow(true);
    };
    return (
        <nav>
            <div className="container">
                <div className="d-flex justify-content-between justify-content-lg-center align-items-center position-relative">
                    <Link to="/">
                        <img
                            src={logoPath}
                            className="logo"
                            style={{ marginLeft: "25px" }}
                        />
                    </Link>

                    <ul
                        className={`links mobile-menu-${mobileShow} d-flex flex-column flex-lg-row justify-content-center align-items-start align-items-lg-center`}
                    >
                        <li className="p-2 fs-4">
                            <a className="text-decoration-none" href="#popular">
                                الشائع
                            </a>
                        </li>
                        <li className="p-2 fs-4">
                            <a
                                className="text-decoration-none"
                                href="#trending"
                            >
                                المحتوي الرائج
                            </a>
                        </li>
                        <li className="p-2 fs-4">
                            <a
                                className="text-decoration-none"
                                href="#topRated"
                            >
                                الأعلي تقييما
                            </a>
                        </li>
                        <li className="p-2 fs-4">
                            <a
                                className="text-decoration-none"
                                href="#upComing"
                            >
                                القادم
                            </a>
                        </li>

                        <div className="tools">
                            <li className="pb-2 px-2 fs-3 search-icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </li>
                            <li
                                onClick={() => changeLanguage()}
                                className="py-1 px-2 fs-6 language-icon"
                            >
                                English
                            </li>
                        </div>
                    </ul>
                    <button onClick={toggleMenuShow} className="fs-3">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

const Header = () => {
    const { info } = useContext(global);
    if (info.language === "en-US") {
        return (
            <>
                <EnglishHeader />
            </>
        );
    } else {
        return (
            <div dir="rtl">
                <ArabicHeader />
            </div>
        );
    }
};

export default Header;
