import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../page/Home.tsx";
import About from "../page/About.tsx"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>

        </BrowserRouter>
    );
}