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

    const {
        setTrendState,
        setPopularState,
        setTopRatedState,
        setUpComingState,
        setSearchState,
    } = useContext(api);

    let setCustomState = null;

    if (title === "popular") {
        setCustomState = setPopularState;
    } else if (title === "trending") {
        setCustomState = setTrendState;
    } else if (title === "topRated") {
        setCustomState = setTopRatedState;
    } else if (title === "upComing") {
        setCustomState = setUpComingState;
    } else {
        setCustomState = setSearchState;
    }

    const handlePageClick = (event) => {
        const pageNumber = event.selected + 1;
        const { value, type } = getApiPageFromPaginationPage(pageNumber);
        if (customMovies !== null) {
            setCustomState({ ...customState, page: value, type: type });
        }
    };

    const paginationPagesCount =
        customMovies !== null
            ? customMovies.total_results > 10000
                ? 1000
                : Math.ceil(customMovies.total_results / 10)
            : 0;

    if (customMovies !== null) {
        if (info.language === "en-US") {
            return (
                <>
                    {paginationPagesCount !== 0 && (
                        <Pagination
                            handlePageClick={handlePageClick}
                            customState={customState}
                            pageCount={paginationPagesCount}
                            previousLabelValue={previousLabelEnglish()}
                            nextLabelValue={nextLabelEnglish()}
                        />
                    )}
                </>
            );
        } else {
            return (
                <div dir="rtl">
                    {paginationPagesCount !== 0 && (
                        <Pagination
                            handlePageClick={handlePageClick}
                            customState={customState}
                            pageCount={paginationPagesCount}
                            previousLabelValue={previousLabelArabic()}
                            nextLabelValue={nextLabelArabic()}
                        />
                    )}
                </div>
            );
        }
    }
};

export default CustomPagination;

const Pagination = ({
    handlePageClick,
    customState,
    pageCount,
    previousLabelValue,
    nextLabelValue,
}) => {
    let loadingPage = 0;
    if (customState.type === "first") {
        loadingPage = customState.page * 2 - 1;
    } else if (customState.type === "last") {
        loadingPage = customState.page * 2;
    }
    return (
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
            previousLabel={previousLabelValue}
            previousClassName="prev-page"
            nextClassName="next-page"
            previousLinkClassName="text-decoration-none"
            nextLinkClassName="text-decoration-none"
            nextLabel={nextLabelValue}
            activeClassName="active"
            disabledClassName="disabled"
            initialPage={loadingPage - 1}
        />
    );
};

const previousLabelEnglish = () => {
    return (
        <div className="step-btn">
            <span>
                <FontAwesomeIcon icon={faCircleChevronLeft} />
            </span>
            <p>Previous</p>
        </div>
    );
};
const nextLabelEnglish = () => {
    return (
        <div className="step-btn">
            <p>Next</p>
            <span>
                <FontAwesomeIcon icon={faCircleChevronRight} />
            </span>
        </div>
    );
};
const previousLabelArabic = () => {
    return (
        <div className="step-btn">
            <span>
                <FontAwesomeIcon icon={faCircleChevronRight} />
            </span>
            <p>السابق</p>
        </div>
    );
};
const nextLabelArabic = () => {
    return (
        <div className="step-btn">
            <p>التالي</p>
            <span>
                <FontAwesomeIcon icon={faCircleChevronLeft} />
            </span>
        </div>
    );
};