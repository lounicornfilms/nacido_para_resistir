# NACIDOS PARA RESISTIR — Design System Reference

> Documento de diseño integral para mantener consistencia del sitio. Cualquier cambio debe reflejarse aquí y en `src/app/globals.css`.

---

## 1. PROJECT OVERVIEW

| Propiedad | Valor |
|-----------|-------|
| **Proyecto** | Nacidos para Resistir — Transmedia Hub |
| **Framework** | Next.js 16 (App Router, SPA con anclas) |
| **Lenguaje** | TypeScript (JSX/TSX) |
| **Estilos** | Tailwind CSS v4 + `@theme` custom |
| **Animaciones** | Framer Motion v12 |
| **Mapa** | Leaflet + React-Leaflet (CartoDB dark tiles) |
| **Íconos** | Material Symbols Outlined (CDN) |
| **Tipografía** | Google Fonts via `next/font/google` |
| **Hosting** | Vercel |
| **SEO** | next/metadata, Open Graph, keywords |

### Sections (orden en page.tsx)

| # | ID | Componente | Ruta |
|---|------|-----------|------|
| 1 | hero | Hero | `src/components/sections/Hero.tsx` |
| 2 | documental | Documental | `src/components/sections/Documental.tsx` |
| 3 | escena | Escena | `src/components/sections/Escena.tsx` |
| 4 | personajes | Personajes | `src/components/sections/Personajes.tsx` |
| 5 | envivo | PresentacionesEnVivo | `src/components/sections/PresentacionesEnVivo.tsx` |
| 6 | podcast | Podcast | `src/components/sections/Podcast.tsx` |
| 6 | musica | Musica | `src/components/sections/Musica.tsx` |
| 7 | galeria | Galeria | `src/components/sections/Galeria.tsx` |
| 8 | prensa | Prensa | `src/components/sections/Prensa.tsx` |
| 9 | cerebro | SegundoCerebro | `src/components/sections/SegundoCerebro.tsx` |

Layout: `src/app/layout.tsx` — carga fuentes, metadata, Material Symbols CDN.
Componentes globales: `src/components/Navbar.tsx`, `src/components/Footer.tsx`.
Página principal: `src/app/page.tsx` — importa y ordena secciones + section-divider entre ellas.

---

## 2. BRAND IDENTITY

### Filosofía
Fusión de **Brutalismo** y **High-Contrast Bold**. El UI debe sentirse como un artefacto físico — un zine escaneado, un afiche de concierto pegado en una pared húmeda, un amplificador vintage. La profundidad visual se logra no con sombras, sino con contraste extremo, overlays de grano de película, y transiciones glitch que evocan cinta magnética analógica.

Las superficies redondeadas (rounded DEFAULT 0.5rem) aportan sensación de uso y desgaste, como una púa de guitarra gastada o las esquinas de un vinilo.

### Tono y Voz
- Auténtico, underground, resistente
- Lenguaje directo, español barranquillero
- Palabras clave: *resistir*, *escena*, *rock*, *barranquillera*, *underground*
- Los narrative-markers usan jerga técnica: EXPEDIENTE #001, ARCHIVOS DE CAMPO, FICHA DE BANDAS, RELATOS SONOROS, OFICINA DE COMUNICACIONES

---

## 3. DESIGN TOKENS

### 3.1 Colors

Definidos en `globals.css` `@theme` como variables CSS Tailwind v4. Usar siempre las variables de `@theme`, NUNCA valores hardcodeados.

| Token | Variable CSS | HEX | Uso |
|-------|-------------|-----|-----|
| `grit-black` | `--color-grit-black` | `#0F0F0F` | Fondo primario del sitio (`body`) |
| `grit-dark` | `--color-grit-dark` | `#1c1b1b` | Fondo secundario, cards, navbar scrolled |
| `grit-mid` | `--color-grit-mid` | `#2a2a2a` | Superficies medias |
| `grit-light` | `--color-grit-light` | `#353534` | Bordes, superficies altas |
| `blood-red` | `--color-blood-red` | `#8B0000` | Primary accent, CTAs, estados activos, acentos |
| `blood-red-light` | `--color-blood-red-light` | `#b52619` | Hover states de blood-red |
| `bone-white` | `--color-bone-white` | `#F5F0E6` | Texto principal, iconos primarios |
| `bone-dim` | `--color-bone-dim` | `#e3beb8` | Texto secundario, muted |
| `electric-indigo` | `--color-electric-indigo` | `#5D3FD3` | Links inline, glitch artifacts |
| `electric-indigo-light` | `--color-electric-indigo-light` | `#b2a3ff` | Link hover, decoraciones |
| `burnt-caramel` | `--color-burnt-caramel` | `#4A1C1A` | Container backgrounds, cards, map popups |
| `dust-olive` | `--color-dust-olive` | `#797D62` | Metadata, labels, earthy grit, placeholders |

### 3.2 Typography

Cargadas desde Google Fonts via `next/font/google` en `layout.tsx` con `display: swap`.

```tsx
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const archivo = Archivo_Narrow({ weight: ["400","500","600","700"], subsets: ["latin"], variable: "--font-archivo" });
const jetbrains = JetBrains_Mono({ weight: ["400","500"], subsets: ["latin"], variable: "--font-jetbrains" });
```

| Token | Font-family | Variable | Uso |
|-------|------------|----------|-----|
| `font-bebas` | `"Bebas Neue", sans-serif` | `--font-bebas` | Headlines, display, **siempre uppercase** |
| `font-archivo` | `"Archivo Narrow", sans-serif` | `--font-archivo` | Body text, párrafos |
| `font-jetbrains` | `"JetBrains Mono", monospace` | `--font-jetbrains` | Labels, metadata, timecodes, datos técnicos, siempre uppercase |

**Reglas base**: `h1-h6` tienen `font-family: var(--font-bebas)`, `text-transform: uppercase`, `line-height: 1`, `letter-spacing: -0.01em`.

