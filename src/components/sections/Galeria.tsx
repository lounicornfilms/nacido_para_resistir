"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/galeria/Under_the_legacy_sesion_fotos-2025.jpg",
    alt: "Under The Legacy - Sesión de fotos 2025",
    span: "col-span-2 row-span-2",
    rotate: -1,
    caption: "UNDER THE LEGACY // SESIÓN 2025",
  },
  {
    src: "/images/galeria/ataraxia_guturalfest_3_mayo_2026.JPG",
    alt: "Ataraxia en el Gutural Fest",
    span: "col-span-1 row-span-1",
    rotate: 1,
    caption: "ATARAXIA // GUTURAL FEST 2026",
  },
  {
    src: "/images/galeria/cerberrs_guturalfest_3_mayo_2026.JPG",
    alt: "Cerberus en el Gutural Fest",
    span: "col-span-1 row-span-1",
    rotate: -2,
    caption: "CERBERUS // GUTURAL FEST 2026",
  },
  {
    src: "/images/galeria/cerberus2_guturalfest_3_mayo_2026.JPG",
    alt: "Cerberus sesión 2",
    span: "col-span-1 row-span-1",
    rotate: 2,
    caption: "CERBERUS II // GUTURAL FEST 2026",
  },
  {
    src: "/images/galeria/underthelegact_guturalfest_3_mayo_2026.JPG",
    alt: "Under The Leg Act en el Gutural Fest",
    span: "col-span-1 row-span-1",
    rotate: -1,
    caption: "UNDER THE LEG ACT // GUTURAL FEST 2026",
  },
  {
    src: "/images/galeria/soldhier_1.jpeg",
    alt: "Soldhier - Ensayo en vivo",
    span: "col-span-1 row-span-1",
    rotate: 0,
    caption: "SOLDHIER // ENSAYO 2025",
  },
  {
    src: "/images/galeria/soldhier_2.jpeg",
    alt: "Soldhier - Ensayo en vivo",
    span: "col-span-1 row-span-1",
    rotate: 1,
    caption: "SOLDHIER // ENSAYO 2025",
  },
  {
    src: "/images/galeria/soldhier_3.jpeg",
    alt: "Soldhier - Ensayo en vivo",
    span: "col-span-1 row-span-1",
    rotate: -1,
    caption: "SOLDHIER // ENSAYO 2025",
  },
  {
    src: "/images/galeria/UTL_1.jpg",
    alt: "Under The Legacy - Entrevista en Estudio A51",
    span: "col-span-1 row-span-1",
    rotate: -1,
    caption: "UNDER THE LEGACY // ENTREVISTA A51",
  },
  {
    src: "/images/galeria/UTL_2.jpg",
    alt: "Under The Legacy - En vivo en Rokka",
    span: "col-span-1 row-span-1",
    rotate: 1,
    caption: "UNDER THE LEGACY // EN VIVO ROKKA",
  },
  {
    src: "/images/galeria/UTL_3.jpg",
    alt: "Helena - Cantando en vivo",
    span: "col-span-1 row-span-1",
    rotate: 0,
    caption: "HELENA // CANTANDO EN VIVO",
  },
  {
    src: "/images/galeria/ultimabatalla_4b.jpg",
    alt: "La Última Batalla - Heavy Attack en 4B",
    span: "col-span-1 row-span-1",
    rotate: -1,
    caption: "LA ÚLTIMA BATALLA // HEAVY ATTACK 4B",
  },
];

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      <section id="galeria" className="bg-grit-black overflow-hidden">
        <motion.div
          ref={containerRef}
          className="relative h-[60vh] md:h-[70vh] overflow-hidden"
        >
          <motion.div
            style={{ y: heroY, scale: heroScale }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/galeria/Under_the_legacy_sesion_fotos-2025.jpg"
                alt="Galería del Proyecto"
                fill
                className="object-cover grayscale brightness-40"
                priority
              />
            </div>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-grit-black via-grit-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blood-red/30 to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-margin-desktop pb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-blood-red mb-8"
            />

            <div className="flex items-end justify-between">
              <div>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-jetbrains text-blood-red text-xs uppercase tracking-[0.3em] mb-4 block"
                >
                  ARCHIVO VISUAL // DOCUMENTAL
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="font-bebas text-6xl md:text-8xl lg:text-9xl text-bone-white uppercase leading-none"
                >
                  GALERÍA
                  <br />
                  <span className="text-blood-red">DEL PROYECTO</span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="hidden md:block text-right"
              >
                <p className="font-jetbrains text-bone-dim text-xs uppercase tracking-widest">
                  {galleryImages.length} FOTOGRAFÍAS
                </p>
                <p className="font-archivo text-bone-white/50 text-sm mt-2">
                  Archivo visual del documental
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute top-8 right-8 z-20"
          >
            <div className="font-jetbrains text-electric-indigo-light text-xs border border-electric-indigo-light/30 px-3 py-2 backdrop-blur-sm">
              <span className="text-blood-red">▸</span> SCROLL TO EXPLORE
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="px-6 md:px-margin-desktop py-8 bg-grit-dark/50 border-y border-grit-light"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-blood-red text-2xl">photo_library</span>
              <span className="font-jetbrains text-bone-dim text-xs uppercase tracking-widest">
                Archivo Fotográfico // Nacidos Para Resistir
              </span>
            </div>
            <div className="flex items-center gap-6 font-jetbrains text-xs text-bone-dim uppercase tracking-widest opacity-60">
              <span>2025-2026</span>
              <span className="w-px h-4 bg-bone-dim/30" />
              <span>BARRANQUILLA</span>
              <span className="w-px h-4 bg-bone-dim/30" />
              <span>ATLÁNTICO</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="px-6 md:px-margin-desktop py-12 md:py-20"
        >
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className="break-inside-avoid group cursor-pointer relative"
                onClick={() => setSelectedImage(image)}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative overflow-hidden brutalist-border bg-grit-dark"
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ rotate: image.rotate }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:contrast-110 group-hover:brightness-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-grit-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-jetbrains text-blood-red text-[10px] uppercase tracking-widest">
                        {image.caption}
                      </span>
                      <span className="material-symbols-outlined text-bone-white text-sm group-hover:scale-125 transition-transform">
                        zoom_in
                      </span>
                    </div>
                  </motion.div>

                  <div className="absolute top-3 left-3 w-3 h-3 border-2 border-electric-indigo-light opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blood-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-electric-indigo-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="relative">
                      <div className="absolute inset-0 animate-ping">
                        <span className="material-symbols-outlined text-bone-white/50 text-4xl">center_focus_strong</span>
                      </div>
                      <span className="material-symbols-outlined text-bone-white/30 text-4xl">center_focus_strong</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -z-10 top-2 left-2 w-full h-full bg-blood-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    x: [0, 4, 0],
                    y: [0, 4, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="px-6 md:px-margin-desktop py-16 md:py-24"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <span className="font-jetbrains text-blood-red text-xs uppercase tracking-widest mb-4 block">
                NOTA DEL DIRECTOR
              </span>
              <h2 className="font-bebas text-4xl md:text-6xl text-bone-white uppercase leading-none mb-6">
                CADA FOTO ES UN
                <span className="block text-electric-indigo-light">TESTIMONIO</span>
              </h2>
              <p className="font-archivo text-lg text-bone-dim leading-relaxed max-w-lg">
                Estas imágenes no son solo recuerdos del proceso de producción. 
                Son fragmentos de una historia que continúa escribiéndose en las 
                calles de Barranquilla. Cada rostro capturado, cada momento 
                congelado, es parte de la resistencia.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/images/concert.png"
                  alt="Concierto"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 border-4 border-blood-red m-4" />
                <div className="absolute -bottom-4 -right-4 bg-grit-dark px-6 py-4 border-l-4 border-blood-red">
                  <p className="font-jetbrains text-xs text-bone-dim uppercase tracking-widest">
                    FECHA: 2025
                  </p>
                  <p className="font-jetbrains text-xs text-bone-dim uppercase tracking-widest opacity-60">
                    BARRANQUILLA, ATLÁNTICO
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-6 md:px-margin-desktop pb-20"
        >
          <div className="bg-gradient-to-r from-grit-dark via-blood-red/20 to-grit-dark p-8 md:p-12 brutalist-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-bebas text-3xl md:text-4xl text-bone-white uppercase mb-2">
                  ¿MÁS FOTOS DEL PROYECTO?
                </h3>
                <p className="font-archivo text-bone-dim">
                  Añade más imágenes al archivo visual del documental
                </p>
              </div>
              <a
                href="https://forms.gle/dCuytmcLW7A2md7m8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary font-bebas text-xl px-8 py-4 hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined">add_photo_alternate</span>
                AÑADIR FOTOS
              </a>
            </div>
          </div>
        </motion.div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-grit-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
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
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1200}
                    height={900}
                    className="w-full h-auto max-h-[85vh] object-contain"
                    sizes="90vw"
                  />

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-grit-black to-transparent p-6"
                >
                  <span className="font-jetbrains text-blood-red text-xs uppercase tracking-widest">
                    {selectedImage.caption}
                  </span>
                  <p className="font-archivo text-bone-dim text-sm mt-1">
                    {selectedImage.alt}
                  </p>
                </motion.div>
              </motion.div>

              <div className="absolute -left-2 -top-2 w-8 h-8 bg-electric-indigo-light" />
              <div className="absolute -right-2 -bottom-2 w-6 h-6 bg-blood-red" />
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-2 h-2 bg-blood-red rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
      </section>
    </>
  );
}