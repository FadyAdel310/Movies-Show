import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { global } from "./GlobalContext";
import SearchInput from "./SearchInput";

const SearchPage = () => {
    const { info } = useContext(global);

    return (
        <>
            <Header />
            <SearchInput language={info.language} />
            <Footer />
        </>
    );
};

export default SearchPage;