**Text scale overrides** (para Archivo Narrow, que es más angosto que la default de Tailwind):

| Clase | font-family | font-size | line-height | letter-spacing | Notas |
|-------|-------------|-----------|-------------|----------------|-------|
| `.display-lg` | bebas | `clamp(48px, 10vw, 96px)` | 0.9 | -0.02em | Hero o títulos masivos |
| `.headline-xl` | bebas | `clamp(40px, 6vw, 64px)` | 1 | — | Títulos de sección grandes |
| `.headline-lg` | bebas | `clamp(32px, 4vw, 48px)` | 1 | — | Subtítulos |
| `.headline-md` | bebas | `clamp(24px, 3vw, 32px)` | 1.1 | — | Títulos de cards |
| `.body-lg` | archivo | 20px | 1.6 | — | Párrafos grandes |
| `.body-md` | archivo | 16px | 1.5 | — | Texto base (body tiene 18px) |
| `.label-sm` | jetbrains | 12px | 1.4 | 0.05em | **Siempre uppercase**, metadata |

En la práctica, las secciones usan mayormente clases directas de Tailwind (`font-bebas text-5xl md:text-7xl`) en vez de las utility clases. Preferir el patrón usado actualmente sobre las utility clases para mantener consistencia.

### 3.3 Spacing

| Token | Valor | Uso |
|-------|-------|-----|
| `--spacing-gutter` | 24px | Gap entre elementos |
| `--spacing-margin-desktop` | 64px | Padding lateral del container en ≥768px |
| `--spacing-margin-mobile` | 20px | Padding lateral del container en <768px |
| `--spacing-container-max` | 1440px | Max-width del container |

Clase utility: `.container-site { max-width: 1440px; margin: 0 auto; padding: 0 20px }` → `md: px-64px`.
Clase utility: `.section-spacing { padding-top: 6rem; padding-bottom: 6rem }` → `md: py-16`.

### 3.4 Border Radius

| Token | Valor |
|-------|-------|
| `--radius-sm` | 0.25rem (4px) |
| `--radius-DEFAULT` | 0.5rem (8px) |
| `--radius-md` | 0.75rem (12px) |
| `--radius-lg` | 1rem (16px) |
| `--radius-xl` | 1.5rem (24px) |

Regla: **Todos los elementos UI** (botones, inputs, cards, popups) usan `rounded-DEFAULT` (0.5rem). El mapa usa `rounded-lg`.

---

## 4. GLOBAL STYLES & EFFECTS

### 4.1 Base Body

```css
body {
  background-color: var(--color-grit-black);
  color: var(--color-bone-white);
  font-family: var(--font-archivo);
  font-size: 18px;
  line-height: 1.6;
  overflow-x: hidden;
}
```

### 4.2 Grain Overlay

```css
body::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' ... SVG noise filter ... %3E");
  background-size: 200px 200px;
}
```

Aplica un noise fractal SVG al 4% de opacidad sobre toda la página. NO remover ni cambiar z-index.

### 4.3 Custom Cursor

```css
html, body { cursor: url('/cursor-rock.svg') 16 16, auto; }
a, button, [role="button"], .cursor-pointer { cursor: url('/cursor-rock.svg') 16 16, pointer !important; }
```

Usa `/public/cursor-rock.svg` para todos los elementos clickeables.

### 4.4 Scrollbar

```css
html { scroll-behavior: smooth; scrollbar-width: thin; scrollbar-color: #8B0000 #0F0F0F; }
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #0F0F0F; }
::-webkit-scrollbar-thumb { background: #8B0000; border-radius: 4px; }
```

### 4.5 Section Dividers

```
<div className="section-divider" />
```

```css
.section-divider {
  width: 100%; height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-blood-red), transparent);
  margin: 0; border: none;
}
```

### 4.6 Links

```css
a { color: var(--color-electric-indigo-light); text-decoration: none; transition: color 0.2s; }
a:hover { color: var(--color-electric-indigo); }
```

Excepción: botones y CTAs usan btn-primary o estilos propios.

---

## 5. UTILITY CLASSES

Todas definidas en `globals.css`.

### `.brutalist-border`
```
border: 2px solid var(--color-blood-red);
box-shadow: 4px 4px 0px rgba(139, 0, 0, 0.4);
```
Usar en imágenes destacadas, cards principales, contenedores del mapa, posters.

### `.brutalist-card`
```
background: var(--color-grit-dark);
border-left: 6px solid var(--color-blood-red);
padding: 1.5rem;
position: relative;
overflow: hidden;
```
Usar para tarjetas informativas, sidebar del mapa, datos técnicos, sinopsis.

### `.narrative-marker`
```
font-family: var(--font-jetbrains);
font-size: 0.75rem;
text-transform: uppercase;
color: var(--color-blood-red);
display: flex; align-items: center; gap: 0.5rem;
padding-bottom: 0.5rem; margin-bottom: 1rem;
border-bottom: 1px solid rgba(139, 0, 0, 0.2);
```
Aparece al inicio de cada sección. Siempre incluye un icono Material Symbols + texto tipo "ARCHIVO DE CAMPO // DESCRIPCIÓN".

### `.btn-primary`
```
inline-flex items-center gap-2;
padding: 0.875rem 2rem;
background-color: var(--color-blood-red);
color: var(--color-bone-white);
font-family: var(--font-bebas);
font-size: 1.125rem;
text-transform: uppercase;
letter-spacing: 0.05em;
border: none; border-radius: var(--radius-DEFAULT);
transition: all 0.2s;
```
Hover: glitch animation + blood-red-light background. Usar en CTAs principales.

### `.card`
```
background-color: var(--color-burnt-caramel);
border-radius: var(--radius-DEFAULT);
overflow: hidden;
transition: transform 0.3s, box-shadow 0.3s;
border: 1px solid transparent;
```
Hover: translateY(-4px), border-color blood-red.

