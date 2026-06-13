# Plan: Reemplazar video FREEWILL en PresentacionesEnVivo

## Archivo: `src/components/sections/PresentacionesEnVivo.tsx`

Reemplazar LIVE-004 (líneas 48-57):

**Actual:**
```ts
  {
    band: "FREEWILL",
    venue: "El Claustrofóbico 4B",
    date: "Heavy Attack",
    description: "Sonido contundente y actitud de resistencia. Una banda que construye su camino en la escena local, grabada en el mítico 4B, uno de los bares más antiguos del rock en la ciudad.",
    videoId: "gITVbLHIJBY",
    image: "/images/bandas/freewill.png",
    featured: false,
    id: "LIVE-004",
  },
```

**Nuevo:**
```ts
  {
    band: "FREEWILL",
    venue: "El Claustrofóbico 4B",
    date: "Heavy Attack",
    description: "Freewill desde Santa Marta llevando su potencia al mítico 4B en el Heavy Attack. Una banda que cruza fronteras para sumarse a la resistencia sonora de Barranquilla.",
    videoId: "N6FV1WQboD4",
    image: "/images/bandas/freewill.png",
    featured: false,
    id: "LIVE-004",
  },
```

## Archivo: `Docs/DESIGN.md`

Actualizar línea 504: cambiar descripción de FREEWILL en la sección 6.7 PresentacionesEnVivo.
