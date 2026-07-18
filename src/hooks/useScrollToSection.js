// src/hooks/useScrollToSection.js

// Este hook devuelve una función que hace scroll suave hasta una sección según su id.
export const useScrollToSection = () => {
    const scrollToSection = (id) => {
        if (!id) return;
        const element = document.getElementById(id);
        if (!element) return;

        // Usa la API nativa del navegador para hacer scroll suave hacia el elemento.
        element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    };

    return scrollToSection;
};