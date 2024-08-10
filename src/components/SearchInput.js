import React, { useContext, useEffect } from "react";
import "../global.css";
import "./SearchPage.css";
import { api } from "./ApiContext";

const HandleSearch = (event, setSearchState, searchState) => {
    const searchWord = event.target.value;
    setSearchState({ page: 1, type: "first", word: searchWord });
};

const SearchInput = ({ language }) => {
    const { setSearchState, searchState } = useContext(api);
    // console.log(searchState);
    const word = language === "en-US" ? "search here .." : "ابحث هنا ..";
    return (
        <div className="search-input">
            <div className="container">
                <input
                    type="text"
                    className="fs-2 py-3"
                    onChange={(event) =>
                        HandleSearch(event, setSearchState, searchState)
                    }
                    placeholder={word}
                />
            </div>
        </div>
    );
};

export default SearchInput;
