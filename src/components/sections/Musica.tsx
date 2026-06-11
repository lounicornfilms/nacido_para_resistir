"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LinkItem {
  platform: string;
  url: string;
  icon: string;
}

const bands = [
    {
        name: "LEÓN BRUNO",
        genre: "Rock Alternativo",
        description: "Poesía visceral y guitarras melódicas. El puente entre la nostalgia y la furia de la ciudad.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQCdSycTMPaNFj5qmbfnQ9Hr60tmHUl3PyQP4IIlU-MygOln1Ki77xE2f5FgSYc51IJm4Xr64O76HPt0IoAwgcKkm2uOpw6IDrhQwuMudW6v_WKqw9OuT0djbz4vlHLi2XW1o3InYmX5NNHxWQIxXNYE110qix_9NF-Aky9Q_yHydUsJdDGKc48k-Xr7KL-pm91d4NxgV_AGt4DRjIbCqv_7Q-XGXqZIYSEpGquIsByc4RGsiaF_v5u_PLf-mnouZB7eEYL1cQM-E",
        links: [
            { platform: "Spotify", url: "https://open.spotify.com/intl-es/artist/2n1p6uzXdOpQnxYTz3p9TT", icon: "album" },
            { platform: "Instagram", url: "https://www.instagram.com/leonbrunoband/", icon: "podcasts" },
        ]
    },
    {
        name: "SICOTRÓPICO",
        genre: "Rock Psicodélico",
        description: "Viajes sonoros y experimentación. La otra cara del trópico, donde la mente vuela entre distorsión.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADeBsofGZ4N81zC7rjXI6QDosY9fPNu6-1MBnU8Xs_zJGSqmQ1J6NKL8fY_ys5jeKQ8DABrkOQME9uft51S3xsDPSSCxcDGojzwoUL9bMDgVvGtYNvE-Vp9dgT045XbnVHa2_ULug4lDePoE6wnYxqHemNDWObE42poWbVPUGsriEpICD5lPAUqpZMMoCsMWrSlwAQBTK3TUV_T7Bp759gqFNReCykphBzGRAWCkPwhtc-HHV5l_J1u3DSkAemoR2YtrrCK2NHxas",
        links: [
            { platform: "Instagram", url: "https://www.instagram.com/sicotropico.band/", icon: "podcasts" },
            { platform: "Spotify", url: "https://open.spotify.com/intl-es/artist/3lL0BI5VcKmDGyq5Y6Q38B", icon: "album" },
        ]
    },
    {
        name: "UNDER THE LEGACY",
        genre: "Groove Metal / Doom",
        description: "Potencia cruda y groove metal. Una pared de sonido que define la escena metalera barranquillera.",
        image: "/images/galeria/Under_the_legacy_sesion_fotos-2025.jpg",
        links: [
            { platform: "Instagram", url: "https://www.instagram.com/underthelegacy/", icon: "podcasts" },
        ]
    },
    {
        name: "CERBERUS",
        genre: "Metal",
        description: "Metal pesado con actitud. Una de las bandas más representativas de la nueva escena underground.",
        image: "/images/galeria/cerberrs_guturalfest_3_mayo_2026.JPG",
        links: [
            { platform: "Spotify", url: "https://open.spotify.com/intl-es/artist/28btzPMSqTAtvQkvQ5T2Ei", icon: "album" },
        ]
    },
    {
        name: "PUGNUS IGNUS",
        genre: "Metal",
        description: "Fuerza cruda desde el underground. Una banda que representa la resistencia del metal barranquillero.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADeBsofGZ4N81zC7rjXI6QDosY9fPNu6-1MBnU8Xs_zJGSqmQ1J6NKL8fY_ys5jeKQ8DABrkOQME9uft51S3xsDPSSCxcDGojzwoUL9bMDgVvGtYNvE-Vp9dgT045XbnVHa2_ULug4lDePoE6wnYxqHemNDWObE42poWbVPUGsriEpICD5lPAUqpZMMoCsMWrSlwAQBTK3TUV_T7Bp759gqFNReCykphBzGRAWCkPwhtc-HHV5l_J1u3DSkAemoR2YtrrCK2NHxas",
        links: [
            { platform: "Spotify", url: "https://open.spotify.com/intl-es/artist/3Lz8MGncCshcacozdre8E3", icon: "album" },
        ]
    },
    {
        name: "FREEWILL",
        genre: "Rock",
        description: "Sonido contundente y actitud de resistencia. Una banda que construye su camino en la escena local.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADeBsofGZ4N81zC7rjXI6QDosY9fPNu6-1MBnU8Xs_zJGSqmQ1J6NKL8fY_ys5jeKQ8DABrkOQME9uft51S3xsDPSSCxcDGojzwoUL9bMDgVvGtYNvE-Vp9dgT045XbnVHa2_ULug4lDePoE6wnYxqHemNDWObE42poWbVPUGsriEpICD5lPAUqpZMMoCsMWrSlwAQBTK3TUV_T7Bp759gqFNReCykphBzGRAWCkPwhtc-HHV5l_J1u3DSkAemoR2YtrrCK2NHxas",
        links: [
            { platform: "Facebook", url: "https://www.facebook.com/freewill.strong/", icon: "groups" },
            { platform: "YouTube", url: "https://www.youtube.com/@freewill5591", icon: "video_library" },
        ]
    },
    {
        name: "LA ÚLTIMA BATALLA",
        genre: "Metal",
        description: "Potencia sonora desde el underground. Una banda que forja su identidad en la escena barranquillera.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADeBsofGZ4N81zC7rjXI6QDosY9fPNu6-1MBnU8Xs_zJGSqmQ1J6NKL8fY_ys5jeKQ8DABrkOQME9uft51S3xsDPSSCxcDGojzwoUL9bMDgVvGtYNvE-Vp9dgT045XbnVHa2_ULug4lDePoE6wnYxqHemNDWObE42poWbVPUGsriEpICD5lPAUqpZMMoCsMWrSlwAQBTK3TUV_T7Bp759gqFNReCykphBzGRAWCkPwhtc-HHV5l_J1u3DSkAemoR2YtrrCK2NHxas",
        links: [
            { platform: "Bandcamp", url: "https://ultimabatalla.bandcamp.com/album/ltima-batalla-2", icon: "music_note" },
        ]
    },
];

