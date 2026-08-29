import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

const MAX_VISIBLE_DISTANCE = 2;
const TRANSITION_DURATION = 120;

export default function CoverFlowCarousel({
    items = [],
    initialIndex = 0,
    onItemChange,
    className = "",
    }) {
    const carouselRef = useRef(null);
    const animationTimeoutRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(() =>
        Math.min(Math.max(initialIndex, 0), Math.max(items.length - 1, 0))
    );

    const [carouselWidth, setCarouselWidth] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const totalItems = items.length;

    const safeActiveIndex =
        totalItems > 0
        ? Math.min(Math.max(activeIndex, 0), totalItems - 1)
        : 0;

    useLayoutEffect(() => {
        const element = carouselRef.current;

        if (!element) return undefined;

        const updateWidth = () => {
        setCarouselWidth(element.clientWidth);
        };

        updateWidth();

        const observer = new ResizeObserver(updateWidth);
        observer.observe(element);

        return () => {
        observer.disconnect();
        };
    }, []);

    useEffect(() => {
        return () => {
        if (animationTimeoutRef.current) {
            window.clearTimeout(animationTimeoutRef.current);
        }
        };
    }, []);

    const cardWidth = useMemo(() => {
        if (carouselWidth <= 0) return 460;

        return Math.min(Math.max(carouselWidth * 0.72, 400), 1080);
    }, [carouselWidth]);

    const cardHeight = cardWidth * (9 / 16);

    const changeIndex = useCallback(
        (nextIndex) => {
        if (totalItems === 0 || isAnimating) return;

        const normalizedIndex = Math.min(
            Math.max(nextIndex, 0),
            totalItems - 1
        );

        if (normalizedIndex === safeActiveIndex) return;

        setIsAnimating(true);
        setActiveIndex(normalizedIndex);
        onItemChange?.(normalizedIndex);

        if (animationTimeoutRef.current) {
            window.clearTimeout(animationTimeoutRef.current);
        }

        animationTimeoutRef.current = window.setTimeout(() => {
            setIsAnimating(false);
        }, TRANSITION_DURATION);
        },
        [isAnimating, onItemChange, safeActiveIndex, totalItems]
    );

    const goPrevious = useCallback(() => {
        changeIndex(safeActiveIndex - 1);
    }, [changeIndex, safeActiveIndex]);

    const goNext = useCallback(() => {
        changeIndex(safeActiveIndex + 1);
    }, [changeIndex, safeActiveIndex]);

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

    const visibleItems = useMemo(() => {
        return items
        .map((item, index) => ({
            item,
            index,
            offset: index - safeActiveIndex,
        }))
        .filter(
            ({ offset }) => Math.abs(offset) <= MAX_VISIBLE_DISTANCE
        );
    }, [items, safeActiveIndex]);

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
    const lateralGap = Math.max(28, carouselWidth * 0.045);

    const firstPosition =
        cardWidth / 2 +
        cardWidth * 0.34 +
        lateralGap;

    const secondPosition =
        cardWidth / 2 +
        cardWidth * 0.72 +
        lateralGap;

    if (distance === 1) {
        return {
            x: direction * firstPosition,
            scale: 0.72,
            rotateY: direction * -8,
            opacity: 0.46,
            zIndex: 20,
        };
    }

    return {
        x: direction * secondPosition,
        scale: 0.54,
        rotateY: direction * -6,
        opacity: 0.16,
        zIndex: 10,
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
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-[linear-gradient(145deg,#151a24_0%,#0d1119_55%,#10151f_100%)] px-3 py-5 shadow-[0_25px_90px_rgba(0,0,0,0.38)] sm:px-6 sm:py-6 md:px-8 md:py-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,50,40,0.12),transparent_48%)]" />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B83228]/50 to-transparent" />

            <div
            ref={carouselRef}
            className="relative mx-auto flex h-[300px] w-full max-w-[1540px] items-center justify-center overflow-hidden sm:h-[360px] md:h-[440px] lg:h-[520px]"
            style={{
                perspective: "1400px",
                perspectiveOrigin: "center center",
            }}
            >
            <button
                type="button"
                onClick={goPrevious}
                disabled={safeActiveIndex === 0 || isAnimating}
                aria-label="Evento anterior"
                className="absolute left-3 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-100/95 text-slate-800 shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-sm transition hover:scale-110 hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 sm:left-5 md:h-12 md:w-12"
            >
                <ChevronLeft size={22} />
            </button>

            <button
                type="button"
                onClick={goNext}
                disabled={
                safeActiveIndex === totalItems - 1 || isAnimating
                }
                aria-label="Siguiente evento"
                className="absolute right-3 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-100/95 text-slate-800 shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-sm transition hover:scale-110 hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 sm:right-5 md:h-12 md:w-12"
            >
                <ChevronRight size={22} />
            </button>

            <div
                className="relative flex h-full w-full items-center justify-center"
                style={{
                transformStyle: "preserve-3d",
                }}
            >
                <AnimatePresence initial={false}>
                {visibleItems.map(({ item, index, offset }) => {
                    const isActive = index === safeActiveIndex;
                    const animation = getCardAnimation(offset);

                    return (
                    <motion.button
                        key={item.id}
                        type="button"
                        initial={false}
                        animate={animation}
                        transition={{
                        duration: TRANSITION_DURATION / 1000,
                        ease: [0.16, 1, 0.3, 1],
                        }}
                        onClick={() => changeIndex(index)}
                        aria-label={`Ver evento ${index + 1} de ${totalItems}`}
                        aria-current={isActive}
                        className={`absolute overflow-hidden rounded-2xl border bg-slate-950 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#B83228] ${
                        isActive
                            ? "border-[#B83228] shadow-[0_18px_65px_rgba(0,0,0,0.58)] ring-1 ring-[#B83228]/30"
                            : "border-slate-600/80 shadow-[0_12px_35px_rgba(0,0,0,0.4)]"
                        }`}
                        style={{
                        width: `${cardWidth}px`,
                        height: `${cardHeight}px`,
                        willChange: "transform, opacity",
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                        }}
                    >
                        <img
                        src={item.imageUrl}
                        alt={item.altText || `Evento ${index + 1}`}
                        loading={isActive ? "eager" : "lazy"}
                        draggable={false}
                        className="block h-full w-full object-cover"
                        />

                        <div
                        className={`pointer-events-none absolute inset-0 ${
                            isActive
                            ? "bg-gradient-to-t from-black/25 via-transparent to-transparent"
                            : "bg-black/55"
                        }`}
                        />
                    </motion.button>
                    );
                })}
                </AnimatePresence>
            </div>
            </div>

            <div
            className="relative mt-3 flex items-center justify-center gap-2 sm:mt-4 sm:gap-3"
            role="tablist"
            aria-label="Seleccionar evento"
            >
            {items.map((item, index) => {
                const isActive = index === safeActiveIndex;

                return (
                <motion.button
                    key={`thumbnail-${item.id}`}
                    type="button"
                    onClick={() => changeIndex(index)}
                    disabled={isAnimating}
                    aria-label={`Seleccionar evento ${index + 1}`}
                    aria-selected={isActive}
                    role="tab"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative h-10 w-16 overflow-hidden rounded-lg border transition-all disabled:cursor-not-allowed sm:h-11 sm:w-[4.5rem] ${
                    isActive
                        ? "border-[#B83228] ring-2 ring-[#B83228]/40"
                        : "border-slate-700 opacity-70 hover:border-slate-400 hover:opacity-100"
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

            <p className="relative mt-2 text-center text-[0.7rem] font-medium tracking-[0.2em] text-slate-500">
            {String(safeActiveIndex + 1).padStart(2, "0")} /{" "}
            {String(totalItems).padStart(2, "0")}
            </p>
        </div>
        </div>
    );
}