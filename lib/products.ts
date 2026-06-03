// ─────────────────────────────────────────────────────────────────────────────
// ARCHIVO AUTO-GENERADO — no editar a mano.
// Fuente: data/productos-origen.csv   |   Generador: scripts/generar-productos.mjs
// Para actualizar el catálogo: cambia el CSV y corre  node scripts/generar-productos.mjs
//
// La tienda es un CATÁLOGO: aquí NO hay precios (las ventas se cierran por WhatsApp).
// ─────────────────────────────────────────────────────────────────────────────

export type Product = {
  id: string;          // va en la URL (= código en minúscula)
  codigo: string;      // código visible, p. ej. FAR-001
  nombre: string;
  descripcion: string;
  categoria: string;   // p. ej. "Farol", "Stop" (define el ícono y el filtro)
  lado: string;        // "DER" | "IZQ" | "" (eje de filtrado obligatorio)
  carroceria: string;  // p. ej. "G8", "Paradiso" o "" si no aplica
  attrs: string[];     // metadatos técnicos: ["Full LED", "24V", ...]
  marcopolo: boolean;  // pertenece a una carrocería Marcopolo Superpolo
};

export const categorias: string[] = ["Farol","Aleta","Exploradora","Stop","Luz","Direccional","Esquinero","Espejo","Conector","Pistón","Cerrajería","Manija","Reflectivo"];

