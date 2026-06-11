"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "#documental", label: "El Documental" },
    { href: "#escena", label: "La Escena" },
    { href: "#personajes", label: "Personajes" },
    { href: "#envivo", label: "En Vivo" },
    { href: "#musica", label: "Música" },
    { href: "#galeria", label: "Bajo El Lente" },
    { href: "#prensa", label: "Prensa" },
    { href: "/documentacion", label: "Documentación" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-grit-black/90 backdrop-blur-sm border-b border-blood-red/30"
                : "bg-transparent"
                }`}
        >
            <div className="container-site flex items-center justify-center h-16">
                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-[family-name:var(--font-bebas)] text-blood-red text-sm uppercase tracking-wider hover:text-bone-white transition-colors glitch-text-hover no-underline"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
                    aria-label="Menú"
                >
                    <motion.span
                        animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-0.5 bg-bone-white"
                    />
                    <motion.span
                        animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-6 h-0.5 bg-bone-white"
                    />
                    <motion.span
                        animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-0.5 bg-bone-white"
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-grit-black/95 backdrop-blur-md border-t border-blood-red/30 overflow-hidden"
                    >
                        <div className="container-site py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-[family-name:var(--font-bebas)] text-bone-white text-xl uppercase tracking-wider hover:text-blood-red transition-colors no-underline"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
