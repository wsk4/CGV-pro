import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Check,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const MAX_VISIBLE_DISTANCE = 2;

export default function CoverFlowCarousel({
    items = [],
    initialIndex = 0,
    onItemChange,
    className = "",
}) {
    const safeInitialIndex = Math.min(
        Math.max(initialIndex, 0),
        Math.max(items.length - 1, 0)
    );

    const [activeIndex, setActiveIndex] = useState(safeInitialIndex);

    const totalItems = items.length;

    const changeIndex = useCallback(
        (nextIndex) => {
            if (totalItems === 0) return;

            const normalizedIndex = Math.min(
                Math.max(nextIndex, 0),
                totalItems - 1
            );

            if (normalizedIndex === activeIndex) return;

            setActiveIndex(normalizedIndex);
            onItemChange?.(normalizedIndex);
        },
        [activeIndex, onItemChange, totalItems]
    );

    const goPrevious = useCallback(() => {
        changeIndex(activeIndex - 1);
    }, [activeIndex, changeIndex]);

    const goNext = useCallback(() => {
        changeIndex(activeIndex + 1);
    }, [activeIndex, changeIndex]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                goPrevious();
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                goNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [goNext, goPrevious]);

    useEffect(() => {
        if (activeIndex >= totalItems && totalItems > 0) {
            setActiveIndex(totalItems - 1);
        }
    }, [activeIndex, totalItems]);

    const visibleItems = useMemo(() => {
        return items
            .map((item, index) => ({
                item,
                index,
                offset: index - activeIndex,
            }))
            .filter(
                ({ offset }) =>
                    Math.abs(offset) <= MAX_VISIBLE_DISTANCE
            );
    }, [activeIndex, items]);

    const getCardAnimation = (offset) => {
        const distance = Math.abs(offset);

        if (offset === 0) {
            return {
                x: 0,
                scale: 1,
                rotateY: 0,
                opacity: 1,
                zIndex: 30,
            };
        }

        const direction = offset > 0 ? 1 : -1;

        return {
            x: direction * (distance === 1 ? 270 : 430),
            scale: distance === 1 ? 0.86 : 0.74,
            rotateY: direction * -12,
            opacity: distance === 1 ? 0.68 : 0.32,
            zIndex: 30 - distance,
        };
    };

    if (totalItems === 0) {
        return null;
    }

    return (
        <div
            className={`relative mx-auto w-full ${className}`}
            role="region"
            aria-label="Galería de eventos pasados"
            aria-roledescription="carousel"
        >
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-[#0d1119] px-3 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:px-6 sm:py-9 md:px-8 md:py-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(184,50,40,0.08),transparent_38%)]" />

                <div
                    className="relative mx-auto flex h-[280px] w-full max-w-[1150px] items-center justify-center sm:h-[330px] md:h-[390px]"
                    style={{
                        perspective: "1400px",
                        perspectiveOrigin: "center center",
                    }}
                >
                    <button
                        type="button"
                        onClick={goPrevious}
                        disabled={activeIndex === 0}
                        aria-label="Evento anterior"
                        className="absolute left-0 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-800 shadow-lg transition hover:scale-105 hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 sm:left-2 md:h-12 md:w-12"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <button
                        type="button"
                        onClick={goNext}
                        disabled={activeIndex === totalItems - 1}
                        aria-label="Siguiente evento"
                        className="absolute right-0 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-800 shadow-lg transition hover:scale-105 hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 sm:right-2 md:h-12 md:w-12"
                    >
                        <ChevronRight size={22} />
                    </button>

                    <div
                        className="relative flex h-full w-full items-center justify-center"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <AnimatePresence initial={false}>
                            {visibleItems.map(({ item, index, offset }) => {
                                const isActive = index === activeIndex;
                                const animation = getCardAnimation(offset);

                                return (
                                    <motion.button
                                        key={item.id}
                                        type="button"
                                        initial={false}
                                        animate={animation}
                                        transition={{
                                            type: "spring",
                                            stiffness: 230,
                                            damping: 26,
                                            mass: 0.8,
                                        }}
                                        onClick={() => changeIndex(index)}
                                        aria-label={`Ver evento ${index + 1} de ${totalItems}`}
                                        aria-current={isActive}
                                        className={`absolute overflow-hidden rounded-2xl border bg-slate-950 text-left outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-[#B83228] ${
                                            isActive
                                                ? "border-[#B83228]/80 shadow-[0_18px_55px_rgba(0,0,0,0.5)]"
                                                : "border-slate-700/80 shadow-xl"
                                        }`}
                                        style={{
                                            /*
                                             * Formato horizontal 16:9.
                                             * La tarjeta central llega hasta 780px
                                             * de ancho en pantallas grandes.
                                             */
                                            width: "clamp(260px, 62vw, 780px)",
                                            aspectRatio: "16 / 9",
                                            willChange: "transform, opacity",
                                            backfaceVisibility: "hidden",
                                            transformStyle: "preserve-3d",
                                        }}
                                    >
                                        <img
                                            src={item.imageUrl}
                                            alt={
                                                item.altText ||
                                                `Evento ${index + 1}`
                                            }
                                            loading={
                                                isActive ? "eager" : "lazy"
                                            }
                                            draggable={false}
                                            className="block h-full w-full object-cover"
                                        />

                                        <div
                                            className={`pointer-events-none absolute inset-0 transition-opacity ${
                                                isActive
                                                    ? "bg-gradient-to-t from-black/25 via-transparent to-transparent"
                                                    : "bg-black/35"
                                            }`}
                                        />
                                    </motion.button>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="relative mt-5 flex items-center justify-center gap-2 sm:mt-6 sm:gap-3">
                    {items.map((item, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <motion.button
                                key={`thumbnail-${item.id}`}
                                type="button"
                                onClick={() => changeIndex(index)}
                                aria-label={`Seleccionar evento ${index + 1}`}
                                aria-selected={isActive}
                                role="tab"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative h-9 w-14 overflow-hidden rounded-lg border transition-all sm:h-10 sm:w-16 ${
                                    isActive
                                        ? "border-[#B83228] ring-2 ring-[#B83228]/40"
                                        : "border-slate-700 opacity-60 hover:border-slate-400 hover:opacity-100"
                                }`}
                            >
                                <img
                                    src={item.imageUrl}
                                    alt=""
                                    loading="lazy"
                                    className="block h-full w-full object-cover"
                                />

                                {isActive && (
                                    <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#B83228] text-white">
                                        <Check size={10} strokeWidth={3} />
                                    </span>
                                )}
                            </motion.button>
                        );
                    })}
                </div>

                <p className="relative mt-3 text-center text-xs tracking-wide text-slate-500">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(totalItems).padStart(2, "0")}
                </p>
            </div>
        </div>
    );
}