### `.input-field`
```
width: 100%; padding: 0.75rem 1rem;
background: transparent;
border: 2px solid var(--color-bone-white);
border-radius: var(--radius-DEFAULT);
color: var(--color-bone-white);
font-family: var(--font-archivo);
font-size: 1rem;
```
Focus: border-color blood-red + flicker animation. Placeholder: dust-olive.

### `.torn-edge`
```
clip-path: polygon(0% 0%, 100% 0%, 100% 95%, ... 34 valores ... 0% 100%);
```
Usar para efecto de papel rasgado. En Escena se usa con `scale-y-[-1]` para invertir.

### `.duotone`
```
filter: grayscale(100%) contrast(1.3) brightness(0.9);
mix-blend-mode: luminosity;
```
### `.duotone-container`
```
position: relative; overflow: hidden; border-radius: var(--radius-DEFAULT);
&::after { background: linear-gradient(135deg, rgba(139,0,0,0.4), rgba(15,15,15,0.6)); mix-blend-mode: multiply; }
```

---

## 6. COMPONENT LIBRARY

### 6.1 Navbar (`Navbar.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Position | `fixed top-0 left-0 right-0 z-50` |
| Default bg | `bg-transparent` |
| Scrolled bg (≥60px) | `bg-grit-black/90 backdrop-blur-sm border-b border-blood-red/30` |
| Transición | `transition-all duration-300` |
| Altura | `h-16` |
| Container | `container-site` |

**Desktop (≥lg)**:
- Links horizontales: `font-bebas text-blood-red text-sm uppercase tracking-wider hover:text-bone-white glitch-text-hover no-underline`
- Gap: `gap-8`
- 8 links: El Documental, La Escena, Personajes, El Podcast, Música, Bajo El Lente, Prensa, Ecosistema

**Mobile (<lg)**:
- Hamburger: `flex flex-col gap-1.5`, 3x `<motion.span>` de 24x2px bone-white
- Animación: rotate 45°/opacity 0/rotate -45° con motion animate
- Menú: `AnimatePresence` con `motion.div` height 0 → auto, opacity 0 → 1
- Fondo del menú: `bg-grit-black/95 backdrop-blur-md border-t border-blood-red/30`
- Links: `font-bebas text-bone-white text-xl uppercase hover:text-blood-red`

### 6.2 Footer (`Footer.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Background | `bg-grit-dark border-t-2 border-blood-red` |
| Grid | `grid-cols-1 md:grid-cols-3 gap-8` |
| Padding | `py-12` |
| Bottom bar | `mt-10 pt-6 border-t border-grit-light` |

**Columna 1 — Branding**:
- Logo: `/logo-productora.svg`, `h-32 w-auto`
- Texto: `body-md text-dust-olive`

**Columna 2 — Navegación**:
- Título: `font-bebas text-bone-white text-lg`
- Links: `text-dust-olive hover:text-blood-red text-sm uppercase font-jetbrains tracking-wider`

**Columna 3 — Equipo**:
- Crew en grid 2-columnas: Dirección Luisa María Arroyo, Producción Luisa María Arroyo, Edición y Montaje Luisa María Arroyo, Cámara Bella Niris Santoya, Segunda Cámara David Isaac Indaburo, Asistente de Cámara Juan Sarmiento, Asistente de Rodaje Yojan de la Esprilla
- Rol: `label-sm text-dust-olive`, Nombre: `text-bone-dim text-sm`
- Social: narrative-marker "SÍGUENOS", 3 links con iconos Material Symbols + handle en blood-red:
  - YouTube `youtube_activity` → `@nacidospararesistir`
  - Instagram `camera_alt` → `@nacidospararesistir`
  - Instagram `camera_alt` → `@lounicornfilms` (productora, en bone-dim)

### 6.3 Hero (`Hero.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Altura | `h-screen` |
| Background | `bg-grit-black` |
| Parallax | `useScroll` + `useTransform` — yBackground: 0% → 30%, opacityText: 1 → 0, scaleText: 1 → 0.9 |

**Background**: 
- `absolute inset-0 z-0`
- Gradient overlay: `from-transparent via-grit-black/50 to-grit-black z-10`
- Imagen: `/hero-bg.jpg`, `grayscale brightness-50 opacity-60`, `h-[120%]`

**Content** (z-20, text-center):
- Logo: `/logo-documental.svg`, `h-48 md:h-72 mx-auto mb-10`
- Tagline: `font-jetbrains text-blood-red text-sm uppercase tracking-[0.3em]` → "HUB TRANSMEDIA // BARRANQUILLA 2026"
- Subtitle: `font-jetbrains text-xs md:text-sm text-blood-red tracking-[0.3em]` → "UNA CIUDAD, UNA BANDA, UN SONIDO QUE RESISTE."
- CTA: `btn-primary group brutalist-border` con icono `play_circle`
- Secondary link: `font-jetbrains text-blood-red uppercase text-xs tracking-widest hover:text-bone-white border-b border-blood-red/50`

**Scroll indicator**:
- `absolute bottom-10 left-1/2 -translate-x-1/2`
- Texto: `font-jetbrains text-[10px] text-blood-red uppercase`
- Línea: `w-px h-16 bg-gradient-to-b from-blood-red to-transparent`
- Animación: `animate={{ y: [0, 10, 0] }}` infinite 2s

### 6.4 Documental (`Documental.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Section | `section-spacing bg-grit-black border-y border-blood-red/20 shadow-[0_0_50px_rgba(139,0,0,0.05)]` |
| Narrative marker | `folder_open` icon + "EXPEDIENTE #001 // EL DOCUMENTAL" |
| Título | `font-bebas text-5xl md:text-7xl` → "SINOPSIS DEL PROYECTO" |
| Grid | `grid-cols-1 lg:grid-cols-12 gap-12` |

