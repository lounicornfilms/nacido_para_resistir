---
project: Nacidos para Resistir
type: admin
status: completado
tags: [metodologia, second-brain, obsidian, documental, produccion-audiovisual, guia, replicable]
related: ["[[README|Índice del Proyecto]]", "[[dossier|Dossier de Producción]]", "[[ficha_tecnica|Ficha Técnica]]"]
---

# METODOLOGÍA SECOND BRAIN PARA PRODUCCIÓN AUDIOVISUAL
## Sistema de gestión de conocimiento basado en Obsidian — aplicado al documental "Nacidos para Resistir"

```mermaid
%%
%% BANNER CONCEPTUAL DEL SISTEMA
%%
graph LR
 CAOS["Producción audiovisual tradicional:<br/> Guion en Word · Research en tabs<br/> Videos en discos sin índice<br/> Producción en WhatsApp<br/> Ideas perdidas"]
 -->
 SISTEMA["SECOND BRAIN OBSIDIAN:<br/> Notas Markdown enlazadas<br/> Metadatos YAML estructurados<br/> Grafo de conocimiento navegable<br/> Medios indexados desde disco externo"]
 CAOS -->|" FRUSTRACIÓN "|PERDIDA["Proyectos sin memoria<br/>Knowledge Fade<br/>Dificultad de replicar"]
 SISTEMA -->|" CLARIDAD "|REUSABLE["Metodología replicable<br/>Memoria institucional<br/>Escalable a cualquier formato"]
```

---

## ÍNDICE

