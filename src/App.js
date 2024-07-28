import { useContext } from "react";
import "./App.css";
import "./global.css";
import { global } from "./components/GlobalContext";

function App() {
    const { info, changeLanguage, changeTheme, logoPath } = useContext(global);

    return (
        <div className="app">
            <p>Welcome Ahmed ..</p>
            <p className="merienda-font">ِAhmed .. هاى</p>
            <p>مرحبا ..</p>
        </div>
    );
}

export default App;
