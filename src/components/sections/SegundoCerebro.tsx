"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SegundoCerebro() {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <section id="cerebro" className="section-spacing bg-grit-dark text-bone-white overflow-hidden border-t-2 border-blood-red/10">
            <div className="container-site">
                <div className="mb-16">
                    <div className="narrative-marker">
                        <span className="material-symbols-outlined text-sm">psychology</span>
                        CEREBRO TRANSMEDIA // METODOLOGÍA DE INVESTIGACIÓN
                    </div>
                    <h2 className="font-bebas text-5xl md:text-8xl text-bone-white leading-tight uppercase">EL ECOSISTEMA DE<br /><span className="text-blood-red">DATOS</span></h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Visual Graph Area */}
                    <div className="lg:col-span-6 relative h-[400px] md:h-[500px] bg-grit-black brutalist-border p-4 shadow-inner overflow-hidden">
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-blood-red)_0%,_transparent_70%)]"></div>

                        <div className="absolute top-4 right-4 z-10">
                            <button
                                onClick={() => setIsZoomed(!isZoomed)}
                                className="bg-blood-red text-bone-white p-2 hover:bg-bone-white hover:text-blood-red transition-colors shadow-lg flex items-center justify-center brutalist-border"
                                title={isZoomed ? "Disminuir zoom" : "Acercar para leer notas"}
                            >
                                <span className="material-symbols-outlined">
                                    {isZoomed ? 'zoom_out' : 'zoom_in'}
                                </span>
                            </button>
                        </div>

                        <motion.div
                            initial={{ scale: 1.2, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="w-full h-full absolute inset-0 overflow-hidden"
                            style={{ cursor: isZoomed ? 'grab' : 'default' }}
                        >
                            <motion.img
                                drag={isZoomed}
                                dragConstraints={{ top: -600, left: -600, right: 600, bottom: 600 }}
                                src="/images/second_brain.png"
                                alt="Segundo Cerebro Graph"
                                className="w-full h-full object-cover grayscale contrast-150 mix-blend-screen opacity-80"
                                animate={{
                                    scale: isZoomed ? 3.5 : 1,
                                    x: isZoomed ? undefined : 0,
                                    y: isZoomed ? undefined : 0
                                }}
                                transition={isZoomed ? { duration: 0.4, ease: "easeOut" } : { duration: 0.6 }}
                            />
                        </motion.div>

                        <div className="absolute bottom-4 left-4 bg-grit-black/60 px-3 py-1 border-l-2 border-blood-red">
                            <span className="font-jetbrains text-xs text-bone-dim uppercase tracking-widest">MAPA DE CONEXIONES NEURONALES // LIVE</span>
                        </div>
                    </div>

                    {/* Description Area */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="brutalist-card">
                            <h3 className="font-bebas text-4xl text-blood-red mb-4 uppercase">RED NEURONAL DE CONOCIMIENTO</h3>
                            <p className="font-archivo text-lg text-bone-dim leading-relaxed">
                                A diferencia de una estructura de carpetas tradicional, nuestro Segundo Cerebro es un ecosistema vivo. Aquí, un presupuesto, un guion y la investigación de un personaje no son documentos aislados, sino <span className="text-bone-white font-bold">nodos conectados</span> entre sí.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 border-l-2 border-blood-red/20 bg-grit-black/30">
                                <h4 className="font-jetbrains text-sm md:text-base text-blood-red font-bold uppercase mb-2">NODOS & METADATOS</h4>
                                <p className="font-archivo text-base text-bone-dim">
                                    Archivos atómicos categorizados (Entidades, Producción, Transmedia). Clasificados rigurosamente mediante YAML Frontmatter para filtrar el ecosistema en tiempo real.
                                </p>
                            </div>
                            <div className="p-4 border-l-2 border-blood-red/20 bg-grit-black/30">
                                <h4 className="font-jetbrains text-sm md:text-base text-blood-red font-bold uppercase mb-2">ENLACES BIDIRECCIONALES</h4>
                                <p className="font-archivo text-base text-bone-dim">
                                    Cadenas lógicas de dependencias. Si un personaje cancela, el sistema nos muestra con un clic exactamente qué áreas del plan operativo y presupuesto se afectan.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 border border-blood-red/10 bg-grit-black/30">
                            <h4 className="font-jetbrains text-sm md:text-base text-blood-red font-bold uppercase mb-2">TRANSPARENCIA INVESTIGATIVA</h4>
                            <p className="font-archivo text-base text-bone-dim">
                                El Grafo abierto demuestra visualmente la profundidad y el rigor del documental, elevando el valor del proyecto frente a inversores, jurados y académicos.
                            </p>
                        </div>

                        <a 
                            href="https://drive.google.com/file/d/19DlGZ4cKwzFGOkjcu3O5UEWsMAM7sC4P/view?usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-primary group border border-blood-red/50 bg-transparent text-blood-red hover:bg-blood-red hover:text-bone-white w-full sm:w-auto no-underline"
                        >
                            VER METODOLOGÍA COMPLETA
                            <span className="material-symbols-outlined">open_in_new</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
