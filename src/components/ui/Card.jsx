// src/components/ui/Card.jsx

const Card = ({ title, body }) => {
    return (
        <article className="rounded-lg border border-[#334155] bg-[#161B26] p-4 shadow-sm">
        <h3 className="font-semibold mb-2 text-white">{title}</h3>
        <p className="text-sm text-slate-400">{body}</p>
        </article>
    );
};

export default Card;