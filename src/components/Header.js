import React, { useContext, useState } from "react";
import { global } from "./GlobalContext";
import "./header.css";
import "../global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const EnglishHeader = () => {
    const { logoPath } = useContext(global);
    const [mobileShow, setMobileShow] = useState(false);
    const toggleMenuShow = () => {
        if (mobileShow) setMobileShow(false);
        else setMobileShow(true);
    };
    return (
        <nav>
            <div className="container">
                <div className="d-flex justify-content-between justify-content-lg-center align-items-center position-relative">
                    <img src={logoPath} className="logo" />
                    <ul
                        className={`links mobile-menu-${mobileShow} d-flex flex-column flex-lg-row justify-content-center align-items-start align-items-lg-center `}
                    >
                        <li className="p-2 fs-4">Popular</li>
                        <li className="p-2 fs-4">Trending</li>
                        <li className="p-2 fs-4">Top Rated</li>
                        <li className="p-2 fs-4">Up Coming</li>
                        <li className="p-2 fs-3 search-icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </li>
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
    const { logoPath } = useContext(global);
    const [mobileShow, setMobileShow] = useState(false);
    const toggleMenuShow = () => {
        if (mobileShow) setMobileShow(false);
        else setMobileShow(true);
    };
    return (
        <nav>
            <div className="container">
                <div className="d-flex justify-content-between justify-content-lg-center align-items-center position-relative">
                    <img
                        src={logoPath}
                        className="logo"
                        style={{ marginLeft: "25px" }}
                    />
                    <ul
                        className={`links mobile-menu-${mobileShow} d-flex flex-column flex-lg-row justify-content-center align-items-start align-items-lg-center `}
                    >
                        <li className="p-2 fs-4">الشائع</li>
                        <li className="p-2 fs-4">المحتوي الرائج</li>
                        <li className="p-2 fs-4">الأعلي تقييما</li>
                        <li className="p-2 fs-4">القادم</li>
                        <li className="p-2 fs-3 search-icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </li>
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