export const productos: Product[] = [
  {
    "id": "far-001",
    "codigo": "FAR-001",
    "nombre": "Farol Yutong — Lado derecho",
    "descripcion": "Farol para carrocería Yutong (lado derecho). Repuesto disponible por unidad. Referencia FAR-001.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Yutong",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-002",
    "codigo": "FAR-002",
    "nombre": "Farol Yutong — Lado izquierdo",
    "descripcion": "Farol para carrocería Yutong (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-002.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Yutong",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-003",
    "codigo": "FAR-003",
    "nombre": "Farol Invicar — Lado derecho",
    "descripcion": "Farol para carrocería Invicar (lado derecho). Repuesto disponible por unidad. Referencia FAR-003.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Invicar",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-004",
    "codigo": "FAR-004",
    "nombre": "Farol Invicar — Lado izquierdo",
    "descripcion": "Farol para carrocería Invicar (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-004.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Invicar",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-005",
    "codigo": "FAR-005",
    "nombre": "Farol Inconcar Ojo Lupa y Regleta LED — Lado derecho",
    "descripcion": "Farol para carrocería Inconcar (lado derecho). Repuesto disponible por unidad. Referencia FAR-005.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Inconcar",
    "attrs": [
      "LED"
    ],
    "marcopolo": false
  },
  {
    "id": "far-006",
    "codigo": "FAR-006",
    "nombre": "Farol Inconcar Ojo Lupa y Regleta LED — Lado izquierdo",
    "descripcion": "Farol para carrocería Inconcar (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-006.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Inconcar",
    "attrs": [
      "LED"
    ],
    "marcopolo": false
  },
  {
    "id": "far-007",
    "codigo": "FAR-007",
    "nombre": "Farol Busscar Buseta — Lado derecho",
    "descripcion": "Farol para carrocería Busscar (lado derecho). Repuesto disponible por unidad. Referencia FAR-007.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Busscar",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-008",
    "codigo": "FAR-008",
    "nombre": "Farol Busscar Buseta — Lado izquierdo",
    "descripcion": "Farol para carrocería Busscar (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-008.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Busscar",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-009",
    "codigo": "FAR-009",
    "nombre": "Farol Busscar Bus — Lado derecho",
    "descripcion": "Farol para carrocería Busscar (lado derecho). Repuesto disponible por unidad. Referencia FAR-009.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Busscar",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-010",
    "codigo": "FAR-010",
    "nombre": "Farol Busscar Bus — Lado izquierdo",
    "descripcion": "Farol para carrocería Busscar (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-010.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Busscar",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-011",
    "codigo": "FAR-011",
    "nombre": "Farol Paradiso — Lado derecho",
    "descripcion": "Farol para carrocería Paradiso (lado derecho). Repuesto disponible por unidad. Referencia FAR-011.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-012",
    "codigo": "FAR-012",
    "nombre": "Farol Paradiso — Lado izquierdo",
    "descripcion": "Farol para carrocería Paradiso (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-012.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-013",
    "codigo": "FAR-013",
    "nombre": "Farol Inconcar Sigma — Lado derecho",
    "descripcion": "Farol para carrocería Sigma (lado derecho). Repuesto disponible por unidad. Referencia FAR-013.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Sigma",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-014",
    "codigo": "FAR-014",
    "nombre": "Farol Inconcar Sigma — Lado izquierdo",
    "descripcion": "Farol para carrocería Sigma (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-014.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Sigma",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-015",
    "codigo": "FAR-015",
    "nombre": "Farol Andare — Lado derecho",
    "descripcion": "Farol para carrocería Andare (lado derecho). Repuesto disponible por unidad. Referencia FAR-015.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Andare",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-016",
    "codigo": "FAR-016",
    "nombre": "Farol Andare — Lado izquierdo",
    "descripcion": "Farol para carrocería Andare (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-016.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Andare",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-017",
    "codigo": "FAR-017",
    "nombre": "Farol G7 — Lado derecho",
    "descripcion": "Farol para carrocería G7 (lado derecho). Repuesto disponible por unidad. Referencia FAR-017.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-018",
    "codigo": "FAR-018",
    "nombre": "Farol G7 — Lado izquierdo",
    "descripcion": "Farol para carrocería G7 (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-018.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "ale-001",
    "codigo": "ALE-001",
    "nombre": "Aleta Decorativa Unidad Paradiso — Lado izquierdo",
    "descripcion": "Aleta para carrocería Paradiso (lado izquierdo). Repuesto disponible por unidad. Referencia ALE-001.",
    "categoria": "Aleta",
    "lado": "IZQ",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "ale-002",
    "codigo": "ALE-002",
    "nombre": "Aleta Decorativa Unidad Paradiso — Lado derecho",
    "descripcion": "Aleta para carrocería Paradiso (lado derecho). Repuesto disponible por unidad. Referencia ALE-002.",
    "categoria": "Aleta",
    "lado": "DER",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-019",
    "codigo": "FAR-019",
    "nombre": "Farol New G7 — Lado derecho",
    "descripcion": "Farol para carrocería New G7 (lado derecho). Repuesto disponible por unidad. Referencia FAR-019.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-020",
    "codigo": "FAR-020",
    "nombre": "Farol New G7 — Lado izquierdo",
    "descripcion": "Farol para carrocería New G7 (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-020.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "ale-003",
    "codigo": "ALE-003",
    "nombre": "Aleta Farol New G7 — Lado derecho",
    "descripcion": "Aleta para carrocería New G7 (lado derecho). Repuesto disponible por unidad. Referencia ALE-003.",
    "categoria": "Aleta",
    "lado": "DER",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "ale-004",
    "codigo": "ALE-004",
    "nombre": "Aleta Farol New G7 — Lado izquierdo",
    "descripcion": "Aleta para carrocería New G7 (lado izquierdo). Repuesto disponible por unidad. Referencia ALE-004.",
    "categoria": "Aleta",
    "lado": "IZQ",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "exp-001",
    "codigo": "EXP-001",
    "nombre": "Exploradora New G7 — Lado derecho",
    "descripcion": "Exploradora para carrocería New G7 (lado derecho). Repuesto disponible por unidad. Referencia EXP-001.",
    "categoria": "Exploradora",
    "lado": "DER",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "exp-002",
    "codigo": "EXP-002",
    "nombre": "Exploradora New G7 — Lado izquierdo",
    "descripcion": "Exploradora para carrocería New G7 (lado izquierdo). Repuesto disponible por unidad. Referencia EXP-002.",
    "categoria": "Exploradora",
    "lado": "IZQ",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-021",
    "codigo": "FAR-021",
    "nombre": "Farol G8 Full LED 24V — Lado derecho",
    "descripcion": "Farol para carrocería G8 (lado derecho). Repuesto disponible por unidad. Referencia FAR-021.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "G8",
    "attrs": [
      "Full LED",
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "far-022",
    "codigo": "FAR-022",
    "nombre": "Farol G8 Full LED 24V — Lado izquierdo",
    "descripcion": "Farol para carrocería G8 (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-022.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "G8",
    "attrs": [
      "Full LED",
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "exp-003",
    "codigo": "EXP-003",
    "nombre": "Exploradora G8 New — Lado derecho",
    "descripcion": "Exploradora para carrocería G8 (lado derecho). Repuesto disponible por unidad. Referencia EXP-003.",
    "categoria": "Exploradora",
    "lado": "DER",
    "carroceria": "G8",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "exp-004",
    "codigo": "EXP-004",
    "nombre": "Exploradora G8 New — Lado izquierdo",
    "descripcion": "Exploradora para carrocería G8 (lado izquierdo). Repuesto disponible por unidad. Referencia EXP-004.",
    "categoria": "Exploradora",
    "lado": "IZQ",
    "carroceria": "G8",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-023",
    "codigo": "FAR-023",
    "nombre": "Farol Audace — Lado derecho",
    "descripcion": "Farol para carrocería Audace (lado derecho). Repuesto disponible por unidad. Referencia FAR-023.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Audace",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-024",
    "codigo": "FAR-024",
    "nombre": "Farol Audace — Lado izquierdo",
    "descripcion": "Farol para carrocería Audace (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-024.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Audace",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-025",
    "codigo": "FAR-025",
    "nombre": "Farol Atlantis — Lado derecho",
    "descripcion": "Farol para carrocería Atlantis (lado derecho). Repuesto disponible por unidad. Referencia FAR-025.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Atlantis",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-026",
    "codigo": "FAR-026",
    "nombre": "Farol Atlantis — Lado izquierdo",
    "descripcion": "Farol para carrocería Atlantis (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-026.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Atlantis",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-027",
    "codigo": "FAR-027",
    "nombre": "Farol Orion — Lado derecho",
    "descripcion": "Farol para carrocería Orion (lado derecho). Repuesto disponible por unidad. Referencia FAR-027.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Orion",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-028",
    "codigo": "FAR-028",
    "nombre": "Farol Orion — Lado izquierdo",
    "descripcion": "Farol para carrocería Orion (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-028.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Orion",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-029",
    "codigo": "FAR-029",
    "nombre": "Farol Carrocería Logos — Lado derecho",
    "descripcion": "Farol para carrocería de bus (lado derecho). Repuesto disponible por unidad. Referencia FAR-029.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-030",
    "codigo": "FAR-030",
    "nombre": "Farol Carrocería Logos — Lado izquierdo",
    "descripcion": "Farol para carrocería de bus (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-030.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-031",
    "codigo": "FAR-031",
    "nombre": "Farol Maxi Ibiza — Lado derecho",
    "descripcion": "Farol para carrocería Maxi Ibiza (lado derecho). Repuesto disponible por unidad. Referencia FAR-031.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Maxi Ibiza",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-032",
    "codigo": "FAR-032",
    "nombre": "Farol Maxi Ibiza — Lado izquierdo",
    "descripcion": "Farol para carrocería Maxi Ibiza (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-032.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Maxi Ibiza",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-033",
    "codigo": "FAR-033",
    "nombre": "Farol Borde Neon Megabuses — Lado derecho",
    "descripcion": "Farol para carrocería Megabuses (lado derecho). Repuesto disponible por unidad. Referencia FAR-033.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Megabuses",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-034",
    "codigo": "FAR-034",
    "nombre": "Farol Borde Neon Megabuses — Lado izquierdo",
    "descripcion": "Farol para carrocería Megabuses (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-034.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Megabuses",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-035",
    "codigo": "FAR-035",
    "nombre": "Farol Fasccino — Lado derecho",
    "descripcion": "Farol para carrocería Fasccino (lado derecho). Repuesto disponible por unidad. Referencia FAR-035.",
    "categoria": "Farol",
    "lado": "DER",
    "carroceria": "Fasccino",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-036",
    "codigo": "FAR-036",
    "nombre": "Farol Fasccino — Lado izquierdo",
    "descripcion": "Farol para carrocería Fasccino (lado izquierdo). Repuesto disponible por unidad. Referencia FAR-036.",
    "categoria": "Farol",
    "lado": "IZQ",
    "carroceria": "Fasccino",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-001",
    "codigo": "STP-001",
    "nombre": "Stop G7 — Lado derecho",
    "descripcion": "Stop para carrocería G7 (lado derecho). Repuesto disponible por unidad. Referencia STP-001.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-002",
    "codigo": "STP-002",
    "nombre": "Stop G7 — Lado izquierdo",
    "descripcion": "Stop para carrocería G7 (lado izquierdo). Repuesto disponible por unidad. Referencia STP-002.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-003",
    "codigo": "STP-003",
    "nombre": "Stop Maxi Ibiza Grande — Lado derecho",
    "descripcion": "Stop para carrocería Maxi Ibiza (lado derecho). Repuesto disponible por unidad. Referencia STP-003.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Maxi Ibiza",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-004",
    "codigo": "STP-004",
    "nombre": "Stop Maxi Ibiza Grande — Lado izquierdo",
    "descripcion": "Stop para carrocería Maxi Ibiza (lado izquierdo). Repuesto disponible por unidad. Referencia STP-004.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Maxi Ibiza",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-005",
    "codigo": "STP-005",
    "nombre": "Stop Maxi Ibiza Pequeño Genérico — Lado derecho",
    "descripcion": "Stop para carrocería Maxi Ibiza (lado derecho). Repuesto disponible por unidad. Referencia STP-005.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Maxi Ibiza",
    "attrs": [
      "Genérico"
    ],
    "marcopolo": false
  },
  {
    "id": "stp-006",
    "codigo": "STP-006",
    "nombre": "Stop Maxi Ibiza Pequeño Genérico — Lado izquierdo",
    "descripcion": "Stop para carrocería Maxi Ibiza (lado izquierdo). Repuesto disponible por unidad. Referencia STP-006.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Maxi Ibiza",
    "attrs": [
      "Genérico"
    ],
    "marcopolo": false
  },
  {
    "id": "stp-007",
    "codigo": "STP-007",
    "nombre": "Stop Inferior G8 LED — Lado derecho",
    "descripcion": "Stop para carrocería G8 (lado derecho). Repuesto disponible por unidad. Referencia STP-007.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "stp-008",
    "codigo": "STP-008",
    "nombre": "Stop Inferior G8 LED — Lado izquierdo",
    "descripcion": "Stop para carrocería G8 (lado izquierdo). Repuesto disponible por unidad. Referencia STP-008.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "stp-009",
    "codigo": "STP-009",
    "nombre": "Conjunto Stop G8 LED — Lado derecho",
    "descripcion": "Stop para carrocería G8 (lado derecho). Repuesto disponible por unidad. Referencia STP-009.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "stp-010",
    "codigo": "STP-010",
    "nombre": "Conjunto Stop G8 LED — Lado izquierdo",
    "descripcion": "Stop para carrocería G8 (lado izquierdo). Repuesto disponible por unidad. Referencia STP-010.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "stp-011",
    "codigo": "STP-011",
    "nombre": "Stop Superior G8 LED — Lado derecho",
    "descripcion": "Stop para carrocería G8 (lado derecho). Repuesto disponible por unidad. Referencia STP-011.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "stp-012",
    "codigo": "STP-012",
    "nombre": "Stop Superior G8 LED — Lado izquierdo",
    "descripcion": "Stop para carrocería G8 (lado izquierdo). Repuesto disponible por unidad. Referencia STP-012.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "stp-013",
    "codigo": "STP-013",
    "nombre": "Stop Ibiza — Lado derecho",
    "descripcion": "Stop para carrocería Ibiza (lado derecho). Repuesto disponible por unidad. Referencia STP-013.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Ibiza",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-014",
    "codigo": "STP-014",
    "nombre": "Stop Ibiza — Lado izquierdo",
    "descripcion": "Stop para carrocería Ibiza (lado izquierdo). Repuesto disponible por unidad. Referencia STP-014.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Ibiza",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-015",
    "codigo": "STP-015",
    "nombre": "Stop Audace — Lado derecho",
    "descripcion": "Stop para carrocería Audace (lado derecho). Repuesto disponible por unidad. Referencia STP-015.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Audace",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-016",
    "codigo": "STP-016",
    "nombre": "Stop Audace — Lado izquierdo",
    "descripcion": "Stop para carrocería Audace (lado izquierdo). Repuesto disponible por unidad. Referencia STP-016.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Audace",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-017",
    "codigo": "STP-017",
    "nombre": "Stop Inconcar New Sigma — Lado derecho",
    "descripcion": "Stop para carrocería Sigma (lado derecho). Repuesto disponible por unidad. Referencia STP-017.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Sigma",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-018",
    "codigo": "STP-018",
    "nombre": "Stop Inconcar New Sigma — Lado izquierdo",
    "descripcion": "Stop para carrocería Sigma (lado izquierdo). Repuesto disponible por unidad. Referencia STP-018.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Sigma",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-019",
    "codigo": "STP-019",
    "nombre": "Stop Fasccino — Lado derecho",
    "descripcion": "Stop para carrocería Fasccino (lado derecho). Repuesto disponible por unidad. Referencia STP-019.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Fasccino",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-020",
    "codigo": "STP-020",
    "nombre": "Stop Fasccino — Lado izquierdo",
    "descripcion": "Stop para carrocería Fasccino (lado izquierdo). Repuesto disponible por unidad. Referencia STP-020.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Fasccino",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-021",
    "codigo": "STP-021",
    "nombre": "Stop Majestic JGB — Lado derecho",
    "descripcion": "Stop para carrocería Majestic (lado derecho). Repuesto disponible por unidad. Referencia STP-021.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Majestic",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-022",
    "codigo": "STP-022",
    "nombre": "Stop Majestic JGB — Lado izquierdo",
    "descripcion": "Stop para carrocería Majestic (lado izquierdo). Repuesto disponible por unidad. Referencia STP-022.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Majestic",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-023",
    "codigo": "STP-023",
    "nombre": "Stop Atlantis — Lado derecho",
    "descripcion": "Stop para carrocería Atlantis (lado derecho). Repuesto disponible por unidad. Referencia STP-023.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Atlantis",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-024",
    "codigo": "STP-024",
    "nombre": "Stop Atlantis — Lado izquierdo",
    "descripcion": "Stop para carrocería Atlantis (lado izquierdo). Repuesto disponible por unidad. Referencia STP-024.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Atlantis",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-025",
    "codigo": "STP-025",
    "nombre": "Stop Inconcar Sigma P — Lado derecho",
    "descripcion": "Stop para carrocería Sigma (lado derecho). Repuesto disponible por unidad. Referencia STP-025.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Sigma",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-026",
    "codigo": "STP-026",
    "nombre": "Stop Inconcar Sigma P — Lado izquierdo",
    "descripcion": "Stop para carrocería Sigma (lado izquierdo). Repuesto disponible por unidad. Referencia STP-026.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Sigma",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-027",
    "codigo": "STP-027",
    "nombre": "Stop Modasa — Lado derecho",
    "descripcion": "Stop para carrocería Modasa (lado derecho). Repuesto disponible por unidad. Referencia STP-027.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Modasa",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-028",
    "codigo": "STP-028",
    "nombre": "Stop Modasa — Lado izquierdo",
    "descripcion": "Stop para carrocería Modasa (lado izquierdo). Repuesto disponible por unidad. Referencia STP-028.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Modasa",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-029",
    "codigo": "STP-029",
    "nombre": "Stop Superior Paradiso 1200 — Lado izquierdo",
    "descripcion": "Stop para carrocería Paradiso (lado izquierdo). Repuesto disponible por unidad. Referencia STP-029.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-030",
    "codigo": "STP-030",
    "nombre": "Stop Superior Paradiso 1200 — Lado derecho",
    "descripcion": "Stop para carrocería Paradiso (lado derecho). Repuesto disponible por unidad. Referencia STP-030.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-031",
    "codigo": "STP-031",
    "nombre": "Stop Superior Andare 1000 — Lado izquierdo",
    "descripcion": "Stop para carrocería Andare (lado izquierdo). Repuesto disponible por unidad. Referencia STP-031.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Andare",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-032",
    "codigo": "STP-032",
    "nombre": "Stop Superior Andare 1000 — Lado derecho",
    "descripcion": "Stop para carrocería Andare (lado derecho). Repuesto disponible por unidad. Referencia STP-032.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Andare",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-033",
    "codigo": "STP-033",
    "nombre": "Stop Individual Paradiso — Lado izquierdo",
    "descripcion": "Stop para carrocería Paradiso (lado izquierdo). Repuesto disponible por unidad. Referencia STP-033.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-034",
    "codigo": "STP-034",
    "nombre": "Stop Individual Paradiso — Lado derecho",
    "descripcion": "Stop para carrocería Paradiso (lado derecho). Repuesto disponible por unidad. Referencia STP-034.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-001",
    "codigo": "LUZ-001",
    "nombre": "Luz Reversa Paradiso — Lado izquierdo",
    "descripcion": "Luz para carrocería Paradiso (lado izquierdo). Repuesto disponible por unidad. Referencia LUZ-001.",
    "categoria": "Luz",
    "lado": "IZQ",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-002",
    "codigo": "LUZ-002",
    "nombre": "Luz Reversa Paradiso — Lado derecho",
    "descripcion": "Luz para carrocería Paradiso (lado derecho). Repuesto disponible por unidad. Referencia LUZ-002.",
    "categoria": "Luz",
    "lado": "DER",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-003",
    "codigo": "LUZ-003",
    "nombre": "Luz Reversa Andare — Lado izquierdo",
    "descripcion": "Luz para carrocería Andare (lado izquierdo). Repuesto disponible por unidad. Referencia LUZ-003.",
    "categoria": "Luz",
    "lado": "IZQ",
    "carroceria": "Andare",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-004",
    "codigo": "LUZ-004",
    "nombre": "Luz Reversa Andare — Lado derecho",
    "descripcion": "Luz para carrocería Andare (lado derecho). Repuesto disponible por unidad. Referencia LUZ-004.",
    "categoria": "Luz",
    "lado": "DER",
    "carroceria": "Andare",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-005",
    "codigo": "LUZ-005",
    "nombre": "Luz Lateral LED G7 Pequeña",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-005.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "G7",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-006",
    "codigo": "LUZ-006",
    "nombre": "Luz Lateral LED G7 Tacon",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-006.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "G7",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-007",
    "codigo": "LUZ-007",
    "nombre": "Luz Lateral LED G8 Plana",
    "descripcion": "Luz para carrocería G8. Repuesto disponible por unidad. Referencia LUZ-007.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-008",
    "codigo": "LUZ-008",
    "nombre": "Luz Lateral LED G8 con Direccional",
    "descripcion": "Luz para carrocería G8. Repuesto disponible por unidad. Referencia LUZ-008.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "dir-001",
    "codigo": "DIR-001",
    "nombre": "Direccional BRT Torino — Lado derecho",
    "descripcion": "Direccional para carrocería Torino (BRT) (lado derecho). Repuesto disponible por unidad. Referencia DIR-001.",
    "categoria": "Direccional",
    "lado": "DER",
    "carroceria": "Torino (BRT)",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "dir-002",
    "codigo": "DIR-002",
    "nombre": "Direccional BRT Torino — Lado izquierdo",
    "descripcion": "Direccional para carrocería Torino (BRT) (lado izquierdo). Repuesto disponible por unidad. Referencia DIR-002.",
    "categoria": "Direccional",
    "lado": "IZQ",
    "carroceria": "Torino (BRT)",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-035",
    "codigo": "STP-035",
    "nombre": "Stop en L BRT Torino — Lado derecho",
    "descripcion": "Stop para carrocería Torino (BRT) (lado derecho). Repuesto disponible por unidad. Referencia STP-035.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "Torino (BRT)",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-036",
    "codigo": "STP-036",
    "nombre": "Stop en L BRT Torino — Lado izquierdo",
    "descripcion": "Stop para carrocería Torino (BRT) (lado izquierdo). Repuesto disponible por unidad. Referencia STP-036.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "Torino (BRT)",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-037",
    "codigo": "STP-037",
    "nombre": "Stop Bomper G7 — Lado izquierdo",
    "descripcion": "Stop para carrocería G7 (lado izquierdo). Repuesto disponible por unidad. Referencia STP-037.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-038",
    "codigo": "STP-038",
    "nombre": "Stop Bomper G7 — Lado derecho",
    "descripcion": "Stop para carrocería G7 (lado derecho). Repuesto disponible por unidad. Referencia STP-038.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-039",
    "codigo": "STP-039",
    "nombre": "Stop Bomper Trasero New G8 — Lado derecho",
    "descripcion": "Stop para carrocería G8 (lado derecho). Repuesto disponible por unidad. Referencia STP-039.",
    "categoria": "Stop",
    "lado": "DER",
    "carroceria": "G8",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-040",
    "codigo": "STP-040",
    "nombre": "Stop Bomper Trasero New G8 — Lado izquierdo",
    "descripcion": "Stop para carrocería G8 (lado izquierdo). Repuesto disponible por unidad. Referencia STP-040.",
    "categoria": "Stop",
    "lado": "IZQ",
    "carroceria": "G8",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esq-001",
    "codigo": "ESQ-001",
    "nombre": "Esquinero Superior Trasera G7 — Lado izquierdo",
    "descripcion": "Esquinero para carrocería G7 (lado izquierdo). Repuesto disponible por unidad. Referencia ESQ-001.",
    "categoria": "Esquinero",
    "lado": "IZQ",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esq-002",
    "codigo": "ESQ-002",
    "nombre": "Esquinero Superior Trasera G7 — Lado derecho",
    "descripcion": "Esquinero para carrocería G7 (lado derecho). Repuesto disponible por unidad. Referencia ESQ-002.",
    "categoria": "Esquinero",
    "lado": "DER",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esq-003",
    "codigo": "ESQ-003",
    "nombre": "Esquinero New G7 — Lado derecho",
    "descripcion": "Esquinero para carrocería New G7 (lado derecho). Repuesto disponible por unidad. Referencia ESQ-003.",
    "categoria": "Esquinero",
    "lado": "DER",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esq-004",
    "codigo": "ESQ-004",
    "nombre": "Esquinero New G7 — Lado izquierdo",
    "descripcion": "Esquinero para carrocería New G7 (lado izquierdo). Repuesto disponible por unidad. Referencia ESQ-004.",
    "categoria": "Esquinero",
    "lado": "IZQ",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esq-005",
    "codigo": "ESQ-005",
    "nombre": "Esquinero G8 New — Lado derecho",
    "descripcion": "Esquinero para carrocería G8 (lado derecho). Repuesto disponible por unidad. Referencia ESQ-005.",
    "categoria": "Esquinero",
    "lado": "DER",
    "carroceria": "G8",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esq-006",
    "codigo": "ESQ-006",
    "nombre": "Esquinero G8 New — Lado izquierdo",
    "descripcion": "Esquinero para carrocería G8 (lado izquierdo). Repuesto disponible por unidad. Referencia ESQ-006.",
    "categoria": "Esquinero",
    "lado": "IZQ",
    "carroceria": "G8",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-009",
    "codigo": "LUZ-009",
    "nombre": "Luz de Frente Pequeña G7",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-009.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-010",
    "codigo": "LUZ-010",
    "nombre": "Luz de Frente Pequeña New G7",
    "descripcion": "Luz para carrocería New G7. Repuesto disponible por unidad. Referencia LUZ-010.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-011",
    "codigo": "LUZ-011",
    "nombre": "Luz Frontal G8 Genérica — Lado izquierdo",
    "descripcion": "Luz para carrocería G8 (lado izquierdo). Repuesto disponible por unidad. Referencia LUZ-011.",
    "categoria": "Luz",
    "lado": "IZQ",
    "carroceria": "G8",
    "attrs": [
      "Genérico"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-012",
    "codigo": "LUZ-012",
    "nombre": "Luz Frontal G8 Genérica Central",
    "descripcion": "Luz para carrocería G8. Repuesto disponible por unidad. Referencia LUZ-012.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "G8",
    "attrs": [
      "Genérico"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-013",
    "codigo": "LUZ-013",
    "nombre": "Luz Frontal G8 Genérica — Lado derecho",
    "descripcion": "Luz para carrocería G8 (lado derecho). Repuesto disponible por unidad. Referencia LUZ-013.",
    "categoria": "Luz",
    "lado": "DER",
    "carroceria": "G8",
    "attrs": [
      "Genérico"
    ],
    "marcopolo": true
  },
  {
    "id": "esq-007",
    "codigo": "ESQ-007",
    "nombre": "Esquinero Sup Trasero Audace — Lado derecho",
    "descripcion": "Esquinero para carrocería Audace (lado derecho). Repuesto disponible por unidad. Referencia ESQ-007.",
    "categoria": "Esquinero",
    "lado": "DER",
    "carroceria": "Audace",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "esq-008",
    "codigo": "ESQ-008",
    "nombre": "Esquinero Sup Trasero Audace — Lado izquierdo",
    "descripcion": "Esquinero para carrocería Audace (lado izquierdo). Repuesto disponible por unidad. Referencia ESQ-008.",
    "categoria": "Esquinero",
    "lado": "IZQ",
    "carroceria": "Audace",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "luz-014",
    "codigo": "LUZ-014",
    "nombre": "Luz de Techo Trasera Pequeña Roja Audace",
    "descripcion": "Luz para carrocería Audace. Repuesto disponible por unidad. Referencia LUZ-014.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "Audace",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "luz-015",
    "codigo": "LUZ-015",
    "nombre": "Luz Lateral LED 24V",
    "descripcion": "Luz para carrocería de bus. Repuesto disponible por unidad. Referencia LUZ-015.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "luz-016",
    "codigo": "LUZ-016",
    "nombre": "Luz Lateral Bombillo Andare y Paradiso",
    "descripcion": "Luz para carrocería Paradiso. Repuesto disponible por unidad. Referencia LUZ-016.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-037",
    "codigo": "FAR-037",
    "nombre": "Farol con Luz Posición Senior Urbana",
    "descripcion": "Farol para carrocería Senior. Repuesto disponible por unidad. Referencia FAR-037.",
    "categoria": "Farol",
    "lado": "",
    "carroceria": "Senior",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-038",
    "codigo": "FAR-038",
    "nombre": "Farol sin Luz Posición Senior Urbana",
    "descripcion": "Farol para carrocería Senior. Repuesto disponible por unidad. Referencia FAR-038.",
    "categoria": "Farol",
    "lado": "",
    "carroceria": "Senior",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-017",
    "codigo": "LUZ-017",
    "nombre": "Luz Amarilla 155 mm LED 24V",
    "descripcion": "Luz para carrocería de bus. Repuesto disponible por unidad. Referencia LUZ-017.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "luz-018",
    "codigo": "LUZ-018",
    "nombre": "Luz Roja 155 mm LED 24V",
    "descripcion": "Luz para carrocería de bus. Repuesto disponible por unidad. Referencia LUZ-018.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "luz-019",
    "codigo": "LUZ-019",
    "nombre": "Luz Blanca 155 mm LED 24V",
    "descripcion": "Luz para carrocería de bus. Repuesto disponible por unidad. Referencia LUZ-019.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "luz-020",
    "codigo": "LUZ-020",
    "nombre": "Luz Roja 125 mm 24V Senior",
    "descripcion": "Luz para carrocería Senior. Repuesto disponible por unidad. Referencia LUZ-020.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "Senior",
    "attrs": [
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "dir-003",
    "codigo": "DIR-003",
    "nombre": "Direccional LED 95 mm Senior 24V",
    "descripcion": "Direccional para carrocería Senior. Repuesto disponible por unidad. Referencia DIR-003.",
    "categoria": "Direccional",
    "lado": "",
    "carroceria": "Senior",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-021",
    "codigo": "LUZ-021",
    "nombre": "Luz Blanca 95 mm Senior 24V",
    "descripcion": "Luz para carrocería Senior. Repuesto disponible por unidad. Referencia LUZ-021.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "Senior",
    "attrs": [
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "exp-005",
    "codigo": "EXP-005",
    "nombre": "Exploradora G7 — Lado derecho",
    "descripcion": "Exploradora para carrocería G7 (lado derecho). Repuesto disponible por unidad. Referencia EXP-005.",
    "categoria": "Exploradora",
    "lado": "DER",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "exp-006",
    "codigo": "EXP-006",
    "nombre": "Exploradora G7 — Lado izquierdo",
    "descripcion": "Exploradora para carrocería G7 (lado izquierdo). Repuesto disponible por unidad. Referencia EXP-006.",
    "categoria": "Exploradora",
    "lado": "IZQ",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-022",
    "codigo": "LUZ-022",
    "nombre": "Luz Día Bomper G7 — Lado izquierdo",
    "descripcion": "Luz para carrocería G7 (lado izquierdo). Repuesto disponible por unidad. Referencia LUZ-022.",
    "categoria": "Luz",
    "lado": "IZQ",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-023",
    "codigo": "LUZ-023",
    "nombre": "Luz Día Bomper G7 — Lado derecho",
    "descripcion": "Luz para carrocería G7 (lado derecho). Repuesto disponible por unidad. Referencia LUZ-023.",
    "categoria": "Luz",
    "lado": "DER",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "dir-004",
    "codigo": "DIR-004",
    "nombre": "Direccional LED Alimentador — Lado derecho",
    "descripcion": "Direccional para carrocería de bus (lado derecho). Repuesto disponible por unidad. Referencia DIR-004.",
    "categoria": "Direccional",
    "lado": "DER",
    "carroceria": "",
    "attrs": [
      "LED"
    ],
    "marcopolo": false
  },
  {
    "id": "dir-005",
    "codigo": "DIR-005",
    "nombre": "Direccional LED Alimentador — Lado izquierdo",
    "descripcion": "Direccional para carrocería de bus (lado izquierdo). Repuesto disponible por unidad. Referencia DIR-005.",
    "categoria": "Direccional",
    "lado": "IZQ",
    "carroceria": "",
    "attrs": [
      "LED"
    ],
    "marcopolo": false
  },
  {
    "id": "stp-041",
    "codigo": "STP-041",
    "nombre": "Tercer Stop 24 V Andare y Paradiso",
    "descripcion": "Stop para carrocería Paradiso. Repuesto disponible por unidad. Referencia STP-041.",
    "categoria": "Stop",
    "lado": "",
    "carroceria": "Paradiso",
    "attrs": [
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "stp-042",
    "codigo": "STP-042",
    "nombre": "Tercer Stop G7 Pequeño",
    "descripcion": "Stop para carrocería G7. Repuesto disponible por unidad. Referencia STP-042.",
    "categoria": "Stop",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-043",
    "codigo": "STP-043",
    "nombre": "Tercer Stop G8 LED 24V",
    "descripcion": "Stop para carrocería G8. Repuesto disponible por unidad. Referencia STP-043.",
    "categoria": "Stop",
    "lado": "",
    "carroceria": "G8",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-024",
    "codigo": "LUZ-024",
    "nombre": "Luz Techo Frente New G7 Grande",
    "descripcion": "Luz para carrocería New G7. Repuesto disponible por unidad. Referencia LUZ-024.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-025",
    "codigo": "LUZ-025",
    "nombre": "Luz Techo Frente Grande Paradiso G7",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-025.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-044",
    "codigo": "STP-044",
    "nombre": "Stop Superior G7 Grande",
    "descripcion": "Stop para carrocería G7. Repuesto disponible por unidad. Referencia STP-044.",
    "categoria": "Stop",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-045",
    "codigo": "STP-045",
    "nombre": "Stop Superior New G7 Grande",
    "descripcion": "Stop para carrocería New G7. Repuesto disponible por unidad. Referencia STP-045.",
    "categoria": "Stop",
    "lado": "",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-046",
    "codigo": "STP-046",
    "nombre": "Stop Superior Central G8",
    "descripcion": "Stop para carrocería G8. Repuesto disponible por unidad. Referencia STP-046.",
    "categoria": "Stop",
    "lado": "",
    "carroceria": "G8",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-026",
    "codigo": "LUZ-026",
    "nombre": "Luz Escalera G7 Blanca",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-026.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-027",
    "codigo": "LUZ-027",
    "nombre": "Luz Espejos G7 Amarilla",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-027.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esp-001",
    "codigo": "ESP-001",
    "nombre": "Espejo Manual G7 Fondo Gris — Lado derecho",
    "descripcion": "Espejo para carrocería G7 (lado derecho). Repuesto disponible por unidad. Referencia ESP-001.",
    "categoria": "Espejo",
    "lado": "DER",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esp-002",
    "codigo": "ESP-002",
    "nombre": "Espejo Manual G7 Fondo Gris — Lado izquierdo",
    "descripcion": "Espejo para carrocería G7 (lado izquierdo). Repuesto disponible por unidad. Referencia ESP-002.",
    "categoria": "Espejo",
    "lado": "IZQ",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esp-003",
    "codigo": "ESP-003",
    "nombre": "Espejo Eléctrico New G7 con Calefacción — Lado derecho",
    "descripcion": "Espejo para carrocería New G7 (lado derecho). Repuesto disponible por unidad. Referencia ESP-003.",
    "categoria": "Espejo",
    "lado": "DER",
    "carroceria": "New G7",
    "attrs": [
      "Calefacción",
      "Eléctrico"
    ],
    "marcopolo": true
  },
  {
    "id": "esp-004",
    "codigo": "ESP-004",
    "nombre": "Espejo Eléctrico New G7 con Calefacción — Lado izquierdo",
    "descripcion": "Espejo para carrocería New G7 (lado izquierdo). Repuesto disponible por unidad. Referencia ESP-004.",
    "categoria": "Espejo",
    "lado": "IZQ",
    "carroceria": "New G7",
    "attrs": [
      "Calefacción",
      "Eléctrico"
    ],
    "marcopolo": true
  },
  {
    "id": "esp-005",
    "codigo": "ESP-005",
    "nombre": "Espejo con Calefacción Genérico G8 Fondo Gris — Lado derecho",
    "descripcion": "Espejo para carrocería G8 (lado derecho). Repuesto disponible por unidad. Referencia ESP-005.",
    "categoria": "Espejo",
    "lado": "DER",
    "carroceria": "G8",
    "attrs": [
      "Calefacción",
      "Genérico"
    ],
    "marcopolo": true
  },
  {
    "id": "esp-006",
    "codigo": "ESP-006",
    "nombre": "Espejo con Calefacción Genérico G8 Fondo Gris — Lado izquierdo",
    "descripcion": "Espejo para carrocería G8 (lado izquierdo). Repuesto disponible por unidad. Referencia ESP-006.",
    "categoria": "Espejo",
    "lado": "IZQ",
    "carroceria": "G8",
    "attrs": [
      "Calefacción",
      "Genérico"
    ],
    "marcopolo": true
  },
  {
    "id": "esp-007",
    "codigo": "ESP-007",
    "nombre": "Espejo Manual Paradiso G6 — Lado derecho",
    "descripcion": "Espejo para carrocería G6 (lado derecho). Repuesto disponible por unidad. Referencia ESP-007.",
    "categoria": "Espejo",
    "lado": "DER",
    "carroceria": "G6",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esp-008",
    "codigo": "ESP-008",
    "nombre": "Espejo Manual Paradiso G6 — Lado izquierdo",
    "descripcion": "Espejo para carrocería G6 (lado izquierdo). Repuesto disponible por unidad. Referencia ESP-008.",
    "categoria": "Espejo",
    "lado": "IZQ",
    "carroceria": "G6",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "con-001",
    "codigo": "CON-001",
    "nombre": "Conector Farol G7",
    "descripcion": "Conector para carrocería G7. Repuesto disponible por unidad. Referencia CON-001.",
    "categoria": "Conector",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "con-002",
    "codigo": "CON-002",
    "nombre": "Conector Dos Vias Stop G7",
    "descripcion": "Conector para carrocería G7. Repuesto disponible por unidad. Referencia CON-002.",
    "categoria": "Conector",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "con-003",
    "codigo": "CON-003",
    "nombre": "Conector Stop G7 2 Vias Alambre",
    "descripcion": "Conector para carrocería G7. Repuesto disponible por unidad. Referencia CON-003.",
    "categoria": "Conector",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "con-004",
    "codigo": "CON-004",
    "nombre": "Conector Stop G7 3 Vias Alambre",
    "descripcion": "Conector para carrocería G7. Repuesto disponible por unidad. Referencia CON-004.",
    "categoria": "Conector",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "con-005",
    "codigo": "CON-005",
    "nombre": "Conector Tres Vias Stop G7",
    "descripcion": "Conector para carrocería G7. Repuesto disponible por unidad. Referencia CON-005.",
    "categoria": "Conector",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "pis-001",
    "codigo": "PIS-001",
    "nombre": "Piston Spring Bodega 85 Kl 552 mm",
    "descripcion": "Pistón para carrocería de bus. Repuesto disponible por unidad. Referencia PIS-001.",
    "categoria": "Pistón",
    "lado": "",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "pis-002",
    "codigo": "PIS-002",
    "nombre": "Piston Chino Silla Eurocity 265 mm 45 Kl",
    "descripcion": "Pistón para carrocería Eurocity. Repuesto disponible por unidad. Referencia PIS-002.",
    "categoria": "Pistón",
    "lado": "",
    "carroceria": "Eurocity",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "cer-001",
    "codigo": "CER-001",
    "nombre": "Cerradura de 1 Giro Llave 810",
    "descripcion": "Cerrajería para carrocería de bus. Repuesto disponible por unidad. Referencia CER-001.",
    "categoria": "Cerrajería",
    "lado": "",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "cer-002",
    "codigo": "CER-002",
    "nombre": "Cerradura de 1 Giro Llave 811 Gen",
    "descripcion": "Cerrajería para carrocería de bus. Repuesto disponible por unidad. Referencia CER-002.",
    "categoria": "Cerrajería",
    "lado": "",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "cer-003",
    "codigo": "CER-003",
    "nombre": "Cerradura de 1 Giro Llave 812 Gen",
    "descripcion": "Cerrajería para carrocería de bus. Repuesto disponible por unidad. Referencia CER-003.",
    "categoria": "Cerrajería",
    "lado": "",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "cer-004",
    "codigo": "CER-004",
    "nombre": "Cerradura de 1 Giro Llave 813 Gen",
    "descripcion": "Cerrajería para carrocería de bus. Repuesto disponible por unidad. Referencia CER-004.",
    "categoria": "Cerrajería",
    "lado": "",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "cer-005",
    "codigo": "CER-005",
    "nombre": "Chapa Picoloro con Llave 811",
    "descripcion": "Cerrajería para carrocería de bus. Repuesto disponible por unidad. Referencia CER-005.",
    "categoria": "Cerrajería",
    "lado": "",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "cer-006",
    "codigo": "CER-006",
    "nombre": "Chapa Picoloro con Llave 800",
    "descripcion": "Cerrajería para carrocería de bus. Repuesto disponible por unidad. Referencia CER-006.",
    "categoria": "Cerrajería",
    "lado": "",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "cer-007",
    "codigo": "CER-007",
    "nombre": "Llave Marcopolo 800-810-811-812-813",
    "descripcion": "Cerrajería para carrocería de bus. Repuesto disponible por unidad. Referencia CER-007.",
    "categoria": "Cerrajería",
    "lado": "",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "man-001",
    "codigo": "MAN-001",
    "nombre": "Manija Puertas Laterales G7",
    "descripcion": "Manija para carrocería G7. Repuesto disponible por unidad. Referencia MAN-001.",
    "categoria": "Manija",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-028",
    "codigo": "LUZ-028",
    "nombre": "Luz Techo Blanca Andare y Paradiso",
    "descripcion": "Luz para carrocería Paradiso. Repuesto disponible por unidad. Referencia LUZ-028.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-029",
    "codigo": "LUZ-029",
    "nombre": "Luz Aire Palomera Universal 24V",
    "descripcion": "Luz para carrocería de bus. Repuesto disponible por unidad. Referencia LUZ-029.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "",
    "attrs": [
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "luz-030",
    "codigo": "LUZ-030",
    "nombre": "Luz Aire Palomera Gen G7 con Parlante",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-030.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-047",
    "codigo": "STP-047",
    "nombre": "Stop AGA Centro Blanco Aro LED Rojo 24V",
    "descripcion": "Stop para carrocería de bus. Repuesto disponible por unidad. Referencia STP-047.",
    "categoria": "Stop",
    "lado": "",
    "carroceria": "",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "stp-048",
    "codigo": "STP-048",
    "nombre": "Stop AGA Centro Rojo Aro LED Rojo 24V",
    "descripcion": "Stop para carrocería de bus. Repuesto disponible por unidad. Referencia STP-048.",
    "categoria": "Stop",
    "lado": "",
    "carroceria": "",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "far-039",
    "codigo": "FAR-039",
    "nombre": "Farol Tipo Temple URB con Luz Posición",
    "descripcion": "Farol para carrocería de bus. Repuesto disponible por unidad. Referencia FAR-039.",
    "categoria": "Farol",
    "lado": "",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "man-002",
    "codigo": "MAN-002",
    "nombre": "Manija Bodega y Puerta Tras G7 Gen",
    "descripcion": "Manija para carrocería G7. Repuesto disponible por unidad. Referencia MAN-002.",
    "categoria": "Manija",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "cer-008",
    "codigo": "CER-008",
    "nombre": "Chapa Puerta Sanitario G7",
    "descripcion": "Cerrajería para carrocería G7. Repuesto disponible por unidad. Referencia CER-008.",
    "categoria": "Cerrajería",
    "lado": "",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "man-003",
    "codigo": "MAN-003",
    "nombre": "Manija Bodega Tipo AGA",
    "descripcion": "Manija para carrocería de bus. Repuesto disponible por unidad. Referencia MAN-003.",
    "categoria": "Manija",
    "lado": "",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "luz-031",
    "codigo": "LUZ-031",
    "nombre": "Luz Reversa BRT Torino",
    "descripcion": "Luz para carrocería Torino (BRT). Repuesto disponible por unidad. Referencia LUZ-031.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "Torino (BRT)",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-032",
    "codigo": "LUZ-032",
    "nombre": "Luz Placa LED G7",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-032.",
    "categoria": "Luz",
    "lado": "",
    "carroceria": "G7",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "ref-001",
    "codigo": "REF-001",
    "nombre": "Reflectivo BRT Torino — Lado derecho",
    "descripcion": "Reflectivo para carrocería Torino (BRT) (lado derecho). Repuesto disponible por unidad. Referencia REF-001.",
    "categoria": "Reflectivo",
    "lado": "DER",
    "carroceria": "Torino (BRT)",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "ref-002",
    "codigo": "REF-002",
    "nombre": "Reflectivo BRT Torino — Lado izquierdo",
    "descripcion": "Reflectivo para carrocería Torino (BRT) (lado izquierdo). Repuesto disponible por unidad. Referencia REF-002.",
    "categoria": "Reflectivo",
    "lado": "IZQ",
    "carroceria": "Torino (BRT)",
    "attrs": [],
    "marcopolo": true
  }
];

// Busca un producto por su id (= código en minúscula). undefined si no existe.
export function getProducto(id: string): Product | undefined {
  return productos.find((p) => p.id === id);
}
