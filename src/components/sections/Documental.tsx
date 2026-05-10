"use client";

import { motion } from "framer-motion";

export default function Documental() {
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
                    {/* Video Player Frame & Tech Specs */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
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

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-grit-dark/50 p-6 border-l-2 border-blood-red/30 italic"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="font-jetbrains text-[10px] text-blood-red uppercase mb-1">Director/Productor</p>
                                    <p className="font-bebas text-xl text-bone-white uppercase">Luisa Álvarez</p>
                                </div>
                                <div>
                                    <p className="font-jetbrains text-[10px] text-blood-red uppercase mb-1">Cámara</p>
                                    <p className="font-bebas text-xl text-bone-white uppercase">Bella Santoya</p>
                                </div>
                                <div>
                                    <p className="font-jetbrains text-[10px] text-blood-red uppercase mb-1">Sonido</p>
                                    <p className="font-bebas text-xl text-bone-white uppercase">Yohan de la Espriella</p>
                                </div>
                                <div>
                                    <p className="font-jetbrains text-[10px] text-blood-red uppercase mb-1">Edición</p>
                                    <p className="font-bebas text-xl text-bone-white uppercase">Isaac Indaburo</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex gap-4">
                            <span className="bg-blood-red/10 border border-blood-red/30 px-3 py-1 font-jetbrains text-[10px] text-blood-red uppercase">Full HD</span>
                            <span className="bg-blood-red/10 border border-blood-red/30 px-3 py-1 font-jetbrains text-[10px] text-blood-red uppercase">Stereo</span>
                            <span className="bg-blood-red/10 border border-blood-red/30 px-3 py-1 font-jetbrains text-[10px] text-blood-red uppercase">5 min</span>
                        </div>
                    </div>

                    {/* Synopsis */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="brutalist-card"
                        >
                            <h3 className="font-bebas text-3xl text-blood-red mb-4 uppercase">LA PREMISA</h3>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
