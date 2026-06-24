import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../page/Home.tsx";
import About from "../page/About.tsx";
import Detail from "../page/Detail.tsx";
import Blog from "../page/Blog.tsx";
import SingleBlog from "../page/SingleBlog.tsx"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Episodes" element={<Detail />} />
                <Route path="/More" element={<Blog />} />
                <Route path="/blog" element={< SingleBlog/>} />
            </Routes>

        </BrowserRouter>
    );
}