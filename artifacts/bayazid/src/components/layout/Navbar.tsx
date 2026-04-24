import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Bio", href: "#bio" },
  { name: "Sound", href: "#sound" },
  { name: "Book", href: "#booking" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for navbar
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-panel py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/bayazid-logo.png`}
              alt="BAYAZID"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-300 uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}presskit`}
              className="flex items-center gap-2 px-4 py-2 border border-primary/40 text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FileText size={13} /> Press Kit
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-display font-bold text-white hover:text-primary transition-colors duration-300 uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}presskit`}
                className="text-2xl font-display font-bold text-primary hover:text-white transition-colors duration-300 uppercase tracking-widest flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileText size={20} /> Press Kit
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
