// src/components/layout/SectionWrapper.jsx
import React from "react";

const SectionWrapper = ({ id, children }) => {
    // SectionWrapper se utiliza para anclar la navegación basada en scroll y agrupar contenido de forma lógica.
    return (
        <section
        id={id}
        className="py-12 scroll-mt-20"
        >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {children}
        </div>
        </section>
    );
};

export default SectionWrapper;