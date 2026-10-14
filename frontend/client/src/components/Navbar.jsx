import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Our Process", href: "/about#process" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#E9DFD1]">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="group flex flex-col">
            <span className="text-2xl md:text-3xl tracking-[0.18em] font-serif text-[#49382D]">
               LUMIÈRE
            </span>
            <span className="text-[9px] tracking-[0.32em] text-[#A17B52] text-center">
              HANDMADE CANDLES
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm text-[#59483C] hover:text-[#A17B52] transition-colors duration-300
                after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0
                after:bg-[#A17B52] after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="hidden sm:block text-[#49382D] hover:text-[#A17B52] transition"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 5 5" />
              </svg>
            </button>

            <a
              href="/cart"
              aria-label="Shopping cart"
              className="text-[#49382D] hover:text-[#A17B52] transition"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 3h2l2.2 12.2a2 2 0 0 0 2 1.8h8.9a2 2 0 0 0 2-1.7L21 8H6" />
                <circle cx="10" cy="21" r="1" />
                <circle cx="18" cy="21" r="1" />
              </svg>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="lg:hidden text-[#49382D] p-1"
            >
              {menuOpen ? (
                <svg width="25" height="25" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="m18 6-12 12M6 6l12 12" />
                </svg>
              ) : (
                <svg width="25" height="25" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav className="lg:hidden border-t border-[#E9DFD1] py-4 flex flex-col">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm tracking-wide text-[#59483C]
                hover:text-[#A17B52] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}