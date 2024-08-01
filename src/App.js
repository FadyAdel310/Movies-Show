import { useContext, useEffect, useState } from "react";
import "./App.css";
import "./global.css";
import "./bootstrap/bootstrap.min.css";

import { global } from "./components/GlobalContext";
import Header from "./components/Header";
import { api } from "./components/ApiContext";
import axios from "axios";
import Landing from "./components/Landing";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function App() {
    const { setMovieById } = useContext(api);

    // setMovieById(1048241);
    // setMovieById(533535);
    // setMovieById(1226578);

    return (
        <>
            <Header />
            <Landing />
        </>
    );
}

export default App;
