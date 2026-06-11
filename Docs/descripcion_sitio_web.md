# DESCRIPCIÓN DEL SITIO WEB — NACIDOS PARA RESISTIR

**Propósito:** Hub central del ecosistema transmedia del documental sobre la escena rockera de Barranquilla.

---

## PÁGINAS / SECCIONES

- **Hero:** Portada inmersiva con el trailer del documental. 
- **Interacción:** Implementar **Scrollytelling** / Desplazamiento interactivo donde los elementos (títulos, imágenes grit) reaccionen al scroll, revelando la profundidad de la escena.
- **Frase:** "El rock no pertenece aquí… pero aquí resiste"
- **Navegación principal:** Sticky y minimalista.
- **Featured:** último episodio podcast / último video

### 2. El Documental
- Trailer (YouTube embed)
- Sinopsis (3-4 líneas)
- Ficha técnica
- Próximos estrenos

### 3. La Escena (Mapa Interactivo)
- Mapa de Barranquilla con pines interactivos
- Categorías: Bares/escenarios, Estudios de grabación, Lugares históricos
- Cada pin: nombre, historia breve, foto

### 4. Personajes
- Tarjetas de cada personaje
- Foto, nombre, rol, banda, mini bio
- Incluir: Under The Legacy, Pepe Enciso, Álvaro Barbosa, Luis Viña, Roberto Sosa

### 5. Podcast
- Reproductor de audio
- Lista de episodios con título, fecha, descripción
- Entrevistas completas (diferentes al documental)

### 6. Música
- Cards por banda con links a Spotify/Instagram/YouTube
- Bandas del proyecto

### 7. Galería
- Fotos del making-of
- Videos: behind the scenes, clips de ensayos

### 8. Prensa
- Contacto
- Kit de Prensa: logos, fotos alta res, nota de prensa

### 9. El Segundo Cerebro (Sección Académica)
- **Concepto:** Visualización del proceso de investigación y arquitectura de la información del proyecto.
- **Contenido:** 
    - Explicación de la metodología Second Brain (Obsidian).
    - Grafo interactivo de conexiones entre notas (Álvaro Barbosa -> León Bruno -> Rock Barranquilla).
    - Acceso a la "Metodología de Campo" y organización de carpetas.
    - **Propósito:** Mostrar la solidez investigativa detrás de la narrativa para fines académicos y de archivo.

---

## DISEÑO

### Colores
- Grit Black (#0F0F0F) — fondo
- Blood Red (#8B0000) — acentos
- Bone White (#F5F0E6) — texto
- Electric Indigo (#5D3FD3) — links
- Burnt Caramal (#4A1C1A) / Dust Olive (#797D62) — secundarios

### Tipografía
- **Headlines:** **Bebas Neue** (Uppercase stacked).
- **Body:** **Archivo Narrow** (Condensed sans-serif para legibilidad).
- **Metadata/Utility:** **JetBrains Mono** (Para códigos de tiempo y datos técnicos).

### Estética
- **Estética General:** Fusión de **Brutalismo** y **High-Contrast Bold**.
- **Textura Visual:** Implementar un overlay de **grano/ruido (grain)** sutil (3-5% opacidad) sobre todo el layout.
- **Formas:** Lenguaje **Rounded (2)** con bordes de 0.5rem (8px) en todos los elementos.
- **Imágenes:** Contraste alto, virados a duotono Blood Red/Grit Black.
- **Animaciones:** Transiciones de impacto, efectos de **Glitch** analógico (100-200ms) en interacciones.
- **Responsive:** Estructura adaptativa (12 columnas desktop / 4 columnas mobile).

---

## FUNCIONALIDADES

- **Reproductor de audio persistente:** Con diseño que emule equipos vintage de sonido (perillas de amplificador).
- **Mapa interactivo:** Estilo **Grunge/Vintage**, simulando un mapa físico real desgastado o escaneado.
- **Diseño Sonoro UX (Opcional):** "Intro de ambiente" (sonidos de calle/humedad de Barranquilla) que transiciona a un riff denso de Stoner Rock al interactuar con el scroll o el Hero.
- Galería con lightbox (texturizado).
- Links a redes de bandas (nueva pestaña).
- Carga rápida, SEO optimizado.
- Formulario de contacto funcional.

---

## TECH STACK OFICIAL

- **Framework:** Next.js (por su capacidad de SEO, manejo de estados para audio y escalabilidad).
- **Styling:** Tailwind CSS / Framer Motion (para las interacciones de scroll).
- **Mapa:** Leaflet.js o Mapbox (con capa personalizada Grunge).
- **Hosting:** Vercel.

---

## TONO Y VOZ

- Auténtico, underground, resistente
- Lenguaje directo
- Español: "resistir", "escena", "rock", "barranquillera"

---

## NOTAS ADICIONALES

- Todo el contenido debe ser coherente con la estética del documental
- Las fotos de los personajes deben ser las mismas usadas en el documental o making-of
- El mapa puede empezar con 5-8 ubicaciones e ir creciendo
- Incluir crédito a las bandas y personas que colaboran
- Bourbon debe estar incluido en el mapa (entrevista con Roberto Sosa)
- A51 Studio y Lounicorn Films como estudio de grabación