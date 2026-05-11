"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

// Fix Leaflet icons
const MapContainer = dynamic(
    () => import("react-leaflet").then((mod) => mod.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import("react-leaflet").then((mod) => mod.TileLayer),
    { ssr: false }
);
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), {
    ssr: false,
});
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
    ssr: false,
});

const locations = [
    {
        id: 1,
        name: "4B / Cuatro B (40B Rock Bar)",
        type: "Espacio Underground",
        description: "Calle 74 # 44-37. Espacio underground puro, principalmente de encuentro, aunque ocasionalmente escenario para eventos.",
        coords: [10.994468023301621, -74.80867617571418],
        category: "escenario",
        instagram: "4obrockbar",
        image: "/images/mapa/4b_bar.jpg",
    },
    {
        id: 2,
        name: "El Templo del Rock",
        type: "Escenario Clásico",
        description: "Carrera 44 # 74-05. Clásico y representativo. Conecta generaciones pasadas con las nuevas.",
        coords: [10.993904927936478, -74.80907837756745],
        category: "escenario",
        instagram: "eltemplodelrock1",
        image: "/images/mapa/eltemplo.jpg",
    },
    {
        id: 3,
        name: "Bourbon",
        type: "Bar Rock / Alternativo",
        description: "Carrera 52 # 74-73. Bar con temática rock/alternativa. Suele ser punto de entrevistas.",
        coords: [10.999847333313054, -74.80504298920567],
        category: "escenario",
        instagram: "bourbonstbaq",
        image: "/images/mapa/bourbon.jpg",
    },
    {
        id: 4,
        name: "Wolf Den",
        type: "Escenario Alternativo/Pesado",
        description: "Carrera 50 # 54-17. Espacio para toques y escena pesada/alternativa.",
        coords: [10.99075586224293, -74.79097059105898],
        category: "escenario",
        instagram: "wolfden_rock",
        image: "/images/mapa/wolfden.jpg",
    },
    {
        id: 5,
        name: "Luz Terraza Rock",
        type: "Rooftop Rock",
        description: "Calle 72 # 38-42. Escenario tipo terraza que mezcla rock con un formato más disperso.",
        coords: [10.985883230358183, -74.81049308920585],
        category: "escenario",
        instagram: "luz_terrazarock",
        image: "/images/mapa/luzterraza.jpg",
    },
    {
        id: 6,
        name: "LUG - Burger & Rock",
        type: "Bar Histórico (Renovado)",
        description: "Carrera 44 # 87-30. Bar histórico en la transición de la escena, operando con un concepto renovado.",
        coords: [11.002089830834308, -74.82373650209658],
        category: "escenario",
        instagram: "lugburgerandrock",
        image: "/images/mapa/lug.jpg",
    },
    {
        id: 7,
        name: "Stage",
        type: "Sala de Ensayo",
        description: "Calle 81 # 35d-107. Sala de ensayo icónica, estudio de grabación y productora de eventos.",
        coords: [10.985433001748325, -74.8219349603696],
        category: "ensayo",
        instagram: "stagebarranquilla",
        image: "/images/mapa/stage.jpg",
    },
    {
        id: 8,
        name: "BPM",
        type: "Sala de Ensayo",
        description: "Carrera 43 # 74-179. Sala de ensayo activa.",
        coords: [10.993222436565706, -74.81014141744214],
        category: "ensayo",
        instagram: "bpmstudiosbq",
        image: "/images/mapa/bpm.jpg",
    },
    {
        id: 9,
        name: "Sala de Ensayo El Callejón",
        type: "Sala de Ensayo",
        description: "Carrera 33 # 48-50. Sala de ensayo para múltiples talentos.",
        coords: [10.976233236007062, -74.79091251804209],
        category: "ensayo",
        instagram: "callejon665",
        image: "/images/mapa/elcallejon.jpg",
    },
    {
        id: 10,
        name: "Jambo Records",
        type: "Estudio de Producción",
        description: "Estudio clave asociado a personajes específicos de la escena.",
        coords: [10.9700, -74.8000],
        category: "produccion",
        instagram: "jamborecords",
        image: "/images/mapa/jambo.jpg",
    },
    {
        id: 11,
        name: "Peregrino Studio",
        type: "Producción y Mezcla",
        description: "Estudio enfocado en producción y mezcla (Atención por citas).",
        coords: [10.9780, -74.7900],
        category: "produccion",
        instagram: "peregrinomediastudio",
        image: "/images/mapa/peregrino.jpg",
    },
    {
        id: 12,
        name: "A51 Studio",
        type: "Centro de Grabación",
        description: "Centro de grabación consolidado. El refugio sonoro de las bandas.",
        coords: [10.9876, -74.7891],
        category: "produccion",
        instagram: "a51studio.baq",
        image: "/images/mapa/a51.jpg",
    },
];

