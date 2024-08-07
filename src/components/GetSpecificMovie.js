import React, { useContext, useEffect, useState } from "react";
import App from "../App";
import { useParams } from "react-router-dom";
import { api } from "./ApiContext";

const GetSpecificMovie = () => {
    const { id } = useParams();
    const { setMovieById } = useContext(api);
    const [idState, setIdState] = useState(null);

    useEffect(() => {
        setIdState(id);
    });

    window.scrollTo({ top: 0 });
    useEffect(() => {
        setMovieById(id);
    }, [idState]);
    return <App />;
};

export default GetSpecificMovie;
