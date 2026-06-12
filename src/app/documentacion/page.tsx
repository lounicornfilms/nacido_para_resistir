"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import AnatomiaCard from "@/components/documentacion/AnatomiaCard";

const tocItems = [
  { id: "manifiesto", label: "01 Manifiesto" },
  { id: "arquitectura", label: "02 Arquitectura" },
  { id: "nn-categoria", label: "03 Sistema NN" },
  { id: "taxonomia", label: "04 Taxonomía YAML" },
  { id: "tipos-nota", label: "05 Tipos de Nota" },
  { id: "wikilinks", label: "06 Wikilinks & Tags" },
  { id: "puente-disco", label: "07 Puente Disco Externo" },
  { id: "grafo", label: "08 Grafo de Conocimiento" },
  { id: "replicar", label: "09 Cómo Replicar" },
  { id: "obsidian", label: "10 Configuración Obsidian" },
  { id: "templates", label: "11 Referencia Templates" },
  { id: "glosario", label: "12 Glosario" },
];

const sectionIds = tocItems.map((t) => t.id);

export default function DocumentacionPage() {
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

    for (const id of sectionIds) {
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
    <div className="bg-grit-dark text-bone-white min-h-screen">
      {/* Progress bar */}
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-electric-indigo-light origin-left z-50"
      />

      {/* Back to project button */}
      <div className="fixed top-4 left-4 z-40">
        <Link
          href="/"
          className="flex items-center gap-2 font-jetbrains text-xs text-bone-dim hover:text-electric-indigo-light transition-colors uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Volver al proyecto
        </Link>
      </div>

      <div className="container-site py-16 md:py-24">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-jetbrains text-xs text-electric-indigo-light uppercase tracking-[0.3em] mb-4">
              METODOLOGÍA // SEGUNDO CEREBRO
            </div>
            <h1 className="font-bebas text-5xl md:text-8xl text-bone-white uppercase leading-tight">
              METODOLOGÍA SECOND BRAIN
              <br />
              <span className="text-electric-indigo-light">
                PARA PRODUCCIÓN AUDIOVISUAL
              </span>
            </h1>
            <p className="font-archivo text-lg md:text-xl text-bone-dim max-w-3xl mt-4">
              Sistema de gestión de conocimiento basado en Obsidian aplicado al
              documental &quot;Nacidos para Resistir&quot; — una guía reusable
              para cualquier proyecto audiovisual.
            </p>
          </motion.div>
        </div>

        <div className="flex gap-8 relative">
          {/* Mobile TOC toggle */}
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="lg:hidden fixed bottom-6 right-6 z-40 bg-electric-indigo-light text-bone-white p-4 brutalist-border shadow-xl flex items-center gap-2"
          >
            <span className="material-symbols-outlined">
              {tocOpen ? "close" : "list"}
            </span>
            <span className="font-bebas text-lg uppercase">Índice</span>
          </button>

          {/* TOC Sidebar */}
          <aside
            className={`
              fixed lg:sticky top-0 z-30 w-72 shrink-0 h-screen lg:h-auto
              ${tocOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
              transition-transform duration-300
              bg-grit-dark/95 lg:bg-transparent
              lg:block overflow-y-auto
              border-r border-electric-indigo-light/20 lg:border-r-0
              p-6 lg:p-0 pt-20 lg:pt-0
            `}
          >
            <div className="lg:sticky lg:top-24 space-y-1">
              <h4 className="font-jetbrains text-xs text-electric-indigo-light uppercase tracking-widest mb-4">
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
                        ? "border-electric-indigo-light text-bone-white bg-electric-indigo-light/10"
                        : "border-transparent text-bone-dim hover:text-bone-white hover:border-electric-indigo-light/50"
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
                  className="flex items-center gap-3 p-3 border border-electric-indigo-light/30 hover:border-electric-indigo-light transition-all group"
                >
                  <svg viewBox="0 0 100 100" className="w-6 h-6 shrink-0">
                    <path
                      fill="currentColor"
                      d="M69.6 2.8L38.8 35.6 16 14.4 2.8 29.2l25.2 23.6L2.8 76.4l13.2 14.8 22.8-21.2 30.8 32.8 16.4-14.8-30-31.6 30-31.6z"
                      className="text-bone-dim group-hover:text-electric-indigo-light transition-colors"
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
              <h3 className="font-bebas text-2xl text-electric-indigo-light uppercase mb-6">
                ¿Por qué un Second Brain en producción audiovisual?
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-jetbrains text-sm text-bone-white uppercase mb-3">
                    El problema
                  </h4>
                  <p className="font-archivo text-base text-bone-dim leading-relaxed">
                    La producción audiovisual genera información masiva
                    distribuida en múltiples soportes que se pierden entre
                    proyecto y proyecto: research en pestañas del navegador,
                    guiones en Google Docs, notas sueltas, planes de rodaje en
                    Excel, material en discos duros sin índice, conversaciones
                    de WhatsApp con ideas que se evaporan.
                  </p>
                  <p className="font-archivo text-base text-bone-dim leading-relaxed mt-3">
                    Este fenómeno se llama{" "}
                    <span className="text-bone-white font-bold">
                      Knowledge Fade
                    </span>
                    : la pérdida inevitable de contexto, referencias y
                    decisiones creativas cuando la información no está
                    estructurada.
                  </p>
                </div>

                <div>
                  <h4 className="font-jetbrains text-sm text-bone-white uppercase mb-3">
                    La solución
                  </h4>
                  <p className="font-archivo text-base text-bone-dim leading-relaxed">
                    Un <strong>Second Brain</strong> (Segundo Cerebro) basado en
                    Obsidian resuelve esto mediante cuatro principios:
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
                        <p className="font-archivo text-sm text-bone-dim mt-1">
                          {p.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {/* 2. ARQUITECTURA */}
            <Section id="arquitectura" title="Arquitectura del Sistema" number="02">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                El sistema opera en dos capas: el{" "}
                <strong>vault de Obsidian</strong> (texto ligero + metadatos) y
                el <strong>disco externo</strong> (medios pesados).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-5 border border-electric-indigo-light/20 bg-grit-black/40">
                  <h4 className="font-bebas text-lg text-electric-indigo-light uppercase mb-2">
                    Obsidian Vault
                  </h4>
                  <p className="font-archivo text-sm text-bone-dim">
                    Texto + metadatos (KB/MB). Notas Markdown con YAML
                    frontmatter. Nueve carpetas numeradas que cubren todo el
                    ciclo de producción.
                  </p>
                </div>
                <div className="p-5 border border-amber-400/20 bg-grit-black/40">
                  <h4 className="font-bebas text-lg text-amber-400 uppercase mb-2">
                    Disco Externo
                  </h4>
                  <p className="font-archivo text-sm text-bone-dim">
                    Medios pesados (GB/TB). Videos, audios, fotos. Estructura
                    jerárquica: EVENTO / FECHA / CÁMARA.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 border-l-4 border-electric-indigo-light bg-grit-black/30">
                <h4 className="font-jetbrains text-xs text-electric-indigo-light uppercase tracking-widest mb-2">
                  Principios de la Arquitectura
                </h4>
                <ul className="space-y-2">
                  <li className="font-archivo text-sm text-bone-dim flex gap-2">
                    <span className="text-electric-indigo-light shrink-0">
                      ▸
                    </span>
                    <strong className="text-bone-white">
                      Separación de peso:
                    </strong>{" "}
                    En Obsidian solo vive texto. Los archivos pesados están en
                    disco externo.
                  </li>
                  <li className="font-archivo text-sm text-bone-dim flex gap-2">
                    <span className="text-electric-indigo-light shrink-0">
                      ▸
                    </span>
                    <strong className="text-bone-white">
                      Indexación desde el texto:
                    </strong>{" "}
                    Las notas contienen metadatos + rutas relativas al disco.
                  </li>
                  <li className="font-archivo text-sm text-bone-dim flex gap-2">
                    <span className="text-electric-indigo-light shrink-0">
                      ▸
                    </span>
                    <strong className="text-bone-white">
                      Namespace único:
                    </strong>{" "}
                    Cada proyecto tiene un campo{" "}
                    <code className="text-electric-indigo-light">project:</code>{" "}
                    en el YAML.
                  </li>
                  <li className="font-archivo text-sm text-bone-dim flex gap-2">
                    <span className="text-electric-indigo-light shrink-0">
                      ▸
                    </span>
                    <strong className="text-bone-white">
                      Convención sobre configuración:
                    </strong>{" "}
                    La estructura de carpetas, naming y YAML es fija.
                  </li>
                </ul>
              </div>
            </Section>

            {/* 3. NN_CATEGORIA */}
            <Section id="nn-categoria" title="Sistema NN_CATEGORIA" number="03">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Las carpetas raíz usan el formato{" "}
                <code className="text-electric-indigo-light">NN_NOMBRE</code>{" "}
                donde <code className="text-electric-indigo-light">NN</code> es
                un número de dos dígitos que define el{" "}
                <strong>orden y la fase de producción</strong>.
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-electric-indigo-light/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">
                        Carpeta
                      </th>
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">
                        Fase
                      </th>
                      <th className="py-2 font-jetbrains text-xs text-electric-indigo-light uppercase">
                        Contenido
                      </th>
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
                      <tr
                        key={folder}
                        className="border-b border-grit-light/30 hover:bg-grit-black/30"
                      >
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">
                          {folder}
                        </td>
                        <td className="py-2 pr-4 text-bone-dim">{phase}</td>
                        <td className="py-2 text-bone-dim">{content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 border border-dashed border-amber-400/30 bg-grit-black/30">
                <p className="font-archivo text-sm text-bone-dim italic">
                  &ldquo;Cada nota vive en la carpeta de su fase de producción.
                  Si un documento cubre múltiples fases, se ubica en la carpeta
                  de su propósito principal y se enlaza a las demás mediante
                  wikilinks.&rdquo;
                </p>
              </div>
            </Section>

            {/* 4. TAXONOMÍA YAML */}
            <Section id="taxonomia" title="Taxonomía YAML" number="04">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                El YAML frontmatter es el <strong>sistema nervioso</strong> del
                Second Brain.
              </p>

              <pre className="mt-6 p-4 bg-grit-black border border-electric-indigo-light/30 overflow-x-auto text-sm font-jetbrains text-bone-dim leading-relaxed">
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
                    <li>
                      <code className="text-bone-white">project</code> —
                      Namespace del proyecto
                    </li>
                    <li>
                      <code className="text-bone-white">type</code> — Tipo de
                      nota
                    </li>
                    <li>
                      <code className="text-bone-white">status</code> — Estado
                    </li>
                    <li>
                      <code className="text-bone-white">tags</code> — Array de
                      etiquetas
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-grit-black/30 border-l-2 border-amber-400/40">
                  <h4 className="font-bebas text-base text-amber-400 uppercase mb-2">
                    Campos Opcionales
                  </h4>
                  <ul className="space-y-1 font-archivo text-sm text-bone-dim">
                    <li>
                      <code className="text-bone-white">related</code> —
                      Wikilinks relacionados
                    </li>
                    <li>
                      <code className="text-bone-white">date</code> — Fecha del
                      evento
                    </li>
                    <li>
                      <code className="text-bone-white">author</code> — Quién
                      escribió la nota
                    </li>
                    <li>
                      <code className="text-bone-white">version</code> —
                      Versión del documento
                    </li>
                    <li>
                      <code className="text-bone-white">path</code> — Ruta al
                      archivo físico
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Tipos de Nota
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-electric-indigo-light/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">
                        type
                      </th>
                      <th className="py-2 font-jetbrains text-xs text-electric-indigo-light uppercase">
                        Propósito
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["índice", "Mapa del proyecto"],
                      ["dossier", "Biblia de producción"],
                      ["perfil", "Biografía de personaje"],
                      ["guion", "Guion técnico o literario"],
                      ["cuestionario", "Guía de entrevista"],
                      ["producción", "Plan de rodaje"],
                      ["clip", "Índice de clip en disco externo"],
                      ["evento", "Resumen de rodaje"],
                      ["transmedia", "Estrategia de distribución"],
                      ["diseño", "Identidad visual"],
                      ["pitch", "Deck para inversores"],
                      ["reunión", "Acta de coordinación"],
                      ["legal", "Contratos"],
                      ["admin", "Metodología"],
                    ].map(([type, purpose]) => (
                      <tr
                        key={type}
                        className="border-b border-grit-light/30 hover:bg-grit-black/30"
                      >
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">
                          {type}
                        </td>
                        <td className="py-2 text-bone-dim">{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Ciclo de Vida de las Notas
              </h4>
              <p className="font-archivo text-base text-bone-dim leading-relaxed mb-4">
                Cada nota tiene un campo <code className="text-electric-indigo-light">status</code> que refleja su etapa en el flujo de producción:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-electric-indigo-light/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">Status</th>
                      <th className="py-2 font-jetbrains text-xs text-electric-indigo-light uppercase">Significado</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["borrador", "Nota recién creada, sin contenido definitivo"],
                      ["en-progreso", "En desarrollo activo"],
                      ["completado", "Versión final aprobada"],
                      ["activo", "Documento vivo que se actualiza constantemente"],
                      ["inicial", "Primera versión, pendiente de revisión"],
                      ["programada", "Tarea o evento agendado"],
                      ["pendiente", "Requiere acción externa para avanzar"],
                      ["revisión", "En revisión por un par o editor"],
                      ["cancelado", "Documento obsoleto o descartado"],
                    ].map(([status, meaning]) => (
                      <tr key={status} className="border-b border-grit-light/30 hover:bg-grit-black/30">
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">{status}</td>
                        <td className="py-2 text-bone-dim">{meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* 5. TIPOS DE NOTA */}
            <Section id="tipos-nota" title="Tipos de Nota y Anatomía" number="05">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Cada tipo de nota tiene una estructura interna consistente. A continuación se describe la anatomía de cada uno, con ejemplos reales del proyecto.
              </p>

              <div className="space-y-6 mt-6">
                <AnatomiaCard
                  typeName="índice"
                  purpose="Punto de entrada al proyecto. Mapa navegable de todo el vault."
                  yaml={`---
project: Nacidos para Resistir
type: índice
status: en-progreso
tags: [documental, rock, barranquilla, index]`}
                  sections={[
                    "Tagline / título del proyecto",
                    'Párrafo de qué es este repositorio',
                    'Lista de carpetas con wikilinks a cada nota importante',
                    "Estado actual del proyecto",
                    "Próximos pasos",
                  ]}
                  example="README.md en la raíz del proyecto"
                />

                <AnatomiaCard
                  typeName="dossier"
                  purpose="Biblia de producción. Documento maestro que unifica la visión del proyecto."
                  yaml={`---
project: Nacidos para Resistir
type: dossier
status: completado
tags: [estrategia, vision, produccion, documental]`}
                  sections={[
                    "Tagline + Logline",
                    "Idea central / sinopsis larga",
                    "Justificación y contexto social",
                    "Personajes principales (pilotes narrativos)",
                    "Propuesta estética (imagen, sonido)",
                    "Estructura dramática (actos)",
                    "Estrategia transmedia",
                    "Objetivos de producción",
                    "Próximos hitos",
                  ]}
                  example="01_DOSSIER/dossier.md"
                />

                <AnatomiaCard
                  typeName="perfil"
                  purpose="Investigación biográfica de un personaje, fuente o banda."
                  yaml={`---
project: Nacidos para Resistir
type: perfil
status: completado
tags: [personaje, periodista, experto, radio]`}
                  sections={[
                    "# Perfil — [Nombre]",
                    "## Quién es — descripción biográfica",
                    "## Por qué está en el documental — justificación narrativa",
                    "## Qué me interesa de esta persona — bullet points de interés",
                    "## Preguntas específicas (no genéricas)",
                    "## Cosas a tener en cuenta — notas de producción",
                    "## Posible frase potente (hipótesis) — cita candidata",
                  ]}
                  example="02_INVESTIGACION/perfiles/pepe_enciso.md"
                />

                <AnatomiaCard
                  typeName="cuestionario"
                  purpose="Guía estructurada de entrevista. No es un guion cerrado, es una brújula."
                  yaml={`---
project: Nacidos para Resistir
type: guion
status: completado
tags: [entrevista, cuestionario, produccion, pepe-enciso]`}
                  sections={[
                    "Encabezado: proyecto, entrevistado, medio (Zoom/presencial)",
                    "Briefing: nota de dirección",
                    "Bloques temáticos (## BLOQUE 1: [TEMA]) con preguntas numeradas",
                  ]}
                  example="03_GUION/cuestionario_pepe_enciso.md"
                />

                <AnatomiaCard
                  typeName="guion técnico"
                  purpose="Guion audiovisual en formato VIDEO/AUDIO (doble columna)."
                  yaml={`---
project: Nacidos para Resistir
type: guion
status: completado
tags: [guion, rodaje, técnico, doble-columna, audiovisual]`}
                  sections={[
                    "Encabezado: directora, duración, formato, modalidad narrativa",
                    "Actos (## ACTO N: NOMBRE)",
                    "Escenas (### ESC. N — LOCACIÓN — TIEMPO — PERSONA)",
                    "Tabla: # | VIDEO | AUDIO | DURACIÓN",
                  ]}
                  example="03_GUION/guion_audiovisual.md"
                />

                <AnatomiaCard
                  typeName="producción"
                  purpose="Cronograma y logística de rodaje."
                  yaml={`---
project: Nacidos para Resistir
type: producción
status: activo
tags: [rodaje, cronograma, logistica]`}
                  sections={[
                    "Tabla de días con hora, locación, equipo, riesgos",
                    "Checklist de equipos",
                    "Directorio de contactos de producción",
                  ]}
                  example="04_PRODUCCION/plan_de_rodaje_semanal.md"
                />

                <AnatomiaCard
                  typeName="reunión"
                  purpose="Acta de coordinación. Capturar decisiones, acuerdos y próximos pasos."
                  yaml={`---
project: Nacidos para Resistir
type: reunión
status: completado
tags: [coordinacion, reunion, produccion]`}
                  sections={[
                    "Fecha, asistentes, contexto",
                    "Puntos tratados (numerados)",
                    "Acuerdos y decisiones",
                    "Próximos pasos con responsables",
                  ]}
                  example="04_PRODUCCION/reunion_pepe_enciso.md"
                />

                <AnatomiaCard
                  typeName="clip"
                  purpose="Nota-índice que referencia un archivo de video/audio en el disco externo."
                  yaml={`---
project: Nacidos para Resistir
type: clip
status: completado
tags: [clip, entrevista, alberto-forero]
event: ENTREVISTA_ALBERTO_FORERO
date: 2026-05-20
camera: CAMARA_1_BELLA
path: /Volumes/DISCO/NACIDOS_PRO_RESISTIR/05_AUDIOVISUAL/.../DSC_001.MP4
duration: "12:34"`}
                  sections={[
                    "Metadatos: evento, fecha, cámara, ruta, duración",
                    "Enlazado al guion, perfil del entrevistado y evento de rodaje",
                    "Permite buscar y navegar material grabado desde Obsidian",
                  ]}
                  example="05_AUDIOVISUAL/clip_entrevista_alberto_forero.md"
                />
              </div>
            </Section>

            {/* 6. WIKILINKS */}
            <Section id="wikilinks" title="Wikilinks & Tags" number="06">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                El sistema de wikilinks sigue una lógica de{" "}
                <strong>derivación narrativa</strong>. Las conexiones no son
                aleatorias: cada tipo de nota genera el siguiente.
              </p>

              <div className="mt-6 space-y-2">
                {[
                  "INVESTIGACIÓN → genera → PERFILES",
                  "PERFILES → generan → CUESTIONARIOS",
                  "CUESTIONARIOS + PERFILES → alimentan → GUION",
                  "GUION → define → PLAN DE RODAJE",
                  "GUION + PLAN → producen → CLIPS",
                  "GUION → también alimenta → TRANSMEDIA",
                  "DOSSIER → es la raíz que conecta → TODO",
                ].map((chain, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 font-jetbrains text-xs md:text-sm text-bone-dim"
                  >
                    <span className="text-electric-indigo-light font-bold">
                      {i + 1}.
                    </span>
                    {chain.split("→").map((part, j) => (
                      <span key={j}>
                        {j > 0 && (
                          <span className="text-electric-indigo-light mx-1">
                            →
                          </span>
                        )}
                        <span
                          className={
                            j % 2 === 0
                              ? "text-bone-white"
                              : "text-electric-indigo-light"
                          }
                        >
                          {part}
                        </span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Reglas de Conexión
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-electric-indigo-light/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">Desde</th>
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">Hacia</th>
                      <th className="py-2 font-jetbrains text-xs text-electric-indigo-light uppercase">¿Cuándo?</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["Cualquier nota", "README", "Siempre que sea un documento principal"],
                      ["Perfil", "fuentes", "Siempre (todo personaje está en el directorio)"],
                      ["Cuestionario", "Su perfil", "Siempre (cada guía nace de un perfil)"],
                      ["Cuestionario", "cronograma_entrevistas", "Cuando la entrevista está agendada"],
                      ["Guion", "escaleta y curva_emotiva", "Siempre"],
                      ["Plan de rodaje", "cronograma y presupuesto", "Siempre"],
                      ["Clip", "Su evento, perfil y guion", "Siempre"],
                    ].map(([from, to, when]) => (
                      <tr key={from} className="border-b border-grit-light/30 hover:bg-grit-black/30">
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">{from}</td>
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-dim">{to}</td>
                        <td className="py-2 text-bone-dim">{when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Tags como Filtros Dinámicos
              </h4>
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Los tags siguen una taxonomía plana que permite filtrar por
                persona, fase, formato o área con un solo clic.
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
                    className="font-jetbrains text-[10px] px-3 py-1.5 border border-electric-indigo-light/30 text-bone-dim bg-grit-black/40"
                  >
                    #<span className="text-electric-indigo-light">{tag}</span>
                  </span>
                ))}
              </div>
            </Section>

            {/* 7. PUENTE DISCO EXTERNO */}
            <Section
              id="puente-disco"
              title="Puente con el Disco Externo"
              number="07"
            >
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Esta es la pieza más innovadora del sistema:{" "}
                <strong>
                  cómo integrar terabytes de video en un sistema de texto ligero
                </strong>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-5 border border-electric-indigo-light/20 bg-grit-black/40">
                  <h4 className="font-bebas text-lg text-bone-white uppercase mb-3">
                    El Problema
                  </h4>
                  <ul className="space-y-2 font-archivo text-sm text-bone-dim">
                    <li className="flex gap-2">
                      <span className="text-electric-indigo-light shrink-0">✕</span>
                      Videos RAW sin índice
                    </li>
                    <li className="flex gap-2">
                      <span className="text-electric-indigo-light shrink-0">✕</span>
                      Metadatos de rodaje perdidos
                    </li>
                    <li className="flex gap-2">
                      <span className="text-electric-indigo-light shrink-0">✕</span>
                      Guion desconectado del material
                    </li>
                  </ul>
                </div>
                <div className="p-5 border border-amber-400/20 bg-grit-black/40">
                  <h4 className="font-bebas text-lg text-bone-white uppercase mb-3">
                    Solución: Notas-Índice
                  </h4>
                  <ul className="space-y-2 font-archivo text-sm text-bone-dim">
                    <li className="flex gap-2">
                      <span className="text-amber-400 shrink-0">✓</span>
                      Notas ligeras con rutas al disco externo
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-400 shrink-0">✓</span>
                      Metadatos: evento, fecha, cámara, duración
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-400 shrink-0">✓</span>
                      Enlazadas al guion, perfil y evento
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Estructura Real del Disco Externo
              </h4>
              <p className="font-archivo text-sm text-bone-dim mb-3">
                El disco externo no sigue una convención uniforme. Cada evento tiene su propia estructura heredada de cómo se volcaron las tarjetas de memoria:
              </p>
              <pre className="p-4 bg-grit-black border border-dashed border-amber-400/30 overflow-x-auto text-sm font-jetbrains text-bone-dim leading-relaxed">
{`DISCO_EXTERNO/NACIDOS_PARA_RESISTIR/
  05_AUDIOVISUAL/
  entrevista pepe enciso 3 mayo/     ← Plano (todo junto, 4 archivos)
    2026-05-03 10-43-09.mkv
    pepe1.mkv
    video1.mp4

  Entrevista ronny y gabriel 25 mayo/   ← Por cámara
    camara bella/
    tomas issac/

  entrevista a alvaro de leon bruno/    ← Por cámara (anidado)
    Camara bella/       (C0443-C0445.MP4)
    Camara Johan/       (C0118-C0119.MP4)

  GUTURAL FEST - 02052026/              ← Por tipo de medio
    fotografia evento/    (DSC_####.JPG + .NEF)
    videos a evento/      (DSC_####.MOV)

  UTL ensayos/                          ← Plano (74 MOV)
    A001_MMDDHHMM_C###.mov`}
              </pre>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Convenciones de Naming de Cámaras
              </h4>
              <p className="font-archivo text-sm text-bone-dim mb-3">
                Los archivos conservan su nombre original de cámara. NO renombrar para no romper vínculos con el programa de edición.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-electric-indigo-light/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">Cámara</th>
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">Video</th>
                      <th className="py-2 font-jetbrains text-xs text-electric-indigo-light uppercase">Metadata</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["Canon", "C####.MP4", "C####M01.XML (~1 KB)"],
                      ["Canon (alt)", "C####t.MP4 / C####1.MP4 / C####a.MP4", "—"],
                      ["iPhone / Canon", "MVI_####.MOV", "IMG_####.CR2"],
                      ["Nikon", "DSC_####.MOV", "DSC_####.JPG + DSC_####.NEF"],
                      ["Sony / iPhone", "A001_MMDDHHMM_C###.mov", "—"],
                    ].map(([cam, video, meta]) => (
                      <tr key={cam} className="border-b border-grit-light/30 hover:bg-grit-black/30">
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">{cam}</td>
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-dim">{video}</td>
                        <td className="py-2 font-jetbrains text-xs text-bone-dim">{meta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Nota-Índice de Evento (Real)
              </h4>
              <p className="font-archivo text-sm text-bone-dim mb-3">
                Cada evento en el disco tiene una nota en <code className="text-electric-indigo-light">05_AUDIOVISUAL/</code> que refleja su estructura real:
              </p>
              <pre className="p-4 bg-grit-black border border-electric-indigo-light/30 overflow-x-auto text-sm font-jetbrains text-bone-dim leading-relaxed">
{`project: Nacidos para Resistir
type: evento
status: completado
tags: [rodaje, evento, entrevista, ronny, gabriel]
event: Entrevista ronny y gabriel 25 mayo
date: 2026-05-25
location: Sala de ensayo
cameras:
  - name: CAMARA_BELLA
    operator: Bella Santoya
    files_count: 32
    formats: [MP4, XML]
    subfolder: camara bella/
  - name: TOMAS_ISSAC
    operator: Isaac Indaburo
    files_count: 35
    formats: [CR2, MOV]
    subfolder: tomas issac/
path: /media/lounicorn/Nuevo vol/NACIDOS_PARA_RESISTIR/05_AUDIOVISUAL/...`}
              </pre>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Flujo de Trabajo al Grabar
              </h4>
              <div className="space-y-3">
                {[
                  ["Antes del rodaje", "El plan de rodaje y los cuestionarios están completos en Obsidian."],
                  ["Durante el rodaje", "Se graba normalmente. Las tarjetas se vuelcan al disco externo conservando los nombres originales de cámara. Se organizan en carpetas por evento con nombre en español y fecha al final."],
                  ["Después del rodaje", "Se crean las notas de evento en 05_AUDIOVISUAL/ documentando la estructura real de la carpeta, naming de cámara y vínculos con perfiles y guion. NO renombrar archivos originales."],
                  ["Durante la edición", "El editor usa Obsidian para buscar clips por evento, personaje o escena. Las notas de evento listan los archivos con sus nombres originales."],
                ].map(([fase, desc]) => (
                  <div key={fase} className="flex gap-3 p-3 bg-grit-black/30 border-l-2 border-electric-indigo-light/40">
                    <span className="font-bebas text-sm text-electric-indigo-light uppercase shrink-0 w-36">{fase}</span>
                    <p className="font-archivo text-sm text-bone-dim">{desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 8. GRAFO */}
            <Section id="grafo" title="Grafo de Conocimiento" number="08">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                El grafo real del documental &quot;Nacidos para Resistir&quot;
                contiene{" "}
                <strong className="text-bone-white">40+ notas</strong> y{" "}
                <strong className="text-bone-white">80+ conexiones</strong>.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                {[
                  { label: "Notas totales", value: "40+", color: "text-electric-indigo-light" },
                  { label: "Conexiones", value: "80+", color: "text-amber-400" },
                  { label: "Tipos de nota", value: "15", color: "text-green-400" },
                  { label: "Personajes", value: "8", color: "text-cyan-400" },
                  { label: "Cuestionarios", value: "6", color: "text-pink-400" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 bg-grit-black border border-electric-indigo-light/20 text-center"
                  >
                    <div className={`font-bebas text-3xl ${metric.color}`}>
                      {metric.value}
                    </div>
                    <div className="font-jetbrains text-[9px] text-bone-dim uppercase tracking-widest mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 border border-electric-indigo-light/20 bg-grit-black/40">
                <h4 className="font-bebas text-lg text-bone-white uppercase mb-4">
                  Nodos del Grafo
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "00 ADMIN",
                      items: ["Metodología Second Brain", "Credenciales", "10 templates"],
                    },
                    {
                      title: "01 DOSSIER",
                      items: ["Biblia de producción", "Ficha técnica", "Ficha producción"],
                    },
                    {
                      title: "02 INVESTIGACIÓN",
                      items: ["Research general", "Directorio fuentes", "8 perfiles", "Dossier León Bruno", "Dossier Sicotrópico", "Dossier UTL"],
                    },
                    {
                      title: "03 GUION",
                      items: ["Guion técnico", "Escaleta 5:07", "Curva emotiva", "6 cuestionarios"],
                    },
                    {
                      title: "04 PRODUCCIÓN",
                      items: ["Plan de rodaje", "Plan semanal", "Cronograma entrevistas", "Presupuesto $15M COP", "Autorizaciones", "Acta reunión"],
                    },
                    {
                      title: "06 TRANSMEDIA",
                      items: ["Estrategia 3P", "Plan web"],
                    },
                    {
                      title: "07 DISEÑO",
                      items: ["Manual de marca", "Soulful Rebels"],
                    },
                    {
                      title: "08 PITCH",
                      items: ["Deck v1", "Deck v2", "Presentación"],
                    },
                  ].map((node) => (
                    <div
                      key={node.title}
                      className="p-3 border-l-2 border-electric-indigo-light/30"
                    >
                      <h5 className="font-jetbrains text-xs text-electric-indigo-light uppercase tracking-widest">
                        {node.title}
                      </h5>
                      <ul className="mt-2 space-y-1">
                        {node.items.map((item) => (
                          <li
                            key={item}
                            className="font-archivo text-sm text-bone-dim flex gap-2"
                          >
                            <span className="text-amber-400">◇</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Conexiones Principales
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  ["README →", "dossier, research, escaleta, guion, plan, transmedia, diseño, pitch"],
                  ["Dossier →", "research, escaleta, transmedia, diseño, pitch"],
                  ["Research →", "fuentes, perfiles"],
                  ["Perfiles →", "cuestionarios, cronograma"],
                  ["Cuestionarios →", "guion técnico"],
                  ["Escaleta + Curva →", "guion técnico"],
                  ["Guion →", "plan de rodaje, plan semanal"],
                  ["Plan →", "presupuesto, cronograma, legal, reuniones"],
                  ["Metodología →", "README, dossier, ficha técnica"],
                ].map(([from, to]) => (
                  <div
                    key={from}
                    className="flex items-start gap-2 p-3 bg-grit-black/30 border-l-2 border-amber-400/30"
                  >
                    <span className="font-jetbrains text-xs text-electric-indigo-light shrink-0">
                      {from}
                    </span>
                    <span className="font-archivo text-sm text-bone-dim">
                      {to}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            {/* 9. REPLICAR */}
            <Section
              id="replicar"
              title="Cómo Replicar en Cualquier Proyecto"
              number="09"
            >
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Esta metodología está diseñada para ser{" "}
                <strong>reusable</strong> en cualquier proyecto audiovisual.
              </p>

              <div className="space-y-3 mt-6">
                {[
                  ["1", "Crear vault nuevo con carpeta 00-09"],
                  ["2", "Copiar templates desde 00_ADMIN/templates/"],
                  ["3", "Escribir README.md (índice del proyecto)"],
                  ["4", "Llenar 01_DOSSIER/dossier.md con la visión"],
                  ["5", "Investigar: perfiles, fuentes, research"],
                  ["6", "Desarrollar guion, escaleta, cuestionarios"],
                  ["7", "Planificar rodaje, presupuesto, legal"],
                ].map(([num, step]) => (
                  <div
                    key={num}
                    className="flex items-center gap-4 p-3 bg-grit-black/30 border-l-2 border-electric-indigo-light/50"
                  >
                    <span className="font-bebas text-2xl text-electric-indigo-light w-8">
                      {num}
                    </span>
                    <span className="font-archivo text-base text-bone-dim">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Paso 1: Crear el Vault
              </h4>
              <pre className="p-4 bg-grit-black border border-electric-indigo-light/30 overflow-x-auto text-sm font-jetbrains text-bone-dim leading-relaxed">
{`mkdir -p mi-proyecto/{00_ADMIN/templates,01_DOSSIER,02_INVESTIGACION/perfiles,03_GUION,04_PRODUCCION/legal,05_AUDIOVISUAL,06_TRANSMEDIA,07_DISENO/assets,08_PITCH,09_ARCHIVO}`}
              </pre>
              <p className="font-archivo text-sm text-bone-dim mt-2">
                O simplemente copia la carpeta <code className="text-electric-indigo-light">00_ADMIN/</code> de este proyecto y renombra el campo <code className="text-electric-indigo-light">project</code> en todos los YAML.
              </p>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Paso 5: Definir Taxonomía de Tags
              </h4>
              <p className="font-archivo text-base text-bone-dim leading-relaxed mb-4">
                Antes de empezar, define las categorías de tags que usarás:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-electric-indigo-light/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">Categoría</th>
                      <th className="py-2 font-jetbrains text-xs text-electric-indigo-light uppercase">Tags Sugeridos</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["Rol", "director, productor, musico, actor, experto, entrevistado"],
                      ["Fase", "pre-produccion, rodaje, post-produccion, distribucion"],
                      ["Tipo", "entrevista, b-roll, animacion, detras-de-camaras"],
                      ["Formato", "corto, largometraje, serie, reel, documental"],
                    ].map(([cat, tags]) => (
                      <tr key={cat} className="border-b border-grit-light/30 hover:bg-grit-black/30">
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">{cat}</td>
                        <td className="py-2 text-bone-dim">{tags}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Paso 6: Configurar Obsidian
              </h4>
              <ol className="space-y-2 font-archivo text-base text-bone-dim list-decimal list-inside">
                <li>Abrir Obsidian → Open folder as vault → seleccionar la carpeta del proyecto.</li>
                <li>Verificar que los core-plugins necesarios estén activos (ver sección 10).</li>
                <li>Crear el workspace de 3 paneles (explorador + editor + backlinks/tags).</li>
                <li>(Opcional) Configurar sync con Git u Obsidian Sync.</li>
              </ol>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Paso 7: Primeros 5 Documentos
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-electric-indigo-light/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">#</th>
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">Documento</th>
                      <th className="py-2 font-jetbrains text-xs text-electric-indigo-light uppercase">Template</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["1", "README.md (índice)", "_template_indice.md"],
                      ["2", "01_DOSSIER/dossier.md", "_template_dossier.md"],
                      ["3", "01_DOSSIER/ficha_tecnica.md", "_template_dossier.md"],
                      ["4", "02_INVESTIGACION/fuentes.md", "Manual (lista de fuentes)"],
                      ["5", "Primer perfil en perfiles/", "_template_perfil.md"],
                    ].map(([num, doc, template]) => (
                      <tr key={num} className="border-b border-grit-light/30 hover:bg-grit-black/30">
                        <td className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light">{num}</td>
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">{doc}</td>
                        <td className="py-2 text-bone-dim">{template}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Adaptación por Tipo de Proyecto
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { type: "Documental", desc: "Estructura tal cual. Investigación es crítica." },
                  { type: "Cortometraje", desc: "Guion es el centro. Investigación más pequeña." },
                  { type: "Serie", desc: "Subcarpetas por episodio." },
                  { type: "Disco/Álbum", desc: "Dossier = concepto. Guion = letras." },
                  { type: "Evento en vivo", desc: "Producción es crítica." },
                  { type: "Branded content", desc: "Dossier = brief. Transmedia = campaña." },
                ].map((proj) => (
                  <div
                    key={proj.type}
                    className="p-4 border border-electric-indigo-light/20 bg-grit-black/30 hover:border-electric-indigo-light/50 transition-colors"
                  >
                    <h5 className="font-bebas text-lg text-bone-white uppercase">
                      {proj.type}
                    </h5>
                    <p className="font-archivo text-sm text-bone-dim mt-1">
                      {proj.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 10. OBSIDIAN */}
            <Section id="obsidian" title="Configuración de Obsidian" number="10">
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
                      className="text-electric-indigo-light hover:text-amber-400 underline underline-offset-4"
                    >
                      Obsidian
                    </a>{" "}
                    es la herramienta central del sistema. Es una aplicación de
                    notas Markdown con enlaces bidireccionales, grafo de
                    conocimiento y un ecosistema de plugins.
                  </p>
                </div>
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mb-4">
                Core Plugins Recomendados
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-electric-indigo-light/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">Plugin</th>
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">Estado</th>
                      <th className="py-2 font-jetbrains text-xs text-electric-indigo-light uppercase">Propósito</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["file-explorer", "Activado", "Navegación por carpetas"],
                      ["global-search", "Activado", "Búsqueda rápida en todo el vault"],
                      ["switcher", "Activado", "Navegación rápida por nombre de nota"],
                      ["graph", "Activado", "Grafo de conocimiento visual"],
                      ["backlink", "Activado", "Ver enlaces entrantes"],
                      ["canvas", "Activado", "Mapas visuales y diagramas"],
                      ["outgoing-link", "Activado", "Enlaces salientes de la nota actual"],
                      ["tag-pane", "Activado", "Panel de filtrado por tags"],
                      ["properties", "Activado", "Edición de YAML frontmatter"],
                      ["page-preview", "Activado", "Vista previa al pasar el mouse sobre enlaces"],
                      ["daily-notes", "Activado", "Notas diarias de producción"],
                      ["templates", "Activado", "Insertar templates desde carpeta"],
                      ["note-composer", "Activado", "Fusionar y reestructurar notas"],
                      ["command-palette", "Activado", "Acceso rápido a comandos"],
                      ["editor-status", "Activado", "Estado del editor"],
                      ["bookmarks", "Activado", "Marcar notas frecuentes"],
                      ["outline", "Activado", "Navegación por encabezados"],
                      ["word-count", "Activado", "Conteo de palabras"],
                      ["file-recovery", "Activado", "Recuperación ante fallos"],
                      ["sync", "Activado", "Sync oficial de Obsidian (opcional)"],
                      ["bases", "Activado", "Bases de datos dentro de Obsidian"],
                      ["footnotes", "Desactivado", "No necesario para producción AV"],
                      ["slides", "Desactivado", "Preferimos pitch decks en PDF"],
                      ["publish", "Desactivado", "Publicación web externa"],
                      ["workspaces", "Desactivado", "Preferimos layout fijo"],
                    ].map(([plugin, status, purpose]) => (
                      <tr
                        key={plugin}
                        className="border-b border-grit-light/30 hover:bg-grit-black/30"
                      >
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">
                          {plugin}
                        </td>
                        <td className="py-2 pr-4">
                          <span className={`font-jetbrains text-[10px] uppercase ${status === "Activado" ? "text-green-400" : "text-bone-dim/50"}`}>
                            {status}
                          </span>
                        </td>
                        <td className="py-2 text-bone-dim">{purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Workspace Layout
              </h4>
              <div className="p-5 border border-electric-indigo-light/20 bg-grit-black/40 font-jetbrains text-xs text-bone-dim leading-relaxed">
                <p className="mb-3 text-bone-white">Barra de pestañas (archivos abiertos)</p>
                <pre className="text-center text-bone-dim">
{`  PANEL IZQ (300px)   |   PANEL CENTRAL   |   PANEL DERECHO
  ─────────────────────┼────────────────────┼────────────────────
  Explorer             |   Editor           |   Backlinks
  Search               |   (nota activa)    |   Outgoing Links
  Bookmarks            |                    |   Tags
  Outline              |                    |`}
                </pre>
              </div>

              <h4 className="font-jetbrains text-sm text-electric-indigo-light uppercase mt-8 mb-4">
                Atajos de Teclado
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-electric-indigo-light/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">Atajo</th>
                      <th className="py-2 font-jetbrains text-xs text-electric-indigo-light uppercase">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["Cmd/Ctrl + O", "Switcher (abrir nota por nombre)"],
                      ["Cmd/Ctrl + P", "Command palette"],
                      ["Cmd/Ctrl + E", "Vista previa / edición"],
                      ["Cmd/Ctrl + K", "Insertar wikilink"],
                      ["Cmd/Ctrl + L", "Seleccionar línea actual"],
                      ["Cmd/Ctrl + D", "Seleccionar palabra actual"],
                      ["[[", "Auto-completar wikilink"],
                      ["#", "Auto-completar tag"],
                    ].map(([shortcut, action]) => (
                      <tr key={shortcut} className="border-b border-grit-light/30 hover:bg-grit-black/30">
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">{shortcut}</td>
                        <td className="py-2 text-bone-dim">{action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-5 border border-electric-indigo-light/20 bg-grit-black/40">
                <h4 className="font-jetbrains text-xs text-electric-indigo-light uppercase tracking-widest mb-3">
                  Alternativas a Obsidian
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: "VS Code + Foam", compat: "100%" },
                    { name: "Logseq", compat: "90%" },
                    { name: "Cualquier editor MD", compat: "80%" },
                    { name: "Git + Markdown", compat: "95%" },
                  ].map((alt) => (
                    <div
                      key={alt.name}
                      className="p-3 border border-grit-light/30 text-center"
                    >
                      <div className="font-jetbrains text-xs text-bone-white">
                        {alt.name}
                      </div>
                      <div className="font-bebas text-xl text-electric-indigo-light">
                        {alt.compat}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* 11. TEMPLATES */}
            <Section
              id="templates"
              title="Referencia de Templates"
              number="11"
            >
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Templates disponibles en{" "}
                <code className="text-electric-indigo-light">
                  00_ADMIN/templates/
                </code>
                .
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-electric-indigo-light/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">
                        Template
                      </th>
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">
                        type
                      </th>
                      <th className="py-2 font-jetbrains text-xs text-electric-indigo-light uppercase">
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
                      <tr
                        key={file}
                        className="border-b border-grit-light/30 hover:bg-grit-black/30"
                      >
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">
                          {file}
                        </td>
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

            {/* 12. GLOSARIO */}
            <Section id="glosario" title="Glosario del Sistema" number="12">
              <p className="font-archivo text-base text-bone-dim leading-relaxed">
                Términos clave del sistema Second Brain para producción audiovisual.
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left font-archivo text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-electric-indigo-light/30">
                      <th className="py-2 pr-4 font-jetbrains text-xs text-electric-indigo-light uppercase">Término</th>
                      <th className="py-2 font-jetbrains text-xs text-electric-indigo-light uppercase">Definición</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone-dim">
                    {[
                      ["Vault", "Carpeta raíz que Obsidian abre como repositorio de conocimiento"],
                      ["Nota", "Archivo .md individual con YAML + Markdown"],
                      ["YAML frontmatter", "Bloque de metadatos al inicio de cada nota, entre ---"],
                      ["Wikilink", "Enlace interno tipo [[nota]] o [[nota|Alias]]"],
                      ["Grafo", "Visualización de nodos (notas) y aristas (wikilinks)"],
                      ["Tag", "Etiqueta plana #tag para filtrar y agrupar"],
                      ["Template", "Nota preescrita con estructura y YAML, lista para copiar"],
                      ["Nota-índice", "Nota ligera que referencia archivos pesados en disco externo"],
                      ["Knowledge Fade", "Fenómeno de pérdida de contexto entre proyectos"],
                      ["Namespace", "Campo project en YAML que aísla un proyecto de otros"],
                    ].map(([term, def]) => (
                      <tr key={term} className="border-b border-grit-light/30 hover:bg-grit-black/30">
                        <td className="py-2 pr-4 font-jetbrains text-xs text-bone-white">{term}</td>
                        <td className="py-2 text-bone-dim">{def}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* Footer */}
            <div className="py-8 border-t border-electric-indigo-light/20 text-center">
              <p className="font-jetbrains text-xs text-bone-dim/60 uppercase tracking-widest">
                Documento de metodología v1.0
              </p>
              <p className="font-archivo text-sm text-bone-dim mt-1">
                Sistema implementado en el documental{" "}
                <em>Nacidos para Resistir</em> (Lounicorn Films, 2026)
              </p>
              <p className="font-archivo text-xs text-bone-dim/50 italic mt-2">
                &quot;El rock en Barranquilla no pertenece aquí… pero aquí
                resiste.&quot;
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-6 font-bebas text-lg text-electric-indigo-light hover:text-bone-white transition-colors uppercase"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Volver al proyecto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        <span className="font-jetbrains text-sm text-electric-indigo-light font-bold">
          {number}
        </span>
        <div className="h-px flex-1 bg-electric-indigo-light/20" />
      </div>
      <h2 className="font-bebas text-3xl md:text-5xl text-bone-white uppercase leading-tight mb-6">
        {title}
      </h2>
      {children}
    </motion.div>
  );
}