**Left Column (lg:col-span-7)**:
1. Video (YouTube embed):
   - Container: `brutalist-border p-2 bg-grit-dark`
   - Iframe: `grayscale hover:grayscale-0 transition-all duration-700`, `aspect-video w-full`
   - Label: `font-jetbrains text-[10px] text-blood-red uppercase animate-pulse` → "● GRABANDO // LIVE FEED"
2. Datos Técnicos (`brutalist-card`):
   - 3-column grid: Duración 5 MIN, Formato FULL HD, Audio STEREO
   - Cada dato: label `font-jetbrains text-[10px] text-bone-dim`, value `font-bebas text-2xl`
3. Credits (`bg-grit-dark/50 p-6 border-l-2 border-blood-red/30`):
   - 2x2 grid: Director/Cámara/Sonido/Edición
   - Labels: `font-jetbrains text-[10px] text-blood-red`
   - Nombres: `font-bebas text-lg uppercase`
4. Production logo: `/logo-productora.svg` h-12 + "Lounicorn Films" `font-bebas text-xl`

**Right Column (lg:col-span-5)**:
1. Synopsis (`brutalist-card`):
   - Título: `font-bebas text-3xl text-blood-red` → "La Premisa"
   - Texto: `font-archivo text-base text-bone-dim leading-relaxed`
   - Bold highlights: `text-bone-white` (Under The Legacy, nombres destacados)
2. Poster:
   - Badge: `absolute -top-3 -left-3 bg-blood-red px-3 py-1` → "Póster Oficial"
   - Imagen: `/images/poster_nacidos_V2.png`, `brutalist-border`, `overflow-hidden`
   - Hover: `scale-1.02`, zoom_in icon con ping animation
   - Overlay: `bg-gradient-to-t from-grit-black/60 via-transparent to-transparent`
   - Caption: `font-bebas text-2xl` + `font-jetbrains text-[10px]`
3. Poster Lightbox:
   - Fondo: `fixed inset-0 z-[100] bg-grit-black/95 backdrop-blur-md`
   - Transición: spring stiffness 200, scale 0.8→1, rotate -3°→0
   - Border: `absolute -inset-4 border-4 border-blood-red`
   - Close button: `font-jetbrains text-xs uppercase tracking-widest`
   - Esquinas decorativas: electric-indigo-light (top-left), blood-red (bottom-right)

### 6.5 Escena (`Escena.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Narrative marker | `satellite_alt` icon + "ARCHIVOS DE CAMPO // SCOUTING DE LOCACIONES" |
| Título | `font-bebas text-5xl md:text-7xl` → "CARTOGRAFÍA DE LA RESISTENCIA" (blood-red en segunda línea) |
| Grid | `grid-cols-1 lg:grid-cols-12 gap-8` |

**Filter buttons** (4 categorías):
- `todos`, `escenario`, `produccion`, `ensayo`
- Styling: `px-3 py-1 font-jetbrains text-[10px] uppercase tracking-widest border`
- Active: `bg-blood-red border-blood-red text-bone-white`
- Inactive: `bg-transparent border-bone-white/20 text-bone-dim hover:border-blood-red`

**Sidebar (lg:col-span-3, order-2 lg:order-1)**:
- Container: `brutalist-card py-4`
- Header: `font-jetbrains text-[10px] text-blood-red uppercase tracking-[0.2em]`
- List: `max-h-[400px] overflow-y-auto space-y-4`
- Each item: `border-b border-bone-white/10 pb-3 hover:bg-blood-red/5 cursor-crosshair`
  - Name: `font-bebas text-lg uppercase group-hover:text-blood-red`
  - Type: `font-jetbrains text-[10px] text-bone-dim opacity-70 uppercase`
- Decorative sticker: `bg-blood-red p-4 border border-blood-red shadow-lg torn-edge scale-y-[-1] mt-8`

**Map (lg:col-span-9, order-1 lg:order-2)**:
- Container: `brutalist-border h-[500px] md:h-[600px] overflow-hidden bg-grit-dark`
- Map: Leaflet `MapContainer` center `[10.9878, -74.8123]` zoom 12, scrollWheelZoom false
- Tiles: `CartoDB dark_all` con Leaflet
- Markers dinámicos según filtro
- Popups: 
  - Image: `h-28 w-full grayscale group-hover:grayscale-0 group-hover:scale-110`
  - Name: `font-bebas text-xl text-blood-red uppercase`
  - Description: `font-archivo text-sm text-bone-dim`
  - Instagram link: `font-jetbrains text-[10px] text-blood-red border border-blood-red/30 bg-blood-red/10`
  - Coords: `font-jetbrains text-[9px] uppercase border-t border-blood-red/30`
- Map label: `font-jetbrains text-[10px] text-bone-white uppercase` → "MAPA OPERATIVO // v.2.4"

**12 Locations** con name, type, description, coords (lat/lng), category, instagram, image.

### 6.6 Personajes (`Personajes.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Narrative marker | `assignment_ind` + "EXPEDIENTES DE PRODUCCIÓN // CASTING & ENTREVISTAS" |
| Título | `font-bebas text-5xl md:text-8xl` → "VOCES DE LA ESCENA" (blood-red en línea 2) |
| Grid | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12` |

**Card structure** (`brutalist-border p-3 bg-grit-dark`, `overflow-hidden group-hover:rotate-1`):
- Image container: `aspect-[3/4] overflow-hidden mb-4`
  - Imagen: `grayscale brightness-75 group-hover:scale-110`
  - ID badge: `absolute top-2 right-2 bg-blood-red text-bone-white px-2 py-0.5 font-jetbrains text-[9px] uppercase`
- Name: `font-bebas text-3xl uppercase group-hover:text-blood-red`
- Role: `font-jetbrains text-[10px] text-blood-red uppercase tracking-widest`
- Divider: `h-0.5 w-12 bg-blood-red/40 mb-3`
- Bio: `font-archivo text-sm text-bone-dim italic`, truncated 80 chars
- Footer: `border-t border-bone-white/10 pt-4`, band name + arrow_forward
- Decorative: `absolute -bottom-6 -right-6 font-bebas text-8xl text-white/[0.03]` (01-05)

Alternate cards (`index % 2 === 1`) tienen `md:mt-12` para efecto escalonado.

**5 Personajes**: Pepe Enciso, Under The Legacy, Álvaro Barbosa, Luis Viña, Roberto Sosa (con ids EXP-042, EXP-012, EXP-089, EXP-051, EXP-099).

### 6.7 PresentacionesEnVivo (`PresentacionesEnVivo.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Section | `section-spacing bg-grit-dark text-bone-white border-y-4 border-blood-red/20` |
| Narrative marker | `live_tv` + "ARCHIVO EN VIVO // PRESENTACIONES" |
| Título | `font-bebas text-5xl md:text-8xl` → "EN VIVO DESDE LA ESCENA" |

