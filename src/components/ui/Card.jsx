// src/components/ui/Card.jsx
import React from "react";

const Card = ({ title, body }) => {
    // Card es un componente de UI genérico que puede renderizar contenido distinto mediante props.
    return (
        <article className="rounded-lg border bg-white p-4 shadow-sm">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{body}</p>
        </article>
    );
};

export default Card;