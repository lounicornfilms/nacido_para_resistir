"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const ref = useRef(null);
    const [visits, setVisits] = useState<number | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    useEffect(() => {
        fetch("/api/visits")
            .then((r) => r.json())
            .then((data) => setVisits(data.count))
            .catch(() => {});
    }, []);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-grit-black">
            {/* Parallax Background */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-grit-black/50 to-grit-black z-10"></div>
                <div className="relative w-full h-[120%]">
                    <Image
                        src="/hero-bg.jpg"
                        alt="Póster Nacidos para Resistir"
                        fill
                        className="object-cover grayscale brightness-50 opacity-60"
                        priority
                    />
                </div>
            </motion.div>

            {/* Content */}
            <div className="container-site relative z-20 text-center">
                <motion.div
                    style={{ opacity: opacityText, scale: scaleText }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="pt-24"
                >
                    <img
                        src="/logo-documental.svg"
                        alt="Nacidos para Resistir"
                        className="h-56 md:h-80 mx-auto mb-10"
                    />
                    <span className="font-jetbrains text-blood-red text-sm uppercase tracking-[0.3em] mb-4 block">
                        HUB TRANSMEDIA // BARRANQUILLA 2026
                    </span>

                    <p className="font-jetbrains text-xs md:text-sm text-blood-red tracking-[0.3em] uppercase mb-8 md:mb-12">
                        UNA CIUDAD, UNA BANDA, UN SONIDO QUE RESISTE.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
                        <button
                            onClick={() => document.getElementById('documental')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary group brutalist-border"
                        >
                            VER DOCUMENTAL
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">play_circle</span>
                        </button>

                        <a
                            href="#escena"
                            className="font-jetbrains text-blood-red uppercase text-xs tracking-widest hover:text-bone-white transition-all border-b border-blood-red/50 pb-1 no-underline"
                        >
                            EXPLORAR LA ESCENA
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-70"
            >
                <span className="font-jetbrains text-[10px] text-blood-red uppercase tracking-tighter">DESLIZA PARA EMPEZAR</span>
                <div className="w-px h-16 bg-gradient-to-b from-blood-red to-transparent"></div>
            </motion.div>

            {/* Visit Counter */}
            {visits !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute bottom-10 right-6 md:right-12 font-jetbrains text-[9px] text-bone-dim/30 uppercase tracking-widest"
                >
                    VISITAS // {visits.toLocaleString()}
                </motion.div>
            )}
        </section>
    );
}