**Featured video (md:col-span-8)**:
- Container: `bg-grit-black brutalist-border p-6`
- Iframe: `aspect-video grayscale hover:grayscale-0`, border `border-2 border-blood-red/50`
- Label: `font-jetbrains text-[10px] text-blood-red uppercase` + band name
- Title (venue): `font-bebas text-4xl uppercase group-hover:text-blood-red`
- Description: `font-archivo text-sm text-bone-dim italic`
- Date: `font-jetbrains text-[10px] text-bone-dim uppercase`
- Recording label: `font-jetbrains text-[8px] text-blood-red opacity-50` → "LIVE_RECORDING_48kHz"
- Sound wave bars animadas (mismo patrón que Podcast)

**Video list (md:col-span-4)**:
- Cada item: `bg-grit-black p-4 border-l-2 border-blood-red hover:bg-blood-red/5 cursor-pointer`
- `whileHover={{ x: 5 }}` con framer-motion
- Band: `font-jetbrains text-[9px] text-blood-red`
- Venue: `font-bebas text-xl uppercase`
- Meta: `font-jetbrains text-[9px] opacity-60` (id + date)

**4 Presentaciones**: SOLDHIER, UNDER THE LEGACY (venue: "Rokka"), LA ÚLTIMA BATALLA, FREEWILL (Santa Marta en Heavy Attack 4B).

### 6.8 Podcast (`Podcast.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Background | `bg-grit-dark border-y-4 border-blood-red/20` |
| Narrative marker | `mic` + "RELATOS SONOROS // ARCHIVO DE AUDIO SIN EDITAR" |
| Título | `font-bebas text-5xl md:text-8xl` → "EL PODCAST DE LA RESISTENCIA" |

**Sound wave visualization**: barras Framer Motion con animate height cycling, `w-1 bg-blood-red`.

**Featured episode (md:col-span-8)**:
- Container: `bg-grit-black brutalist-border p-6 flex flex-col md:flex-row gap-8`
- Image: `w-full md:w-1/3 aspect-square border-2 border-blood-red/50 grayscale brightness-75`
- Play button: `material-symbols-outlined play_arrow bg-blood-red/90 w-16 h-16 rounded-full`
- Info:
  - Label: `font-jetbrains text-[10px] text-blood-red uppercase`
  - Title: `font-bebas text-4xl uppercase group-hover:text-blood-red`
  - Description: `font-archivo text-bone-dim text-sm italic`
  - Progress bar: `h-1 bg-bone-white/10 rounded-full`, 1/3 filled `bg-blood-red`
  - Duration: `font-jetbrains text-[10px] text-bone-dim`
- Recording label: `absolute top-2 right-4 font-jetbrains text-[8px] text-blood-red opacity-50` → "RECORDING_SESSION_44Hz"

**Episode list (md:col-span-4)**:
- Each: `bg-grit-black p-4 border-l-2 border-blood-red hover:bg-blood-red/5`, `whileHover={{ x: 5 }}`
- Label: `font-jetbrains text-[9px] text-blood-red`
- Title: `font-bebas text-xl uppercase`
- Meta: episode ID + duration, `font-jetbrains text-[9px] opacity-60`
- Button: `border border-dashed border-blood-red/40 font-jetbrains text-[10px] uppercase hover:bg-blood-red/10`

**3 Episodios**: Pepe Enciso, Under The Legacy, Álvaro Barbosa.

### 6.9 Musica (`Musica.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Narrative marker | `speaker` + "FICHA DE BANDAS // ARCHIVO DISCOGRÁFICO" |
| Título | `font-bebas text-5xl md:text-8xl` → "EL SONIDO DE LA CALLE" |
| Grid | `grid-cols-1 md:grid-cols-2 gap-8 md:gap-12` |

**Card** (`bg-grit-dark/40 p-1 brutalist-border flex flex-col sm:flex-row`):
- Image (`w-full sm:w-1/3 aspect-square border-r-2 border-blood-red/20`):
  - `grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100`
  - Badge: `absolute top-2 left-2 bg-blood-red/80 px-2 py-0.5 font-jetbrains text-[8px] uppercase` → "EN LINEA"
- Info (`w-full sm:w-2/3 p-4 pr-12`):
  - Name: `font-bebas text-4xl uppercase group-hover:text-blood-red`
  - Genre: `font-jetbrains text-[10px] text-blood-red uppercase`
  - Description: `font-archivo text-sm text-bone-dim italic`
  - Links (iconos Material Symbols): `album` (Spotify), `video_library` (YouTube), `podcasts` (Instagram) — `text-bone-white hover:text-blood-red`
- Decorative: `absolute bottom-4 right-4 font-bebas text-6xl text-white/5` → `#1`-`#4`

**4 Bandas**: Under The Legacy, León Bruno, Sicotrópico, 69 Nombres (cada una con links spotify/youtube/instagram).