export default function Musica() {
    return (
        <section id="musica" className="section-spacing bg-grit-black text-bone-white">
            <div className="container-site">
                <div className="mb-12">
                    <div className="narrative-marker">
                        <span className="material-symbols-outlined text-sm">speaker</span>
                        FICHA DE BANDAS // ARCHIVO DISCOGRÁFICO
                    </div>
                    <h2 className="font-bebas text-5xl md:text-8xl text-bone-white leading-tight uppercase">EL SONIDO DE LA<br /><span className="text-blood-red">CALLE</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {bands.map((band, index) => (
                        <motion.div
                            key={band.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col sm:flex-row gap-6 items-start bg-grit-dark/40 p-1 brutalist-border"
                        >
                            <div className="w-full sm:w-1/3 aspect-square overflow-hidden relative border-r-2 border-blood-red/20">
                                <Image src={band.image} alt={band.name} fill className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" sizes="(max-width: 640px) 100vw, 33vw" />
                                <div className="absolute top-2 left-2 bg-blood-red/80 px-2 py-0.5 font-jetbrains text-[8px] uppercase tracking-widest">EN LINEA</div>
                            </div>
                            <div className="w-full sm:w-2/3 p-4 pr-12">
                                <h3 className="font-bebas text-4xl text-bone-white group-hover:text-blood-red transition-colors mb-2 uppercase">{band.name}</h3>
                                <p className="font-jetbrains text-[10px] text-blood-red uppercase mb-4 tracking-widest">{band.genre}</p>
                                <p className="font-archivo text-sm text-bone-dim italic mb-6">"{band.description}"</p>

                                <div className="flex gap-4">
                                    {band.links.map((link) => (
                                        <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="material-symbols-outlined text-bone-white hover:text-blood-red transition-colors no-underline" title={link.platform}>
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute bottom-4 right-4 text-white/5 font-bebas text-6xl pointer-events-none group-hover:text-blood-red/10 transition-colors">#{index + 1}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
