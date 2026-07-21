// src/pages/Home.jsx
import React from "react";
import Header from "../components/layout/Header.jsx";
import SectionWrapper from "../components/layout/SectionWrapper.jsx";
import HeroBanner from "../components/ui/HeroBanner.jsx";
import Card from "../components/ui/Card.jsx";
import { sections } from "../data/sections.js";
import {
    heroContent,
    aboutContent,
    paymentsContent,
    locationContent,
    newsletterContent,
} from "../data/blocks.js";
import { useScrollToSection } from "../hooks/useScrollToSection.js";
import { Paper, Button, TextField } from "@mui/material";

const Home = () => {
    const scrollToSection = useScrollToSection();

    const homeSection = sections.find((s) => s.id === "home");
    const aboutSection = sections.find((s) => s.id === "about");
    const paymentsSection = sections.find((s) => s.id === "payments");
    const locationSection = sections.find((s) => s.id === "location");
    const servicesSection = sections.find((s) => s.id === "services");
    const newsletterSection = sections.find((s) => s.id === "newsletter");
    const contactSection = sections.find((s) => s.id === "contact");

    const handleHeroPrimary = () => scrollToSection("services");
    const handleHeroSecondary = () => scrollToSection("contact");

    return (
        <>
        <Header title={homeSection.title} subtitle={homeSection.subtitle} />

        <SectionWrapper id="hero">
            <HeroBanner
            eyebrow="Productora de eventos corporativos"
            title={heroContent.title}
            description={heroContent.description}
            helperText={aboutSection.subtitle}
            onPrimaryClick={handleHeroPrimary}
            onSecondaryClick={handleHeroSecondary}
            primaryLabel={heroContent.ctaPrimary}
            secondaryLabel={heroContent.ctaSecondary}
            />
        </SectionWrapper>

        <SectionWrapper id="about">
            <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-[#B83228] uppercase mb-2">
                {aboutContent.eyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {aboutContent.title}
            </h2>
            <p className="text-slate-300 leading-relaxed">{aboutContent.body}</p>
            </div>
        </SectionWrapper>

        <SectionWrapper id="payments">
            <div className="grid gap-6 md:grid-cols-2">
            <Paper sx={{ backgroundColor: '#161B26', border: '1px solid #334155' }} className="p-6 md:p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-2">
                {paymentsContent.title}
                </h3>
                <p className="text-sm text-slate-400 mb-1">
                {paymentsContent.highlight}
                </p>
                <p className="text-slate-300">{paymentsContent.body}</p>
            </Paper>
            </div>
        </SectionWrapper>

        <SectionWrapper id="location">
            <Paper sx={{ backgroundColor: '#161B26', border: '1px solid #334155' }} className="p-6 md:p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-white mb-2">
                {locationContent.title}
            </h3>
            <p className="text-slate-300">{locationContent.body}</p>
            </Paper>
        </SectionWrapper>

        <SectionWrapper id="services">
            <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {servicesSection.title}
            </h2>
            <p className="text-slate-300">{servicesSection.subtitle}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
            <Card
                title="Producción integral"
                body="Coordinación completa de eventos corporativos, desde la planificación hasta la ejecución."
            />
            <Card
                title="Equipamiento propio"
                body="Sonido, iluminación y estructuras certificadas para asegurar calidad y seguridad."
            />
            <Card
                title="Eventos memorables"
                body="Desde pequeñas reuniones hasta grandes conferencias, siempre con enfoque en el detalle."
            />
            </div>
        </SectionWrapper>

        <SectionWrapper id="newsletter">
            <Paper sx={{ backgroundColor: '#161B26', border: '1px solid #334155' }} className="p-6 md:p-8 max-w-3xl mx-auto shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-2">
                {newsletterContent.title}
            </h2>
            <p className="text-slate-300 mb-4">{newsletterContent.body}</p>
            <div className="flex flex-col sm:flex-row gap-3">
                <TextField
                fullWidth
                type="email"
                label={newsletterContent.placeholder}
                variant="outlined"
                size="small"
                sx={{
                    '& .MuiOutlinedInput-root': {
                    color: '#FFFFFF',
                    '& fieldset': { borderColor: '#334155' },
                    '&:hover fieldset': { borderColor: '#B83228' },
                    },
                    '& .MuiInputLabel-root': { color: '#94a3b8' },
                }}
                />
                <Button variant="contained" color="primary" size="medium">
                {newsletterContent.cta}
                </Button>
            </div>
            </Paper>
        </SectionWrapper>

        <SectionWrapper id="contact">
            <Paper sx={{ backgroundColor: '#161B26', border: '1px solid #334155' }} className="p-6 md:p-8 max-w-3xl mx-auto shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-2">
                {contactSection.title}
            </h2>
            <p className="text-slate-300 mb-4">{contactSection.subtitle}</p>
            <p className="text-sm text-slate-500">
                (Pendiente: integrar formulario de contacto o enlace a canales
                reales de comunicación.)
            </p>
            </Paper>
        </SectionWrapper>
        </>
    );
};

export default Home;