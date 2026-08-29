import logo from "../../assets/logo-cgv.webp";

const Footer = () => {
    return (
        <footer className="border-t border-[#334155] bg-[#0A0D14]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <a href="#home" className="flex items-center gap-3">
            <img
                src={logo}
                alt="CGV Pro"
                className="h-8 w-auto opacity-90"
            />
            </a>

            <p className="text-sm text-slate-400">
            Producción de eventos corporativos en Chile.
            </p>
        </div>
        </footer>
    );
};

export default Footer;