// src/components/ui/HeroBanner.jsx
import React from "react";
import { Button } from "@mui/material";

const HeroBanner = ({ title, description, onCtaClick }) => {
    // HeroBanner recibe props para que el contenido pueda actualizarse sin cambiar el layout.
    return (
        <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            {title}
            </h2>
            <p className="text-gray-600 mb-4">
            {description}
            </p>
            <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={onCtaClick}
            >
            Ver características
            </Button>
        </div>
        <div className="flex-1 w-full">
            {/* Área visual placeholder para una ilustración o gráfico futuro. */}
            <div className="w-full h-40 sm:h-48 md:h-56 bg-blue-50 border border-dashed border-blue-200 rounded" />
        </div>
        </div>
    );
};

export default HeroBanner;