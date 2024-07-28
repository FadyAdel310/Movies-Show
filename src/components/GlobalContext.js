import React, { createContext, useState } from "react";

import logoEng from "../assets/Logo-en.png";
import logoAr from "../assets/Logo-ar.png";

const global = createContext();
const GlobalContext = ({ children }) => {
    const [info, setInfo] = useState({ language: "en", theme: "dark" });
    const [logoPath, setLogoPath] = useState(logoEng);

    const changeTheme = () => {
        if (info.theme === "dark") setInfo({ ...info, theme: "light" });
        else setInfo({ ...info, theme: "dark" });
    };
    const changeLanguage = () => {
        if (info.language === "en") {
            setInfo({ ...info, language: "ar" });
            setLogoPath(logoAr);
        } else {
            setInfo({ ...info, language: "en" });
            setLogoPath(logoEng);
        }
    };

    return (
        <global.Provider
            value={{ info, changeLanguage, changeTheme, logoPath }}
        >
            {children}
        </global.Provider>
    );
};

export { GlobalContext, global };
