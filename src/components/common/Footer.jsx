// src/components/common/Footer.jsx
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0A0D14] border-t border-[#334155] mt-16">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Copyright © 2026 Cgv pro - Todos los derechos reservados.
        </div>
        </footer>
    );
};

export default Footer;