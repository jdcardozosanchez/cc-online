# Cabinas y Conjuntos — Design System

> Identidad de marca y design system para **Cabinas y Conjuntos SAS**, importador y comercializador colombiano de **repuestos para buses y carrocerías de transporte de pasajeros**. Sitio catálogo-focused, **mobile-first**, hospedado en Squarespace. Idioma: **Español (Colombia)**.

This is a **from-scratch brand + design system creation** (no prior codebase or Figma). It was generated from a written brand brief and the company's existing (dated) logo, both stored in `uploads/`.

---

## 1. Qué es la empresa

**Cabinas y Conjuntos SAS** (NIT 900.511.016-5, Bogotá, fundada 2012) importa directo y comercializa repuestos para carrocerías de bus: **iluminación** (faroles/farolas, stops, luces direccionales, exploradoras), **espejos retrovisores**, **chapas/cerraduras/manijas**, **biceles/molduras/esquineros**, **conectores** y **pistones**. Negocio familiar, sano, creciendo ~80% interanual.

**Posicionamiento (en orden de prioridad):**
1. **Distribuidor autorizado y homologado, no genérico.** En transporte de pasajeros una pieza no homologada compromete permisos, seguros y seguridad. La marca es **distribuidor autorizado** de origen verificable — no vende "repuestos oficiales" genéricos; ese respaldo pesa de verdad.
2. **Importador directo = precio + disponibilidad.** Compra en origen y nacionaliza.
3. **Conocimiento técnico.** Un par técnico del cliente, no un vendedor genérico.

**Diferenciador (una línea destacada, no todo el portafolio):** Distribuidor Autorizado **Marcopolo Superpolo** (Paradiso 1200/G7/G8, Torino, Viaggio, Senior, Andare, Ideale). Merece sección y sello propios sin canibalizar el resto del catálogo.

**El hallazgo nº1:** ~80% de las referencias son **iluminación**. El sistema visual se apoya en la idea de **luz / encendido / LED / brillo controlado** — sin caer en neón-gamer ni en lo infantil. De ahí el concepto **"LUZ OFICIAL"**.

### Audiencia (no es B2C de carro particular)
- **Jefe de mantenimiento / compras** de empresas operadoras (intermunicipal, urbano, escolar, especial) — el comprador real.
- **Talleres** de latonería, electricidad automotriz, reparación de carrocerías.
- **Conductores propietarios** afiliados.

Contexto de uso real: **celular, en taller o bodega, manos sucias, conexión variable.** Un bus parado pierde dinero por hora → la acción dominante es **"Cotizar por WhatsApp"**, no "comprar online".

### Convención de nomenclatura del catálogo (respetar en UI y filtros)
`TIPO + MODELO DE CARROCERÍA + LADO + variante`
Ej.: `FAROL G8 FULL LED DERECHA 24V` · `ESPEJO ELÉCTRICO NEW G7 CON CALEFACCIÓN DER`.
- **Lado DER / IZQ** es eje de filtrado obligatorio (muchas piezas vienen en par).
- Metadatos de ficha: `24V`, `LED`, `FULL LED`, `con calefacción`, `genérico`, `homologado`, U/M.
- Carrocerías: Paradiso, G7, New G7, G8, Andare, Torino (BRT), Senior, Audace, Atlantis, Orion, Maxi Ibiza, Fasccino, Majestic, Modasa, Sigma, Yutong, Invicar, Busscar, Eurocity.

### Fuentes recibidas
- `uploads/brief-marca-cabinas-y-conjuntos.md` — brief completo de marca + design system.
- `uploads/Logo v2.jpeg` → conservado en `assets/logo-heritage.jpeg` — logo existente (dos crecientes/"C" en mosaico naranja con script 3D). Es **patrimonio de marca**, no el sistema final; el nuevo isotipo lo refina (creciente = faro/haz de luz). No había `LOGO.png` pese a mencionarse.
- **Sin codebase, sin Figma, sin Squarespace en vivo** — todo aquí es propuesta original.

---

## 2. CONTENT FUNDAMENTALS — cómo se escribe

**Idioma:** Español de Colombia, registro **usted** (cliente profesional del sector), nunca "tú". Trato de **par técnico**: respetuoso, directo, sin paternalismo.

**Tono:** claro, breve, técnico-confiable. Habla en carrocería, modelo, lado y referencia. Cero relleno, cero corporativismo frío, cero lenguaje juvenil.

**Casing:**
- Títulos de sección y botones de UI: **MAYÚSCULAS con tracking ancho** cuando son etiquetas/señalética cortas (`COTIZAR`, `VER FICHA`, `DER / IZQ`). Frases largas en Sentence case.
- Nombres técnicos de producto: **MAYÚSCULAS** siguiendo el catálogo (`FAROL G8 FULL LED DER 24V`).
- Cuerpo de texto: Sentence case normal.

