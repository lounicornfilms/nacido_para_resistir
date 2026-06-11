import type { Metadata } from "next";
import { Bebas_Neue, Archivo_Narrow, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const archivo = Archivo_Narrow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nacidos para Resistir — Documental Rock Barranquilla",
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Hub transmedia del documental sobre la escena rockera de Barranquilla. Descubre las historias, la música y los lugares donde el rock resiste.",
  keywords: [
    "documental",
    "rock",
    "barranquilla",
    "colombia",
    "música",
    "underground",
    "resistir",
  ],
  openGraph: {
    title: "Nacidos para Resistir",
    description:
      "El rock no pertenece aquí… pero aquí resiste. Documental sobre la escena rockera de Barranquilla.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebas.variable} ${archivo.variable} ${jetbrains.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