### 6.10 Galeria (`Galeria.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Hero parallax | `relative h-[60vh] md:h-[70vh]`, useScroll → y: 50→-50, scale: 1→1.05 |
| Background | `grayscale brightness-40`, overlays: `from-grit-black via-grit-black/40 to-transparent` + `from-blood-red/30 to-transparent` |
| Título | `font-bebas text-6xl md:text-8xl lg:text-9xl` → "GALERÍA DEL PROYECTO" |
| Metadata bar | `bg-grit-dark/50 border-y border-grit-light`, info: 5 FOTOGRAFÍAS, 2025-2026, BARRANQUILLA, ATLÁNTICO |

**Masonry grid** (`columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6`):
- Each item: `break-inside-avoid group cursor-pointer`
- Container: `overflow-hidden brutalist-border bg-grit-dark`
- Hover effects:
  - Scale 1.03 (spring stiffness 300)
  - Gradient overlay: `from-grit-black/80 via-transparent to-transparent`
  - Caption reveal: `font-jetbrains text-blood-red text-[10px]` + zoom_in icon
  - Corner decorations: electric-indigo-light top-left, blood-red top-right, electric-indigo-light bottom-left
  - Center focus icon con ping animation
  - Glow: `bg-blood-red/20 blur-xl` with animate x/y
- Item rotate: -1°, 1°, -2°, 2°, -1° (valores fijos en data)

**Nota del Director** (2-col grid):
- Title: `font-bebas text-4xl md:text-6xl`, con `text-electric-indigo-light` en "TESTIMONIO"
- Text: `font-archivo text-lg text-bone-dim leading-relaxed`
- Image: con `border-4 border-blood-red m-4`
- Badge: `bg-grit-dark px-6 py-4 border-l-4 border-blood-red`, fecha + ubicación

**CTA Section** (`bg-gradient-to-r from-grit-dark via-blood-red/20 to-grit-dark p-8 md:p-12 brutalist-border`):
- "¿MÁS FOTOS DEL PROYECTO?"
- Button: `btn-primary font-bebas text-xl px-8 py-4` con `add_photo_alternate`

**Lightbox**:
- Fondo: `fixed inset-0 z-[100] bg-grit-black/95 backdrop-blur-md`
- Spring animation: stiffness 200, scale 0.8→1, rotate -5°→0
- Border: `absolute -inset-4 border-4 border-blood-red`
- Navigation dots: 5 dots `bg-blood-red rounded-full`
- Esquinas decorativas: electric-indigo-light (top-left), blood-red (bottom-right)

**5 Imágenes**: Under The Legacy sesión 2025, Ataraxia Gutural Fest 2026, Cerberus Gutural Fest 2026, Cerberus II Gutural Fest 2026, Under The Leg Act Gutural Fest 2026.

### 6.11 Prensa (`Prensa.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Narrative marker | `mail` + "OFICINA DE COMUNICACIONES // CONTACTO & PRENSA" |
| Título | `font-bebas text-5xl md:text-8xl` → "NOTICIAS DE LA RESISTENCIA" |
| Grid | `grid-cols-1 lg:grid-cols-12 gap-12` |

**Contact Form (lg:col-span-7)**:
- Container: `bg-grit-dark p-8 brutalist-border`
- Title: `font-bebas text-3xl uppercase` → "CONTACTO DIRECTO"
- Inputs: `input-field`, labels `font-jetbrains text-[10px] text-blood-red uppercase`
  - Nombre + Email (2-col grid)
  - Mensaje (textarea)
- Submit: `btn-primary w-full md:w-auto` → "ENVIAR TRANSMISIÓN" con `send`

**Press Kit (lg:col-span-5)**:
- `brutalist-card`
- Title: `font-bebas text-3xl text-blood-red` → "KIT DE PRENSA"
- Description: `font-archivo text-sm text-bone-dim italic`
- Download buttons: `bg-grit-black p-3 border border-blood-red/20 hover:border-blood-red group`
  - "DOSSIER_PRODUCCION.PDF" + download icon
  - "IMAGES_HD_PACK.ZIP" + download icon
- Info section: `border-l-2 border-dashed border-blood-red/30`
  - Redes Sociales: `font-bebas text-lg` + `font-jetbrains text-[9px]` → "@NACIDOSPARARESISTIR"
  - Producido por: LOUNICORN FILMS

### 6.12 SegundoCerebro (`SegundoCerebro.tsx`)

| Propiedad | Valor |
|-----------|-------|
| Background | `bg-grit-dark border-t-2 border-blood-red/10` |
| Narrative marker | `psychology` + "CEREBRO TRANSMEDIA // METODOLOGÍA DE INVESTIGACIÓN" |
| Título | `font-bebas text-5xl md:text-8xl` → "EL ECOSISTEMA DE DATOS" |
| Grid | `grid-cols-1 lg:grid-cols-12 gap-12 items-center` |

**Visual Graph (lg:col-span-6)**:
- Container: `bg-grit-black brutalist-border p-4 h-[400px] md:h-[500px] shadow-inner overflow-hidden`
- Radial gradient overlay: `bg-[radial-gradient(circle_at_center,_var(--color-blood-red)_0%,_transparent_70%)] opacity-20`
- Image: `/images/second_brain.png`, `grayscale contrast-150 mix-blend-screen opacity-80`
- Initial scale animation: 1.2→1, 1.5s easeOut
- Drag habilitado con constraints ±600, zoom toggle 1→3.5
- Zoom button: `bg-blood-red text-bone-white p-2 brutalist-border`
- Label: `font-jetbrains text-xs text-bone-dim uppercase` → "MAPA DE CONEXIONES NEURONALES // LIVE"

**Description (lg:col-span-6)**:
- Card 1 (`brutalist-card`): "RED NEURONAL DE CONOCIMIENTO" + párrafo
- 2-col grid:
  - "NODOS & METADATOS": `border-l-2 border-blood-red/20 bg-grit-black/30`
  - "ENLACES BIDIRECCIONALES": mismo estilo
  - Titles: `font-jetbrains text-sm md:text-base text-blood-red font-bold`
  - Body: `font-archivo text-base text-bone-dim`
