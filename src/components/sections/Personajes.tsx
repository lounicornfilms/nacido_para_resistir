"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const characters = [
    {
        name: "PEPE ENCISO",
        role: "Músico / Gestor Cultural",
        bio: "Memoria viva del rock de Barranquilla. Conduce Rock Total en Uninorte FM, ha sido actor, realizador audiovisual, escritor y una autoridad cuando se habla de rock en la ciudad.",
        image: "/images/personajes/pepe.png",
        band: "Derrumbe / Alianza Punk",
        id: "EXP-042",
    },
    {
        name: "UNDER THE LEGACY",
        role: "Banda de Groove Metal",
        bio: "Banda activa y referente del metal contemporáneo en la ciudad. Representan la nueva sangre que mantiene viva la llama de la resistencia sonora.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdkqQzYx98BO4qfI7orzjXxJPh01nAwe-yNzonEaNhspQDPyGRdxdmxOl43hviPa2AD5FqG1ydRse91YeoVVflCN6s7wTpIDCKi65CE--pDz26Eh1yiG-3_1XjjHUNWkgIc8ZtRsfvT4fFrLJtm4ghf7celeRSblfQ5wuj5Pikov1bAcyWNDGAnpnaINykWoL0nBbD7N8dXe_uD4IBj8WK2gizwm6uStNEntxtb6jNUqY2w4X51CNrVAtBDhKwH2wG3hp_uyZCcHI",
        band: "Varios Integrantes",
        id: "EXP-012",
    },
    {
        name: "ÁLVARO BARBOSA",
        role: "Investigador / Sociólogo",
        bio: "Dedicado a estudiar los fenómenos contraculturales en el Caribe. Aporta la visión académica sobre por qué el rock resiste en una ciudad tropical.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnqB1FOfQ_9p_b1v_rZ-F6aM-J3zXW3v6dO9Z_L8y7x6w5u4g3z2x1c0",
        band: "Academia Uninorte",
        id: "EXP-089",
    },
    {
        name: "LUIS VIÑA",
        role: "Músico / Productor",
        bio: "Desde Momento Cero y Uninorte FM, ha sido el puente entre las bandas y el aire. Conoce los secretos de la producción detrás del ruido.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADeBsofGZ4N81zC7rjXI6QDosY9fPNu6-1MBnU8Xs_zJGSqmQ1J6NKL8fY_ys5jeKQ8DABrkOQME9uft51S3xsDPSSCxcDGojzwoUL9bMDgVvGtYNvE-Vp9dgT045XbnVHa2_ULug4lDePoE6wnYxqHemNDWObE42poWbVPUGsriEpICD5lPAUqpZMMoCsMWrSlwAQBTK3TUV_T7Bp759gqFNReCykphBzGRAWCkPwhtc-HHV5l_J1u3DSkAemoR2YtrrCK2NHxas",
        band: "Sicotrópico / Momento Cero",
        id: "EXP-051",
    },
    {
        name: "ROBERTO SOSA",
        role: "Fundador León Bruno",
        bio: "Leyenda viva del rock barranquillero. Su voz y guitarra han definido el sonido de la resistencia durante décadas en los escenarios más crudos.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQCdSycTMPaNFj5qmbfnQ9Hr60tmHUl3PyQP4IIlU-MygOln1Ki77xE2f5FgSYc51IJm4Xr64O76HPt0IoAwgcKkm2uOpw6IDrhQwuMudW6v_WKqw9OuT0djbz4vlHLi2XW1o3InYmX5NNHxWQIxXNYE110qix_9NF-Aky9Q_yHydUsJdDGKc48k-Xr7KL-pm91d4NxgV_AGt4DRjIbCqv_7Q-XGXqZIYSEpGquIsByc4RGsiaF_v5u_PLf-mnouZB7eEYL1cQM-E",
        band: "León Bruno / Leyenda Local",
        id: "EXP-099",
    },
];

export default function Personajes() {
    return (
        <section id="personajes" className="section-spacing bg-grit-black overflow-hidden">
            <div className="container-site">
                <div className="mb-16">
                    <div className="narrative-marker">
                        <span className="material-symbols-outlined text-sm">assignment_ind</span>
                        EXPEDIENTES DE PRODUCCIÓN // CASTING & ENTREVISTAS
                    </div>
                    <h2 className="font-bebas text-5xl md:text-8xl text-bone-white leading-tight uppercase">VOCES DE LA<br /><span className="text-blood-red">ESCENA</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {characters.map((char, index) => (
                        <motion.div
                            key={char.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative ${index % 2 === 1 ? 'md:mt-12' : ''}`}
                        >
                            <div className="brutalist-border p-3 bg-grit-dark overflow-hidden group-hover:rotate-1 transition-transform duration-300">
                                <div className="aspect-[3/4] overflow-hidden relative mb-4">
                                    <Image
                                        src={char.image}
                                        alt={char.name}
                                        fill
                                        className="object-cover grayscale brightness-75 group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-2 right-2 bg-blood-red text-bone-white px-2 py-0.5 font-jetbrains text-xs uppercase tracking-widest">{char.id}</div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-bebas text-3xl text-bone-white leading-none uppercase group-hover:text-blood-red transition-colors">{char.name}</h3>
                                    <p className="font-jetbrains text-sm text-blood-red uppercase tracking-widest">{char.role}</p>
                                    <div className="h-0.5 w-12 bg-blood-red/40 mb-3"></div>
                                    <p className="font-archivo text-base text-bone-dim italic mb-4">"{char.bio}"</p>

                                    <div className="pt-4 border-t border-bone-white/10 flex justify-between items-center">
                                        <span className="font-jetbrains text-xs text-bone-dim uppercase">PROYECTO: {char.band}</span>
                                        <span className="material-symbols-outlined text-blood-red text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background number */}
                            <div className="absolute -bottom-6 -right-6 font-bebas text-8xl text-white/[0.03] select-none pointer-events-none group-hover:text-blood-red/5 transition-colors">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
