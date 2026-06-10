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
  carroceria: string;  // p. ej. "G8", "Paradiso" o "" si no aplica
  attrs: string[];     // metadatos técnicos: ["Full LED", "24V", ...]
  marcopolo: boolean;  // pertenece a una carrocería Marcopolo Superpolo
};

export const categorias: string[] = ["Farol","Aleta","Exploradora","Stop","Luz","Direccional","Esquinero","Espejo","Conector","Pistón","Cerrajería","Manija","Reflectivo"];

export const productos: Product[] = [
  {
    "id": "far-001",
    "codigo": "FAR-001",
    "nombre": "Farol Yutong",
    "descripcion": "Farol para carrocería Yutong. Repuesto disponible por unidad. Referencia FAR-001.",
    "categoria": "Farol",
    "carroceria": "Yutong",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-002",
    "codigo": "FAR-002",
    "nombre": "Farol Invicar",
    "descripcion": "Farol para carrocería Invicar. Repuesto disponible por unidad. Referencia FAR-002.",
    "categoria": "Farol",
    "carroceria": "Invicar",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-003",
    "codigo": "FAR-003",
    "nombre": "Farol Inconcar Ojo Lupa y Regleta LED",
    "descripcion": "Farol para carrocería Inconcar. Repuesto disponible por unidad. Referencia FAR-003.",
    "categoria": "Farol",
    "carroceria": "Inconcar",
    "attrs": [
      "LED"
    ],
    "marcopolo": false
  },
  {
    "id": "far-004",
    "codigo": "FAR-004",
    "nombre": "Farol Busscar Buseta",
    "descripcion": "Farol para carrocería Busscar. Repuesto disponible por unidad. Referencia FAR-004.",
    "categoria": "Farol",
    "carroceria": "Busscar",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-005",
    "codigo": "FAR-005",
    "nombre": "Farol Busscar Bus",
    "descripcion": "Farol para carrocería Busscar. Repuesto disponible por unidad. Referencia FAR-005.",
    "categoria": "Farol",
    "carroceria": "Busscar",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-006",
    "codigo": "FAR-006",
    "nombre": "Farol Paradiso",
    "descripcion": "Farol para carrocería Paradiso. Repuesto disponible por unidad. Referencia FAR-006.",
    "categoria": "Farol",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-007",
    "codigo": "FAR-007",
    "nombre": "Farol Inconcar Sigma",
    "descripcion": "Farol para carrocería Sigma. Repuesto disponible por unidad. Referencia FAR-007.",
    "categoria": "Farol",
    "carroceria": "Sigma",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-008",
    "codigo": "FAR-008",
    "nombre": "Farol Andare",
    "descripcion": "Farol para carrocería Andare. Repuesto disponible por unidad. Referencia FAR-008.",
    "categoria": "Farol",
    "carroceria": "Andare",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-009",
    "codigo": "FAR-009",
    "nombre": "Farol G7",
    "descripcion": "Farol para carrocería G7. Repuesto disponible por unidad. Referencia FAR-009.",
    "categoria": "Farol",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "ale-001",
    "codigo": "ALE-001",
    "nombre": "Aleta Decorativa Unidad Paradiso",
    "descripcion": "Aleta para carrocería Paradiso. Repuesto disponible por unidad. Referencia ALE-001.",
    "categoria": "Aleta",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-010",
    "codigo": "FAR-010",
    "nombre": "Farol New G7",
    "descripcion": "Farol para carrocería New G7. Repuesto disponible por unidad. Referencia FAR-010.",
    "categoria": "Farol",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "ale-002",
    "codigo": "ALE-002",
    "nombre": "Aleta Farol New G7",
    "descripcion": "Aleta para carrocería New G7. Repuesto disponible por unidad. Referencia ALE-002.",
    "categoria": "Aleta",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "exp-001",
    "codigo": "EXP-001",
    "nombre": "Exploradora New G7",
    "descripcion": "Exploradora para carrocería New G7. Repuesto disponible por unidad. Referencia EXP-001.",
    "categoria": "Exploradora",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-011",
    "codigo": "FAR-011",
    "nombre": "Farol G8 Full LED 24V",
    "descripcion": "Farol para carrocería G8. Repuesto disponible por unidad. Referencia FAR-011.",
    "categoria": "Farol",
    "carroceria": "G8",
    "attrs": [
      "Full LED",
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "exp-002",
    "codigo": "EXP-002",
    "nombre": "Exploradora G8 New",
    "descripcion": "Exploradora para carrocería G8. Repuesto disponible por unidad. Referencia EXP-002.",
    "categoria": "Exploradora",
    "carroceria": "G8",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-012",
    "codigo": "FAR-012",
    "nombre": "Farol Audace",
    "descripcion": "Farol para carrocería Audace. Repuesto disponible por unidad. Referencia FAR-012.",
    "categoria": "Farol",
    "carroceria": "Audace",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-013",
    "codigo": "FAR-013",
    "nombre": "Farol Atlantis",
    "descripcion": "Farol para carrocería Atlantis. Repuesto disponible por unidad. Referencia FAR-013.",
    "categoria": "Farol",
    "carroceria": "Atlantis",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-014",
    "codigo": "FAR-014",
    "nombre": "Farol Orion",
    "descripcion": "Farol para carrocería Orion. Repuesto disponible por unidad. Referencia FAR-014.",
    "categoria": "Farol",
    "carroceria": "Orion",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-015",
    "codigo": "FAR-015",
    "nombre": "Farol Carrocería Logos",
    "descripcion": "Farol para carrocería de bus. Repuesto disponible por unidad. Referencia FAR-015.",
    "categoria": "Farol",
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-016",
    "codigo": "FAR-016",
    "nombre": "Farol Maxi Ibiza",
    "descripcion": "Farol para carrocería Maxi Ibiza. Repuesto disponible por unidad. Referencia FAR-016.",
    "categoria": "Farol",
    "carroceria": "Maxi Ibiza",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-017",
    "codigo": "FAR-017",
    "nombre": "Farol Borde Neon Megabuses",
    "descripcion": "Farol para carrocería Megabuses. Repuesto disponible por unidad. Referencia FAR-017.",
    "categoria": "Farol",
    "carroceria": "Megabuses",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "far-018",
    "codigo": "FAR-018",
    "nombre": "Farol Fasccino",
    "descripcion": "Farol para carrocería Fasccino. Repuesto disponible por unidad. Referencia FAR-018.",
    "categoria": "Farol",
    "carroceria": "Fasccino",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-001",
    "codigo": "STP-001",
    "nombre": "Stop G7",
    "descripcion": "Stop para carrocería G7. Repuesto disponible por unidad. Referencia STP-001.",
    "categoria": "Stop",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-002",
    "codigo": "STP-002",
    "nombre": "Stop Maxi Ibiza Grande",
    "descripcion": "Stop para carrocería Maxi Ibiza. Repuesto disponible por unidad. Referencia STP-002.",
    "categoria": "Stop",
    "carroceria": "Maxi Ibiza",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-003",
    "codigo": "STP-003",
    "nombre": "Stop Maxi Ibiza Pequeño Genérico",
    "descripcion": "Stop para carrocería Maxi Ibiza. Repuesto disponible por unidad. Referencia STP-003.",
    "categoria": "Stop",
    "carroceria": "Maxi Ibiza",
    "attrs": [
      "Genérico"
    ],
    "marcopolo": false
  },
  {
    "id": "stp-004",
    "codigo": "STP-004",
    "nombre": "Stop Inferior G8 LED",
    "descripcion": "Stop para carrocería G8. Repuesto disponible por unidad. Referencia STP-004.",
    "categoria": "Stop",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "stp-005",
    "codigo": "STP-005",
    "nombre": "Conjunto Stop G8 LED",
    "descripcion": "Stop para carrocería G8. Repuesto disponible por unidad. Referencia STP-005.",
    "categoria": "Stop",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "stp-006",
    "codigo": "STP-006",
    "nombre": "Stop Superior G8 LED",
    "descripcion": "Stop para carrocería G8. Repuesto disponible por unidad. Referencia STP-006.",
    "categoria": "Stop",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "stp-007",
    "codigo": "STP-007",
    "nombre": "Stop Ibiza",
    "descripcion": "Stop para carrocería Ibiza. Repuesto disponible por unidad. Referencia STP-007.",
    "categoria": "Stop",
    "carroceria": "Ibiza",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-008",
    "codigo": "STP-008",
    "nombre": "Stop Audace",
    "descripcion": "Stop para carrocería Audace. Repuesto disponible por unidad. Referencia STP-008.",
    "categoria": "Stop",
    "carroceria": "Audace",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-009",
    "codigo": "STP-009",
    "nombre": "Stop Inconcar New Sigma",
    "descripcion": "Stop para carrocería Sigma. Repuesto disponible por unidad. Referencia STP-009.",
    "categoria": "Stop",
    "carroceria": "Sigma",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-010",
    "codigo": "STP-010",
    "nombre": "Stop Fasccino",
    "descripcion": "Stop para carrocería Fasccino. Repuesto disponible por unidad. Referencia STP-010.",
    "categoria": "Stop",
    "carroceria": "Fasccino",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-011",
    "codigo": "STP-011",
    "nombre": "Stop Majestic JGB",
    "descripcion": "Stop para carrocería Majestic. Repuesto disponible por unidad. Referencia STP-011.",
    "categoria": "Stop",
    "carroceria": "Majestic",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-012",
    "codigo": "STP-012",
    "nombre": "Stop Atlantis",
    "descripcion": "Stop para carrocería Atlantis. Repuesto disponible por unidad. Referencia STP-012.",
    "categoria": "Stop",
    "carroceria": "Atlantis",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-013",
    "codigo": "STP-013",
    "nombre": "Stop Inconcar Sigma P",
    "descripcion": "Stop para carrocería Sigma. Repuesto disponible por unidad. Referencia STP-013.",
    "categoria": "Stop",
    "carroceria": "Sigma",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-014",
    "codigo": "STP-014",
    "nombre": "Stop Modasa",
    "descripcion": "Stop para carrocería Modasa. Repuesto disponible por unidad. Referencia STP-014.",
    "categoria": "Stop",
    "carroceria": "Modasa",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "stp-015",
    "codigo": "STP-015",
    "nombre": "Stop Superior Paradiso 1200",
    "descripcion": "Stop para carrocería Paradiso. Repuesto disponible por unidad. Referencia STP-015.",
    "categoria": "Stop",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-016",
    "codigo": "STP-016",
    "nombre": "Stop Superior Andare 1000",
    "descripcion": "Stop para carrocería Andare. Repuesto disponible por unidad. Referencia STP-016.",
    "categoria": "Stop",
    "carroceria": "Andare",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-017",
    "codigo": "STP-017",
    "nombre": "Stop Individual Paradiso",
    "descripcion": "Stop para carrocería Paradiso. Repuesto disponible por unidad. Referencia STP-017.",
    "categoria": "Stop",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-001",
    "codigo": "LUZ-001",
    "nombre": "Luz Reversa Paradiso",
    "descripcion": "Luz para carrocería Paradiso. Repuesto disponible por unidad. Referencia LUZ-001.",
    "categoria": "Luz",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-002",
    "codigo": "LUZ-002",
    "nombre": "Luz Reversa Andare",
    "descripcion": "Luz para carrocería Andare. Repuesto disponible por unidad. Referencia LUZ-002.",
    "categoria": "Luz",
    "carroceria": "Andare",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-003",
    "codigo": "LUZ-003",
    "nombre": "Luz Lateral LED G7 Pequeña",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-003.",
    "categoria": "Luz",
    "carroceria": "G7",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-004",
    "codigo": "LUZ-004",
    "nombre": "Luz Lateral LED G7 Tacon",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-004.",
    "categoria": "Luz",
    "carroceria": "G7",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-005",
    "codigo": "LUZ-005",
    "nombre": "Luz Lateral LED G8 Plana",
    "descripcion": "Luz para carrocería G8. Repuesto disponible por unidad. Referencia LUZ-005.",
    "categoria": "Luz",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-006",
    "codigo": "LUZ-006",
    "nombre": "Luz Lateral LED G8 con Direccional",
    "descripcion": "Luz para carrocería G8. Repuesto disponible por unidad. Referencia LUZ-006.",
    "categoria": "Luz",
    "carroceria": "G8",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "dir-001",
    "codigo": "DIR-001",
    "nombre": "Direccional BRT Torino",
    "descripcion": "Direccional para carrocería Torino (BRT). Repuesto disponible por unidad. Referencia DIR-001.",
    "categoria": "Direccional",
    "carroceria": "Torino (BRT)",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-018",
    "codigo": "STP-018",
    "nombre": "Stop en L BRT Torino",
    "descripcion": "Stop para carrocería Torino (BRT). Repuesto disponible por unidad. Referencia STP-018.",
    "categoria": "Stop",
    "carroceria": "Torino (BRT)",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-019",
    "codigo": "STP-019",
    "nombre": "Stop Bomper G7",
    "descripcion": "Stop para carrocería G7. Repuesto disponible por unidad. Referencia STP-019.",
    "categoria": "Stop",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-020",
    "codigo": "STP-020",
    "nombre": "Stop Bomper Trasero New G8",
    "descripcion": "Stop para carrocería G8. Repuesto disponible por unidad. Referencia STP-020.",
    "categoria": "Stop",
    "carroceria": "G8",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esq-001",
    "codigo": "ESQ-001",
    "nombre": "Esquinero Superior Trasera G7",
    "descripcion": "Esquinero para carrocería G7. Repuesto disponible por unidad. Referencia ESQ-001.",
    "categoria": "Esquinero",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esq-002",
    "codigo": "ESQ-002",
    "nombre": "Esquinero New G7",
    "descripcion": "Esquinero para carrocería New G7. Repuesto disponible por unidad. Referencia ESQ-002.",
    "categoria": "Esquinero",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esq-003",
    "codigo": "ESQ-003",
    "nombre": "Esquinero G8 New",
    "descripcion": "Esquinero para carrocería G8. Repuesto disponible por unidad. Referencia ESQ-003.",
    "categoria": "Esquinero",
    "carroceria": "G8",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-007",
    "codigo": "LUZ-007",
    "nombre": "Luz de Frente Pequeña G7",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-007.",
    "categoria": "Luz",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-008",
    "codigo": "LUZ-008",
    "nombre": "Luz de Frente Pequeña New G7",
    "descripcion": "Luz para carrocería New G7. Repuesto disponible por unidad. Referencia LUZ-008.",
    "categoria": "Luz",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-009",
    "codigo": "LUZ-009",
    "nombre": "Luz Frontal G8 Genérica",
    "descripcion": "Luz para carrocería G8. Repuesto disponible por unidad. Referencia LUZ-009.",
    "categoria": "Luz",
    "carroceria": "G8",
    "attrs": [
      "Genérico"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-010",
    "codigo": "LUZ-010",
    "nombre": "Luz Frontal G8 Genérica Central",
    "descripcion": "Luz para carrocería G8. Repuesto disponible por unidad. Referencia LUZ-010.",
    "categoria": "Luz",
    "carroceria": "G8",
    "attrs": [
      "Genérico"
    ],
    "marcopolo": true
  },
  {
    "id": "esq-004",
    "codigo": "ESQ-004",
    "nombre": "Esquinero Sup Trasero Audace",
    "descripcion": "Esquinero para carrocería Audace. Repuesto disponible por unidad. Referencia ESQ-004.",
    "categoria": "Esquinero",
    "carroceria": "Audace",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "luz-011",
    "codigo": "LUZ-011",
    "nombre": "Luz de Techo Trasera Pequeña Roja Audace",
    "descripcion": "Luz para carrocería Audace. Repuesto disponible por unidad. Referencia LUZ-011.",
    "categoria": "Luz",
    "carroceria": "Audace",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "luz-012",
    "codigo": "LUZ-012",
    "nombre": "Luz Lateral LED 24V",
    "descripcion": "Luz para carrocería de bus. Repuesto disponible por unidad. Referencia LUZ-012.",
    "categoria": "Luz",
    "carroceria": "",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "luz-013",
    "codigo": "LUZ-013",
    "nombre": "Luz Lateral Bombillo Andare y Paradiso",
    "descripcion": "Luz para carrocería Paradiso. Repuesto disponible por unidad. Referencia LUZ-013.",
    "categoria": "Luz",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-019",
    "codigo": "FAR-019",
    "nombre": "Farol con Luz Posición Senior Urbana",
    "descripcion": "Farol para carrocería Senior. Repuesto disponible por unidad. Referencia FAR-019.",
    "categoria": "Farol",
    "carroceria": "Senior",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "far-020",
    "codigo": "FAR-020",
    "nombre": "Farol sin Luz Posición Senior Urbana",
    "descripcion": "Farol para carrocería Senior. Repuesto disponible por unidad. Referencia FAR-020.",
    "categoria": "Farol",
    "carroceria": "Senior",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-014",
    "codigo": "LUZ-014",
    "nombre": "Luz Amarilla 155 mm LED 24V",
    "descripcion": "Luz para carrocería de bus. Repuesto disponible por unidad. Referencia LUZ-014.",
    "categoria": "Luz",
    "carroceria": "",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "luz-015",
    "codigo": "LUZ-015",
    "nombre": "Luz Roja 155 mm LED 24V",
    "descripcion": "Luz para carrocería de bus. Repuesto disponible por unidad. Referencia LUZ-015.",
    "categoria": "Luz",
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
    "nombre": "Luz Blanca 155 mm LED 24V",
    "descripcion": "Luz para carrocería de bus. Repuesto disponible por unidad. Referencia LUZ-016.",
    "categoria": "Luz",
    "carroceria": "",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "luz-017",
    "codigo": "LUZ-017",
    "nombre": "Luz Roja 125 mm 24V Senior",
    "descripcion": "Luz para carrocería Senior. Repuesto disponible por unidad. Referencia LUZ-017.",
    "categoria": "Luz",
    "carroceria": "Senior",
    "attrs": [
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "dir-002",
    "codigo": "DIR-002",
    "nombre": "Direccional LED 95 mm Senior 24V",
    "descripcion": "Direccional para carrocería Senior. Repuesto disponible por unidad. Referencia DIR-002.",
    "categoria": "Direccional",
    "carroceria": "Senior",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-018",
    "codigo": "LUZ-018",
    "nombre": "Luz Blanca 95 mm Senior 24V",
    "descripcion": "Luz para carrocería Senior. Repuesto disponible por unidad. Referencia LUZ-018.",
    "categoria": "Luz",
    "carroceria": "Senior",
    "attrs": [
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "exp-003",
    "codigo": "EXP-003",
    "nombre": "Exploradora G7",
    "descripcion": "Exploradora para carrocería G7. Repuesto disponible por unidad. Referencia EXP-003.",
    "categoria": "Exploradora",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-019",
    "codigo": "LUZ-019",
    "nombre": "Luz Día Bomper G7",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-019.",
    "categoria": "Luz",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "dir-003",
    "codigo": "DIR-003",
    "nombre": "Direccional LED Alimentador",
    "descripcion": "Direccional para carrocería de bus. Repuesto disponible por unidad. Referencia DIR-003.",
    "categoria": "Direccional",
    "carroceria": "",
    "attrs": [
      "LED"
    ],
    "marcopolo": false
  },
  {
    "id": "stp-021",
    "codigo": "STP-021",
    "nombre": "Tercer Stop 24 V Andare y Paradiso",
    "descripcion": "Stop para carrocería Paradiso. Repuesto disponible por unidad. Referencia STP-021.",
    "categoria": "Stop",
    "carroceria": "Paradiso",
    "attrs": [
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "stp-022",
    "codigo": "STP-022",
    "nombre": "Tercer Stop G7 Pequeño",
    "descripcion": "Stop para carrocería G7. Repuesto disponible por unidad. Referencia STP-022.",
    "categoria": "Stop",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-023",
    "codigo": "STP-023",
    "nombre": "Tercer Stop G8 LED 24V",
    "descripcion": "Stop para carrocería G8. Repuesto disponible por unidad. Referencia STP-023.",
    "categoria": "Stop",
    "carroceria": "G8",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": true
  },
  {
    "id": "luz-020",
    "codigo": "LUZ-020",
    "nombre": "Luz Techo Frente New G7 Grande",
    "descripcion": "Luz para carrocería New G7. Repuesto disponible por unidad. Referencia LUZ-020.",
    "categoria": "Luz",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-021",
    "codigo": "LUZ-021",
    "nombre": "Luz Techo Frente Grande Paradiso G7",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-021.",
    "categoria": "Luz",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-024",
    "codigo": "STP-024",
    "nombre": "Stop Superior G7 Grande",
    "descripcion": "Stop para carrocería G7. Repuesto disponible por unidad. Referencia STP-024.",
    "categoria": "Stop",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-025",
    "codigo": "STP-025",
    "nombre": "Stop Superior New G7 Grande",
    "descripcion": "Stop para carrocería New G7. Repuesto disponible por unidad. Referencia STP-025.",
    "categoria": "Stop",
    "carroceria": "New G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-026",
    "codigo": "STP-026",
    "nombre": "Stop Superior Central G8",
    "descripcion": "Stop para carrocería G8. Repuesto disponible por unidad. Referencia STP-026.",
    "categoria": "Stop",
    "carroceria": "G8",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-022",
    "codigo": "LUZ-022",
    "nombre": "Luz Escalera G7 Blanca",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-022.",
    "categoria": "Luz",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-023",
    "codigo": "LUZ-023",
    "nombre": "Luz Espejos G7 Amarilla",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-023.",
    "categoria": "Luz",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esp-001",
    "codigo": "ESP-001",
    "nombre": "Espejo Manual G7 Fondo Gris",
    "descripcion": "Espejo para carrocería G7. Repuesto disponible por unidad. Referencia ESP-001.",
    "categoria": "Espejo",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "esp-002",
    "codigo": "ESP-002",
    "nombre": "Espejo Eléctrico New G7 con Calefacción",
    "descripcion": "Espejo para carrocería New G7. Repuesto disponible por unidad. Referencia ESP-002.",
    "categoria": "Espejo",
    "carroceria": "New G7",
    "attrs": [
      "Calefacción",
      "Eléctrico"
    ],
    "marcopolo": true
  },
  {
    "id": "esp-003",
    "codigo": "ESP-003",
    "nombre": "Espejo con Calefacción Genérico G8 Fondo Gris",
    "descripcion": "Espejo para carrocería G8. Repuesto disponible por unidad. Referencia ESP-003.",
    "categoria": "Espejo",
    "carroceria": "G8",
    "attrs": [
      "Calefacción",
      "Genérico"
    ],
    "marcopolo": true
  },
  {
    "id": "esp-004",
    "codigo": "ESP-004",
    "nombre": "Espejo Manual Paradiso G6",
    "descripcion": "Espejo para carrocería G6. Repuesto disponible por unidad. Referencia ESP-004.",
    "categoria": "Espejo",
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
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-024",
    "codigo": "LUZ-024",
    "nombre": "Luz Techo Blanca Andare y Paradiso",
    "descripcion": "Luz para carrocería Paradiso. Repuesto disponible por unidad. Referencia LUZ-024.",
    "categoria": "Luz",
    "carroceria": "Paradiso",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-025",
    "codigo": "LUZ-025",
    "nombre": "Luz Aire Palomera Universal 24V",
    "descripcion": "Luz para carrocería de bus. Repuesto disponible por unidad. Referencia LUZ-025.",
    "categoria": "Luz",
    "carroceria": "",
    "attrs": [
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "luz-026",
    "codigo": "LUZ-026",
    "nombre": "Luz Aire Palomera Gen G7 con Parlante",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-026.",
    "categoria": "Luz",
    "carroceria": "G7",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "stp-027",
    "codigo": "STP-027",
    "nombre": "Stop AGA Centro Blanco Aro LED Rojo 24V",
    "descripcion": "Stop para carrocería de bus. Repuesto disponible por unidad. Referencia STP-027.",
    "categoria": "Stop",
    "carroceria": "",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "stp-028",
    "codigo": "STP-028",
    "nombre": "Stop AGA Centro Rojo Aro LED Rojo 24V",
    "descripcion": "Stop para carrocería de bus. Repuesto disponible por unidad. Referencia STP-028.",
    "categoria": "Stop",
    "carroceria": "",
    "attrs": [
      "LED",
      "24V"
    ],
    "marcopolo": false
  },
  {
    "id": "far-021",
    "codigo": "FAR-021",
    "nombre": "Farol Tipo Temple URB con Luz Posición",
    "descripcion": "Farol para carrocería de bus. Repuesto disponible por unidad. Referencia FAR-021.",
    "categoria": "Farol",
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
    "carroceria": "",
    "attrs": [],
    "marcopolo": false
  },
  {
    "id": "luz-027",
    "codigo": "LUZ-027",
    "nombre": "Luz Reversa BRT Torino",
    "descripcion": "Luz para carrocería Torino (BRT). Repuesto disponible por unidad. Referencia LUZ-027.",
    "categoria": "Luz",
    "carroceria": "Torino (BRT)",
    "attrs": [],
    "marcopolo": true
  },
  {
    "id": "luz-028",
    "codigo": "LUZ-028",
    "nombre": "Luz Placa LED G7",
    "descripcion": "Luz para carrocería G7. Repuesto disponible por unidad. Referencia LUZ-028.",
    "categoria": "Luz",
    "carroceria": "G7",
    "attrs": [
      "LED"
    ],
    "marcopolo": true
  },
  {
    "id": "ref-001",
    "codigo": "REF-001",
    "nombre": "Reflectivo BRT Torino",
    "descripcion": "Reflectivo para carrocería Torino (BRT). Repuesto disponible por unidad. Referencia REF-001.",
    "categoria": "Reflectivo",
    "carroceria": "Torino (BRT)",
    "attrs": [],
    "marcopolo": true
  }
];

// Busca un producto por su id (= código en minúscula). undefined si no existe.
export function getProducto(id: string): Product | undefined {
  return productos.find((p) => p.id === id);
}
