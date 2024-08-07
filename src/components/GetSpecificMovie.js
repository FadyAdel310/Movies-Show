import React, { useContext, useEffect, useState } from "react";
import App from "../App";
import { useParams } from "react-router-dom";
import { api } from "./ApiContext";
import Header from "./Header";
import Landing from "./Landing";
import FullPageViewer from "./FullPageViewer";
import Footer from "./Footer";

const GetSpecificMovie = () => {
    const { id } = useParams();
    const { setMovieById } = useContext(api);
    const [idState, setIdState] = useState(null);

    useEffect(() => {
        setIdState(id);
    });

    useEffect(() => {
        window.scrollTo({ top: 0 });
        setMovieById(id);
    }, [idState]);
    return (
        <>
            <Header />
            <Landing />
            <FullPageViewer title="popular" />
            <FullPageViewer title="trending" />
            <FullPageViewer title="topRated" />
            <FullPageViewer title="upComing" />
            <Footer />
        </>
    );
};

export default GetSpecificMovie;
