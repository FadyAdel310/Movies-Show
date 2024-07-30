import { useContext, useEffect, useState } from "react";
import "./App.css";
import "./global.css";
import "./bootstrap/bootstrap.min.css";

import { global } from "./components/GlobalContext";
import Header from "./components/Header";
import { api } from "./components/ApiContext";
import axios from "axios";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function App() {
    const { changeLanguage } = useContext(global);
    const { trendingMovies, movieToShow, popularMovies } = useContext(api);

    return (
        <>
            <Header />
            <button onClick={() => changeLanguage()}>lng</button>
            {movieToShow !== null && (
                <h1 style={{ color: "white" }}>{movieToShow.title}</h1>
            )}
        </>
    );
}

export default App;
