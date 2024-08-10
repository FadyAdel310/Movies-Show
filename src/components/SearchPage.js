import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { global } from "./GlobalContext";
import SearchInput from "./SearchInput";
import Movies from "./Movies";
import { api } from "./ApiContext";
import CustomPagination from "./CustomPagination";

const SearchPage = () => {
    const { info } = useContext(global);
    const { searchState, searchingMovies } = useContext(api);

    return (
        <>
            <Header />
            <SearchInput language={info.language} />
            <div className="page">
                <div className="container">
                    {searchingMovies !== null ? (
                        searchingMovies.results.length === 0 ? (
                            <DataNotFound info={info} />
                        ) : (
                            <>
                                <Movies
                                    customState={searchState}
                                    customMovies={searchingMovies}
                                    info={info}
                                />
                                <CustomPagination
                                    customState={searchState}
                                    customMovies={searchingMovies}
                                />
                            </>
                        )
                    ) : null}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SearchPage;

const DataNotFound = ({ info }) => {
    if (info.language === "en-US") {
        return (
            <h1 className="no-films">There is no films suit search content</h1>
        );
    } else {
        return (
            <div dir="rtl">
                <h1 className="no-films">لا توجد افلام تلائم محتوى البحث</h1>
            </div>
        );
    }
};
