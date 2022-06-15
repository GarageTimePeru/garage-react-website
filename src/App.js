import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Mapa from "./components/pages/Mapa/Mapa";
import Garages from "./components/pages/Mapa/Garages";
import Form from "./components/pages/SignUp/Form";
import Init from "./components/pages/Init/Create";
import Reserva from "./components/pages/Reservas/Reserva";
import CrearReserva from "./components/pages/Reservas/CreaReserva";
import Calculo from "./components/pages/Calculos/Calculo";
import Login from "./components/pages/SignUp/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garages" element={<Garages />} />
          <Route path="/mapas">
            <Route path=":id" element={<Mapa />} />
          </Route>
          <Route path="/sign-up" element={<Form />} />
          <Route path="/datos" element={<Init />} />
          <Route path="/reservas" element={<Reserva />} />
          <Route path="/crear-reserva" element={<CrearReserva />} />
          <Route path="/calculos" element={<Calculo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
