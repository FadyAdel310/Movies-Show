import { useContext, useEffect, useState } from "react";
import "./App.css";
import "./global.css";
import "./bootstrap/bootstrap.min.css";
import { global } from "./components/GlobalContext";
import Header from "./components/Header";
import { api } from "./components/ApiContext";
import axios from "axios";
import Landing from "./components/Landing";
import FullPageViewer from "./components/FullPageViewer";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useParams,
} from "react-router-dom";
import Footer from "./components/Footer";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function App() {
    const { getRandomMovie } = useContext(api);

    useEffect(() => {
        getRandomMovie();
    }, []);

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
}

export default App;
