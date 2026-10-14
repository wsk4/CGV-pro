// src/components/ui/Card.jsx

const Card = ({ title, body }) => {
    return (
        <article className="rounded-2xl border border-[#334155] bg-[#161B26] p-6 shadow-md shadow-black/20 transition-[transform,border-color,box-shadow] duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:border-[#B83228]/60 motion-safe:hover:shadow-lg motion-safe:hover:shadow-black/30 motion-reduce:transition-none">
        <h3 className="font-semibold text-lg mb-3 text-white">{title}</h3>
        <p className="text-base leading-relaxed text-slate-300">{body}</p>
        </article>
    );
};

export default Card;