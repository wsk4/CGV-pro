import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/cgv-pro/61571780092731/",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cgvproevents/",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@cesarelmanager",
    icon: FaTiktok,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@cgvpro",
    icon: FaYoutube,
  },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="scroll-mt-24 relative overflow-hidden border-t border-[#334155] bg-[#0A0D14] text-white"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#B83228]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-[#8F2620]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B83228]" />

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A0AABF]">
                Comunidad CGV
              </p>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Conéctate con nosotros
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-[#A0AABF] md:text-base">
              Síguenos en nuestras redes sociales y mantente al día con
              nuestras novedades, proyectos y servicios.
            </p>
          </div>

          <nav
            aria-label="Redes sociales de CGV Pro"
            className="flex flex-wrap gap-3 md:justify-end"
          >
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar CGV Pro en ${name}`}
                title={`Visitar ${name}`}
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-[#334155] bg-[#161B26] text-[#A0AABF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B83228] hover:bg-[#B83228] hover:text-white hover:shadow-[0_10px_30px_rgba(184,50,40,0.28)] focus:outline-none focus:ring-2 focus:ring-[#B83228] focus:ring-offset-2 focus:ring-offset-[#0A0D14]"
              >
                <Icon
                  aria-hidden="true"
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-[#334155] pt-6 text-sm text-[#A0AABF] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} CGV. Todos los derechos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex w-fit items-center gap-2 text-[#A0AABF] transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#B83228] focus:ring-offset-2 focus:ring-offset-[#0A0D14]"
          >
            Volver arriba

            <FaArrowUp
              aria-hidden="true"
              size={13}
              className="text-[#B83228] transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;