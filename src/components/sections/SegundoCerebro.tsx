"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sections = [
  { id: "manifiesto", label: "Manifiesto" },
  { id: "arquitectura", label: "Arquitectura del Sistema" },
  { id: "nn-categoria", label: "Sistema NN_CATEGORIA" },
  { id: "taxonomia", label: "Taxonomía YAML" },
  { id: "wikilinks", label: "Wikilinks & Tags" },
  { id: "puente-disco", label: "Puente con Disco Externo" },
  { id: "grafo", label: "Grafo de Conocimiento" },
  { id: "replicar", label: "Cómo Replicar" },
  { id: "obsidian", label: "Configuración Obsidian" },
  { id: "templates", label: "Referencia de Templates" },
];

const tocItems = [
  { id: "manifiesto", label: "01 Manifiesto" },
  { id: "arquitectura", label: "02 Arquitectura" },
  { id: "nn-categoria", label: "03 Sistema NN" },
  { id: "taxonomia", label: "04 Taxonomía YAML" },
  { id: "wikilinks", label: "05 Wikilinks & Tags" },
  { id: "puente-disco", label: "06 Puente Disco Externo" },
  { id: "grafo", label: "07 Grafo de Conocimiento" },
  { id: "replicar", label: "08 Cómo Replicar" },
  { id: "obsidian", label: "09 Configuración Obsidian" },
  { id: "templates", label: "10 Referencia Templates" },
];

