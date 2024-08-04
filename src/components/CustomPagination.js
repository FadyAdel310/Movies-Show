import {
    faCircleChevronLeft,
    faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import { global } from "./GlobalContext";
import { api } from "./ApiContext";

const getApiPageFromPaginationPage = (paginationPage) => {
    let x = paginationPage / 2;
    x = Math.ceil(x);
    if (paginationPage % 2 == 0) {
        return { value: x, type: "last" };
    } else {
        return { value: x, type: "first" };
    }
};

const CustomPagination = ({ title, customState, customMovies }) => {
    const { info } = useContext(global);

    const { setTrendState, setPopularState, setTopRatedState } =
        useContext(api);

    let setCustomState = null;

    if (title === "popular") {
        setCustomState = setPopularState;
    } else if (title === "trending") {
        setCustomState = setTrendState;
    } else if (title === "topRated") {
        setCustomState = setTopRatedState;
    } else if (title === "upComing") {
        setCustomState = null;
    }

    const handlePageClick = (event) => {
        const pageNumber = event.selected + 1;
        const { value, type } = getApiPageFromPaginationPage(pageNumber);
        if (customMovies !== null) {
            setCustomState({ page: value, type: type });
        }
    };

    const paginationPagesCount =
        customMovies !== null
            ? customMovies.total_pages > 500
                ? 1000
                : customMovies.total_pages * 2
            : 0;

    if (info.language === "en-US") {
        return (
            <>
                {paginationPagesCount !== 0 && (
                    <EnglishPagination
                        handlePageClick={handlePageClick}
                        customState={customState}
                        pageCount={paginationPagesCount}
                    />
                )}
            </>
        );
    } else {
        return (
            <>
                {paginationPagesCount !== 0 && (
                    <ArabicPagination
                        handlePageClick={handlePageClick}
                        customState={customState}
                        pageCount={paginationPagesCount}
                    />
                )}
            </>
        );
    }
};

export default CustomPagination;

const EnglishPagination = ({ handlePageClick, customState, pageCount }) => {
    let loadingPage = 0;
    if (customState.type === "first") {
        loadingPage = customState.page * 2 - 1;
    } else if (customState.type === "last") {
        loadingPage = customState.page * 2;
    }

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageCount={pageCount}
                className="custom-pagination"
                pageRangeDisplayed={2}
                pageClassName="custom-pagination-li"
                breakClassName="custom-pagination-li"
                breakLinkClassName="custom-pagination-a"
                pageLinkClassName="custom-pagination-a"
                previousLabel={
                    <div className="step-btn">
                        <span>
                            <FontAwesomeIcon icon={faCircleChevronLeft} />
                        </span>
                        <p>Previous</p>
                    </div>
                }
                previousClassName="prev-page"
                nextClassName="next-page"
                previousLinkClassName="text-decoration-none"
                nextLinkClassName="text-decoration-none"
                nextLabel={
                    <div className="step-btn">
                        <p>Next</p>
                        <span>
                            <FontAwesomeIcon icon={faCircleChevronRight} />
                        </span>
                    </div>
                }
                activeClassName="active"
                disabledClassName="disabled"
                initialPage={loadingPage - 1}
            />
        </>
    );
};

const ArabicPagination = ({ handlePageClick, customState, pageCount }) => {
    let loadingPage = 0;
    if (customState.type === "first") {
        loadingPage = customState.page * 2 - 1;
    } else if (customState.type === "last") {
        loadingPage = customState.page * 2;
    }
    return (
        <div dir="rtl">
            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageCount={pageCount}
                className="custom-pagination"
                pageRangeDisplayed={2}
                pageClassName="custom-pagination-li"
                breakClassName="custom-pagination-li"
                breakLinkClassName="custom-pagination-a"
                pageLinkClassName="custom-pagination-a"
                previousLabel={
                    <div className="step-btn">
                        <span>
                            <FontAwesomeIcon icon={faCircleChevronRight} />
                        </span>
                        <p>السابق</p>
                    </div>
                }
                previousClassName="prev-page"
                nextClassName="next-page"
                previousLinkClassName="text-decoration-none"
                nextLinkClassName="text-decoration-none"
                nextLabel={
                    <div className="step-btn">
                        <p>التالي</p>
                        <span>
                            <FontAwesomeIcon icon={faCircleChevronLeft} />
                        </span>
                    </div>
                }
                activeClassName="active"
                disabledClassName="disabled"
                initialPage={loadingPage - 1}
            />
        </div>
    );
};
