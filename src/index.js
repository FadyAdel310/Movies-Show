import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalContext } from "./components/GlobalContext";
import { ApiContext } from "./components/ApiContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetSpecificMovie from "./components/GetSpecificMovie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalContext>
            <ApiContext>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}></Route>
                        <Route
                            path="/movie/:id"
                            element={<GetSpecificMovie />}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </ApiContext>
        </GlobalContext>
    </React.StrictMode>
);

reportWebVitals();