**Voz — ejemplos reales:**
- CTA dominante: **"Cotizar por WhatsApp"** / **"Cotiza ya"** (la única conversión que importa).
- Disponibilidad: **"Consultar disponibilidad"** en vez de "Agotado"; **"Disponible · Importación directa"**.
- Sellos: **"Autorizado · Homologado"**, **"Importación directa"**, **"Distribuidor Autorizado Marcopolo Superpolo"**. (La marca es **distribuidor autorizado**, no vendedor de "repuestos oficiales" — evitar esa frase.)
- Urgencia sin drama: *"¿Bus parado? Cotiza en minutos por WhatsApp."*
- Ficha: *"Pieza homologada para carrocería G8. Lado derecho. 24V Full LED."*
- B2B: *"¿Maneja una flota? Registre su empresa y reciba precios mayoristas."*

**Números y unidades:** numerales tabulares siempre. Precios en pesos colombianos con separador de miles y `$` (`$1.800.000`). Voltaje `24V`, lado `DER`/`IZQ`, U/M en mono.

**Emoji:** **no** en producto/UI ni en copy de marca. Única excepción tolerada: el ícono/realce de **WhatsApp** como canal (logo de marca, no emoji decorativo). Nada de ✨🚀🔥.

**Vibe:** taller serio + autoparte homologada de distribuidor autorizado. "Sabemos exactamente qué pieza necesita su bus, y la tenemos." Confianza técnica, no marketing.

---

## 3. VISUAL FOUNDATIONS

**Gran idea — "LUZ OFICIAL".** Luz de señalización (ámbar de faro/direccional) encendida sobre una base **industrial grafito**. El producto (iluminación) ES el héroe; el sistema es el fondo oscuro y sobrio que lo hace brillar.

**Color.** Base neutra **grafito** (`--graphite-900 #15181C` … escala completa hasta `--gray-50`). Acento primario **ámbar señal** (`--amber-500 #FF9E00`) — hereda el naranja del logo pero más limpio y de alta visibilidad; es "la luz". Secundario **rojo stop** (`--stop-500 #E11D17`) para acentos de señalética trasera, usado con mesura. Semánticos: verde disponible/homologado, azul info, amarillo atención, rojo error (= stop). Verde **WhatsApp** propio (`#25D366`) por ser el canal central. Contraste objetivo **AA/AAA** y legible a plena luz del sol: texto sobre ámbar siempre **negro grafito**, nunca blanco.

**Tipografía.** Una sola sans robusta: **Archivo** (grotesca geométrica, excelente en números y referencias técnicas), pesos 400–900. Títulos en 800/900 con tracking apretado; etiquetas/señalética en mayúsculas con tracking ancho. Familia mono **Spline Sans Mono** para todo dato técnico (DER/IZQ, 24V, códigos, U/M) y precios → refuerza el aire de "ficha técnica". Densidad de información alta, sin ruido. *(Fuentes vía Google Fonts CDN — ver §5.)*

**Espaciado y layout.** Base 4px. **Mobile-first de verdad:** targets táctiles ≥ **44px**, jerarquía fortísima, alto contraste, peso liviano. Grid de catálogo de 2 columnas en móvil, 3–4 en escritorio. Header compacto fijo (60px) + **barra/botón flotante de WhatsApp siempre accesible**. Contenedor máx 1200px.

**Fondos.** Dominan **superficies planas**: gris claro (`--gray-50`) en modo catálogo y **grafito** en hero, footer y secciones de realce. **Foto de producto sobre fondo limpio** (blanco/gris neutro) con sombra suave. **Sin gradientes morados ni "slop" de IA.** Único gradiente permitido: un **halo/glow ámbar muy sutil** detrás de producto-héroe o CTA estrella (motivo de luz), nunca como relleno de fondo. Textura industrial opcional **muy** sutil (rejilla/diamante metálico) sólo en bloques grafito, baja opacidad.

**Bordes y cards.** Esquinas **contenidas** (cards `--radius-md 10px`, sheets 14px) — robusto, no blandito. Cards de producto: fondo blanco, borde `1px var(--border)` o sombra `--shadow-sm`, **sin** el cliché de borde-izquierdo-de-color. Sobre grafito, cards usan `--graphite-700` con borde `--graphite-600`. Hairlines `--gray-100`.

**Sombras.** Sistema neutro frío en 5 niveles (`xs`→`lg`). **Sin** sombras de colores salvo el **glow ámbar** (`--glow-amber`) reservado para destacar el producto de iluminación o el CTA principal — es el guiño literal a "encendido". Badges sobre imagen usan capa sólida o sombra suave, no gradiente de protección pesado.

**Animación.** Sobria y funcional. Easing `--ease-out`, duraciones 120–320ms. **Fades y desplazamientos cortos**, sin bounces ni loops decorativos. Estado de "encendido" de luz: una transición de glow ámbar al hover de producto-héroe (sutil). Respetar `prefers-reduced-motion`.