export default function Escena() {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("todos");

    useEffect(() => {
        setIsMounted(true);
        // Fix for Leaflet marker icons in Next.js
        const L = require("leaflet");
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
            iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
            shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });
    }, []);

    const filteredLocations = selectedCategory === "todos"
        ? locations
        : locations.filter(loc => loc.category === selectedCategory);

    if (!isMounted) return null;

    return (
        <section id="escena" className="section-spacing bg-grit-black text-bone-white">
            <div className="container-site">
                <div className="mb-12">
                    <div className="narrative-marker">
                        <span className="material-symbols-outlined text-sm">satellite_alt</span>
                        ARCHIVOS DE CAMPO // SCOUTING DE LOCACIONES
                    </div>
                    <div className="md:flex justify-between items-end gap-6">
                        <h2 className="font-bebas text-5xl md:text-7xl uppercase leading-tight">CARTOGRAFÍA DE LA<br /><span className="text-blood-red">RESISTENCIA</span></h2>
                        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                            {["todos", "escenario", "produccion", "ensayo"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3 py-1 font-jetbrains text-[10px] uppercase tracking-widest border transition-all ${selectedCategory === cat
                                        ? "bg-blood-red border-blood-red text-bone-white"
                                        : "bg-transparent border-bone-white/20 text-bone-dim hover:border-blood-red"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Map Sidebar */}
                    <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
                        <div className="brutalist-card py-4">
                            <p className="font-jetbrains text-[10px] text-blood-red uppercase mb-4 tracking-[0.2em]">PUNTOS DE RELEVANCIA</p>
                            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {filteredLocations.map((loc) => (
                                    <div key={loc.id} className="border-b border-bone-white/10 pb-3 hover:bg-blood-red/5 transition-colors p-2 group cursor-crosshair">
                                        <h4 className="font-bebas text-lg uppercase group-hover:text-blood-red transition-colors">{loc.name}</h4>
                                        <p className="font-jetbrains text-[10px] text-bone-dim opacity-70 uppercase">{loc.type}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-blood-red p-4 border border-blood-red shadow-lg torn-edge scale-y-[-1] mt-8">
                            <div className="scale-y-[-1]">
                                <p className="font-jetbrains text-[10px] text-bone-white uppercase">SISTEMA GPS//ACTIVO</p>
                                <p className="font-archivo text-xs text-bone-white/80 mt-2 italic leading-tight">
                                    "Cada punto en este mapa es un amplificador encendido."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Map */}
                    <div className="lg:col-span-9 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="brutalist-border h-[500px] md:h-[600px] relative overflow-hidden bg-grit-dark"
                        >
                            <MapContainer
                                center={[10.9878, -74.8123]}
                                zoom={12}
                                scrollWheelZoom={false}
                                className="w-full h-full"
                            >
                                <TileLayer
                                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                />
                                {filteredLocations.map((loc) => (
                                    <Marker key={loc.id} position={loc.coords as [number, number]}>
                                        <Popup>
                                            <div className="p-1 w-[220px]">
                                                {loc.image && (
                                                    <div className="mb-2 w-full h-28 overflow-hidden border-2 border-blood-red/40 relative group">
                                                        <img 
                                                            src={loc.image} 
                                                            alt={loc.name} 
                                                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-grit-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                )}

                                                <h3 className="font-bebas text-xl text-blood-red uppercase mb-1">{loc.name}</h3>
                                                <p className="font-archivo text-sm text-bone-dim">{loc.description}</p>

                                                {loc.instagram && (
                                                    <a
                                                        href={`https://instagram.com/${loc.instagram.replace('@', '')}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-3 mb-2 inline-flex items-center gap-1 font-jetbrains text-[10px] text-blood-red hover:text-bone-white bg-blood-red/10 border border-blood-red/30 px-2 py-1 uppercase transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                                                        @{loc.instagram.replace('@', '')}
                                                    </a>
                                                )}

                                                <div className="font-jetbrains text-[9px] uppercase border-t border-blood-red/30 pt-2 mt-2 opacity-70">
                                                    COORD: {loc.coords[0].toFixed(4)}, {loc.coords[1].toFixed(4)}
                                                </div>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                            <div className="absolute bottom-4 left-4 z-[1000] pointer-events-none">
                                <div className="bg-grit-black/80 backdrop-blur-md px-3 py-1 border-l-2 border-blood-red">
                                    <span className="font-jetbrains text-[10px] text-bone-white uppercase animate-flicker tracking-widest">MAPA OPERATIVO // v.2.4</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
