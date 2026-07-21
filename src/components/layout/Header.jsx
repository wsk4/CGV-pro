// src/components/layout/Header.jsx
import React from "react";

const Header = ({ id = "home", title, subtitle }) => {
    return (
        <header id={id} className="pt-24 pb-10 bg-[#0A0D14] scroll-mt-20 border-b border-[#334155]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white">
            {title}
            </h1>
            {subtitle && (
            <p className="text-slate-300 max-w-2xl">
                {subtitle}
            </p>
            )}
        </div>
        </header>
    );
};

export default Header;