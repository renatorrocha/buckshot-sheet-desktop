import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import App from "./pages/app";
import Credits from "./pages/credits";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <main className="h-screen ">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/app" element={<App />} />
                    <Route path="/credits" element={<Credits />} />
                </Routes>
            </main>
        </BrowserRouter>
    </React.StrictMode>
);