- Card 3: "TRANSPARENCIA INVESTIGATIVA": `border border-blood-red/10 bg-grit-black/30`
- CTA: `btn-primary group border border-blood-red/50 bg-transparent text-blood-red hover:bg-blood-red hover:text-bone-white` → "VER METODOLOGÍA COMPLETA" + `open_in_new`

---

## 7. ANIMATION SYSTEM

### 7.1 Framer Motion Patterns

| Pattern | Componentes | Detalles |
|---------|-----------|----------|
| `useScroll + useTransform` | Hero, Galeria | Parallax yopacity |
| `whileInView` | Todos los sections | Scroll-triggered reveals |
| `AnimatePresence` | Navbar mobile, Documental poster lightbox, Galeria lightbox | Entrance/exit |
| `motion.div drag` | SegundoCerebro | Drag con constraints |
| Spring transitions | Lightboxes | stiffness: 200, damping natural |
| Stagger children | Galeria grid | staggerChildren: 0.15 |
| `initial={{ opacity: 0, y: 30 }}` | Cards | Reveal vertical |
| `whileHover={{ scale: 1.02 }}` | Posters, images | Hover zoom |

### 7.2 CSS Keyframes

| Nombre | Duración | Uso |
|--------|----------|-----|
| `glitch` | 200ms | `.glitch-hover:hover` — translate(-2px,1px) + hue-rotate(90deg) |
| `glitch-text` | 200ms | `.glitch-text-hover:hover` — text-shadow split (indigo/red) |
| `flicker` | 400ms | `.input-field:focus`, opacity pulses |
| `fadeInUp` | 800ms | Reveals from y:40px |
| `scanline` | 4s | Vertical scanline sweep (no implementado aún) |
| `imageReveal` | 800ms | Clip-path horizontal reveal |

### 7.3 Animation Guidelines

- **Hover glitch**: solo en elementos interactivos (botones, links de navbar). Duración 150-200ms.
- **Scroll reveals**: `whileInView` con `once: true` — NO repetir animaciones.
- **Lightbox**: spring stiffness 200, escala 0.8→1, rotación ligera ±3-5°.
- **Parallax**: movimientos sutiles (10-30%), no más.
- **Sound wave**: bars animadas con repeat Infinity, stagger delay 0.1s.

---

## 8. RESPONSIVE STRATEGY

### Breakpoints (Tailwind default)

| Breakpoint | Min width |
|-----------|-----------|
| `md:` | 768px |
| `lg:` | 1024px |

### Reglas generales

- Desktop (≥768px): márgenes 64px, 12-column grid
- Mobile (<768px): márgenes 20px, layout de 1-2 columnas
- Gallery: `columns-2 md:columns-3 lg:columns-4`
- Navbar: `lg:hidden` para hamburguesa, `hidden lg:flex` para links desktop
- Espaciado secciones: `py-24 md:py-16` (section-spacing)
- Tipografía: usar `clamp()` o `text-5xl md:text-8xl` pattern

### Breakpoints específicos por componente

| Componente | Mobile | Desktop |
|-----------|--------|---------|
| Navbar | Hamburger menu slide-down | Links horizontales |
| Hero | h-48 logo, texto smaller | h-72 logo |
| Documental | 1-col stack | 7+5 grid |
| Escena | Mapa arriba, sidebar abajo (order) | Sidebar izq, mapa der |
| Personajes | 1-col | 2-col (mt-12 alternado) → 3-col |
| Podcast | 1-col | Featured + list |
| Musica | 1-col | 2-col |
| Galeria | columns-2 | columns-3 → columns-4 |
| Prensa | 1-col | 7+5 grid |
| SegundoCerebro | 1-col | 6+6 grid |

---

## 9. IMAGE & ASSET GUIDELINES

### Image Treatment (todas las imágenes)

| Context | Filter |
|---------|--------|
| Backgrounds (Hero, Galeria) | `grayscale brightness-50 opacity-60` |
| Cards (Personajes, Música) | `grayscale brightness-75` hover → `grayscale-0 scale-110` |
| YouTube embed | `grayscale hover:grayscale-0` |
| Map popup images | `grayscale group-hover:grayscale-0 group-hover:scale-110` |
| Poster (Documental) | Sin filter, full color |
| Second Brain | `grayscale contrast-150 mix-blend-screen opacity-80` |
| Galeria thumbnails | Sin filter, hover: `contrast-110 brightness-110` |

Siempre envolver en contenedor con `overflow-hidden` y gradient overlay donde aplique.

### Duotone Effect (no usado actualmente pero disponible)

```css
.duotone { filter: grayscale(100%) contrast(1.3) brightness(0.9); mix-blend-mode: luminosity; }
.duotone-container::after { background: linear-gradient(135deg, rgba(139,0,0,0.4), rgba(15,15,15,0.6)); mix-blend-mode: multiply; }
```

### Assets Referenced

| Ruta | Uso |
|------|-----|
| `/public/hero-bg.jpg` | Hero background |
| `/public/cursor-rock.svg` | Custom cursor |
| `/public/logo-productora.svg` | Lounicorn Films logo (Footer, Documental) |
| `/public/logo-documental.svg` | Title logo (Hero) |
| `/public/images/poster_nacidos_V2.png` | Official poster (Documental) |
| `/public/images/second_brain.png` | Knowledge graph (SegundoCerebro) |
| `/public/images/galeria/*` | 5 gallery images |
| `/public/images/mapa/*` | 11 map location images |
| `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined` | Icons CDN |

---

## 10. ICONOGRAPHY

### Material Symbols Outlined

