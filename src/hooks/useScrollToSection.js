// src/hooks/useScrollToSection.js

export const useScrollToSection = () => {
    const scrollToSection = (id) => {
        if (!id) return;
        const element = document.getElementById(id);
        if (!element) return;

        element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    };

    return scrollToSection;
};