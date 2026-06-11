"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyzMJSlKtR0St1p58mNcd8jVi556O3jH19T0cmwHjokTHeVlqfBYFHsvC38V6kCok0FXQ/exec";

export default function Prensa() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje }),
      });

      setStatus("success");
      setNombre("");
      setEmail("");
      setMensaje("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="prensa"
      className="section-spacing bg-grit-black text-bone-white border-t border-blood-red/20"
    >
      <div className="container-site">
        <div className="mb-12">
          <div className="narrative-marker">
            <span className="material-symbols-outlined text-sm">mail</span>
            OFICINA DE COMUNICACIONES // CONTACTO & PRENSA
          </div>
          <h2 className="font-bebas text-5xl md:text-8xl text-bone-white leading-tight uppercase">
            NOTICIAS DE LA
            <br />
            <span className="text-blood-red">RESISTENCIA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-grit-dark p-8 brutalist-border"
            >
              <h3 className="font-bebas text-3xl text-bone-white mb-6 uppercase tracking-wider">
                CONTACTO DIRECTO
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-jetbrains text-[10px] text-blood-red uppercase block">
                      Nombre de Operador
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre..."
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                      disabled={status === "sending"}
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-jetbrains text-[10px] text-blood-red uppercase block">
                      Canal de Comunicación
                    </label>
                    <input
                      type="email"
                      placeholder="email@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === "sending"}
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-jetbrains text-[10px] text-blood-red uppercase block">
                    Mensaje / Reporte de Campo
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Escribe tu mensaje aquí..."
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                    disabled={status === "sending"}
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full md:w-auto uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" && (
                    <span className="inline-block w-4 h-4 border-2 border-bone-white/30 border-t-bone-white rounded-full animate-spin mr-2" />
                  )}
                  {status === "sending"
                    ? "ENVIANDO..."
                    : status === "success"
                      ? "¡TRANSMISIÓN ENVIADA!"
                      : status === "error"
                        ? "ERROR — INTENTA DE NUEVO"
                        : "ENVIAR TRANSMISIÓN"}
                  {status === "idle" && (
                    <span className="material-symbols-outlined">send</span>
                  )}
                  {status === "success" && (
                    <span className="material-symbols-outlined">check_circle</span>
                  )}
                  {status === "error" && (
                    <span className="material-symbols-outlined">error</span>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Press Kit */}
          <div className="lg:col-span-5 space-y-8">
            <div className="brutalist-card">
              <h3 className="font-bebas text-3xl text-blood-red mb-4 uppercase">
                KIT DE PRENSA
              </h3>
              <p className="font-archivo text-sm text-bone-dim mb-6 italic">
                "Descarga todo el material oficial para difusión: pósters, trailers y fichas
                técnicas."
              </p>
              <div className="space-y-3">
                <a
                  href="https://drive.google.com/file/d/1S38HKC5LOZq-I-4D_h4wXwOSVkrlyFWH/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-between items-center bg-grit-black p-3 border border-blood-red/20 hover:border-blood-red transition-all group"
                >
                  <span className="font-jetbrains text-[10px] text-bone-white uppercase group-hover:text-blood-red transition-colors">
                    DOSSIER_PRODUCCION.PDF
                  </span>
                  <span className="material-symbols-outlined text-blood-red text-sm">
                    download
                  </span>
                </a>
              </div>
            </div>

            <div className="p-6 border-l-2 border-dashed border-blood-red/30">
              <h4 className="font-jetbrains text-[10px] text-blood-red uppercase mb-4 tracking-widest">
                INFORMACIÓN COMPLEMENTARIA
              </h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-grit-dark flex items-center justify-center border border-blood-red/30">
                    <span className="material-symbols-outlined text-blood-red">share</span>
                  </div>
                  <div>
                    <p className="font-bebas text-lg text-bone-white uppercase leading-none">
                      REDES SOCIALES
                    </p>
                    <p className="font-jetbrains text-[9px] text-bone-dim uppercase">
                      @NACIDOSPARARESISTIR
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-grit-dark flex items-center justify-center border border-blood-red/30">
                    <span className="material-symbols-outlined text-blood-red">apartment</span>
                  </div>
                  <div>
                    <p className="font-bebas text-lg text-bone-white uppercase leading-none">
                      PRODUCIDO POR
                    </p>
                    <p className="font-jetbrains text-[9px] text-bone-dim uppercase">
                      LOUNICORN FILMS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
