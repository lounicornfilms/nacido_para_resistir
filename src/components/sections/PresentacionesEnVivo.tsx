"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface LivePerformance {
  band: string;
  venue: string;
  date: string;
  description: string;
  videoId: string;
  image: string;
  featured: boolean;
  id: string;
}

const performances: LivePerformance[] = [
  {
    band: "SOLDHIER",
    venue: "Sala de Ensayo",
    date: "2025",
    description: "Power metal desde Barranquilla. Ensayo crudo en sala, la esencia del metal underground local.",
    videoId: "D5u4uaBoCOo",
    image: "/images/galeria/Under_the_legacy_sesion_fotos-2025.jpg",
    featured: true,
    id: "LIVE-001",
  },
  {
    band: "UNDER THE LEGACY",
    venue: "ROKKA",
    date: "Urbana Rock 2025",
    description: "Batalla de bandas del Urbana Rock 2025. Escenario que ya no existe (ROKKA fue cerrado) — registro de un lugar desaparecido de la escena barranquillera.",
    videoId: "0xAl6BqmTlU",
    image: "/images/galeria/Under_the_legacy_sesion_fotos-2025.jpg",
    featured: false,
    id: "LIVE-002",
  },
  {
    band: "FREEWILL",
    venue: "El Claustrofóbico 4B",
    date: "Heavy Attack",
    description: "Sonido contundente y actitud de resistencia. Una banda que construye su camino en la escena local, grabada en el mítico 4B, uno de los bares más antiguos del rock en la ciudad.",
    videoId: "N6FV1WQboD4",
    image: "/images/bandas/freewill.png",
    featured: false,
    id: "LIVE-003",
  },
  {
    band: "ÚLTIMA BATALLA",
    venue: "El Claustrofóbico 4B",
    date: "Heavy Attack",
    description: "Presentación en vivo en el mítico 4B, uno de los bares más antiguos del rock en Barranquilla.",
    videoId: "ek4nirLcAb0",
    image: "/images/bandas/ultimabatalla.png",
    featured: false,
    id: "LIVE-004",
  },
  {
    band: "UNDER THE LEGACY",
    venue: "El Claustrofóbico 4B",
    date: "En Vivo",
    description: "Presentación en vivo desde el mítico 4B, el bar de rock más longevo de Barranquilla. Un lugar que respira historia y resistencia underground.",
    videoId: "fCln0T0O-CM",
    image: "/images/galeria/Under_the_legacy_sesion_fotos-2025.jpg",
    featured: false,
    id: "LIVE-005",
  },
];

export default function PresentacionesEnVivo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = performances[activeIndex];

  return (
    <section id="envivo" className="section-spacing bg-grit-dark text-bone-white border-y-4 border-blood-red/20 shadow-none">
      <div className="container-site">
        <div className="mb-12">
          <div className="narrative-marker">
            <span className="material-symbols-outlined text-sm">live_tv</span>
            ARCHIVO EN VIVO // PRESENTACIONES
          </div>
          <div className="md:flex justify-between items-end">
            <h2 className="font-bebas text-5xl md:text-8xl text-bone-white leading-tight uppercase">EN VIVO DESDE<br /><span className="text-blood-red">LA ESCENA</span></h2>
            <div className="hidden md:block py-2">
              <div className="flex gap-1 items-end h-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: `${h * 10}%` }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1 bg-blood-red"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Performance */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-8 group relative bg-grit-black brutalist-border p-6"
          >
            <div className="aspect-video w-full bg-black relative mb-6 border-2 border-blood-red/50 overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                src={`https://www.youtube.com/embed/${active.videoId}`}
                title={`${active.band} - En Vivo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-2/3">
                <span className="font-jetbrains text-[10px] text-blood-red uppercase tracking-widest mb-2 block">{active.band} // DESTACADO</span>
                <h3 className="font-bebas text-4xl text-bone-white uppercase leading-none mb-2 group-hover:text-blood-red transition-colors">{active.venue}</h3>
                <p className="font-archivo text-sm text-bone-dim italic opacity-80 mb-4">{active.description}</p>
              </div>
              <div className="w-full md:w-1/3 flex items-center gap-4">
                <div className="flex-1 h-1 bg-bone-white/10 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full w-2/3 bg-blood-red"></div>
                </div>
                <span className="font-jetbrains text-[10px] text-bone-dim uppercase">{active.date}</span>
              </div>
            </div>
            <div className="absolute top-2 right-4 font-jetbrains text-[8px] text-blood-red opacity-50">LIVE_RECORDING_48kHz</div>
          </motion.div>

          {/* Performance List */}
          <div className="md:col-span-4 space-y-4">
            {performances.map((perf, i) => i !== activeIndex && (
              <motion.div
                key={perf.id}
                whileHover={{ x: 5 }}
                onClick={() => setActiveIndex(i)}
                className="bg-grit-black p-4 border-l-2 border-blood-red hover:bg-blood-red/5 transition-colors cursor-pointer"
              >
                <span className="font-jetbrains text-[9px] text-blood-red uppercase block mb-1">{perf.band}</span>
                <h4 className="font-bebas text-xl text-bone-white uppercase mb-2 leading-none">{perf.venue}</h4>
                <div className="flex justify-between items-center opacity-60">
                  <span className="font-jetbrains text-[9px] text-bone-white uppercase">{perf.id}</span>
                  <span className="font-jetbrains text-[9px] text-bone-white uppercase">{perf.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
