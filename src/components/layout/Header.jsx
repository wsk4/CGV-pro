// src/components/layout/Header.jsx
import React from "react";

const Header = ({ id = "home", title, subtitle }) => {
    // El componente Header recibe props de texto dinámicas para mantener el layout reutilizable.
    return (
        <header id={id} className="pt-24 pb-10 bg-gray-50 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
            {title}
            </h1>
            {subtitle && (
            <p className="text-gray-600 max-w-2xl">
                {subtitle}
            </p>
            )}
        </div>
        </header>
    );
};

export default Header;