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
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function App() {
    const { setMovieById } = useContext(api);

    // setMovieById(1048241);
    // setMovieById(533535);
    useEffect(() => {
        // setMovieById(653346);
    }, []);
    // console.log("test");
    return (
        <>
            <Header />
            <Landing />
            <FullPageViewer title="popular" />
            <FullPageViewer title="trending" />
        </>
    );
}

export default App;
