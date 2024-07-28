import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalContext } from "./components/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalContext>
            <App />
        </GlobalContext>
    </React.StrictMode>
);

reportWebVitals();
