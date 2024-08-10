import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalContext } from "./components/GlobalContext";
import { ApiContext } from "./components/ApiContext";
import {
    BrowserRouter,
    HashRouter,
    Route,
    Routes,
    useParams,
} from "react-router-dom";
import GetSpecificMovie from "./components/GetSpecificMovie";
import SearchPage from "./components/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalContext>
            <ApiContext>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<App />}></Route>
                        <Route
                            path="/movie/:id"
                            element={<GetSpecificMovie />}
                        ></Route>
                        <Route path="/search" element={<SearchPage />}></Route>
                    </Routes>
                </HashRouter>
            </ApiContext>
        </GlobalContext>
    </React.StrictMode>
);

reportWebVitals();
