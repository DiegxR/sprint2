import { Routes, BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Home from "../Home/Home";
import InfoVuelo from "../infoVuelo/InfoVuelo";
import Formularios from "../formularios/Formularios";

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/flightInfo/:step" element={<InfoVuelo/>}/>
            <Route path="/formulario" element={<Formularios/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router