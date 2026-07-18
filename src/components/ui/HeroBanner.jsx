// src/components/ui/HeroBanner.jsx
import React from "react";
import { Button } from "@mui/material";

const HeroBanner = ({
    eyebrow,
    title,
    description,
    helperText,
    onPrimaryClick,
    onSecondaryClick,
    primaryLabel = "Ver más",
    secondaryLabel = "Contacto",
    }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 py-10 md:py-16">
        <div className="flex-1 space-y-4">
            {eyebrow && (
            <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
                {eyebrow}
            </p>
            )}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
            {title}
            </h1>
            <p className="text-base md:text-lg text-slate-600">{description}</p>
            {helperText && (
            <p className="text-sm text-slate-500 border-l-2 border-blue-500 pl-3">
                {helperText}
            </p>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
            {onPrimaryClick && (
                <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={onPrimaryClick}
                >
                {primaryLabel}
                </Button>
            )}
            {onSecondaryClick && (
                <Button
                variant="outlined"
                color="primary"
                size="medium"
                onClick={onSecondaryClick}
                >
                {secondaryLabel}
                </Button>
            )}
            </div>
        </div>

        <div className="flex-1 w-full">
            <div className="w-full h-56 md:h-72 rounded-xl bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-600 shadow-xl flex items-end justify-start p-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-white max-w-xs text-sm">
                <p className="font-semibold">
                Producción técnica integral para eventos corporativos.
                </p>
                <p className="text-xs text-slate-200 mt-1">
                Desde pequeñas reuniones hasta grandes conferencias, con equipos
                propios y enfoque en cada detalle.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default HeroBanner;