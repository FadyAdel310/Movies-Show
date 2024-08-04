import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalContext } from "./components/GlobalContext";
import { ApiContext } from "./components/ApiContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalContext>
            <ApiContext>
                <App />
            </ApiContext>
        </GlobalContext>
    </React.StrictMode>
);

reportWebVitals();
