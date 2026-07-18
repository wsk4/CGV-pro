// src/components/common/Footer.jsx
import React from "react";

const Footer = () => {
    // Footer preparado para contenido dinámico (por ejemplo, enlaces, iconos sociales).
    return (
        <footer className="w-full bg-gray-100 mt-16">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Copyright © 2026 Cgv pro  - Todos los derechos reservados.
        </div>
        </footer>
    );
};

export default Footer;