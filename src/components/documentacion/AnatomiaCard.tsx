"use client";

type AnatomiaCardProps = {
  typeName: string;
  purpose: string;
  yaml: string;
  sections: string[];
  example: string;
};

export default function AnatomiaCard({
  typeName,
  purpose,
  yaml,
  sections,
  example,
}: AnatomiaCardProps) {
  return (
    <div className="border border-electric-indigo-light/20 bg-grit-black/30 p-5 space-y-4">
      <div className="flex items-center gap-3">
        <span className="font-jetbrains text-[10px] text-electric-indigo-light uppercase tracking-widest border border-electric-indigo-light/30 px-2 py-1">
          type: {typeName}
        </span>
        <span className="font-archivo text-sm text-bone-dim">{purpose}</span>
      </div>

      <pre className="font-jetbrains text-xs text-bone-dim bg-grit-black/50 p-4 border-l-2 border-electric-indigo-light/40 overflow-x-auto leading-relaxed">
        {yaml}
      </pre>

      <div>
        <span className="font-jetbrains text-[9px] text-amber-400 uppercase tracking-widest">
          Secciones
        </span>
        <ul className="mt-2 space-y-1">
          {sections.map((s, i) => (
            <li
              key={i}
              className="font-archivo text-sm text-bone-dim flex gap-2"
            >
              <span className="text-electric-indigo-light shrink-0">▸</span>
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-3 border-t border-grit-light/30">
        <span className="font-jetbrains text-[9px] text-green-400 uppercase tracking-widest">
          Ejemplo real
        </span>
        <p className="font-jetbrains text-xs text-bone-dim mt-1">{example}</p>
      </div>
    </div>
  );
}
