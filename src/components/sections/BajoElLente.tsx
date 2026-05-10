"use client";

import { motion } from "framer-motion";

export default function BajoElLente() {
    return (
        <section id="galeria" className="bg-grit-black overflow-hidden pt-12">
            {/* Grain Overlay - Localized for this section if needed, but we have a global one */}

            {/* Hero Section of Bajo El Lente */}
            <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-grit-black via-transparent to-transparent z-10"></div>
                <img
                    alt="Making-of main visual"
                    className="w-full h-full object-cover grayscale brightness-50"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdkqQzYx98BO4qfI7orzjXxJPh01nAwe-yNzonEaNhspQDPyGRdxdmxOl43hviPa2AD5FqG1ydRse91YeoVVflCN6s7wTpIDCKi65CE--pDz26Eh1yiG-3_1XjjHUNWkgIc8ZtRsfvT4fFrLJtm4ghf7celeRSblfQ5wuj5Pikov1bAcyWNDGAnpnaINykWoL0nBbD7N8dXe_uD4IBj8WK2gizwm6uStNEntxtb6jNUqY2w4X51CNrVAtBDhKwH2wG3hp_uyZCcHI"
                />
                <div className="absolute bottom-12 left-6 md:left-margin-desktop z-20 max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blood-red text-bone-white px-2 py-1 font-jetbrains text-xs uppercase mb-4 inline-block tracking-widest"
                    >
                        PRODUCTION REELS // 2024
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-bebas text-5xl md:text-8xl text-bone-white uppercase leading-none mb-4"
                    >
                        BAJO EL LENTE:<br />MAKING-OF
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="font-archivo text-xl text-bone-dim max-w-xl"
                    >
                        Crónica visual del proceso creativo. La resistencia no es solo el resultado, es cada segundo de ruido y sudor en el set.
                    </motion.p>
                </div>
            </div>

            {/* Narrative Marker 1 */}
            <div className="px-6 md:px-margin-desktop py-8 border-y-2 border-grit-light flex flex-col md:flex-row justify-between items-center bg-grit-dark/50 gap-4">
                <div className="font-jetbrains text-blood-red text-xs uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">description</span>
                    Documento #089 // Sesión de grabación con Under The Legacy
                </div>
                <div className="font-jetbrains text-bone-dim text-xs uppercase opacity-50">Localización: Barranquilla, Atlántico</div>
            </div>

            {/* Photo Grid Section */}
            <section className="p-6 md:p-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Large Focus Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-8 group relative overflow-hidden brutalist-border"
                >
                    <img
                        className="w-full h-[300px] md:h-[500px] object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8_0fjS6NtW6X8P2ndfNJ_BZLJhwBZPinA-QdvewoCKv33jWZO5DkJennD7-U4xt8ACN5bhiLDyUr39NuUN6-NKmgXksMe7KXjBG1U9jBH6roR0mcQQ30A1PO2c78mjGrnNJ0q7fFoso3yUltOUCLspLRgUnGi-WXaxdqhgntF6dAJ5x2ieWNNcInxCFp_qgn-Iyyr4QfHOBUHq19Xw6hPVnrGgJluwH_4XkGayUJZThpDNUgLX5yH_hn_0_2eKb7EeVX9rv_t_ts"
                    />
                    <div className="absolute top-4 right-4 bg-blood-red text-bone-white px-3 py-1 font-jetbrains text-xs uppercase tracking-widest">A51 STUDIO</div>
                    <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                        <h3 className="font-bebas text-2xl md:text-4xl text-bone-white uppercase">CAPTURA DE FRECUENCIAS</h3>
                    </div>
                </motion.div>

                {/* Side Cards */}
                <div className="md:col-span-4 grid grid-cols-1 gap-6">
                    <motion.div
                        initial={{ opacity: 0, rotate: -2 }}
                        whileInView={{ opacity: 1, rotate: -1 }}
                        viewport={{ once: true }}
                        className="bg-grit-dark p-4 brutalist-border hover:rotate-0 transition-transform"
                    >
                        <img
                            className="w-full h-48 object-cover grayscale contrast-125"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBweD9SLRlq5_cuDypdzQc9vn8vUWwdqWzV3LnYib9FuiLEnBrjI5zhkeS1DAuj_QJNOQZRVZXFV67zQgwtOPJxoH76I3-ec_BOdBU5JzALnN81DHLAAV-ZBc5fv3bC4Yn2FLgTHr1jfsYMCnd6B7GnG1uprw7QLrowqygqpWs2O_tb8WtZYBZcZw19XtgwXLTDTILTzBvy_QXFMPgoh9HwaCXUt5rzyRevYUSd3WEiExvpQKh1SXdCBs1zpSvtE7zCtEw131oQiS4"
                        />
                        <p className="font-jetbrains text-blood-red mt-4 text-xs">ENTREVISTA: PEPE ENCISO</p>
                        <p className="font-archivo text-bone-dim mt-2 text-sm italic">"La ciudad respira a través del ruido."</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotate: 2 }}
                        whileInView={{ opacity: 1, rotate: 2 }}
                        viewport={{ once: true }}
                        className="bg-blood-red p-4 border-2 border-blood-red/50 hover:rotate-0 transition-transform"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="material-symbols-outlined text-bone-white">near_me</span>
                            <span className="font-jetbrains text-bone-white text-xs">BARRANQUILLA</span>
                        </div>
                        <img
                            className="w-full h-32 object-cover grayscale mix-blend-overlay"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6coZJP-oKmvbZ5eroNjmw7NyfubW0yGMx_kiUQj0ce9CPmxUM1ob6vvvegP9zFh_f_hsCdirsuPYCKKMPqOVzmn0m0GMdogV8SE9irQ332XTCnbr6ktpSdQgqhMP9Kyn_4-yQuXhtqBvPfLYB24FkLKL61IY1C6Yj2L4wwe_uKfZi5kp0TwB1CbOMvLfZjRSSIzXyFQDKqJUCQEY1g6LdZqJkodWuksRZywlVjvhc3-Fc-VL2y-HNHRWrvOr3RUZ7vt55GInu--I"
                        />
                        <p className="font-jetbrains text-bone-white mt-4 text-xs uppercase">Scouting de locaciones: Sector Industrial</p>
                    </motion.div>
                </div>
            </section>

            {/* Narrative Marker 2 */}
            <div className="flex justify-center my-12">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl text-center px-4"
                >
                    <span className="material-symbols-outlined text-blood-red text-4xl mb-4">keyboard_double_arrow_down</span>
                    <p className="font-bebas text-2xl md:text-4xl uppercase italic text-bone-dim">
                        "NO BUSCAMOS LA PERFECCIÓN TÉCNICA, BUSCAMOS LA VERDAD QUE SE ESCONDE EN LOS ARMÓNICOS ROTOS."
                    </p>
                </motion.div>
            </div>

            {/* Video Clips Section */}
            <section className="bg-grit-dark/30 py-16">
                <div className="px-6 md:px-margin-desktop mb-8 md:flex justify-between items-end">
                    <div>
                        <h2 className="font-bebas text-4xl md:text-6xl text-blood-red uppercase">FRAGMENTOS DEL RODAJE</h2>
                        <p className="font-archivo text-bone-dim uppercase tracking-widest text-sm">Ensayo y error // Archivo Crudo</p>
                    </div>
                    <div className="hidden md:block font-jetbrains text-bone-dim border-b-2 border-blood-red pb-1 text-xs">32 CLIPS TOTAL</div>
                </div>

                <div className="px-6 md:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Video Item 1 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative bg-grit-black overflow-hidden brutalist-border cursor-pointer glitch-hover"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <img className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700 brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADeBsofGZ4N81zC7rjXI6QDosY9fPNu6-1MBnU8Xs_zJGSqmQ1J6NKL8fY_ys5jeKQ8DABrkOQME9uft51S3xsDPSSCxcDGojzwoUL9bMDgVvGtYNvE-Vp9dgT045XbnVHa2_ULug4lDePoE6wnYxqHemNDWObE42poWbVPUGsriEpICD5lPAUqpZMMoCsMWrSlwAQBTK3TUV_T7Bp759gqFNReCykphBzGRAWCkPwhtc-HHV5l_J1u3DSkAemoR2YtrrCK2NHxas" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-bone-white bg-blood-red w-16 h-16 flex items-center justify-center rounded-full scale-100 group-hover:scale-110 transition-transform">play_arrow</span>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 font-jetbrains text-[10px]">00:45</div>
                        </div>
                        <div className="p-4 bg-grit-dark">
                            <h4 className="font-bebas text-xl text-bone-white uppercase">REHEARSAL: UNDER THE LEGACY</h4>
                            <p className="font-jetbrains text-bone-dim uppercase text-[10px]">Fragmento #012 // Toma Única</p>
                        </div>
                    </motion.div>

                    {/* Video Item 2 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative bg-grit-black overflow-hidden brutalist-border cursor-pointer glitch-hover"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <img className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAest5vfjQc5mDPKBanihLUuymY9tNuGAhwfYE267JQGShcGnG1sXSxVgVpR97bYOh00EMtfYDTTmc4DAFzBO6KxAtnQcH1-tJO16D0Jz8AZyhyDcm20pm4W2l2-gz-CVC2gi-7IvR60qgGMNdNcb4nKDanB0oM3-IJxo8sUpyBGpXuT-XWyygaAwAOGQAxqyKH4_lBtBTT_wFwddW4lmwEYHYk0Y4PITqSN0qDdHACskodKppiFFXPkQ_WhCydzPpMv5Fe8wrhJNg" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-bone-white bg-blood-red w-16 h-16 flex items-center justify-center rounded-full scale-100 group-hover:scale-110 transition-transform">play_arrow</span>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 font-jetbrains text-[10px]">01:12</div>
                        </div>
                        <div className="p-4 bg-grit-dark">
                            <h4 className="font-bebas text-xl text-bone-white uppercase">CROWD DYNAMICS: BOURBON ST.</h4>
                            <p className="font-jetbrains text-bone-dim uppercase text-[10px]">Fragmento #045 // Captura Directa</p>
                        </div>
                    </motion.div>

                    {/* Video Item 3 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative bg-grit-black overflow-hidden brutalist-border cursor-pointer glitch-hover"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <img className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnhNM1zGl6HdgNY3NgXtNcsu3cMj4QSTIb7uASUPb8DHjadvRYL99Xsr7bGTMIqzOVoaSgjl8dy27lv6JWpgjyfzjW4RtpwrloTrfhHeQGazUaJnHbH3It6bAjTiyWjbSE8gZcKBmJenNexrGYLRYxwLwIz0Y9qx3XPu7sspcc5Z8sX-cEvmnsQAkzqp7DT-7Z1LjHmFQCJQOhdDiuDQhV7b50cufGd9DFsVVw4mE9GevzromvjYtQM36ko8m3OirYmOR_lURWF4g" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-bone-white bg-blood-red w-16 h-16 flex items-center justify-center rounded-full scale-100 group-hover:scale-110 transition-transform">play_arrow</span>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 font-jetbrains text-[10px]">00:30</div>
                        </div>
                        <div className="p-4 bg-grit-dark">
                            <h4 className="font-bebas text-xl text-bone-white uppercase">ANALOG SOUL: GEAR CHECK</h4>
                            <p className="font-jetbrains text-bone-dim uppercase text-[10px]">Fragmento #008 // Detalle de Equipo</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Staggered Card Content */}
            <section className="p-6 md:p-margin-desktop overflow-hidden">
                <div className="flex flex-col md:flex-row gap-12 items-center py-20">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 torn-edge bg-blood-red/20 p-1 shadow-2xl"
                    >
                        <img
                            className="w-full grayscale h-[400px] md:h-[600px] object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQCdSycTMPaNFj5qmbfnQ9Hr60tmHUl3PyQP4IIlU-MygOln1Ki77xE2f5FgSYc51IJm4Xr64O76HPt0IoAwgcKkm2uOpw6IDrhQwuMudW6v_WKqw9OuT0djbz4vlHLi2XW1o3InYmX5NNHxWQIxXNYE110qix_9NF-Aky9Q_yHydUsJdDGKc48k-Xr7KL-pm91d4NxgV_AGt4DRjIbCqv_7Q-XGXqZIYSEpGquIsByc4RGsiaF_v5u_PLf-mnouZB7eEYL1cQM-E"
                        />
                    </motion.div>
                    <div className="md:w-1/2">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-bebas text-5xl md:text-7xl text-bone-white mb-6 leading-[0.9]"
                        >
                            EL RUIDO ES<br /><span className="text-blood-red">LA HERRAMIENTA</span>
                        </motion.h3>
                        <div className="space-y-6 font-archivo text-lg md:text-xl text-bone-dim max-w-lg">
                            <p>Documentar la escena no se trata de obtener la toma más nítida. Se trata de capturar la vibración del amplificador que hace que el lente de la cámara tiemble.</p>
                            <p>En cada local de ensayo de Barranquilla, encontramos una pieza del rompecabezas. Pepe nos guió a través de los callejones donde el punk nació como una necesidad, no como un estilo.</p>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-4 border-l-4 border-blood-red bg-grit-dark font-jetbrains text-xs leading-relaxed"
                            >
                                <span className="text-blood-red">NOTE_LOG: 14/05/26</span><br />
                                <span className="opacity-70 uppercase tracking-widest">AUDIO OVERLOAD RECORDED AT STUDIO A51.</span><br />
                                <span className="opacity-70 uppercase tracking-widest">DO NOT CLEAN IN POST-PRODUCTION.</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