**Estados.**
- **Hover:** oscurecer ámbar a `--amber-600`; superficies suben a la sombra siguiente; links subrayado/ámbar.
- **Press:** color más oscuro + `transform: scale(0.98)` muy leve (feedback táctil con guantes/manos sucias). Nada exagerado.
- **Focus:** anillo `--glow-amber` o `2px` ámbar — visible bajo sol.
- **Disabled:** `--gray-300` sobre `--gray-100`, sin sombra.

**Transparencia / blur.** Mínimos. Header puede usar blur sutil al hacer scroll sobre contenido. Sheets/modales con scrim grafito 60%. Evitar glassmorphism gratuito.

**Imagen.** Producto: fondo limpio, luz neutra, leve sombra de contacto, recorte generoso. Contexto (bus/taller): tono **neutro a ligeramente frío**, realista, sin filtros estilizados; el ámbar lo aporta la marca, no la foto. Nada de stock aspiracional de lifestyle.

---

## 4. ICONOGRAPHY

**Sistema base de UI:** **Lucide** (CDN) — íconos de trazo limpio, técnico, peso ~2px, que casan con el aire industrial-señalético. Se usa para navegación, acciones, filtros, estados. *(Sustitución señalada: no existía un set propio; Lucide es el match más cercano en estilo de trazo. Si la empresa adopta otro set, reemplazar centralizadamente.)*

**Íconos por línea de producto** (faroles, stops, luces/direccionales, espejos, chapas/cerraduras, biceles/molduras, exploradoras, conectores, pistones): idealmente un set **custom** a futuro. Hoy se mapean a los Lucide más cercanos (ej. `lightbulb`/`lamp` para faroles, `octagon` para stop, `car-front`/`bus` para carrocería, `lock`/`key` para chapas, `plug`/`cable` para conectores). Mantener trazo y caja consistentes. **Flag:** estas son sustituciones — un set pictográfico propio por línea elevaría mucho la marca.

**Emoji:** no se usa como ícono. **Unicode** sólo para flechas/separadores neutros (`·`, `→`) si hace falta. El **logo de WhatsApp** (marca registrada de la plataforma) sí aparece como ícono del canal — es funcional, no decorativo.

**Sellos/badges** ("Autorizado · Homologado", "Importación directa", "Marcopolo Superpolo") son **componentes tipográficos**, no íconos sueltos: pastilla con borde/relleno + texto en mono mayúsculas. Ver UI kit.

**Logo / isotipo.** Heritage en `assets/logo-heritage.jpeg`. Propuesta refinada: isotipo **creciente** (nace del "C" del logo original, leído como **faro/haz de luz** o "conjunto/módulo") + wordmark en Archivo. Funciona muy pequeño y en alto contraste (favicon, avatar WhatsApp Business). Construido con tipo + geometría simple, no ilustración.

---

## 5. ÍNDICE / MANIFIESTO DEL REPOSITORIO

**Raíz**
- `README.md` — este documento (contexto, content, visual, iconografía, índice).
- `colors_and_type.css` — **tokens fuente**: variables CSS de color (raw + semántico), tipografía, escala, espaciado, radios, sombras, layout, easing. Importar esto siempre.
- `SKILL.md` — manifiesto Agent-Skill para usar el sistema en Claude Code.

**Carpetas**
- `assets/` — `logo-heritage.jpeg` (logo original). Logos/marcas adicionales según se generen.
- `preview/` — tarjetas HTML del Design System tab (color, tipo, espaciado, componentes, marca). Una sub-tarjeta por concepto.
- `ui_kits/catalogo/` — **UI kit del sitio catálogo** (único producto): `README.md`, `index.html` (prototipo click-thru móvil), y componentes JSX (header, búsqueda+filtros, tarjeta de producto, ficha, módulo de cotización, barra WhatsApp, sello Marcopolo, bloque B2B).
- `fonts/` — *(no usado)* las fuentes se sirven vía Google Fonts CDN. Ver §5 abajo.

**Fuentes / sustitución (flag):** Archivo y Spline Sans Mono se cargan desde **Google Fonts CDN** (no se incluyeron archivos `.ttf`). Es la elección de diseño para esta marca nueva, no un placeholder de algo perdido — pero si se requiere self-hosting (offline / Squarespace estricto), descargar los `.ttf`/`.woff2` a `fonts/` y cambiar el `@import` por `@font-face`. **Acción para el usuario:** confirmar si Squarespace permite Google Fonts o si necesitan archivos locales.

**Producto único:** el sistema cubre **un** producto — el sitio catálogo mobile-first. No hay app nativa ni segundo surface, así que hay un solo UI kit. No se entregaron plantillas de slides → no se crearon slides.