Cargados via CDN en `<head>` de `layout.tsx`:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
```

Uso: `<span className="material-symbols-outlined">icon_name</span>`

| Icono | Uso |
|-------|-----|
| `folder_open` | Documental narrative marker |
| `satellite_alt` | Escena narrative marker |
| `assignment_ind` | Personajes narrative marker |
| `mic` | Podcast narrative marker |
| `speaker` | Musica narrative marker |
| `mail` | Prensa narrative marker |
| `psychology` | SegundoCerebro narrative marker |
| `play_circle` | Hero CTA |
| `play_arrow` | Podcast featured play button |
| `zoom_in` / `zoom_out` | Poster/image hover, Cerebro zoom |
| `close` | Lightbox close |
| `arrow_forward` | Personajes card footer |
| `open_in_new` | External links |
| `send` | Prensa form submit |
| `download` | Prensa press kit |
| `add_photo_alternate` | Galeria CTA |
| `album` / `video_library` / `podcasts` | Musica band links (reemplazo de iconos sociales) |
| `photo_library` | Galeria metadata bar |
| `center_focus_strong` | Galeria hover focus |
| `settings` | Documental technical data |
| `share` / `apartment` | Prensa info icons |

### Narrative Markers Pattern

Todas las secciones comienzan con:
```html
<div className="narrative-marker">
  <span className="material-symbols-outlined text-sm">icon</span>
  CODIGO // DESCRIPCIÓN
</div>
```
Códigos: EXPEDIENTE #001, ARCHIVOS DE CAMPO, EXPEDIENTES DE PRODUCCIÓN, RELATOS SONOROS, FICHA DE BANDAS, ARCHIVO VISUAL, OFICINA DE COMUNICACIONES, CEREBRO TRANSMEDIA.

---

## 11. LEAFLET MAP CONFIGURATION

| Propiedad | Valor |
|-----------|-------|
| Tiles | `CartoDB dark_all` |
| Center | `[10.9878, -74.8123]` (Barranquilla) |
| Zoom | 12 |
| scrollWheelZoom | false |
| Popup bg | `burnt-caramel` |
| Popup border | 1px solid blood-red |
| Container | `brutalist-border h-[500px] md:h-[600px]` |

Todas las importaciones de react-leaflet son dinámicas con `ssr: false`.

Leaflet CSS importado en el componente: `import "leaflet/dist/leaflet.css"`.

Fix para iconos en Next.js se aplica en useEffect con require("leaflet").

---

## 12. CODE CONVENTIONS

### Tailwind Usage
- Preferir clases directas de Tailwind sobre CSS modules
- Usar las variables de `@theme` siempre (ej: `bg-grit-black`, `text-blood-red`, `font-bebas`)
- NO usar valores hardcodeados HEX en los componentes
- Colores con opacidad: `bg-grit-black/90`, `border-blood-red/30`
- Responsive: siempre mobile-first, usar `md:` y `lg:` prefixes

### Framer Motion
- `"use client"` requerido en componentes que usen Framer Motion
- Preferir `whileInView` con `viewport={{ once: true }}` sobre useEffect con IntersectionObserver
- `AnimatePresence` para montar/desmontar elementos (menús, lightboxes)
- `useScroll` + `useTransform` para parallax

### Estructura de imports
```tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
```

### Patrón de datos
Los datos de cada sección (locations, characters, bands, episodes, gallery) están definidos como arrays/objetos inline dentro del componente. Para mantener consistencia, cualquier cambio debe hacerse en las listas de datos, no en la estructura JSX.

---

## 13. DATA CONSTANTS

Todas las listas están definidas inline en cada componente:
- `Escena.tsx`: `locations[]` — 12 lugares
- `Personajes.tsx`: `characters[]` — 5 personajes
- `Podcast.tsx`: `episodes[]` — 3 episodios
- `Musica.tsx`: `bands[]` — 4 bandas
- `Galeria.tsx`: `galleryImages[]` — 5 imágenes
- `Navbar.tsx`: `navLinks[]` — 8 links
- `Footer.tsx`: links y crew inline

---

## 14. PAGE STRUCTURE (page.tsx)

```tsx
<Navbar />
<main>
  <Hero />              <div className="section-divider" />
  <Documental />        <div className="section-divider" />
  <Escena />            <div className="section-divider" />
  <Personajes />        <div className="section-divider" />
  <Podcast />           <div className="section-divider" />
  <Musica />            <div className="section-divider" />
  <Galeria />           <div className="section-divider" />
  <Prensa />            <div className="section-divider" />
  <SegundoCerebro />
</main>
<Footer />
```

Todas las secciones son Server Components por defecto, pero cada una tiene `"use client"` por Framer Motion. Secciones separadas por `<div className="section-divider" />`.

---

## 15. METADATA & SEO (layout.tsx)

```tsx
title: "Nacidos para Resistir — Documental Rock Barranquilla"
description: "Hub transmedia del documental sobre la escena rockera de Barranquilla..."
keywords: ["documental","rock","barranquilla","colombia","música","underground","resistir"]
openGraph: { locale: "es_CO", type: "website" }
```

---

## 16. DESIGN DO's & DON'Ts

| DO | DON'T |
|----|-------|
| Usar siempre las variables de `@theme` | Hardcodear colores HEX en componentes |
| Bebas Neue en UPPERCASE siempre | Usar Bebas Neue en lowercase |
| JetBrains Mono en uppercase para labels | Usar JetBrains Mono para body text |
| Imágenes siempre con grayscale + overlay | Imágenes a color sin tratamiento |
| section-divider entre cada sección | Olvidar los dividers |
| narrative-marker al inicio de cada sección | Saltarse el narrative marker |
| rounded-DEFAULT (0.5rem) en elementos | Usar border-radius 0 |
| Spring animations en lightboxes | Linear transitions en lightboxes |
| whileInView con once:true | Repetir animaciones en scroll |
| Container-site para contenido | Content sin padding/max-width |
| Añadir icono Material Symbols en narrative markers | Narrative marker sin icono |