1. [Manifiesto — ¿Por qué un Second Brain en producción audiovisual?](#1-manifiesto)
2. [Arquitectura del sistema](#2-arquitectura-del-sistema)
3. [El sistema NN_CATEGORIA](#3-el-sistema-nn_categoria)
4. [Taxonomía YAML completa](#4-taxonomia-yaml-completa)
5. [Tipos de nota y anatomía](#5-tipos-de-nota-y-anatomia)
6. [Estrategia de wikilinks y tags](#6-estrategia-de-wikilinks-y-tags)
7. [El puente con el disco externo de medios](#7-el-puente-con-el-disco-externo-de-medios)
8. [Grafo de conocimiento del proyecto real](#8-grafo-de-conocimiento-del-proyecto-real)
9. [Cómo replicar en cualquier proyecto audiovisual](#9-como-replicar-en-cualquier-proyecto-audiovisual)
10. [Configuración de Obsidian recomendada](#10-configuracion-de-obsidian-recomendada)
11. [Referencia rápida de templates](#11-referencia-rapida-de-templates)

---

## 1. MANIFIESTO

### El problema

La producción audiovisual genera una cantidad masiva de información distribuida en múltiples soportes:

|Tipo de información|Soporte típico|Problema|
|---------------------|----------------|----------|
|Investigación|30 pestañas del navegador|Se pierden al cerrar el browser|
|Guion|Google Docs / Word|Sin conexión con el research|
|Perfiles de personajes|Notas sueltas|Inconsistentes, sin formato|
|Plan de rodaje|Excel / papel|Desconectado del guion|
|Material grabado|Discos duros externos|Sin índice navegable|
|Contratos / legales|Email / Carpeta|Difíciles de encontrar|
|Ideas para transmedia|Conversaciones de WhatsApp|Se evaporan|
|Diseño / branding|Archivos sueltos|Sin contexto de uso|

Cada proyecto audiovisual comienza desde cero. El conocimiento acumulado — investigación, contactos, lecciones aprendidas — se desvanece entre proyecto y proyecto. Llamamos a este fenómeno **Knowledge Fade**: la pérdida inevitable de contexto, referencias y decisiones creativas cuando la información no está estructurada.

### La solución

Un **Second Brain** (Segundo Cerebro) basado en Obsidian resuelve esto mediante cuatro principios:

1. **Estandarización:** Todo sigue el mismo formato (YAML + Markdown), sea un dossier, un perfil o un plan de rodaje.
2. **Conexión:** Cada nota se enlaza con otras mediante wikilinks (`[[nota]]`), creando una red de conocimiento en lugar de archivos aislados.
3. **Indexación:** El grafo de Obsidian permite visualizar y navegar las relaciones entre todos los elementos del proyecto.
4. **Replicabilidad:** La estructura de carpetas, los templates y la taxonomía YAML se copian a cualquier nuevo proyecto.

Este documento describe el sistema implementado para el documental **"Nacidos para Resistir"** y constituye una **guía reusable** para cualquier proyecto audiovisual, sea un corto, un largometraje, un disco musical o una serie transmedia.

---

## 2. ARQUITECTURA DEL SISTEMA

El sistema opera en dos capas: el **vault de Obsidian** (texto ligero + metadatos) y el **disco externo** (medios pesados). La comunicación entre ambas capas se realiza mediante notas-índice y enlaces relativos.

```mermaid
%%
%% DIAGRAMA 1: ARQUITECTURA GENERAL
%%
graph TD
 subgraph VAULT[" OBSIDIAN VAULT — Texto + Metadatos (KB/MB)"]
 ADMIN["00_ADMIN<br/><small>Credenciales, Metodología,<br/>Templates</small>"]
 DOSSIER["01_DOSSIER<br/><small>Biblia de Producción,<br/>Fichas Técnicas</small>"]
 INVESTIGACION["02_INVESTIGACION<br/><small>Research general,<br/>Perfiles de personajes,<br/>Directorio de fuentes</small>"]
 GUION["03_GUION<br/><small>Guion audiovisual,<br/>Cuestionarios, Escaletas,<br/>Curva emotiva</small>"]
 PRODUCCION["04_PRODUCCION<br/><small>Planes de rodaje,<br/>Presupuesto, Legal,<br/>Actas de reunión</small>"]
 AV_INDEX["05_AUDIOVISUAL<br/><small>Índice de medios<br/>(notas ligeras que<br/>apuntan al disco)</small>"]
 TRANSMEDIA["06_TRANSMEDIA<br/><small>Estrategia digital,<br/>Web, Redes, Mapa</small>"]
 DISENO["07_DISENO<br/><small>Identidad visual,<br/>Assets gráficos,<br/>Tratamiento estético</small>"]
 PITCH["08_PITCH<br/><small>Deck, Presentaciones,<br/>Propuestas a fondos</small>"]
 ARCHIVO["09_ARCHIVO<br/><small>PDFs, Contratos,<br/>Referencias externas</small>"]
 end

 subgraph DISCO[" DISCO EXTERNO — Medios pesados (GB/TB)"]
 MEDIA["/05_AUDIOVISUAL/<br/> NOMBRE_EVENTO_1/<br/> YYYY-MM-DD/<br/> CAMARA_1/<br/> *.MP4<br/> CAMARA_2/<br/> *.MP4<br/> NOMBRE_EVENTO_2/<br/> ..."]
 end

 AV_INDEX -.->|" Enlaces relativos<br/>+ notas índice"|MEDIA

 style VAULT fill:#1e1e2e,color:#fff,stroke:#7c3aed
 style DISCO fill:#1e1e2e,color:#fff,stroke:#f59e0b
 style ADMIN fill:#374151,color:#fff
 style DOSSIER fill:#1e40af,color:#fff
 style INVESTIGACION fill:#065f46,color:#fff
 style GUION fill:#991b1b,color:#fff
 style PRODUCCION fill:#6d28d9,color:#fff
 style AV_INDEX fill:#b45309,color:#fff
 style TRANSMEDIA fill:#0e7490,color:#fff
 style DISENO fill:#a21caf,color:#fff
 style PITCH fill:#ca8a04,color:#fff
 style ARCHIVO fill:#4a5568,color:#fff
 style MEDIA fill:#78350f,color:#fff
```

### Principios de la arquitectura

|Principio|Explicación|
|-----------|-------------|
|**Separación de peso**|En Obsidian solo vive texto (notas, YAML, enlaces). Los archivos pesados (video, audio, imagen) están en disco externo.|
|**Indexación desde el texto**|Las notas en `05_AUDIOVISUAL/` no contienen los videos; contienen metadatos + rutas relativas al disco.|
|**Namespace único**|Cada proyecto tiene un `project:` en el YAML. Para multi-proyecto, se filtra por este campo.|
|**Convención sobre configuración**|La estructura de carpetas, naming y YAML es fija. No hay decisiones de organización por tomar.|

---

## 3. EL SISTEMA NN_CATEGORIA

Las carpetas raíz usan el formato `NN_NOMBRE` donde `NN` es un número de dos dígitos que define el **orden y la fase de producción**. Este sistema tiene tres ventajas frente a carpetas sin numerar:

1. **Orden explícito:** El orden en el explorador de archivos sigue el flujo de producción.
2. **Fases claras:** Cada número corresponde a una etapa del ciclo de vida del proyecto.
3. **Escalabilidad:** Se pueden insertar carpetas entre números sin romper la estructura (ej: `03.5_POSTPRODUCCION` o `04.5_LEGAL`).

### Mapa de fases

```mermaid
%%
%% DIAGRAMA 2: FASES DEL PROYECTO
%%
flowchart LR
 P00["00 ADMIN<br/><small>Fundación del vault<br/>Credenciales, templates</small>"]
 P01["01 DOSSIER<br/><small>Biblia de producción<br/>Visión del proyecto</small>"]
 P02["02 INVESTIGACIÓN<br/><small>Research histórico<br/>Perfiles de fuentes</small>"]
 P03["03 GUION<br/><small>Escritura del guion<br/>Cuestionarios</small>"]
 P04["04 PRODUCCIÓN<br/><small>Rodaje, presupuesto<br/>Logística, legal</small>"]
 P05["05 AUDIOVISUAL<br/><small>Post-producción<br/>Edición, medios</small>"]
 P06["06 TRANSMEDIA<br/><small>Estrategia digital<br/>Redes, web</small>"]
 P07["07 DISEÑO<br/><small>Branding, pósters<br/>Identidad visual</small>"]
 P08["08 PITCH<br/><small>Deck, financiación<br/>Presentaciones</small>"]
 P09["09 ARCHIVO<br/><small>Preservación<br/>PDFs, referencias</small>"]

 P00 --> P01 --> P02 --> P03 --> P04 --> P05
 P02 --> P08
 P01 --> P06
 P01 --> P07
 P08 --> P04
 P05 --> P06
 P03 --> P05

 style P00 fill:#374151,color:#fff
 style P01 fill:#1e40af,color:#fff
 style P02 fill:#065f46,color:#fff
 style P03 fill:#991b1b,color:#fff
 style P04 fill:#6d28d9,color:#fff
 style P05 fill:#b45309,color:#fff
 style P06 fill:#0e7490,color:#fff
 style P07 fill:#a21caf,color:#fff
 style P08 fill:#ca8a04,color:#fff
 style P09 fill:#4a5568,color:#fff
```

### Tabla de carpetas

|Carpeta|Fase|¿Qué va aquí?|¿Qué NO va aquí?|
|---------|------|---------------|------------------|
|`00_ADMIN/`|Fundación|Metodología, credenciales, templates, configuración del equipo|Contenido creativo|
|`01_DOSSIER/`|Pre-producción|Biblia de producción, fichas técnicas, sinopsis|Research detallado|
|`02_INVESTIGACION/`|Pre-producción|Research general, perfiles, fuentes, dossiers por banda/persona|Guion o producción|
|`03_GUION/`|Pre-producción|Guion técnico, escaletas, cuestionarios, curva emotiva|Logística de rodaje|
|`04_PRODUCCION/`|Producción|Planes de rodaje, presupuesto, autorizaciones, actas|Material grabado|
|`05_AUDIOVISUAL/`|Post-producción|Notas-índice de clips, referencias a disco externo|Archivos binarios (están en disco)|
|`06_TRANSMEDIA/`|Distribución|Estrategia digital, plan web, contenido redes|Diseño gráfico|
|`07_DISENO/`|Marca|Manual de identidad, assets, pósters, tratamiento estético|Estrategia (va en transmedia)|
|`08_PITCH/`|Financiación|Deck, presentaciones, propuestas|Dossier (va en 01)|
|`09_ARCHIVO/`|Preservación|PDFs de referencia, contratos escaneados, backups|Documentos activos|

### Regla de oro

> **Cada nota vive en la carpeta de su fase de producción.** Si un documento cubre múltiples fases (ej: un dossier que menciona guion y transmedia), se ubica en la carpeta de su **propósito principal** y se enlaza a las demás notas mediante wikilinks.

---

## 4. TAXONOMÍA YAML COMPLETA

El YAML frontmatter es el **sistema nervioso** del Second Brain. Cada nota comienza con un bloque YAML que define sus metadatos. Esto permite filtrar, buscar, relacionar y reutilizar cualquier nota en el vault.

### Esquema formal

```yaml
---
project: <nombre_del_proyecto> # Obligatorio. String. Namespace del proyecto.
type: <tipo_de_nota> # Obligatorio. Enum (ver tabla abajo).
status: <estado_actual> # Obligatorio. Enum (ver ciclo de vida).
tags: [<tag1>, <tag2>, ...] # Obligatorio. Array de strings lower-kebab.
related: ["[[wikilink|Alias]]", ...] # Recomendado. Array de wikilinks con alias.
---
```

### Campos opcionales pero recomendados

```yaml
date: YYYY-MM-DD # Fecha de creación o del evento.
author: Nombre del autor # Quién escribió la nota.
version: 1.0 # Control de versiones.
location: Lugar físico # Locación de rodaje o reunión.
duration: "0:XX" # Duración (para guion, clips).
camera: [CAM1, CAM2] # Cámaras usadas (para clips AV).
event: Nombre del evento # Evento asociado (para medios).
path: /ruta/al/disco/externo # Ruta relativa al archivo físico.
```

### Tipos de nota (campo `type`)

|Valor|Propósito|Ejemplo real|
|-------|-----------|--------------|
|`índice`|Mapa del proyecto, punto de entrada|`README.md`|
|`dossier`|Biblia de producción, documento maestro|`dossier.md`|
|`ficha`|Ficha técnica o de producción|`ficha_tecnica.md`, `ficha_produccion.md`|
|`investigación`|Research temático o histórico|`resumen_investigacion.md`|
|`perfil`|Biografía de personaje/fuente|`pepe_enciso.md`, `under_the_legacy.md`|
|`fuentes`|Directorio de fuentes y contactos|`fuentes.md`|
|`guion`|Guion técnico o literario|`guion_audiovisual.md`|
|`escaleta`|Estructura dramática minutada|`escaleta_minutada.md`, `curva_emotiva_y_estructura.md`|
|`cuestionario`|Guía de entrevista|`cuestionario_pepe_enciso.md`|
|`producción`|Plan de rodaje, logística|`plan_de_rodaje.md`, `plan_de_rodaje_semanal.md`|
|`cronograma`|Calendario, timeline|`cronograma_entrevistas.md`|
|`presupuesto`|Finanzas, budget|`presupuesto.md`|
|`reunión`|Acta de reunión, notas de coordinación|`reunion_pepe_enciso.md`|
|`legal`|Contratos, autorizaciones|`autorizacion_imagen_rapida.md`|
|`carpeta`|Checklist de producción|`carpeta_audiovisual.md`|
|`transmedia`|Estrategia de distribución digital|`transmedia.md`, `descripcion_sitio_web.md`|
|`diseño`|Identidad visual, branding|`identidad_visual.md`, `tratamiento_estetico.md`|
|`pitch`|Deck, presentación a inversores|`pitch.md`, `pitch_v2.md`|
|`admin`|Metodología, configuración del vault|Este documento|
|`archivo`|Referencia externa archivada|Cualquier PDF referenciado|
|`clip`|Índice de un clip en disco externo|`clip_entrevista_af_001.md`|
|`evento`|Resumen de una jornada de rodaje|`evento_concierto_utl.md`|

### Ciclo de vida del proyecto (campo `status`)

```mermaid
%%
%% DIAGRAMA 3: CICLO DE VIDA DE LAS NOTAS
%%
flowchart LR
 B["borrador<br/><small>Idea inicial,<br/>esqueleto vacío</small>"]
 EP["en-progreso<br/><small>En desarrollo activo,<br/>contenido parcial</small>"]
 C["completado<br/><small>Versión final,<br/>revisada y cerrada</small>"]
 R["revisión<br/><small>Requiere actualización,<br/>contenido desactualizado</small>"]
 A["archivado<br/><small>Proyecto terminado,<br/>nota preservada</small>"]

 B --> EP --> C --> A
 C --> R --> EP
```

|Status|Significado|¿Cuándo se usa?|
|--------|-------------|------------------|
|`borrador`|Nota recién creada, sin contenido sustancial|Template recién copiado|
|`en-progreso`|Nota en desarrollo activo|Investigación en curso, guion en escritura|
|`completado`|Nota terminada y revisada|Perfil finalizado, guion bloqueado|
|`activo`|Documento vivo que se actualiza constante|Plan de rodaje, cronograma|
|`inicial`|Planificado pero no comenzado|Próximos pasos|
|`programada`|Tiene fecha asignada|Entrevista agendada|
|`pendiente`|Requiere acción externa|Autorización por firmar|
|`revisión`|Necesita actualización|Después de un cambio en el proyecto|
|`cancelado`|Ya no aplica|Idea descartada|

### Taxonomía de tags (campo `tags`)

Los tags siguen una convención estricta:

```
formato: minúsculas, sin espacios, separadas por guiones
ejemplo: [guion, rodaje, técnico, doble-columna, audiovisual, corte_final]
```

**Categorías de tags utilizadas en el proyecto:**

|Categoría|Tags de ejemplo|
|-----------|-----------------|
|**Rol**|`personaje`, `periodista`, `experto`, `músico`, `banda`, `gestor-cultural`|
|**Fase**|`pre-producción`, `rodaje`, `post-producción`, `distribución`|
|**Tipo de contenido**|`entrevista`, `cuestionario`, `guion`, `producción`, `investigación`|
|**Persona/banda**|`pepe-enciso`, `under-the-legacy`, `alvaro-barboza`, `roberto-sosa`|
|**Formato**|`técnico`, `doble-columna`, `narrativo`, `observacional`|
|**Área**|`audiovisual`, `transmedia`, `diseño`, `legal`, `admin`|
|**Estado implícito**|`completado`, `en-progreso`, `borrador` (redundante con status, útil para filtros)|
|**Proyecto**|`documental`, `rock`, `barranquilla`|

```mermaid
%%
%% DIAGRAMA 4: TAXONOMÍA DE TAGS
%%
graph TD
 ROOT[" TAGS"] --> ROL["Por Rol"]
 ROOT --> FASE["Por Fase"]
 ROOT --> TIPO["Por Tipo"]
 ROOT --> PERSONA["Por Persona/Banda"]
 ROOT --> FORMATO["Por Formato"]
 ROOT --> AREA["Por Área"]

 ROL --> R1["personaje"]
 ROL --> R2["periodista"]
 ROL --> R3["experto"]
 ROL --> R4["musico"]
 ROL --> R5["banda"]

 FASE --> F1["pre-produccion"]
 FASE --> F2["rodaje"]
 FASE --> F3["post-produccion"]

 TIPO --> T1["entrevista"]
 TIPO --> T2["cuestionario"]
 TIPO --> T3["guion"]
 TIPO --> T4["produccion"]

 PERSONA --> P1["pepe-enciso"]
 PERSONA --> P2["under-the-legacy"]
 PERSONA --> P3["alvaro-barboza"]

 FORMATO --> FO1["tecnico"]
 FORMATO --> FO2["doble-columna"]
 FORMATO --> FO3["narrativo"]

 AREA --> A1["audiovisual"]
 AREA --> A2["transmedia"]
 AREA --> A3["diseno"]
 AREA --> A4["legal"]

 style ROOT fill:#7c3aed,color:#fff
```

### El campo `related`

El campo `related` es el **corazón del grafo**. Cada wikilink en este campo crea una arista visible en el Graph View de Obsidian.

```yaml
related:
 - "[[dossier|Dossier de Producción]]"
 - "[[cronograma_entrevistas|Cronograma de Entrevistas]]"
```

**Convenciones:**
- El wikilink apunta al **archivo sin extensión** (`.md` es implícito).
- El alias después de `|` es el **texto visible** y debe ser descriptivo.
- Se listan primero los enlaces más importantes.
- Máximo recomendado: 5-7 enlaces por nota (para mantener el grafo legible).

---

## 5. TIPOS DE NOTA Y ANATOMÍA

Cada tipo de nota tiene una estructura interna consistente. A continuación se describe la anatomía de cada uno, con ejemplos reales del proyecto.

### 5.1 Índice (`type: índice`)

**Propósito:** Punto de entrada al proyecto. Mapa navegable de todo el vault.

**Estructura:**
```yaml
---
project: Nacidos para Resistir
type: índice
status: en-progreso
tags: [documental, rock, barranquilla, index]
related: ["[[dossier|Dossier]]", "[[resumen_investigacion|Investigación]]", "[[escaleta|Guion]]"]
---
```

**Secciones:**
- Tagline / título del proyecto
- Párrafo de qué es este repositorio
- Lista de carpetas con wikilinks a cada nota importante
- Estado actual del proyecto
- Próximos pasos

**Ejemplo real:** `README.md` en la raíz del proyecto.

### 5.2 Dossier (`type: dossier`)

**Propósito:** Biblia de producción. Documento maestro que unifica la visión del proyecto.

**Estructura:**
```yaml
---
project: Nacidos para Resistir
type: dossier
status: completado
tags: [estrategia, vision, produccion, documental]
related: ["[[resumen_investigacion|Investigación]]", "[[escaleta|Escaleta]]", "[[transmedia|Transmedia]]"]
---
```

**Secciones:**
1. Tagline + Logline
2. Idea central / sinopsis larga
3. Justificación y contexto social
4. Personajes principales (pilotes narrativos)
5. Propuesta estética (imagen, sonido)
6. Estructura dramática (actos)
7. Estrategia transmedia
8. Objetivos de producción
9. Próximos hitos

**Ejemplo real:** `01_DOSSIER/dossier.md`

### 5.3 Perfil (`type: perfil`)

**Propósito:** Investigación biográfica de un personaje, fuente o banda.

**Estructura:**
```yaml
---
project: Nacidos para Resistir
type: perfil
status: completado
tags: [personaje, periodista, experto, radio]
related: ["[[fuentes|Fuentes]]"]
---
```

**Secciones:**
1. `# Perfil — [Nombre]`
2. `## Quién es` — descripción biográfica
3. `## Por qué está en el documental` — justificación narrativa
4. `## Qué me interesa de esta persona` — bullet points de interés
5. `## Preguntas específicas (no genéricas)` — preguntas únicas para esta fuente
6. `## Cosas a tener en cuenta` — notas de producción
7. `## Posible frase potente (hipótesis)` — cita candidata

**Ejemplo real:** `02_INVESTIGACION/perfiles/pepe_enciso.md`

### 5.4 Cuestionario (`type: cuestionario`)

**Propósito:** Guía estructurada de entrevista. No es un guion cerrado, es una brújula.

**Estructura:**
```yaml
---
project: Nacidos para Resistir
type: guion
status: completado
tags: [entrevista, cuestionario, produccion, pepe-enciso]
related: ["[[pepe_enciso|Perfil Pepe Enciso]]", "[[cronograma_entrevistas|Cronograma]]"]
---
```

**Secciones:**
- Encabezado: proyecto, entrevistado, medio (Zoom/presencial)
- Briefing: nota de dirección
- Bloques temáticos (`## BLOQUE 1: [TEMA]`)
 - Preguntas numeradas con contexto y objetivo

**Ejemplo real:** `03_GUION/cuestionario_pepe_enciso.md`

### 5.5 Guion técnico (`type: guion` — variante doble columna)

**Propósito:** Guion audiovisual en formato VIDEO/AUDIO.

**Estructura:**
```yaml
---
project: Nacidos para Resistir
type: guion
status: completado
tags: [guion, rodaje, técnico, doble-columna, audiovisual, corte_final]
related: ["[[escaleta|Escaleta General]]", "[[curva_emotiva_y_estructura|Curva Emotiva]]"]
---
```

**Secciones:**
- Encabezado: directora, duración, formato, modalidad narrativa
- Actos (`## ACTO N: NOMBRE `)
- Escenas (`### ESC. N — LOCACIÓN — TIEMPO — PERSONA`)
- Tabla: `|#|VIDEO|AUDIO|DURACIÓN|`

**Ejemplo real:** `03_GUION/guion_audiovisual.md`

### 5.6 Plan de rodaje (`type: producción`)

**Propósito:** Cronograma y logística de rodaje.

**Estructura:**
```yaml
---
project: Nacidos para Resistir
type: producción
status: activo
tags: [rodaje, cronograma, logistica]
related: ["[[cronograma_entrevistas|Cronograma]]", "[[presupuesto|Presupuesto]]"]
---
```

**Secciones:**
- Tabla de días con hora, locación, equipo, riesgos
- Checklist de equipos
- Directorio de contactos de producción

**Ejemplo real:** `04_PRODUCCION/plan_de_rodaje_semanal.md`

### 5.7 Reunión (`type: reunión`)

**Propósito:** Acta de coordinación. Capturar decisiones, acuerdos y próximos pasos.

**Estructura:**
```yaml
---
project: Nacidos para Resistir
type: reunión
status: completado
tags: [coordinacion, reunion, produccion]
related: ["[[plan_de_rodaje|Plan de Rodaje]]"]
---
```

**Secciones:**
- Fecha, asistentes, contexto
- Puntos tratados (numerados)
- Acuerdos y decisiones
- Próximos pasos con responsables

**Ejemplo real:** `04_PRODUCCION/reunion_pepe_enciso.md`

### 5.8 Clip (`type: clip`)

**Propósito:** Nota-índice que referencia un archivo de video/audio en el disco externo.

**Estructura:**
```yaml
---
project: Nacidos para Resistir
type: clip
status: completado
tags: [clip, entrevista, alberto-forero]
event: ENTREVISTA_ALBERTO_FORERO
date: 2026-05-20
camera: CAMARA_1_BELLA
path: /Volumes/DISCO/NACIDOS_PRO_RESISTIR/05_AUDIOVISUAL/ENTREVISTA_AF/2026-05-20/CAM1/DSC_001.MP4
duration: "12:34"
related: ["[[entrevista_alberto_forero|Entrevista Alberto Forero]]", "[[guion_audiovisual|Guion]]"]
---
```

**Ver sección 7 para el detalle completo del puente con disco externo.**

---

## 6. ESTRATEGIA DE WIKILINKS Y TAGS

### ¿Cómo crecen las conexiones?

El sistema de wikilinks no es aleatorio. Sigue una lógica de **derivación narrativa**:

```
1. INVESTIGACIÓN → genera → PERFILES
2. PERFILES → generan → CUESTIONARIOS
3. CUESTIONARIOS + PERFILES → alimentan → GUION
4. GUION → define → PLAN DE RODAJE → genera → REUNIONES
5. GUION + PLAN → producen → CLIPS (rodaje)
6. GUION → también alimenta → TRANSMEDIA
7. DOSSIER → es la raíz que conecta → TODO
8. PITCH → deriva de → DOSSIER + INVESTIGACIÓN
```

### Reglas de conexión

|Desde|Hacia|¿Cuándo?|
|-------|-------|----------|
|Cualquier nota|`README`|Siempre que sea un documento principal|
|Perfil|`fuentes`|Siempre (todo personaje está en el directorio)|
|Cuestionario|Su perfil|Siempre (cada guía nace de un perfil)|
|Cuestionario|`cronograma_entrevistas`|Cuando la entrevista está agendada|
|Guion|`escaleta` y `curva_emotiva`|Siempre|
|Plan de rodaje|`cronograma_entrevistas` y `presupuesto`|Siempre|
|Transmedia|`dossier`|Siempre (la estrategia deriva de la visión)|
|Diseño|`dossier` y `tratamiento_estético`|Siempre|
|Pitch|`dossier` e `investigación`|Siempre|
|Clip|su evento, su perfil, el guion|Siempre|

### Tags como filtros dinámicos

Obsidian permite filtrar por tags desde el tag pane (panel derecho). La taxonomía plana (sin jerarquía anidada) permite:

- **Filtrar por persona:** click en `#pepe-enciso` → todas las notas relacionadas
- **Filtrar por fase:** click en `#rodaje` → todo el contenido de producción activa
- **Filtrar por formato:** click en `#doble-columna` → todos los guiones técnicos
- **Combinar filtros:** buscar `#entrevista` + `#pepe-enciso` → solo entrevistas de Pepe

---

## 7. EL PUENTE CON EL DISCO EXTERNO DE MEDIOS

Esta es la pieza más innovadora del sistema y la que resuelve el problema real de la producción audiovisual: **cómo integrar terabytes de video en un sistema de texto ligero**.

### El problema

```mermaid
%%
%% DIAGRAMA 5: EL PROBLEMA — MEDIOS VS OBSIDIAN
%%
flowchart LR
 subgraph OBS["OBSIDIAN"]
 NOTAS[" Notas Markdown<br/><small>Texto + metadata<br/>~100 KB total</small>"]
 end
 subgraph REAL["REALIDAD"]
 DISCOS[" Discos externos<br/><small>Videos RAW ~500 GB<br/>Audios ~50 GB<br/>Fotos ~10 GB</small>"]
 end
 OBS --x|" NO CABEN"|DISCOS
 OBS -->|" NOTAS ÍNDICE<br/>que referencian rutas"|DISCOS
```

### La solución: notas-índice

En lugar de ignorar los medios o tratar de meterlos en Obsidian, creamos **notas-índice** que:

1. Viven en `05_AUDIOVISUAL/` (o donde corresponda)
2. Contienen metadatos YAML del clip (evento, fecha, cámara, duración, ruta)
3. Se enlazan al guion, al perfil del entrevistado y al evento de rodaje
4. Permiten buscar y navegar el material grabado desde Obsidian

### Estructura real del disco externo

El disco externo no sigue una convención uniforme. Cada evento tiene su propia estructura heredada de cómo se volcaron las tarjetas de memoria:

```
/DISCO_EXTERNO/NACIDOS_PARA_RESISTIR/
  05_AUDIOVISUAL/
  entrevista pepe enciso 3 mayo/        ← Plano (todo junto, 4 archivos)
  2026-05-03 10-43-09.mkv
  pepe1.mkv
  video1.mp4

  Entrevista ronny y gabriel 25 mayo/   ← Por cámara
  camara bella/
  C####.MP4 + C####t.MP4 + C####M01.XML
  tomas issac/
  IMG_####.CR2 + MVI_####.MOV

  entrevista a alvaro de leon bruno 3 mayo /  ← Por cámara (anidado)
  Entrevista 3 de mayo - Alvaro - Baterista Leon Bruno/
  Camara bella/       (C0443-C0445.MP4)
  Camara Johan/       (C0118-C0119.MP4)

  GUTURAL FEST - 02052026/              ← Por tipo de medio
  fotografia evento gutural 2 de mayo /   (DSC_####.JPG + .NEF)
  videos a evento 2 de mayo gutural fest/ (DSC_####.MOV)

  UTL ensayos/                           ← Plano (74 MOV)
  A001_MMDDHHMM_C###.mov

  Tomas Documental NACIDOS PARA RESISTIR/  ← Mixto (archivo general)
  iphone videos/
  Material Documental Rock/Presentacion 2 de mayo/
  Camara Bella/   (C0409-C0442.MP4)
  Camara Cristian/ (C0103-C0117.MP4)
  Memoria de 16gb.../ (C0001-C0007.MP4)
```

### Convenciones de naming de cámaras (NO renombrar)

Los archivos conservan su nombre original de cámara. NO renombrar para no romper vínculos con el programa de edición.

| Cámara | Video | Foto RAW | Metadata |
|--------|-------|----------|----------|
| **Canon** | `C####.MP4` | -- | `C####M01.XML` (~1 KB) |
| **Canon (alt)** | `C####t.MP4`, `C####1.MP4`, `C####a.MP4` | -- | -- |
| **iPhone/Canon** | `MVI_####.MOV` | `IMG_####.CR2` | -- |
| **Nikon** | `DSC_####.MOV` | `DSC_####.JPG` + `DSC_####.NEF` | -- |
| **Sony/iPhone** | `A001_MMDDHHMM_C###.mov` | -- | -- |

### Nota-índice de evento (real)

Cada evento en el disco tiene una nota en `05_AUDIOVISUAL/` que refleja su estructura real:

```yaml
---
project: Nacidos para Resistir
type: evento
status: completado
tags: [rodaje, evento, entrevista, ronny, gabriel]
event: Entrevista ronny y gabriel 25 mayo    # nombre exacto de la carpeta
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
path: /media/lounicorn/Nuevo vol/NACIDOS_PARA_RESISTIR/05_AUDIOVISUAL/...
related:
  - "[[perfiles/under_the_legacy|Under The Legacy]]"
  - "[[cronograma_entrevistas|Cronograma]]"
---
```

### Diagrama del puente

```mermaid
%%
%% DIAGRAMA 6: PUENTE OBSIDIAN ↔ DISCO EXTERNO
%%
flowchart LR
 subgraph O["OBSIDIAN VAULT"]
 EV[" evento_ronny_gabriel_25mayo.md<br/><small>type: evento<br/>cameras: [BELLA, ISSAC]<br/>path: /media/.../</small>"]
 CL[" clip_ronny_gabriel_bella.md<br/><small>type: clip<br/>camera: CAMARA_BELLA<br/>files: 32 MP4</small>"]
 PER[" perfiles/under_the_legacy.md<br/><small>type: perfil</small>"]
 GUION[" guion_audiovisual.md<br/><small>type: guion<br/>ESC.4,8,10,12,22</small>"]
 end

 subgraph D[" DISCO EXTERNO"]
 DIR[" Entrevista ronny y gabriel 25 mayo/<br/> camara bella/<br/> C0001.MP4 ... C0015.MP4<br/> tomas issac/<br/> IMG_0679.CR2 ... IMG_0715.CR2<br/> MVI_0681.MOV ... MVI_0705.MOV"]
 end

 EV -.->|"path: /media/.../"|DIR
 CL -.->|"subfolder: camara bella/"|DIR
 EV --> PER
 EV --> GUION
 CL --> GUION

 style EV fill:#b45309,color:#fff
 style CL fill:#92400e,color:#fff
```

### Flujo de trabajo al grabar

1. **Antes del rodaje:** El plan de rodaje y los cuestionarios están completos en Obsidian.
2. **Durante el rodaje:** Se graba normalmente. Las tarjetas se vuelcan al disco externo conservando los nombres originales de cámara (C####.MP4, MVI_####.MOV, DSC_####.JPG, etc.). Se organizan en carpetas por evento con el nombre en español y fecha al final (ej: `entrevista a Alberto Forero 12 de mayo`).
3. **Después del rodaje:** Se crean las notas de evento en `05_AUDIOVISUAL/` que documentan la estructura real de la carpeta, los patrones de naming de cámara, y los vínculos con perfiles y guion. NO se renombran los archivos originales.
4. **Durante la edición:** El editor usa Obsidian para buscar clips por evento, personaje o escena. Las notas de evento listan los archivos con sus nombres originales, y las notas de clip detallan por cámara cuando hay subcarpetas.

---

## 8. GRAFO DE CONOCIMIENTO DEL PROYECTO REAL

Este es el grafo real del documental "Nacidos para Resistir", con todas las notas y sus conexiones.

```mermaid
%%
%% DIAGRAMA 7: GRAFO REAL DEL PROYECTO
%%
graph TD
 README[" README<br/><small>Índice del proyecto</small>"]

 subgraph DOS["01 — DOSSIER"]
 D[" dossier<br/><small>Biblia de producción</small>"]
 FT[" ficha_tecnica<br/><small>Ficha técnica</small>"]
 FP[" ficha_produccion<br/><small>Ficha producción</small>"]
 end

 subgraph INV["02 — INVESTIGACIÓN"]
 RI[" resumen_investigacion<br/><small>Research general</small>"]
 FU[" fuentes<br/><small>Directorio de fuentes</small>"]
 LB[" leon_bruno<br/><small>Dossier León Bruno</small>"]
 SI[" sicotropico<br/><small>Dossier Sicotrópico</small>"]
 UT[" under_the_legacy_inv<br/><small>Dossier UTL</small>"]
 PERFILES[" perfiles/<br/><small>8 perfiles</small>"]
 end

 subgraph GUI["03 — GUION"]
 GA[" guion_audiovisual<br/><small>Guion técnico</small>"]
 EM[" escaleta_minutada<br/><small>Escaleta 5:07</small>"]
 CE[" curva_emotiva<br/><small>Estructura dramática</small>"]
 CUEST[" cuestionarios/<br/><small>6 guías de entrevista</small>"]
 end

 subgraph PROD["04 — PRODUCCIÓN"]
 PR[" plan_de_rodaje<br/><small>Plan general</small>"]
 PS[" plan_semanal<br/><small>Plan detallado</small>"]
 CR[" cronograma_entrevistas<br/><small>Timeline entrevistas</small>"]
 PRES[" presupuesto<br/><small>Budget $15M COP</small>"]
 LEGAL[" legal/<br/><small>Autorizaciones</small>"]
 REUNION[" reunion_pepe<br/><small>Acta reunión</small>"]
 end

 subgraph TRANS["06 — TRANSMEDIA"]
 TM[" transmedia<br/><small>Estrategia 3P</small>"]
 WEB[" descripcion_sitio_web<br/><small>Plan web</small>"]
 end

 subgraph DIS["07 — DISEÑO"]
 IV[" identidad_visual<br/><small>Manual de marca</small>"]
 TE[" tratamiento_estetico<br/><small>Soulful Rebels</small>"]
 end

 subgraph PIT["08 — PITCH"]
 P1[" pitch<br/><small>Deck v1</small>"]
 P2[" pitch_v2<br/><small>Deck v2</small>"]
 PP[" pitch_presentacion<br/><small>Presentación</small>"]
 end

 subgraph MET["00 — ADMIN"]
 METO[" metodologia_second_brain<br/><small>Este documento</small>"]
 CRED[" credenciales<br/><small>Accesos</small>"]
 TEMPL[" templates/<br/><small>10 plantillas</small>"]
 end

 README --> D
 README --> RI
 README --> EM
 README --> GA
 README --> PR
 README --> TM
 README --> IV
 README --> P1

 D --> RI
 D --> EM
 D --> TM
 D --> IV
 D --> P1

 RI --> FU
 FU --> PERFILES

 LB --> FU
 SI --> FU
 UT --> FU

 PERFILES --> CUEST
 PERFILES --> CR

 CUEST --> GA
 CE --> GA
 EM --> GA

 GA --> PR
 GA --> PS
 PR --> PS
 PR --> PRES
 PR --> CR
 PS --> REUNION
 PS --> LEGAL

 TM --> WEB
 IV --> TE

 P1 --> P2
 P2 --> PP

 METO --> README
 METO --> D
 METO --> FT

 style README fill:#4a6,color:#fff,stroke:#fff,stroke-width:2px
 style D fill:#1e40af,color:#fff
 style METO fill:#374151,color:#fff
```

### Métricas del grafo (proyecto real)

|Métrica|Valor|
|---------|-------|
|Notas totales|40+|
|Conexiones (wikilinks)|80+|
|Tipos de nota|15|
|Personajes perfilados|8|
|Cuestionarios|6|
|Diagramas Mermaid|8 (este documento)|

---

## 9. CÓMO REPLICAR EN CUALQUIER PROYECTO AUDIOVISUAL

### Checklist de 7 pasos para bootstrap un nuevo proyecto

```mermaid
%%
%% DIAGRAMA 8: FLUJO DE REPLICACIÓN
%%
flowchart TD
 P1["1. Crear vault nuevo<br/>con carpeta 00-09"]
 P2["2. Copiar templates<br/>desde 00_ADMIN/templates/"]
 P3["3. Escribir README.md<br/>(índice del proyecto)"]
 P4["4. Llenar 01_DOSSIER/dossier.md<br/>con la visión del proyecto"]
 P5["5. Investigar: 02_INVESTIGACION/<br/>perfiles, fuentes, research"]
 P6["6. Desarrollar 03_GUION/<br/>escaleta, guion, cuestionarios"]
 P7["7. Planificar 04_PRODUCCION/<br/>rodaje, presupuesto, legal"]

 P1 --> P2 --> P3 --> P4 --> P5 --> P6 --> P7

 P4 -.->|"En paralelo"|TM["06_TRANSMEDIA/<br/>Estrategia digital"]
 P4 -.->|"En paralelo"|DI["07_DISENO/<br/>Identidad visual"]
 P5 -.->|"En paralelo"|PI["08_PITCH/<br/>Deck financiación"]

 P7 --> POS["Rodaje → 05_AUDIOVISUAL/<br/>Notas-índice de clips"]
 POS --> POS2["Post-producción →<br/>Edición, color, sonido"]
 POS2 --> DIST["Distribución →<br/>Transmedia + Archivo"]
```

### Paso 1: Crear el vault

```bash
mkdir -p mi-proyecto/{00_ADMIN/templates,01_DOSSIER,02_INVESTIGACION/perfiles,03_GUION,04_PRODUCCION/legal,05_AUDIOVISUAL,06_TRANSMEDIA,07_DISENO/assets,08_PITCH,09_ARCHIVO}
```

O simplemente **copia la carpeta `00_ADMIN/`** de este proyecto y renombra el campo `project` en todos los YAML.

### Paso 2: Configurar el YAML base

En cada template, cambia:

```yaml
# Antes (template genérico)
project: [NOMBRE_DEL_PROYECTO]

# Después (tu proyecto)
project: Mi Nuevo Documental
```

### Paso 3: Adaptar las carpetas al tipo de proyecto

|Tipo de proyecto|Ajuste de carpetas|
|------------------|-------------------|
|**Documental**|Usar estructura tal cual. `02_INVESTIGACION/` es crítica.|
|**Cortometraje**|Igual, pero `03_GUION/` es el centro. `02_INVESTIGACION/` puede ser más pequeña.|
|**Serie**|Agregar subcarpetas por episodio: `03_GUION/CAPITULO_01/`, `03_GUION/CAPITULO_02/`|
|**Disco/Álbum musical**|`01_DOSSIER/` → concepto del álbum. `02_INVESTIGACION/` → referentes. `03_GUION/` → letras, estructura de canciones. `05_AUDIOVISUAL/` → videos por canción.|
|**Evento en vivo**|`04_PRODUCCION/` es crítica. `05_AUDIOVISUAL/` → videos del evento por cámara. `03_GUION/` → escaleta del show.|
|**Branded content**|`01_DOSSIER/` → brief del cliente. `06_TRANSMEDIA/` → estrategia de campaña. `07_DISENO/` → cobranding.|

### Paso 4: El template README inicial

Copia `_template_indice.md` a la raíz como `README.md`, completa los wikilinks a medida que creas notas. El README debe actualizarse constantemente.

### Paso 5: Definir tu taxonomía de tags

Antes de empezar, define las categorías de tags que usarás:

|Categoría|Tags sugeridos|
|-----------|---------------|
|Rol|`director`, `productor`, `musico`, `actor`, `experto`, `entrevistado`|
|Fase|`pre-produccion`, `rodaje`, `post-produccion`, `distribucion`|
|Tipo|`entrevista`, `b-roll`, `animacion`, `detras-de-camaras`|
|Formato|`corto`, `largometraje`, `serie`, `reel`, `documental`|

### Paso 6: Configurar Obsidian para el nuevo proyecto

1. Abrir Obsidian → "Open folder as vault" → seleccionar la carpeta del proyecto.
2. Verificar que los core-plugins necesarios estén activos (ver sección 10).
3. Crear el workspace de 3 paneles (explorador + editor + backlinks/tags).
4. (Opcional) Configurar sync con Git u Obsidian Sync.

### Paso 7: Primeros 5 documentos a crear

|Orden|Documento|Template|
|-------|-----------|----------|
|1|`README.md` (índice)|`_template_indice.md`|
|2|`01_DOSSIER/dossier.md`|`_template_dossier.md`|
|3|`01_DOSSIER/ficha_tecnica.md`|`_template_dossier.md`|
|4|`02_INVESTIGACION/fuentes.md`|Manual (lista de fuentes)|
|5|Primer perfil en `02_INVESTIGACION/perfiles/`|`_template_perfil.md`|

---

## 10. CONFIGURACIÓN DE OBSIDIAN RECOMENDADA

### Core plugins

Basado en la configuración real del proyecto:

|Plugin|Estado|¿Para qué?|
|--------|--------|------------|
|`file-explorer`|Activado|Navegación por carpetas|
|`global-search`|Activado|Búsqueda rápida en todo el vault|
|`switcher`|Activado|Navegación rápida por nombre de nota|
|`graph`|Activado|Visualización del grafo de conocimiento|
|`backlink`|Activado|Ver qué notas enlazan a la actual|
|`canvas`|Activado|Mapas visuales y diagramas|
|`outgoing-link`|Activado|Ver enlaces salientes de la nota actual|
|`tag-pane`|Activado|Panel de filtrado por tags|
|`properties`|Activado|Visualización y edición del YAML|
|`page-preview`|Activado|Vista previa al pasar el mouse sobre enlaces|
|`daily-notes`|Activado|Notas diarias de producción|
|`templates`|Activado|Insertar templates desde carpeta|
|`note-composer`|Activado|Fusionar y reestructurar notas|
|`command-palette`|Activado|Acceso rápido a comandos|
|`editor-status`|Activado|Ver estado del editor|
|`bookmarks`|Activado|Marcar notas frecuentes|
|`outline`|Activado|Navegación por encabezados|
|`word-count`|Activado|Conteo de palabras|
|`file-recovery`|Activado|Recuperación ante fallos|
|`sync`|Activado|Sync oficial de Obsidian (opcional)|
|`bases`|Activado|Bases de datos dentro de Obsidian|
|`footnotes`|Desactivado|No necesario para producción AV|
|`slides`|Desactivado|Preferimos pitch decks en PDF|
|`publish`|Desactivado|Publicación web externa|
|`workspaces`|Desactivado|Preferimos layout fijo|

### Workspace layout

El layout usado en el proyecto:

```

 Barra de pestañas (archivos abiertos)

 PANEL IZQ PANEL CENTRAL PANEL DERECHO
 (ancho: 300) (ancho: 300,
 colapsable)
 Editor principal
 Explorer (la nota activa) Backlinks

 Search Outgoing

 Bookmarks Tags

 Outline


```

### Atajos clave

|Atajo|Acción|
|-------|--------|
|`Cmd/Ctrl + O`|Switcher (abrir nota por nombre)|
|`Cmd/Ctrl + P`|Command palette|
|`Cmd/Ctrl + E`|Vista previa / edición|
|`Cmd/Ctrl + K`|Insertar wikilink|
|`Cmd/Ctrl + L`|Seleccionar línea actual|
|`Cmd/Ctrl + D`|Seleccionar palabra actual|
|`[[`|Auto-completar wikilink|
|`#`|Auto-completar tag|

### Alternativas a Obsidian

Si no usas Obsidian, este sistema funciona con:

|Herramienta|Compatibilidad|
|-------------|----------------|
|**VS Code + Foam**|100% (Markdown + wikilinks + graph)|
|**Logseq**|90% (usa Markdown, pero cambia YAML por propiedades)|
|**Any Markdown editor**|80% (pierdes el grafo, ganas portabilidad)|
|**Git + Markdown**|95% (pierdes el grafo visual, pero versionas todo)|

---

## 11. REFERENCIA RÁPIDA DE TEMPLATES

Los siguientes templates están disponibles en `00_ADMIN/templates/` y se pueden insertar en Obsidian usando el plugin de Templates (`Cmd/Ctrl + T`).

|Archivo|`type`|Propósito|
|---------|--------|-----------|
|`_template_indice.md`|`índice`|README principal del proyecto|
|`_template_dossier.md`|`dossier`|Biblia de producción|
|`_template_perfil.md`|`perfil`|Biografía de personaje/fuente|
|`_template_cuestionario.md`|`cuestionario`|Guía de entrevista|
|`_template_guion_audiovisual.md`|`guion`|Guion doble columna|
|`_template_plan_rodaje.md`|`producción`|Plan de rodaje y logística|
|`_template_reunion.md`|`reunión`|Acta de reunión|
|`_template_legal.md`|`legal`|Autorización / contrato|
|`_template_clip_audiovisual.md`|`clip`|Índice de clip en disco externo|
|`_template_evento.md`|`evento`|Resumen de jornada de rodaje|

---

## APÉNDICE: GLOSARIO DEL SISTEMA

|Término|Definición|
|---------|------------|
|**Vault**|Carpeta raíz que Obsidian abre como repositorio de conocimiento|
|**Nota**|Archivo `.md` individual con YAML + Markdown|
|**YAML frontmatter**|Bloque de metadatos al inicio de cada nota, entre `---`|
|**Wikilink**|Enlace interno tipo `[[nota]]` o `[[nota|Alias]]`|
|**Grafo**|Visualización de nodos (notas) y aristas (wikilinks)|
|**Tag**|Etiqueta plana `#tag` para filtrar y agrupar|
|**Template**|Nota preescrita con estructura y YAML, lista para copiar|
|**Nota-índice**|Nota ligera que referencia archivos pesados en disco externo|
|**Knowledge Fade**|Fenómeno de pérdida de contexto entre proyectos|
|**Namespace**|Campo `project` en YAML que aísla un proyecto de otros|

---

> **Documento de metodología v1.0**
> Sistema implementado en el documental *Nacidos para Resistir* (Lounicorn Films, 2026)
> Este documento es reusable bajo la misma estructura de carpetas y templates.
>
> *"El rock en Barranquilla no pertenece aquí… pero aquí resiste."*
