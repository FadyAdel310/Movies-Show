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

const CustomPagination = () => {
    const { info } = useContext(global);
    const { popularMovies, setPopularState, popularState } = useContext(api);
    const handlePageClick = (event) => {
        const pageNumber = event.selected + 1;
        const { value, type } = getApiPageFromPaginationPage(pageNumber);
        if (popularMovies !== null) {
            setPopularState({ popularPage: value, type: type });
        }
    };

    if (info.language === "en-US") {
        return (
            <>
                <EnglishPagination
                    handlePageClick={handlePageClick}
                    popularState={popularState}
                />
            </>
        );
    } else {
        return (
            <>
                <ArabicPagination
                    handlePageClick={handlePageClick}
                    popularState={popularState}
                />
            </>
        );
    }
};

export default CustomPagination;

const EnglishPagination = ({ handlePageClick, popularState }) => {
    let loadingPage = 0;
    if (popularState.type === "first") {
        loadingPage = popularState.popularPage * 2 - 1;
    } else if (popularState.type === "last") {
        loadingPage = popularState.popularPage * 2;
    }
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageCount={1000}
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

const ArabicPagination = ({ handlePageClick, popularState }) => {
    let loadingPage = 0;
    if (popularState.type === "first") {
        loadingPage = popularState.popularPage * 2 - 1;
    } else if (popularState.type === "last") {
        loadingPage = popularState.popularPage * 2;
    }
    return (
        <div dir="rtl">
            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageCount={1000}
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
