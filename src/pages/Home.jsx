import SectionWrapper from "../components/layout/SectionWrapper.jsx";
import HeroBanner from "../components/ui/HeroBanner.jsx";
import Card from "../components/ui/Card.jsx";
import CoverFlowCarousel from "../components/ui/CoverFlowCarousel.jsx";

import { sections, eventImages } from "../data/sections.js";

import {
    heroContent,
    aboutContent,
    paymentsContent,
    locationContent,
    newsletterContent,
} from "../data/blocks.js";

import { heroImages } from "../data/heroImages.js";
import { useScrollToSection } from "../hooks/useScrollToSection.js";
import { Paper, Button, TextField } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../assets/logo-cgv.webp";
import paymentMethodsBackground from "../assets/payments/payment-methods-bg.webp";

const Home = () => {
    const scrollToSection = useScrollToSection();

    const aboutSection = sections.find((section) => section.id === "about");

    const servicesSection = sections.find(
        (section) => section.id === "services"
    );

    const contactSection = sections.find(
        (section) => section.id === "contact"
    );

    const handleHeroPrimary = () => {
        scrollToSection("services");
    };

    const handleHeroSecondary = () => {
        scrollToSection("contact");
    };

    const handlePaymentContact = () => {
        scrollToSection("contact");
    };

    const handlePaymentWhatsApp = () => {
        window.open(paymentsContent.whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <SectionWrapper id="hero">
                <HeroBanner
                    brandLogo={logo}
                    eyebrow="Productora de eventos corporativos"
                    title={heroContent.title}
                    description={heroContent.description}
                    helperText={aboutSection?.subtitle}
                    images={heroImages}
                    onPrimaryClick={handleHeroPrimary}
                    onSecondaryClick={handleHeroSecondary}
                    primaryLabel={heroContent.ctaPrimary}
                    secondaryLabel={heroContent.ctaSecondary}
                />
            </SectionWrapper>

            <SectionWrapper id="about">
    <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B83228]">
                {aboutContent.eyebrow}
            </p>

            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                {aboutContent.title}
            </h2>

            <p className="mx-auto max-w-3xl leading-relaxed text-slate-300">
                {aboutContent.body}
            </p>
        </div>

        <CoverFlowCarousel items={eventImages} />

        <div className="mx-auto mt-8 max-w-3xl text-center md:mt-10">
            <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                Cada imagen representa una producción realizada por CGV PRO:
                escenarios, activaciones de marca, montajes técnicos y eventos
                corporativos ejecutados con planificación, infraestructura y
                atención al detalle.
            </p>
        </div>
    </div>
</SectionWrapper>

            <SectionWrapper id="payments">
                <div
                    className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-cover bg-center px-4 py-14 sm:px-8 md:px-12 md:py-20"
                    style={{
                    backgroundImage: `linear-gradient(
                        rgba(123, 68, 37, 0.64),
                        rgba(123, 68, 37, 0.64)
                    ), url(${paymentMethodsBackground})`,
                    }}
                >
                    <div className="relative z-10 mx-auto max-w-5xl">
                    <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-[0.14em] text-white sm:text-4xl md:mb-14 md:text-5xl">
                        {paymentsContent.title}
                    </h2>

                    <Paper
                        elevation={0}
                        sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: 0,
                        }}
                        className="mx-auto max-w-4xl px-6 py-10 text-center shadow-2xl sm:px-10 sm:py-12 md:px-16 md:py-16"
                    >
                        <h3 className="text-2xl font-semibold tracking-wide text-slate-900 md:text-3xl">
                        {paymentsContent.title}
                        </h3>

                        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                        {paymentsContent.highlight}
                        </p>

                        <p className="mx-auto mt-1 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                        {paymentsContent.body}
                        </p>

                        <Button
                            variant="contained"
                            onClick={handlePaymentWhatsApp}
                            startIcon={<WhatsAppIcon />}
                            sx={{
                                mt: 4,
                                px: 3,
                                py: 1.5,
                                borderRadius: 0,
                                backgroundColor: "#4B616B",
                                color: "#FFFFFF",
                                fontWeight: 700,
                                textTransform: "none",
                                "&:hover": {
                                backgroundColor: "#354A54",
                                },
                            }}
                            >
                            {paymentsContent.whatsappLabel}
                        </Button>

                        <div className="mt-10 space-y-4">
                        <p className="text-xl font-medium text-slate-900 md:text-2xl">
                            {paymentsContent.companyName}
                        </p>

                        <address className="not-italic text-base text-slate-600 md:text-lg">
                            {paymentsContent.address}
                        </address>

                        <a
                            href={`tel:${paymentsContent.phone.replace(/\s/g, "")}`}
                            className="inline-block text-base font-semibold text-[#2A5A87] transition-colors hover:text-[#B83228] hover:underline md:text-lg"
                        >
                            {paymentsContent.phone}
                        </a>
                        </div>

                        <Button
                        variant="contained"
                        onClick={handlePaymentContact}
                        sx={{
                            mt: 5,
                            px: 3.5,
                            py: 1.5,
                            borderRadius: 0,
                            backgroundColor: "#000000",
                            color: "#FFFFFF",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            "&:hover": {
                            backgroundColor: "#262626",
                            },
                        }}
                        >
                        ESCRÍBENOS
                        </Button>
                    </Paper>
                    </div>
                </div>
                </SectionWrapper>

            <SectionWrapper id="services">
                <div className="mx-auto mb-8 max-w-4xl text-center">
                    <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                        {servicesSection?.title}
                    </h2>

                    <p className="text-slate-300">
                        {servicesSection?.subtitle}
                    </p>
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
                <Paper
                    sx={{
                        backgroundColor: "#161B26",
                        border: "1px solid #334155",
                    }}
                    className="mx-auto max-w-3xl p-6 shadow-sm md:p-8"
                >
                    <h2 className="mb-2 text-2xl font-semibold text-white">
                        {newsletterContent.title}
                    </h2>

                    <p className="mb-4 text-slate-300">
                        {newsletterContent.body}
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <TextField
                            fullWidth
                            type="email"
                            label={newsletterContent.placeholder}
                            variant="outlined"
                            size="small"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    color: "#FFFFFF",
                                    "& fieldset": {
                                        borderColor: "#334155",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#B83228",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#B83228",
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    color: "#94a3b8",
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#B83228",
                                },
                            }}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            className="shrink-0"
                        >
                            {newsletterContent.cta}
                        </Button>
                    </div>
                </Paper>
            </SectionWrapper>
        </>
    );
};

export default Home;