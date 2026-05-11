"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Documental() {
    const [selectedPoster, setSelectedPoster] = useState(false);

    return (
        <section id="documental" className="section-spacing bg-grit-black text-bone-white border-y border-blood-red/20 shadow-[0_0_50px_rgba(139,0,0,0.05)]">
            <div className="container-site">
                <div className="mb-12">
                    <div className="narrative-marker">
                        <span className="material-symbols-outlined text-sm">folder_open</span>
                        EXPEDIENTE #001 // EL DOCUMENTAL
                    </div>
                    <h2 className="font-bebas text-5xl md:text-7xl text-bone-white uppercase">SINOPSIS DEL PROYECTO</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column - Video & Technical Data */}
                    <div className="lg:col-span-7 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative brutalist-border p-2 bg-grit-dark shadow-2xl"
                        >
                            <div className="aspect-video w-full bg-black relative">
                                <iframe
                                    className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                                    src="https://www.youtube.com/embed/gITVbLHIJBY"
                                    title="Nacidos para Resistir Trailer"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="mt-4 flex justify-between items-center px-2">
                                <span className="font-jetbrains text-[10px] text-blood-red uppercase tracking-widest animate-pulse">● GRABANDO // LIVE FEED</span>
                                <span className="font-jetbrains text-[10px] text-bone-dim uppercase">TRÁILER OFICIAL V.1.0</span>
                            </div>
                        </motion.div>

                        {/* Technical Data */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="brutalist-card"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-blood-red text-xl">settings</span>
                                <h3 className="font-bebas text-xl text-blood-red uppercase">Datos Técnicos</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                <div>
                                    <p className="font-jetbrains text-[10px] text-bone-dim uppercase mb-1">Duración</p>
                                    <p className="font-bebas text-2xl text-bone-white">5 MIN</p>
                                </div>
                                <div>
                                    <p className="font-jetbrains text-[10px] text-bone-dim uppercase mb-1">Formato</p>
                                    <p className="font-bebas text-2xl text-bone-white">FULL HD</p>
                                </div>
                                <div>
                                    <p className="font-jetbrains text-[10px] text-bone-dim uppercase mb-1">Audio</p>
                                    <p className="font-bebas text-2xl text-bone-white">STEREO</p>
                                </div>
                            </div>
                            
                        </motion.div>

                        {/* Credits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-grit-dark/50 p-6 border-l-2 border-blood-red/30"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-jetbrains text-[10px] text-blood-red uppercase mb-1">Director</p>
                                    <p className="font-bebas text-lg text-bone-white uppercase">Luisa Álvarez</p>
                                </div>
                                <div>
                                    <p className="font-jetbrains text-[10px] text-blood-red uppercase mb-1">Cámara</p>
                                    <p className="font-bebas text-lg text-bone-white uppercase">Bella Santoya</p>
                                </div>
                                <div>
                                    <p className="font-jetbrains text-[10px] text-blood-red uppercase mb-1">Sonido</p>
                                    <p className="font-bebas text-lg text-bone-white uppercase">Yohan de la Espriella</p>
                                </div>
                                <div>
                                    <p className="font-jetbrains text-[10px] text-blood-red uppercase mb-1">Edición</p>
                                    <p className="font-bebas text-lg text-bone-white uppercase">Isaac Indaburo</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Production Logo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-4"
                        >
                            <img 
                                src="/logo-productora.svg" 
                                alt="Lou Unicorn Films" 
                                className="h-12 w-auto"
                            />
                            <div className="h-8 w-px bg-bone-white/20" />
                            <p className="font-bebas text-xl text-bone-white uppercase tracking-wider">Lounicorn Films</p>
                        </motion.div>
                    </div>

                    {/* Right Column - Synopsis & Poster */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="brutalist-card"
                        >
                            <h3 className="font-bebas text-3xl text-blood-red mb-4 uppercase">La Premisa</h3>
                            <div className="space-y-4 font-archivo text-base text-bone-dim leading-relaxed">
                                <p>
                                    Barranquilla es conocida como la capital del Carnaval y el folclor caribeño. Pero bajo esa superficie de cumbia y sol, también late otro sonido.
                                </p>
                                <p>
                                    <strong className="text-bone-white">Nacidos para Resistir</strong> sigue a la banda <strong className="text-bone-white">Under The Legacy</strong> dentro de una escena de rock que sobrevive en una ciudad donde lo predominante es el folclor. A través de su recorrido en vivo —escenarios, encuentros y comunidad— el documental revela una red de artistas que, desde distintos lugares, sostienen una misma identidad.
                                </p>
                                <p>
                                    En paralelo, la historia se conecta con el pasado a través de figuras como <strong className="text-bone-white">Pepe Enciso</strong> y <strong className="text-bone-white">Álvaro Barbosa</strong>, trazando un puente entre generaciones que han hecho del rock un lenguaje propio dentro de la cultura barranquillera.
                                </p>
                            </div>
                        </motion.div>

                        {/* Poster Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative"
                        >
                            <div className="absolute -top-3 -left-3 bg-blood-red px-3 py-1 z-10">
                                <span className="font-jetbrains text-[10px] text-bone-white uppercase tracking-widest">Póster Oficial</span>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedPoster(true)}
                                className="relative brutalist-border overflow-hidden bg-grit-dark cursor-pointer group"
                            >
                                <img
                                    src="/images/poster_nacidos_V2.png"
                                    alt="Póster Nacidos para Resistir"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-grit-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="font-bebas text-2xl text-bone-white uppercase">Nacidos Para Resistir</p>
                                    <p className="font-jetbrains text-[10px] text-bone-dim uppercase tracking-widest mt-1">Documental 2024</p>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="relative">
                                        <div className="absolute inset-0 animate-ping">
                                            <span className="material-symbols-outlined text-bone-white/50 text-5xl">zoom_in</span>
                                        </div>
                                        <span className="material-symbols-outlined text-bone-white/30 text-5xl">zoom_in</span>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-electric-indigo-light" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Poster Lightbox */}
            <AnimatePresence>
                {selectedPoster && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-grit-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-pointer"
                        onClick={() => setSelectedPoster(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, rotate: -3 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0.8, rotate: 3 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="relative max-w-4xl w-full cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedPoster(false)}
                                className="absolute -top-12 right-0 font-jetbrains text-bone-white text-xs uppercase tracking-widest hover:text-blood-red transition-colors flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined">close</span>
                                CERRAR
                            </button>

                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 border-4 border-blood-red" />
                                <img
                                    src="/images/poster_nacidos_V2.png"
                                    alt="Póster Nacidos para Resistir"
                                    className="w-full h-auto max-h-[85vh] object-contain"
                                />

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-grit-black to-transparent p-6"
                                >
                                    <p className="font-bebas text-3xl text-bone-white uppercase">Nacidos Para Resistir</p>
                                    <p className="font-jetbrains text-xs text-blood-red uppercase tracking-widest mt-2">Documental // 2024</p>
                                </motion.div>
                            </motion.div>

                            <div className="absolute -left-2 -top-2 w-8 h-8 bg-electric-indigo-light" />
                            <div className="absolute -right-2 -bottom-2 w-6 h-6 bg-blood-red" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}