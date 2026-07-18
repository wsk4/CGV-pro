// src/App.jsx
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";

// App configura el router y las rutas de alto nivel para la SPA.
const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Ruta raíz que renderiza el layout actual de una sola página (Home con secciones). */}
          <Route path="/" element={<Home />} />
          {/* Rutas futuras pueden añadirse aquí, por ejemplo:
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
          */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;