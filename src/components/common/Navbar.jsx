// src/components/common/Navbar.jsx
import React, { useState } from "react";
import { useScrollToSection } from "../../hooks/useScrollToSection.js";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = useScrollToSection();

    // Esta barra de navegación realiza scroll suave hacia secciones específicas de la página.
    const handleClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsOpen(false); // Cierra el menú móvil después de la navegación.
    };

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur shadow-sm z-10">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 sm:px-6">
            {/* Marca */}
            <button
            className="text-xl font-semibold tracking-tight cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            onClick={() => handleClick("home")}
            >
            CGV pro
            </button>

            {/* Navegación de escritorio */}
            <div className="hidden md:flex gap-4 text-sm">
            <button
                className="hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
                onClick={() => handleClick("home")}
            >
                Inicio
            </button>
            <button
                className="hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
                onClick={() => handleClick("features")}
            >
                Características
            </button>
            <button
                className="hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
                onClick={() => handleClick("contact")}
            >
                Contacto
            </button>
            </div>

            {/* Botón hamburguesa para móvil */}
            <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            >
            <span className="sr-only">Abrir menú principal</span>
            {/* Icono hamburguesa simple usando spans */}
            <div className="space-y-1">
                <span
                className={`block h-0.5 w-5 bg-gray-800 transition-transform ${
                    isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
                />
                <span
                className={`block h-0.5 w-5 bg-gray-800 transition-opacity ${
                    isOpen ? "opacity-0" : "opacity-100"
                }`}
                />
                <span
                className={`block h-0.5 w-5 bg-gray-800 transition-transform ${
                    isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
                />
            </div>
            </button>
        </div>

        {/* Panel de menú móvil */}
        {isOpen && (
            <div className="md:hidden border-t bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm">
                <button
                className="text-left py-2 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                onClick={() => handleClick("home")}
                >
                Inicio
                </button>
                <button
                className="text-left py-2 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                onClick={() => handleClick("features")}
                >
                Características
                </button>
                <button
                className="text-left py-2 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                onClick={() => handleClick("contact")}
                >
                Contacto
                </button>
            </div>
            </div>
        )}
        </nav>
    );
};

export default Navbar;