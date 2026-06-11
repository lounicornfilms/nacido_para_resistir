"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const characters = [
    {
        name: "PEPE ENCISO",
        role: "Músico / Gestor Cultural",
        bio: "Memoria viva del rock de Barranquilla. Conduce Rock Total en Uninorte FM, ha sido actor, realizador audiovisual, escritor y una autoridad cuando se habla de rock en la ciudad.",
        image: "/images/personajes/pepe.png",
        band: "Rock Total",
        link: "https://www.uninorte.edu.co/web/uninorte-fm-estereo/tiempo-de-rock",
        id: "EXP-042",
    },
    {
        name: "UNDER THE LEGACY",
        role: "Banda Emergente",
        bio: "Banda emergente de la escena con influencias del rock de los setenta, de Black Sabbath y el proto heavy. Poco a poco labra un nombre dentro del underground con un sonido único en la ciudad.",
        image: "/images/personajes/UTL.png",
        band: "EP Ashes of Eternity / Recopilatorio Doom Vol. 7",
        link: "https://www.facebook.com/100083231617227/posts/in-colombia-sometimes-doom-is-better-vol-7en-las-proximas-semanas-saldr%C3%A1-para-la/974831885301190/",
        id: "EXP-012",
    },
    {
        name: "SOLDHIER",
        role: "Banda de Metal",
        bio: "Activa desde los 90, antes conocida como Metalmorfosis y luego Aldier, evolucionó hasta convertirse en Soldhier. Su sonido evoca al metal europeo —Mercyful Fate, Diamond Head— con guitarras gemelas y crudeza experimental, sin la teatralidad vocal de King Diamond.",
        image: "/images/personajes/soldhier.png",
        band: "Sin proyectos conocidos actualmente",
        link: undefined,
        id: "EXP-013",
    },
    {
        name: "RONNY CANDANOZA",
        role: "Vocalista / Gestor",
        bio: "Vocalista de Pugnus Ignus, banda de metal de la ciudad. Impulsa un proyecto de sala de ensayo para apoyar a bandas sin recursos, con la visión de grabarlas para que tengan registro de su música.",
        image: "/images/personajes/ronny.png",
        band: "Pugnus Ignus / Sala de Ensayo",
        link: undefined,
        id: "EXP-014",
    },
    {
        name: "GABRIEL ÁLVAREZ",
        role: "Guitarrista / Vocalista",
        bio: "Conocido como el Mexicano. Guitarrista y vocalista de varias bandas de la ciudad, actualmente voz principal de Ataraxia, banda de grunge barranquillera.",
        image: "/images/personajes/gabriel.png",
        band: "Ataraxia",
        link: undefined,
        id: "EXP-015",
    },
    {
        name: "ÁLVARO BARBOSA",
        role: "Baterista",
        bio: "Baterista de dos de las bandas más importantes de la ciudad: León Bruno, donde ha estado desde sus inicios a principios de los 90, y Sicotrópico, banda derivada de León. Músico influenciado por el jazz y sobre todo por Neil Peart, el fallecido baterista de Rush. Actualmente trabaja en nuevo material para Sicotrópico.",
        image: "/images/personajes/alvaro.png",
        band: "León Bruno / Sicotrópico",
        link: undefined,
        id: "EXP-089",
    },
    {
        name: "ALBERTO FORERO",
        role: "Músico / Productor / Diseñador",
        bio: "Músico, creador audiovisual, diseñador gráfico y productor de bandas de metal underground. Dueño del Estudio A51, espacio de grabación clave para la escena. También tuvo una banda propia que actualmente está en pausa.",
        image: "/images/personajes/alberto.png",
        band: "Estudio A51",
        link: undefined,
        id: "EXP-051",
    },
    {
        name: "ROBERTO SOSA",
        role: "Vocalista / Gestor Cultural",
        bio: "Músico, vocalista y gestor cultural barranquillero. Ha estado en varios proyectos, destacándose Anser, banda de power metal de la ciudad. Uno de sus más grandes aportes, junto a su equipo, es la creación del Urbana Rock Festival Internacional, el único festival que sobrevive en Barranquilla.",
        image: "/images/personajes/roberto.png",
        band: "Urbana 2027",
        link: undefined,
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
                                        {'link' in char && char.link ? (
                                            <a href={char.link} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-xs text-bone-dim uppercase hover:text-blood-red transition-colors no-underline">PROYECTO: {char.band}</a>
                                        ) : (
                                            <span className="font-jetbrains text-xs text-bone-dim uppercase">PROYECTO: {char.band}</span>
                                        )}
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
