"use client";

import { motion } from "framer-motion";

const episodes = [
    {
        character: "PEPE ENCISO",
        title: "LA GÉNESIS DEL PUNK EN LA ARENOSA",
        description: "Desde los primeros gritos en garajes hasta la consolidación de la Alianza Punk. Una historia de autogestión y ruido.",
        duration: "18:45",
        id: "AUD-01",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBweD9SLRlq5_cuDypdzQc9vn8vUWwdqWzV3LnYib9FuiLEnBrjI5zhkeS1DAuj_QJNOQZRVZXFV67zQgwtOPJxoH76I3-ec_BOdBU5JzALnN81DHLAAV-ZBc5fv3bC4Yn2FLgTHr1jfsYMCnd6B7GnG1uprw7QLrowqygqpWs2O_tb8WtZYBZcZw19XtgwXLTDTILTzBvy_QXFMPgoh9HwaCXUt5rzyRevYUSd3WEiExvpQKh1SXdCBs1zpSvtE7zCtEw131oQiS4",
    },
    {
        character: "UNDER THE LEGACY",
        title: "GROOVE METAL: LA NUEVA VIBRACIÓN",
        description: "Cómo las afinaciones bajas y los ritmos pesados encontraron su lugar en una ciudad que baila salsa y cumbia.",
        duration: "15:20",
        id: "AUD-02",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ-yT6qG8_zJ5u4f3z2x1c0",
    },
    {
        character: "ÁLVARO BARBOSA",
        role: "Academia del Rock",
        title: "EL ROCK COMO FENÓMENO DE RESISTENCIA",
        description: "Análisis sociológico sobre la identidad del rockero barranquillero y su lucha por el espacio público.",
        duration: "21:10",
        id: "AUD-03",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnqB1FOfQ_9p_b1v_rZ-F6aM-J3zXW3v6dO9Z_L8y7x6w5u4g3z2x1c0",
    },
];

export default function Podcast() {
    return (
        <section id="podcast" className="section-spacing bg-grit-dark text-bone-white border-y-4 border-blood-red/20 shadow-none">
            <div className="container-site">
                <div className="mb-12">
                    <div className="narrative-marker">
                        <span className="material-symbols-outlined text-sm">mic</span>
                        RELATOS SONOROS // ARCHIVO DE AUDIO SIN EDITAR
                    </div>
                    <div className="md:flex justify-between items-end">
                        <h2 className="font-bebas text-5xl md:text-8xl text-bone-white leading-tight uppercase">EL PODCAST DE LA<br /><span className="text-blood-red">RESISTENCIA</span></h2>
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
                    {/* Featured Episode Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 group relative bg-grit-black brutalist-border p-6 flex flex-col md:flex-row gap-8 items-center"
                    >
                        <div className="w-full md:w-1/3 aspect-square overflow-hidden relative border-2 border-blood-red/50">
                            <img src={episodes[0].image} className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-bone-white bg-blood-red/90 w-16 h-16 flex items-center justify-center rounded-full scale-100 group-hover:scale-110 transition-transform shadow-xl">play_arrow</span>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <span className="font-jetbrains text-[10px] text-blood-red uppercase tracking-widest mb-2 block">{episodes[0].character} // DESTACADO</span>
                            <h3 className="font-bebas text-4xl text-bone-white uppercase leading-none mb-4 group-hover:text-blood-red transition-colors">{episodes[0].title}</h3>
                            <p className="font-archivo text-bone-dim text-sm mb-6 max-w-md italic opacity-80">{episodes[0].description}</p>
                            <div className="flex items-center gap-6">
                                <div className="flex-1 h-1 bg-bone-white/10 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full w-1/3 bg-blood-red"></div>
                                </div>
                                <span className="font-jetbrains text-[10px] text-bone-dim uppercase">{episodes[0].duration}</span>
                            </div>
                        </div>
                        <div className="absolute top-2 right-4 font-jetbrains text-[8px] text-blood-red opacity-50">RECORDING_SESSION_44Hz</div>
                    </motion.div>

                    {/* Episode List */}
                    <div className="md:col-span-4 space-y-4">
                        {episodes.slice(1).map((ep) => (
                            <motion.div
                                key={ep.id}
                                whileHover={{ x: 5 }}
                                className="bg-grit-black p-4 border-l-2 border-blood-red hover:bg-blood-red/5 transition-colors cursor-pointer"
                            >
                                <span className="font-jetbrains text-[9px] text-blood-red uppercase block mb-1">{ep.character}</span>
                                <h4 className="font-bebas text-xl text-bone-white uppercase mb-2 leading-none">{ep.title}</h4>
                                <div className="flex justify-between items-center opacity-60">
                                    <span className="font-jetbrains text-[9px] text-bone-white uppercase">EPISODIO {ep.id}</span>
                                    <span className="font-jetbrains text-[9px] text-bone-white uppercase">{ep.duration}</span>
                                </div>
                            </motion.div>
                        ))}
                        <button className="w-full py-3 border border-dashed border-blood-red/40 font-jetbrains text-[10px] text-bone-dim uppercase hover:bg-blood-red/10 transition-all mt-4">
                            VER TODOS LOS EPISODIOS (+)
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
