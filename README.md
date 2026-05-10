# Nacidos para Resistir — Transmedia Hub

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-purple?logo=framer)](https://www.framer.com/motion/)
[![Leaflet.js](https://img.shields.io/badge/Leaflet-green?logo=leaflet)](https://leafletjs.com/)

**Nacidos para Resistir** es la plataforma transmedia y nodo interactivo del proyecto documental homónimo sobre la escena del rock en Barranquilla. Diseñado bajo la estética _Soulful Rebels_ (estilo expediente de investigación / brutalismo).

---

## Stack Tecnológico

El proyecto es una **Single-Page Application (SPA)** con navegación por anclas (`#scrollytelling`), impulsada por:

- **Framework:** Next.js 15 (App Router), React 19.
- **Estilos:** Tailwind CSS v4.0.
- **Tipado:** TypeScript.
- **Animaciones:** Framer Motion (paralaje, *staggering*, *drag & drop*).
- **Mapas:** React-Leaflet + Leaflet.js.

---

## Arquitectura Técnica de Componentes

### 1. El Mapa Interactivo (Cartografía Cartográfica)
Ubicado en `src/components/sections/Escena.tsx`.
Se implementó un mapa web utilizando **React-Leaflet** para geolocalización.
*   **Fix de SSR en Next.js:** Leaflet hace llamadas directas a variables globales (`window`), por ello el `<MapContainer>` entero debe importarse dinámicamente con `next/dynamic` usando `ssr: false`. También reasignamos manualmente las rutas de los íconos del marcador de mapa que se corrompen en React.
*   **Estructura de Datos:** Un arreglo atómico `locations` provee *Latitud*, *Longitud*, *Descripción* e *Instagram*.
*   **Filtro por Categorías:** Botones iterativos para filtrar sobre el mapa oficial (`ensayo`, `escenario`, `produccion`), actualizando los Marcadores inyectados en runtime.
*   **Custom Popups:** Soporte nativo para agregar una ruta fotográfica (`image: "/images/bar.jpg"`) y botones que redirigen automáticamente a Instagram sin requerir la Graph API de Meta (por motivos de CORS/Privacidad).

### 2. El "Segundo Cerebro" (Canvas Interactivo)
Ubicado en `src/components/sections/SegundoCerebro.tsx`.
*   Desarrollado inyectando la variable `drag` de **Framer Motion** sobre un `<motion.div>`.
*   Esto crea un lienzo perimetrado (`dragConstraints`) donde el usuario puede manipular con arrastre de ratón una representación gráfica de la base de datos documental (Obsidian).
*   Cuenta con botones fijos (Z-index elevados) que inyectan funciones de `scale` para **acercar o alejar (Zoom)** como una pizarra forense.

### 3. Estética Brutalista & CSS Personalizado
Ubicado globalmente en `src/app/globals.css`.
*   **Vars en `@theme` (Tailwind v4):** Redefinición nativa de la paleta oficial (Grit Black, Blood Red, Bone White) sin requerir el antiguo `tailwind.config.ts`.
*   **Hotspot Puntero Local:** Integración de un SVG nativo `cursor-rock.svg` dimensionado a 32px y calibrado (`cursor: url('/cursor-rock.svg') 16 16, auto;`) apuntando al centro exacto del dedo.
*   **Clases de Utilidad de Textura:** Animaciones de ruido (flicker screen, grano de cinta 16mm a través de SVGs Base64).

---

## Correr Localmente

Todo el proyecto reside localmente y es funcional out-of-the-box sin APIs secretas bloqueantes.

1. **Clonar** el repositorio.
2. **Instalar dependencias:**
   ```bash
   npm install
   # o
   yarn install
   ```
3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. **Ver sitio local:**
   Abre [http://localhost:3000](http://localhost:3000)

## 📌 Licencia y Autoría
Proyecto programado para el documental bajo autoría de **Lounicorn Films**.
