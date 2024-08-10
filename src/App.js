import { useContext, useEffect } from "react";
import "./App.css";
import "./global.css";
import "./bootstrap/bootstrap.min.css";
import Header from "./components/Header";
import { api } from "./components/ApiContext";
import Landing from "./components/Landing";
import FullPageViewer from "./components/FullPageViewer";
import Footer from "./components/Footer";

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
