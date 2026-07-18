// src/pages/Home.jsx
import React from "react";
import Header from "../components/layout/Header.jsx";
import SectionWrapper from "../components/layout/SectionWrapper.jsx";
import HeroBanner from "../components/ui/HeroBanner.jsx";
import Card from "../components/ui/Card.jsx";
import { sections } from "../data/sections.js";
import { useScrollToSection } from "../hooks/useScrollToSection.js";
import { Paper, Button } from "@mui/material";

const Home = () => {
    // La página Home compone componentes de layout con datos estáticos que podrán ser dinámicos más adelante.
    const homeSection = sections.find((s) => s.id === "home");
    const featuresSection = sections.find((s) => s.id === "features");
    const contactSection = sections.find((s) => s.id === "contact");

    const scrollToSection = useScrollToSection();

    const handleHeroCtaClick = () => {
        scrollToSection("features");
    };

    return (
        <>
        <Header
            title={homeSection.title}
            subtitle={homeSection.subtitle}
        />

        <SectionWrapper id="features">
            <HeroBanner
            title={featuresSection.title}
            description={featuresSection.subtitle}
            onCtaClick={handleHeroCtaClick}
            />
            <div className="grid mt-8 gap-4 md:grid-cols-3">
            <Card
                title="SPA lista"
                body="Diseño de una sola página sin recargas completas, impulsada por React y Vite."
            />
            <Card
                title="Estructura escalable"
                body="Componentes, layouts y páginas están separados para crecer de forma segura."
            />
            <Card
                title="Estilo moderno"
                body="Las utilidades de Tailwind mantienen el diseño consistente y fácil de cambiar."
            />
            </div>
        </SectionWrapper>

        {/* Ejemplo visual de integración con MUI */}
        <SectionWrapper id="mui-example">
            <Paper className="p-4 md:p-6">
            <h2 className="text-xl font-semibold mb-2">
                Ejemplo con Material UI
            </h2>
            <p className="text-gray-700 mb-4">
                Esta sección combina el layout de Tailwind con componentes de MUI
                como Paper y Button.
            </p>
            <Button variant="contained" color="primary">
                Botón MUI
            </Button>
            </Paper>
        </SectionWrapper>

        <SectionWrapper id="contact">
            <h2 className="text-xl font-semibold mb-2">
            {contactSection.title}
            </h2>
            <p className="text-gray-600">
            {contactSection.subtitle}
            </p>
        </SectionWrapper>
        </>
    );
};

export default Home;