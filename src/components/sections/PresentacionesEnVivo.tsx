"use client";

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
    band: "UNDER THE LEGACY",
    venue: "Gutural Fest",
    date: "3 Mayo 2026",
    description: "Groove metal desde Barranquilla. Una pared de sonido que define la escena metalera de la ciudad.",
    videoId: "D5u4uaBoCOo",
    image: "/images/galeria/Under_the_legacy_sesion_fotos-2025.jpg",
    featured: true,
    id: "LIVE-001",
  },
  {
    band: "LEÓN BRUNO",
    venue: "Sala de Ensayo",
    date: "2025",
    description: "Rock alternativo con décadas de historia. Poesía visceral desde el corazón de Barranquilla.",
    videoId: "gITVbLHIJBY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQCdSycTMPaNFj5qmbfnQ9Hr60tmHUl3PyQP4IIlU-MygOln1Ki77xE2f5FgSYc51IJm4Xr64O76HPt0IoAwgcKkm2uOpw6IDrhQwuMudW6v_WKqw9OuT0djbz4vlHLi2XW1o3InYmX5NNHxWQIxXNYE110qix_9NF-Aky9Q_yHydUsJdDGKc48k-Xr7KL-pm91d4NxgV_AGt4DRjIbCqv_7Q-XGXqZIYSEpGquIsByc4RGsiaF_v5u_PLf-mnouZB7eEYL1cQM-E",
    featured: false,
    id: "LIVE-002",
  },
  {
    band: "SICOTRÓPICO",
    venue: "En Vivo",
    date: "2025",
    description: "Rock psicodélico experimental. Viajes sonoros donde la mente vuela entre distorsión y trópico.",
    videoId: "gITVbLHIJBY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADeBsofGZ4N81zC7rjXI6QDosY9fPNu6-1MBnU8Xs_zJGSqmQ1J6NKL8fY_ys5jeKQ8DABrkOQME9uft51S3xsDPSSCxcDGojzwoUL9bMDgVvGtYNvE-Vp9dgT045XbnVHa2_ULug4lDePoE6wnYxqHemNDWObE42poWbVPUGsriEpICD5lPAUqpZMMoCsMWrSlwAQBTK3TUV_T7Bp759gqFNReCykphBzGRAWCkPwhtc-HHV5l_J1u3DSkAemoR2YtrrCK2NHxas",
    featured: false,
    id: "LIVE-003",
  },
  {
    band: "69 NOMBRES",
    venue: "Gutural Fest",
    date: "3 Mayo 2026",
    description: "Rock pop con alma urbana. El sonido barranquillero que conquistó el dial nacional.",
    videoId: "gITVbLHIJBY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAest5vfjQc5mDPKBanihLUuymY9tNuGAhwfYE267JQGShcGnG1sXSxVgVpR97bYOh00EMtfYDTTmc4DAFzBO6KxAtnQcH1-tJO16D0Jz8AZyhyDcm20pm4W2l2-gz-CVC2gi-7IvR60qgGMNdNcb4nKDanB0oM3-IJxo8sUpyBGpXuT-XWyygaAwAOGQAxqyKH4_lBtBTT_wFwddW4lmwEYHYk0Y4PITqSN0qDdHACskodKppiFFXPkQ_WhCydzPpMv5Fe8wrhJNg",
    featured: false,
    id: "LIVE-004",
  },
];

export default function PresentacionesEnVivo() {
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative bg-grit-black brutalist-border p-6"
          >
            <div className="aspect-video w-full bg-black relative mb-6 border-2 border-blood-red/50 overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                src={`https://www.youtube.com/embed/${performances[0].videoId}`}
                title={`${performances[0].band} - En Vivo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-2/3">
                <span className="font-jetbrains text-[10px] text-blood-red uppercase tracking-widest mb-2 block">{performances[0].band} // DESTACADO</span>
                <h3 className="font-bebas text-4xl text-bone-white uppercase leading-none mb-2 group-hover:text-blood-red transition-colors">{performances[0].venue}</h3>
                <p className="font-archivo text-sm text-bone-dim italic opacity-80 mb-4">{performances[0].description}</p>
              </div>
              <div className="w-full md:w-1/3 flex items-center gap-4">
                <div className="flex-1 h-1 bg-bone-white/10 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full w-2/3 bg-blood-red"></div>
                </div>
                <span className="font-jetbrains text-[10px] text-bone-dim uppercase">{performances[0].date}</span>
              </div>
            </div>
            <div className="absolute top-2 right-4 font-jetbrains text-[8px] text-blood-red opacity-50">LIVE_RECORDING_48kHz</div>
          </motion.div>

          {/* Performance List */}
          <div className="md:col-span-4 space-y-4">
            {performances.slice(1).map((perf) => (
              <motion.div
                key={perf.id}
                whileHover={{ x: 5 }}
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
            <button className="w-full py-3 border border-dashed border-blood-red/40 font-jetbrains text-[10px] text-bone-dim uppercase hover:bg-blood-red/10 transition-all mt-4">
              VER TODAS LAS PRESENTACIONES (+)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
