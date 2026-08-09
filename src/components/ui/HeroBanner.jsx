import { Button } from "@mui/material";

const HeroBanner = ({
    brandLogo,
    eyebrow,
    title,
    description,
    helperText,
    images = [],
    onPrimaryClick,
    onSecondaryClick,
    primaryLabel = "Ver más",
    secondaryLabel = "Contacto",
    }) => {
    return (
        <section className="w-full py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10 md:space-y-16">
            {/* 
                BLOQUE SUPERIOR
                Contiene el logo y el texto introductorio.
            */}
            <div className="flex flex-col items-center justify-center gap-4 border-b border-slate-800 pb-10 text-center">
                {brandLogo && (
                <img
                    src={brandLogo}
                    alt="Logo de la empresa"
                    className="h-auto w-auto max-w-[180px] object-contain"
                />
                )}
                {helperText && (
                <p className="text-base text-slate-300 md:text-lg">
                    {helperText}
                </p>
                )}
            </div>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                {/* Columna izquierda: contenido textual y botones */}
                <div className="max-w-xl">
                {eyebrow && (
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#B83228]">
                    {eyebrow}
                    </p>
                )}
                <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                    {title}
                </h1>
                {description && (
                    <p className="mt-6 text-base leading-7 text-slate-300 md:text-lg">
                    {description}
                    </p>
                )}
                {helperText && (
                    <p className="mt-5 border-l-2 border-[#B83228] pl-3 text-sm text-slate-400">
                    {helperText}
                    </p>
                )}
                <div className="mt-8 flex flex-wrap gap-3">
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
                {/* Columna derecha: galería de imágenes */}
                <div className="w-full lg:min-w-0">
                {images.length > 0 ? (
                    <div
                    className="grid grid-cols-1 gap-1 rounded-2xl border border-[#334155] bg-[#161B26] p-3 shadow-xl sm:grid-cols-3"
                    aria-label="Galería de imágenes de eventos"
                    >
                    {images.map((image, index) => (
                        <div
                        key={`${image.src}-${index}`}
                        className="group relative aspect-[1/2] overflow-hidden rounded-lg bg-[#0A0D14]"
                        >
                        <img
                            src={image.src}
                            alt={
                            image.alt || `Imagen de evento ${index + 1}`
                            }
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                        </div>
                    ))}
                    </div>
                ) : (
                    <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-[#334155] bg-[#161B26] p-6 text-center text-sm text-slate-400">
                    No hay imágenes configuradas.
                    </div>
                )}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default HeroBanner;