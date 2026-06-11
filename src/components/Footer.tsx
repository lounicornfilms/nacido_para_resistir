export default function Footer() {
    return (
        <footer className="bg-grit-dark border-t-2 border-blood-red">
            <div className="container-site py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Branding */}
                    <div>
                        <div className="flex items-center mb-6">
                            <img
                                src="/logo-productora.svg"
                                alt="Lounicorn Films"
                                className="h-32 w-auto"
                            />
                        </div>
                        <p className="body-md text-dust-olive">
                            Documental sobre la resistencia del rock en Barranquilla. Una producción de <strong>LOUNICORN FILMS</strong> que explora
                            la escena underground de una ciudad donde el rock no pertenece… pero resiste.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-[family-name:var(--font-bebas)] text-bone-white text-lg uppercase mb-3">
                            Navegación
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { href: "#documental", label: "El Documental" },
                                { href: "#escena", label: "La Escena" },
                                { href: "#personajes", label: "Personajes" },
                                { href: "#envivo", label: "En Vivo" },
                                { href: "#musica", label: "Música" },
                                { href: "#galeria", label: "Bajo El Lente" },
                                { href: "#prensa", label: "Prensa" },
                                { href: "#cerebro", label: "Ecosistema" },
                            ].map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-dust-olive hover:text-blood-red transition-colors no-underline text-sm uppercase font-jetbrains tracking-wider"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Equipo */}
                    <div>
                        <h4 className="font-[family-name:var(--font-bebas)] text-bone-white text-lg uppercase mb-3">
                            Equipo
                        </h4>
                        <ul className="space-y-2 mb-6">
                            {[
                                { role: "Dirección", name: "Luisa María Arroyo" },
                                { role: "Producción", name: "Luisa María Arroyo" },
                                { role: "Edición y Montaje", name: "Luisa María Arroyo" },
                                { role: "Cámara", name: "Bella Niris Santoya" },
                                { role: "Segunda Cámara", name: "David Isaac Indaburo" },
                                { role: "Asistente de Cámara", name: "Juan Sarmiento" },
                                { role: "Asistente de Rodaje", name: "Yojan de la Esprilla" },
                            ].map((member) => (
                                <li key={member.name}>
                                    <span className="label-sm text-dust-olive">{member.role}</span>
                                    <p className="text-bone-dim text-sm">{member.name}</p>
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-[family-name:var(--font-bebas)] text-bone-white text-lg uppercase mb-3">
                            Síguenos
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="https://www.youtube.com/@nacidospararesistir"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dust-olive hover:text-blood-red transition-colors no-underline text-sm"
                            >
                                YouTube
                            </a>
                            <a
                                href="https://www.instagram.com/nacidospararesistirbaq?igsh=MWh2ZHZsdG5mZXNtdQ%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dust-olive hover:text-blood-red transition-colors no-underline text-sm"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dust-olive hover:text-blood-red transition-colors no-underline text-sm"
                            >
                                TikTok
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-grit-light flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="label-sm text-dust-olive">
                        © 2026 Nacidos para Resistir. Todos los derechos reservados.
                    </p>
                    <p className="label-sm text-dust-olive">
                        Barranquilla, Atlántico — Colombia
                    </p>
                </div>
            </div>
        </footer>
    );
}
