import React from "react";

const Header = ({ logo, title, subtitle }) => {
    return (
        <section id="home" className="pt-24 pb-10 border-b border-[#334155]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start gap-3">
            {logo ? (
                <img
                src={logo}
                alt="CGV Pro Events"
                className="h-12 w-auto sm:h-14 md:h-16"
                />
            ) : (
                title && (
                <h1 className="text-3xl font-bold text-white md:text-4xl">
                    {title}
                </h1>
                )
            )}
            <p className="text-slate-300">{subtitle}</p>
            </div>
        </div>
        </section>
    );
};

export default Header;