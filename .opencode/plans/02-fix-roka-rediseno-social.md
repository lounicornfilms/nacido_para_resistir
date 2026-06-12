# Plan: Fix ROKKA + Rediseño Social + Eliminar TikTok

## Cambio 1: Fix "Rocka" → "Rokka"

**Archivo**: `src/components/sections/PresentacionesEnVivo.tsx`
**Línea 30**: cambiar `venue: "Rocka"` → `venue: "Rokka"`

## Cambio 2: Rediseño sección "Síguenos" en Footer

**Archivo**: `src/components/Footer.tsx`

Reemplazar líneas 68-99 (desde `<h4>Síguenos</h4>` hasta cierre de `</div>` antes de `</div>` de columna)

Por:

```tsx
<div className="mt-6 pt-4 border-t border-blood-red/20">
  <div className="narrative-marker mb-4">
    <span className="material-symbols-outlined text-sm">campaign</span>
    SÍGUENOS
  </div>

  <div className="space-y-3">
    {/* Documental */}
    <a
      href="https://www.youtube.com/@nacidospararesistir"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-bone-white hover:text-blood-red transition-colors group no-underline"
    >
      <span className="material-symbols-outlined text-blood-red text-xl">youtube_activity</span>
      <span className="font-jetbrains text-xs uppercase tracking-widest group-hover:text-blood-red transition-colors">@nacidospararesistir</span>
    </a>

    <a
      href="https://www.instagram.com/nacidospararesistirbaq?igsh=MWh2ZHZsdG5mZXNtdQ%3D%3D&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-bone-white hover:text-blood-red transition-colors group no-underline"
    >
      <span className="material-symbols-outlined text-blood-red text-xl">camera_alt</span>
      <span className="font-jetbrains text-xs uppercase tracking-widest group-hover:text-blood-red transition-colors">@nacidospararesistir</span>
    </a>

    {/* Productora */}
    <a
      href="https://www.instagram.com/lounicornfilms"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-bone-dim hover:text-blood-red transition-colors group no-underline"
    >
      <span className="material-symbols-outlined text-blood-red text-xl">camera_alt</span>
      <span className="font-jetbrains text-xs uppercase tracking-widest group-hover:text-blood-red transition-colors">@lounicornfilms</span>
    </a>
  </div>
</div>
```

## Cambio 3: Docs/DESIGN.md

- Actualizar sección "6.2 Footer" con nuevo diseño social
- Agregar `PresentacionesEnVivo` a la tabla de secciones (entre Personajes y Música)
- Eliminar TikTok de la línea 345

## Cambio 4: Docs/transmedia.md

- Línea 78: cambiar "Redes Sociales (Instagram / TikTok)" → "Redes Sociales (Instagram / YouTube)"
