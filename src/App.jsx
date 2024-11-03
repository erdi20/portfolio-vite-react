import React from "react";
import { Routes, Route } from "react-router-dom";
import Biodata from "./pages/Biodata";
import Home from "./pages/home";
import Skill from './pages/Skill';
import DetailSkill from "./pages/DetailSkill";

export default function app() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biodata" element={<Biodata />} />
            <Route path="/Skill" element={<Skill />} />
            <Route path="/Skill/:item" element={<DetailSkill />} />
        </Routes>
    );
}