export default function SegundoCerebro() {
  const [activeSection, setActiveSection] = useState("");
  const [tocOpen, setTocOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTocOpen(false);
    }
  };

  return (
    <section
      id="cerebro"
      className="bg-grit-dark text-bone-white border-t-2 border-blood-red/10 relative"
    >
      {/* Progress bar */}
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed top-16 left-0 right-0 h-0.5 bg-blood-red origin-left z-50"
      />

      <div className="container-site py-12 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="narrative-marker mb-4">
              <span className="material-symbols-outlined text-sm">psychology</span>
              METODOLOGÍA // SEGUNDO CEREBRO
            </div>
            <h1 className="font-bebas text-5xl md:text-8xl text-bone-white uppercase leading-tight">
              METODOLOGÍA SECOND BRAIN
              <br />
              <span className="text-electric-indigo-light">PARA PRODUCCIÓN AUDIOVISUAL</span>
            </h1>
            <p className="font-archivo text-lg md:text-xl text-bone-dim max-w-3xl mt-4">
              Sistema de gestión de conocimiento basado en Obsidian aplicado al documental
              &quot;Nacidos para Resistir&quot; — una guía reusable para cualquier proyecto
              audiovisual.
            </p>
          </motion.div>
        </div>

        <div className="flex gap-8 relative">
          {/* Mobile TOC toggle */}
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="lg:hidden fixed bottom-6 right-6 z-40 bg-blood-red text-bone-white p-4 brutalist-border shadow-xl flex items-center gap-2"
          >
            <span className="material-symbols-outlined">
              {tocOpen ? "close" : "list"}
            </span>
            <span className="font-bebas text-lg uppercase">Índice</span>
          </button>

          {/* TOC Sidebar */}
          <aside
            className={`
              fixed lg:sticky top-20 z-30 w-72 shrink-0
              ${tocOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
              transition-transform duration-300
              bg-grit-dark/95 lg:bg-transparent
              lg:block h-[calc(100vh-6rem)] overflow-y-auto
              border-r border-blood-red/20 lg:border-r-0
              p-6 lg:p-0
            `}
          >
            <div className="lg:sticky lg:top-24 space-y-1">
              <h4 className="font-jetbrains text-xs text-blood-red uppercase tracking-widest mb-4">
                Tabla de Contenido
              </h4>
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`
                    w-full text-left font-archivo text-sm py-2 px-3 transition-all duration-200
                    border-l-2
                    ${
                      activeSection === item.id
                        ? "border-blood-red text-bone-white bg-blood-red/10"
                        : "border-transparent text-bone-dim hover:text-bone-white hover:border-blood-red/50"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}

              <div className="mt-6 pt-6 border-t border-grit-light">
                <p className="font-jetbrains text-[10px] text-bone-dim/60 uppercase tracking-widest mb-3">
                  Herramienta Principal
                </p>
                <a
                  href="https://obsidian.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 border border-blood-red/30 hover:border-blood-red transition-all group"
                >
                  <svg viewBox="0 0 100 100" className="w-6 h-6 shrink-0">
                    <path
                      fill="currentColor"
                      d="M69.6 2.8L38.8 35.6 16 14.4 2.8 29.2l25.2 23.6L2.8 76.4l13.2 14.8 22.8-21.2 30.8 32.8 16.4-14.8-30-31.6 30-31.6z"
                      className="text-bone-dim group-hover:text-blood-red transition-colors"
                    />
                  </svg>
                  <div>
                    <span className="font-bebas text-lg text-bone-white uppercase block leading-none">
                      Obsidian
                    </span>
                    <span className="font-jetbrains text-[9px] text-bone-dim uppercase tracking-widest">
                      obsidian.md
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </aside>

          {/* Overlay for mobile */}
          {tocOpen && (
            <div
              className="fixed inset-0 bg-black/60 z-20 lg:hidden"
              onClick={() => setTocOpen(false)}
            />
          )}

          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-20">
            {/* 1. MANIFIESTO */}
            <Section id="manifiesto" title="Manifiesto" number="01">
              <h3 className="font-bebas text-2xl text-blood-red uppercase mb-6">
                ¿Por qué un Second Brain en producción audiovisual?
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-jetbrains text-sm text-bone-white uppercase mb-3">
                    El problema
                  </h4>
                  <p className="font-archivo text-base text-bone-dim leading-relaxed">
                    La producción audiovisual genera información masiva distribuida en
                    múltiples soportes que se pierden entre proyecto y proyecto: research en
                    pestañas del navegador, guiones en Google Docs, notas sueltas, planes de
                    rodaje en Excel, material en discos duros sin índice, conversaciones de
                    WhatsApp con ideas que se evaporan.
                  </p>
                  <p className="font-archivo text-base text-bone-dim leading-relaxed mt-3">
                    Este fenómeno se llama{" "}
                    <span className="text-bone-white font-bold">Knowledge Fade</span>: la
                    pérdida inevitable de contexto, referencias y decisiones creativas cuando
                    la información no está estructurada.
                  </p>
                </div>

                <div>
                  <h4 className="font-jetbrains text-sm text-bone-white uppercase mb-3">
                    La solución
                  </h4>
                  <p className="font-archivo text-base text-bone-dim leading-relaxed">
                    Un <strong>Second Brain</strong> (Segundo Cerebro) basado en Obsidian
                    resuelve esto mediante cuatro principios:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {[
                      {
                        title: "Estandarización",
                        desc: "Todo sigue YAML + Markdown, sea un dossier, un perfil o un plan de rodaje.",
                      },
                      {
                        title: "Conexión",
                        desc: "Cada nota se enlaza con otras mediante wikilinks, creando una red de conocimiento.",
                      },
                      {
                        title: "Indexación",
                        desc: "El grafo de Obsidian permite visualizar y navegar las relaciones del proyecto.",
                      },
                      {
                        title: "Replicabilidad",
                        desc: "La estructura, templates y taxonomía se copian a cualquier nuevo proyecto.",
                      },
                    ].map((p) => (
                      <div
                        key={p.title}
                        className="p-4 border-l-2 border-electric-indigo-light/30 bg-grit-black/30"
                      >
                        <h5 className="font-bebas text-lg text-bone-white uppercase">
                          {p.title}
                        </h5>
                        <p className="font-archivo text-sm text-bone-dim mt-1">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {/* 2. ARQUITECTURA */}
            <Section id="arquitectura" title="Arquitectura del Sistema" number="02">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                El sistema opera en dos capas: el <strong>vault de Obsidian</strong> (texto
                ligero + metadatos) y el <strong>disco externo</strong> (medios pesados). La
                comunicación entre ambas capas se realiza mediante notas-índice y enlaces
                relativos.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-5 border border-blood-red/20 bg-grit-black/40">
                  <h4 className="font-bebas text-lg text-electric-indigo-light uppercase mb-2">
                    Obsidian Vault
                  </h4>
                  <p className="font-archivo text-sm text-bone-dim">
                    Texto + metadatos (KB/MB). Notas Markdown con YAML frontmatter.
                    Nueve carpetas numeradas que cubren todo el ciclo de producción.
                  </p>
                </div>
                <div className="p-5 border border-blood-red/20 bg-grit-black/40">
                  <h4 className="font-bebas text-lg text-amber-400 uppercase mb-2">
                    Disco Externo
                  </h4>
                  <p className="font-archivo text-sm text-bone-dim">
                    Medios pesados (GB/TB). Videos, audios, fotos. Estructura jerárquica:
                    EVENTO / FECHA / CÁMARA.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 border-l-4 border-blood-red bg-grit-black/30">
                <h4 className="font-jetbrains text-xs text-blood-red uppercase tracking-widest mb-2">
                  Principios de la Arquitectura
                </h4>
                <ul className="space-y-2">
                  <li className="font-archivo text-sm text-bone-dim flex gap-2">
                    <span className="text-blood-red shrink-0">▸</span>
                    <strong className="text-bone-white">Separación de peso:</strong> En
                    Obsidian solo vive texto. Los archivos pesados están en disco externo.
                  </li>
                  <li className="font-archivo text-sm text-bone-dim flex gap-2">
                    <span className="text-blood-red shrink-0">▸</span>
                    <strong className="text-bone-white">Indexación desde el texto:</strong>{" "}
                    Las notas contienen metadatos + rutas relativas al disco.
                  </li>
                  <li className="font-archivo text-sm text-bone-dim flex gap-2">
                    <span className="text-blood-red shrink-0">▸</span>
                    <strong className="text-bone-white">Namespace único:</strong> Cada
                    proyecto tiene un campo <code className="text-electric-indigo-light">project:</code> en
                    el YAML.
                  </li>
                  <li className="font-archivo text-sm text-bone-dim flex gap-2">
                    <span className="text-blood-red shrink-0">▸</span>
                    <strong className="text-bone-white">Convención sobre configuración:</strong>{" "}
                    La estructura de carpetas, naming y YAML es fija.
                  </li>
                </ul>
              </div>
            </Section>

            {/* 3. NN_CATEGORIA */}
            <Section id="nn-categoria" title="Sistema NN_CATEGORIA" number="03">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Las carpetas raíz usan el formato <code className="text-electric-indigo-light">NN_NOMBRE</code>{" "}
                donde <code className="text-electric-indigo-light">NN</code> es un número de dos dígitos
                que define el <strong>orden y la fase de producción</strong>.
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-blood-red/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-blood-red uppercase">Carpeta</th>
                      <th className="py-2 pr-4 font-jetbrains text-xs text-blood-red uppercase">Fase</th>
                      <th className="py-2 pr-4 font-jetbrains text-xs text-blood-red uppercase">Contenido</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["00_ADMIN", "Fundación", "Metodología, credenciales, templates"],
                      ["01_DOSSIER", "Pre-producción", "Biblia de producción, fichas técnicas"],
                      ["02_INVESTIGACION", "Pre-producción", "Research, perfiles, fuentes"],
                      ["03_GUION", "Pre-producción", "Guion técnico, escaletas, cuestionarios"],
                      ["04_PRODUCCION", "Producción", "Planes de rodaje, presupuesto, actas"],
                      ["05_AUDIOVISUAL", "Post-producción", "Notas-índice de clips"],
                      ["06_TRANSMEDIA", "Distribución", "Estrategia digital, plan web"],
                      ["07_DISENO", "Marca", "Identidad visual, pósters"],
                      ["08_PITCH", "Financiación", "Deck, presentaciones"],
                      ["09_ARCHIVO", "Preservación", "PDFs, contratos, backups"],
                    ].map(([folder, phase, content]) => (
                      <tr key={folder} className="border-b border-grit-light/30 hover:bg-grit-black/30">
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">{folder}</td>
                        <td className="py-2 pr-4 text-bone-dim">{phase}</td>
                        <td className="py-2 text-bone-dim">{content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 border border-dashed border-amber-400/30 bg-grit-black/30">
                <p className="font-archivo text-sm text-bone-dim italic">
                  &ldquo;Cada nota vive en la carpeta de su fase de producción. Si un
                  documento cubre múltiples fases, se ubica en la carpeta de su propósito
                  principal y se enlaza a las demás mediante wikilinks.&rdquo;
                </p>
              </div>
            </Section>

            {/* 4. TAXONOMÍA YAML */}
            <Section id="taxonomia" title="Taxonomía YAML" number="04">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                El YAML frontmatter es el <strong>sistema nervioso</strong> del Second Brain.
                Cada nota comienza con metadatos que permiten filtrar, buscar y relacionar
                cualquier nota en el vault.
              </p>

              <pre className="mt-6 p-4 bg-grit-black border border-blood-red/30 overflow-x-auto text-sm font-jetbrains text-bone-dim leading-relaxed">
{`---
project: Nacidos para Resistir
type: dossier
status: completado
tags: [documental, rock, barranquilla, produccion]
related:
  - "[[resumen_investigacion|Investigación]]"
  - "[[escaleta|Escaleta General]]"
---`}
              </pre>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-grit-black/30 border-l-2 border-electric-indigo-light/40">
                  <h4 className="font-bebas text-base text-electric-indigo-light uppercase mb-2">
                    Campos Obligatorios
                  </h4>
                  <ul className="space-y-1 font-archivo text-sm text-bone-dim">
                    <li><code className="text-bone-white">project</code> — Namespace del proyecto</li>
                    <li><code className="text-bone-white">type</code> — Tipo de nota (dossier, perfil, guion...)</li>
                    <li><code className="text-bone-white">status</code> — Estado (borrador, completado, revision...)</li>
                    <li><code className="text-bone-white">tags</code> — Array de etiquetas lower-kebab</li>
                  </ul>
                </div>
                <div className="p-4 bg-grit-black/30 border-l-2 border-amber-400/40">
                  <h4 className="font-bebas text-base text-amber-400 uppercase mb-2">
                    Campos Opcionales
                  </h4>
                  <ul className="space-y-1 font-archivo text-sm text-bone-dim">
                    <li><code className="text-bone-white">related</code> — Wikilinks relacionados</li>
                    <li><code className="text-bone-white">date</code> — Fecha del evento</li>
                    <li><code className="text-bone-white">author</code> — Quién escribió la nota</li>
                    <li><code className="text-bone-white">version</code> — Control de versiones</li>
                    <li><code className="text-bone-white">path</code> — Ruta al archivo físico</li>
                  </ul>
                </div>
              </div>

              <h4 className="font-jetbrains text-sm text-blood-red uppercase mt-8 mb-4">
                Tipos de Nota
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-blood-red/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-blood-red uppercase">type</th>
                      <th className="py-2 pr-4 font-jetbrains text-xs text-blood-red uppercase">Propósito</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["índice", "Mapa del proyecto, punto de entrada"],
                      ["dossier", "Biblia de producción"],
                      ["perfil", "Biografía de personaje/fuente"],
                      ["guion", "Guion técnico o literario"],
                      ["cuestionario", "Guía de entrevista"],
                      ["producción", "Plan de rodaje, logística"],
                      ["clip", "Índice de clip en disco externo"],
                      ["evento", "Resumen de jornada de rodaje"],
                      ["transmedia", "Estrategia de distribución"],
                      ["diseño", "Identidad visual, branding"],
                      ["pitch", "Deck, presentación a inversores"],
                      ["reunión", "Acta de coordinación"],
                      ["legal", "Contratos, autorizaciones"],
                      ["admin", "Metodología, configuración"],
                    ].map(([type, purpose]) => (
                      <tr key={type} className="border-b border-grit-light/30 hover:bg-grit-black/30">
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">{type}</td>
                        <td className="py-2 text-bone-dim">{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* 5. WIKILINKS & TAGS */}
            <Section id="wikilinks" title="Wikilinks & Tags" number="05">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                El sistema de wikilinks sigue una lógica de{" "}
                <strong>derivación narrativa</strong>. Las conexiones no son aleatorias:
                cada tipo de nota genera el siguiente.
              </p>

              <div className="mt-6 space-y-2">
                {[
                  "INVESTIGACIÓN → genera → PERFILES",
                  "PERFILES → generan → CUESTIONARIOS",
                  "CUESTIONARIOS + PERFILES → alimentan → GUION",
                  "GUION → define → PLAN DE RODAJE",
                  "GUION + PLAN → producen → CLIPS (rodaje)",
                  "GUION → también alimenta → TRANSMEDIA",
                  "DOSSIER → es la raíz que conecta → TODO",
                ].map((chain, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 font-jetbrains text-xs md:text-sm text-bone-dim"
                  >
                    <span className="text-blood-red font-bold">{i + 1}.</span>
                    {chain.split("→").map((part, j) => (
                      <span key={j}>
                        {j > 0 && (
                          <span className="text-blood-red mx-1">→</span>
                        )}
                        <span className={j % 2 === 0 ? "text-bone-white" : "text-electric-indigo-light"}>
                          {part}
                        </span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              <h4 className="font-jetbrains text-sm text-blood-red uppercase mt-8 mb-4">
                Tags como Filtros Dinámicos
              </h4>
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Los tags siguen una taxonomía plana (sin jerarquía) que permite filtrar por
                persona, fase, formato o área con un solo clic desde el panel de tags de
                Obsidian.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "personaje",
                  "entrevista",
                  "rodaje",
                  "guion",
                  "pepe-enciso",
                  "under-the-legacy",
                  "transmedia",
                  "diseño",
                  "legal",
                  "post-produccion",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-jetbrains text-[10px] px-3 py-1.5 border border-blood-red/30 text-bone-dim bg-grit-black/40"
                  >
                    #<span className="text-blood-red">{tag}</span>
                  </span>
                ))}
              </div>
            </Section>

            {/* 6. PUENTE DISCO EXTERNO */}
            <Section id="puente-disco" title="Puente con el Disco Externo" number="06">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Esta es la pieza más innovadora del sistema:{" "}
                <strong>cómo integrar terabytes de video en un sistema de texto ligero</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-5 border border-blood-red/20 bg-grit-black/40">
                  <h4 className="font-bebas text-lg text-bone-white uppercase mb-3">
                    El Problema
                  </h4>
                  <ul className="space-y-2 font-archivo text-sm text-bone-dim">
                    <li className="flex gap-2">
                      <span className="text-blood-red shrink-0">✕</span>
                      Videos RAW en discos externos sin índice
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blood-red shrink-0">✕</span>
                      Metadatos de rodaje se pierden
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blood-red shrink-0">✕</span>
                      Sin conexión entre el guion y el material grabado
                    </li>
                  </ul>
                </div>
                <div className="p-5 border border-electric-indigo-light/30 bg-grit-black/40">
                  <h4 className="font-bebas text-lg text-bone-white uppercase mb-3">
                    La Solución: Notas-Índice
                  </h4>
                  <ul className="space-y-2 font-archivo text-sm text-bone-dim">
                    <li className="flex gap-2">
                      <span className="text-electric-indigo-light shrink-0">✓</span>
                      Notas ligeras que referencian rutas del disco externo
                    </li>
                    <li className="flex gap-2">
                      <span className="text-electric-indigo-light shrink-0">✓</span>
                      Metadatos YAML: evento, fecha, cámara, duración
                    </li>
                    <li className="flex gap-2">
                      <span className="text-electric-indigo-light shrink-0">✓</span>
                      Enlazadas al guion, perfil y evento de rodaje
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-grit-black border border-dashed border-amber-400/30">
                <h4 className="font-jetbrains text-xs text-amber-400 uppercase tracking-widest mb-3">
                  Estructura del Disco Externo
                </h4>
                <pre className="font-jetbrains text-xs text-bone-dim leading-relaxed">
{`DISCO_EXTERNO/NACIDOS_PRO_RESISTIR/
  05_AUDIOVISUAL/
    ENTREVISTA_ALBERTO_FORERO/
      2026-05-20/
        CAMARA_1_BELLA/
          DSC_001.MP4
        CAMARA_2_ISAAC/
          DSC_010.MP4
    CONCIERTO_UNDER_THE_LEGACY/
      2026-05-27/
        CAMARA_1_BELLA/`}
                </pre>
              </div>
            </Section>

            {/* 7. GRAFO */}
            <Section id="grafo" title="Grafo de Conocimiento" number="07">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                El grafo real del documental &quot;Nacidos para Resistir&quot; contiene{" "}
                <strong className="text-bone-white">40+ notas</strong> y{" "}
                <strong className="text-bone-white">80+ conexiones</strong> entre todos los
                elementos del proyecto.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                {[
                  { label: "Notas totales", value: "40+", color: "text-blood-red" },
                  { label: "Conexiones", value: "80+", color: "text-electric-indigo-light" },
                  { label: "Tipos de nota", value: "15", color: "text-amber-400" },
                  { label: "Personajes", value: "8", color: "text-green-400" },
                  { label: "Cuestionarios", value: "6", color: "text-cyan-400" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 bg-grit-black border border-blood-red/20 text-center"
                  >
                    <div className={`font-bebas text-3xl ${metric.color}`}>{metric.value}</div>
                    <div className="font-jetbrains text-[9px] text-bone-dim uppercase tracking-widest mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 border border-blood-red/20 bg-grit-black/40">
                <h4 className="font-bebas text-lg text-bone-white uppercase mb-2">
                  Nodos del Grafo
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "01 DOSSIER",
                      items: ["Biblia de producción", "Ficha técnica", "Ficha producción"],
                    },
                    {
                      title: "02 INVESTIGACIÓN",
                      items: [
                        "Research general",
                        "Directorio fuentes",
                        "8 perfiles",
                      ],
                    },
                    {
                      title: "03 GUION",
                      items: [
                        "Guion técnico",
                        "Escaleta 5:07",
                        "6 cuestionarios",
                      ],
                    },
                    {
                      title: "04 PRODUCCIÓN",
                      items: [
                        "Plan de rodaje",
                        "Presupuesto $15M COP",
                        "Autorizaciones",
                      ],
                    },
                    {
                      title: "06 TRANSMEDIA",
                      items: ["Estrategia 3P", "Plan web", "Redes"],
                    },
                    {
                      title: "07 DISEÑO",
                      items: [
                        "Manual de marca",
                        "Tratamiento estético",
                        "Soulful Rebels",
                      ],
                    },
                  ].map((node) => (
                    <div key={node.title} className="p-3 border-l-2 border-blood-red/30">
                      <h5 className="font-jetbrains text-xs text-blood-red uppercase tracking-widest">
                        {node.title}
                      </h5>
                      <ul className="mt-2 space-y-1">
                        {node.items.map((item) => (
                          <li
                            key={item}
                            className="font-archivo text-sm text-bone-dim flex gap-2"
                          >
                            <span className="text-electric-indigo-light">◇</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* 8. REPLICAR */}
            <Section id="replicar" title="Cómo Replicar en Cualquier Proyecto" number="08">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Esta metodología está diseñada para ser{" "}
                <strong>reusable en cualquier proyecto audiovisual</strong>:
                documental, cortometraje, serie, disco musical o evento en vivo.
              </p>

              <div className="space-y-3 mt-6">
                {[
                  ["1", "Crear vault nuevo con carpetas 00-09"],
                  ["2", "Copiar templates desde 00_ADMIN/templates/"],
                  ["3", "Escribir README.md (índice del proyecto)"],
                  ["4", "Llenar 01_DOSSIER/dossier.md con la visión"],
                  ["5", "Investigar: perfiles, fuentes, research"],
                  ["6", "Desarrollar guion, escaleta, cuestionarios"],
                  ["7", "Planificar rodaje, presupuesto, legal"],
                ].map(([num, step]) => (
                  <div
                    key={num}
                    className="flex items-center gap-4 p-3 bg-grit-black/30 border-l-2 border-blood-red/50"
                  >
                    <span className="font-bebas text-2xl text-blood-red w-8">{num}</span>
                    <span className="font-archivo text-base text-bone-dim">{step}</span>
                  </div>
                ))}
              </div>

              <h4 className="font-jetbrains text-sm text-blood-red uppercase mt-8 mb-4">
                Adaptación por Tipo de Proyecto
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    type: "Documental",
                    desc: "Estructura tal cual. 02_INVESTIGACIÓN es crítica.",
                  },
                  {
                    type: "Cortometraje",
                    desc: "03_GUION es el centro. Investigación más pequeña.",
                  },
                  {
                    type: "Serie",
                    desc: "Subcarpetas por episodio en 03_GUION.",
                  },
                  {
                    type: "Disco/Álbum",
                    desc: "01_DOSSIER = concepto. 03_GUION = letras. 05_AUDIOVISUAL = videos.",
                  },
                  {
                    type: "Evento en vivo",
                    desc: "04_PRODUCCIÓN es crítica. 05_AUDIOVISUAL = videos por cámara.",
                  },
                  {
                    type: "Branded content",
                    desc: "01_DOSSIER = brief. 06_TRANSMEDIA = campaña. 07_DISEÑO = cobranding.",
                  },
                ].map((proj) => (
                  <div
                    key={proj.type}
                    className="p-4 border border-blood-red/20 bg-grit-black/30 hover:border-blood-red/50 transition-colors"
                  >
                    <h5 className="font-bebas text-lg text-bone-white uppercase">{proj.type}</h5>
                    <p className="font-archivo text-sm text-bone-dim mt-1">{proj.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 9. OBSIDIAN */}
            <Section id="obsidian" title="Configuración de Obsidian" number="09">
              <div className="flex items-start gap-6 mb-6">
                <div className="shrink-0">
                  <svg viewBox="0 0 100 100" className="w-16 h-16">
                    <path
                      fill="currentColor"
                      d="M69.6 2.8L38.8 35.6 16 14.4 2.8 29.2l25.2 23.6L2.8 76.4l13.2 14.8 22.8-21.2 30.8 32.8 16.4-14.8-30-31.6 30-31.6z"
                      className="text-bone-dim"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-archivo text-base text-bone-dim leading-relaxed">
                    <a
                      href="https://obsidian.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric-indigo-light hover:text-blood-red underline underline-offset-4"
                    >
                      Obsidian
                    </a>{" "}
                    es la herramienta central del sistema. Es una aplicación de notas
                    Markdown con enlaces bidireccionales, grafo de conocimiento, y un
                    ecosistema de plugins que la convierten en el segundo cerebro ideal
                    para producción audiovisual.
                  </p>
                </div>
              </div>

              <h4 className="font-jetbrains text-sm text-blood-red uppercase mb-4">
                Core Plugins Recomendados
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-blood-red/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-blood-red uppercase">Plugin</th>
                      <th className="py-2 pr-4 font-jetbrains text-xs text-blood-red uppercase">Estado</th>
                      <th className="py-2 font-jetbrains text-xs text-blood-red uppercase">Propósito</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["graph", "Activado", "Grafo de conocimiento visual"],
                      ["backlink", "Activado", "Ver qué notas enlazan a la actual"],
                      ["tag-pane", "Activado", "Panel de filtrado por tags"],
                      ["properties", "Activado", "Edición del YAML frontmatter"],
                      ["templates", "Activado", "Insertar templates"],
                      ["outgoing-link", "Activado", "Ver enlaces salientes"],
                      ["daily-notes", "Activado", "Notas diarias de producción"],
                      ["canvas", "Activado", "Mapas visuales y diagramas"],
                      ["page-preview", "Activado", "Vista previa de enlaces"],
                    ].map(([plugin, status, purpose]) => (
                      <tr key={plugin} className="border-b border-grit-light/30 hover:bg-grit-black/30">
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">
                          {plugin}
                        </td>
                        <td className="py-2 pr-4">
                          <span className="text-green-400 font-jetbrains text-[10px] uppercase">
                            {status}
                          </span>
                        </td>
                        <td className="py-2 text-bone-dim">{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-5 border border-blood-red/20 bg-grit-black/40">
                <h4 className="font-jetbrains text-xs text-blood-red uppercase tracking-widest mb-3">
                  Alternativas a Obsidian
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: "VS Code + Foam", compat: "100%" },
                    { name: "Logseq", compat: "90%" },
                    { name: "Any Markdown editor", compat: "80%" },
                    { name: "Git + Markdown", compat: "95%" },
                  ].map((alt) => (
                    <div
                      key={alt.name}
                      className="p-3 border border-grit-light/30 text-center"
                    >
                      <div className="font-jetbrains text-xs text-bone-white">{alt.name}</div>
                      <div className="font-bebas text-xl text-electric-indigo-light">{alt.compat}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* 10. TEMPLATES */}
            <Section id="templates" title="Referencia de Templates" number="10">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Los siguientes templates están disponibles en{" "}
                <code className="text-electric-indigo-light">00_ADMIN/templates/</code> y se
                pueden insertar en Obsidian usando el plugin de Templates.
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-blood-red/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-blood-red uppercase">
                        Template
                      </th>
                      <th className="py-2 pr-4 font-jetbrains text-xs text-blood-red uppercase">
                        type
                      </th>
                      <th className="py-2 font-jetbrains text-xs text-blood-red uppercase">
                        Propósito
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["_template_indice.md", "índice", "README del proyecto"],
                      ["_template_dossier.md", "dossier", "Biblia de producción"],
                      ["_template_perfil.md", "perfil", "Biografía de personaje"],
                      ["_template_cuestionario.md", "cuestionario", "Guía de entrevista"],
                      ["_template_guion.md", "guion", "Guion doble columna"],
                      ["_template_plan_rodaje.md", "producción", "Plan de rodaje"],
                      ["_template_reunion.md", "reunión", "Acta de reunión"],
                      ["_template_clip.md", "clip", "Índice de clip"],
                      ["_template_evento.md", "evento", "Resumen de rodaje"],
                    ].map(([file, type, purpose]) => (
                      <tr key={file} className="border-b border-grit-light/30 hover:bg-grit-black/30">
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">{file}</td>
                        <td className="py-2 pr-4">
                          <span className="text-electric-indigo-light font-jetbrains text-[10px]">
                            {type}
                          </span>
                        </td>
                        <td className="py-2 text-bone-dim">{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* Footer note */}
            <div className="py-8 border-t border-blood-red/20 text-center">
              <p className="font-jetbrains text-xs text-bone-dim/60 uppercase tracking-widest">
                Documento de metodología v1.0
              </p>
              <p className="font-archivo text-sm text-bone-dim mt-1">
                Sistema implementado en el documental <em>Nacidos para Resistir</em> (Lounicorn
                Films, 2026)
              </p>
              <p className="font-archivo text-xs text-bone-dim/50 italic mt-2">
                &quot;El rock en Barranquilla no pertenece aquí… pero aquí resiste.&quot;
              </p>

              <a
                href="https://docs.google.com/document/d/19DlGZ4cKwzFGOkjcu3O5UEWsMAM7sC4P/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 font-jetbrains text-xs text-blood-red hover:text-bone-white transition-colors uppercase tracking-widest"
              >
                <span className="material-symbols-outlined text-sm">description</span>
                Ver documento completo en Google Drive
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  title,
  number,
  children,
}: {
  id: string;
  title: string;
  number: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-24"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="font-jetbrains text-sm text-blood-red font-bold">{number}</span>
        <div className="h-px flex-1 bg-blood-red/20" />
      </div>
      <h2 className="font-bebas text-3xl md:text-5xl text-bone-white uppercase leading-tight mb-6">
        {title}
      </h2>
      {children}
    </motion.div>
  );
}
