// src/components/layout/SectionWrapper.jsx
const SectionWrapper = ({ id, children }) => {
    return (
        <section
        id={id}
        className="relative z-0 scroll-mt-20 bg-[#0A0D14] py-12"
        >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {children}
        </div>
        </section>
    );
};

export default SectionWrapper;