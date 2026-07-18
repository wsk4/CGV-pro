// src/components/common/Navbar.jsx
import React, { useState } from "react";
import { useScrollToSection } from "../../hooks/useScrollToSection.js";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = useScrollToSection();

    const handleClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const navItems = [
        { id: "home", label: "Inicio" },
        { id: "hero", label: "Servicios" },
        { id: "about", label: "Nosotros" },
        { id: "payments", label: "Pagos" },
        { id: "location", label: "Ubicación" },
        { id: "services", label: "Servicios" },
        { id: "newsletter", label: "Novedades" },
        { id: "contact", label: "Contacto" },
    ];

    return (
        <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur shadow-sm z-10">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 sm:px-6">
            <button
            className="text-xl font-semibold tracking-tight cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            onClick={() => handleClick("home")}
            >
            CGV pro
            </button>

            <div className="hidden md:flex gap-4 text-sm">
            {navItems.map((item) => (
                <button
                key={item.id}
                className="hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
                onClick={() => handleClick(item.id)}
                >
                {item.label}
                </button>
            ))}
            </div>

            <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            >
            <span className="sr-only">Abrir menú principal</span>
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

        {isOpen && (
            <div className="md:hidden border-t bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm">
                {navItems.map((item) => (
                <button
                    key={item.id}
                    className="text-left py-2 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    onClick={() => handleClick(item.id)}
                >
                    {item.label}
                </button>
                ))}
            </div>
            </div>
        )}
        </nav>
    );
};

export default Navbar;