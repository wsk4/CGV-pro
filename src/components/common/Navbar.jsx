import { useState } from "react";
import { useScrollToSection } from "../../hooks/useScrollToSection.js";
import logo from "../../assets/logo-cgv.webp";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = useScrollToSection();

    const handleClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsOpen(false);
    };

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const navItems = [
        { id: "hero", label: "Inicio" },
        { id: "about", label: "Nosotros" },
        { id: "payments", label: "Pagos" },
        { id: "services", label: "Servicios" },
        { id: "newsletter", label: "Novedades" },
        { id: "contact", label: "Contacto" },
    ];

    return (
        <nav className="w-full fixed top-0 left-0 bg-[#0A0D14]/90 backdrop-blur border-b border-[#334155] z-10">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 sm:px-6">
            <button
            className="flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B83228] rounded"
            onClick={() => handleClick("home")}
            aria-label="Ir al inicio"
            >
            <img
                src={logo}
                alt="CGV Pro"
                className="h-9 w-auto sm:h-10 md:h-12"
            />
            </button>

            <div className="hidden md:flex gap-4 text-sm">
            {navItems.map((item) => (
                <button
                key={item.id}
                className="text-slate-300 hover:text-[#B83228] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B83228] rounded px-1"
                onClick={() => handleClick(item.id)}
                >
                {item.label}
                </button>
            ))}
            </div>

            <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-[#161B26] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B83228]"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            >
            <span className="sr-only">Abrir menú principal</span>
            <div className="space-y-1">
                <span className={`block h-0.5 w-5 bg-white transition-transform ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-white transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`block h-0.5 w-5 bg-white transition-transform ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
            </button>
        </div>

        {isOpen && (
            <div className="md:hidden border-t border-[#334155] bg-[#0A0D14]/95 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm">
                {navItems.map((item) => (
                <button
                    key={item.id}
                    className="text-left py-2 text-slate-300 hover:text-[#B83228] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B83228] rounded"
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