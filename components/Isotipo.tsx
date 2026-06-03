"use client";

import { useId } from "react";

// Isotipo de marca: creciente que se lee como faro / haz de luz (nace del "C"
// del logo patrimonio). Construido con geometría simple — copiado del design system.
export function Isotipo({
  size = 32,
  color = "var(--amber-500)",
  carve = "var(--graphite-900)",
}: {
  size?: number;
  color?: string;
  carve?: string;
}) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Cabinas y Conjuntos">
      <defs>
        <mask id={"c" + uid}>
          <circle cx="50" cy="50" r="44" fill="#fff" />
          <circle cx="70" cy="42" r="37" fill="#000" />
        </mask>
        <mask id={"d" + uid}>
          <circle cx="50" cy="50" r="27" fill="#fff" />
          <circle cx="64" cy="44" r="22" fill="#000" />
        </mask>
      </defs>
      <rect width="100" height="100" fill={color} mask={`url(#c${uid})`} />
      <rect width="100" height="100" fill={carve} mask={`url(#d${uid})`} opacity="0.5" />
    </svg>
  );
}
