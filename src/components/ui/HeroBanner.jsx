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
        <section className="w-full py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 md:space-y-20">
            <div className="relative flex flex-col items-center justify-center gap-5 text-center">
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-linear-to-r from-[#B83228]/10 via-[#0A0D14] to-[#0A0D14]" />
                <div className="relative z-10">
                {brandLogo && (
                <img
                    src={brandLogo}
                    alt="Logo de la empresa"
                    className="h-auto w-auto max-w-[180px] object-contain"
                />
                )}
{helperText && (
                    <p className="text-lg text-slate-300 md:text-xl">
                        {helperText}
                    </p>
                )}
                </div>
            </div>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div className="max-w-xl">
                {eyebrow && (
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#B83228]">
                    {eyebrow}
                    </p>
                )}
                <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                    {title}
                </h1>
                {description && (
                    <p className="mt-8 text-lg leading-8 text-slate-300 md:text-xl">
                    {description}
                    </p>
                )}
                {helperText && (
                    <p className="mt-6 border-l-2 border-[#B83228] pl-4 text-base text-slate-400">
                    {helperText}
                    </p>
                )}
                <div className="mt-10 flex flex-wrap gap-4">
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
                <div className="w-full lg:min-w-0">
                {images.length > 0 ? (
                    <div className="grid grid-cols-1 gap-3 rounded-3xl border border-[#334155] bg-[#161B26] p-4 shadow-2xl sm:grid-cols-3">
                    {images.map((image, index) => (
                        <div
                        key={`${image.src}-${index}`}
                        className="relative aspect-[1/2] overflow-hidden rounded-xl bg-[#0A0D14] transition duration-300"
                        >
                        <img
                            src={image.src}
                            alt={
                            image.alt || `Imagen de evento ${index + 1}`
                            }
                            className="h-full w-full object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                        </div>
                    ))}
                    </div>
                ) : (
                    <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-[#334155] bg-[#161B26] p-8 text-center text-base text-slate-400">
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