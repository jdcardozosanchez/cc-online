# Brief de Identidad de Marca y Design System — Cabinas y Conjuntos SAS

> **Para:** Claude Design
> **Objetivo:** Generar la **identidad de marca** (concepto, logo, color, tipografía, iconografía, tratamiento de imagen) y el **design system** (tokens + componentes) para un sitio web **catálogo-focused, mobile-first**, hospedado en Squarespace.
> **Idioma de la marca y de todos los textos:** Español (Colombia).

---

## 1. Qué es esta empresa (en una frase)

Importador directo y comercializador colombiano de **repuestos para buses y carrocerías de transporte de pasajeros** —con foco en iluminación, espejos, chapas, biceles y accesorios— que compite por ser la fuente **oficial, homologada y de origen verificable**, no genérica.

**Datos de marca:**
- **Razón social:** Cabinas y Conjuntos SAS · **NIT** 900.511.016-5
- **Sede:** Av. Carrera 80 # 13 A 64, Bogotá, Colombia
- **Fundada:** 23 de marzo de 2012 · **Rep. legal:** Inés del Carmen Urrego Hidalgo
- **Naturaleza:** negocio familiar, sano y en crecimiento (~80% de crecimiento de ingresos interanual). No es un rescate; es **amplificar algo que ya funciona offline**.

---

## 2. Posicionamiento y promesa

La marca debe transmitir tres ideas, en este orden de prioridad:

1. **Oficial y homologado, no genérico.** En transporte de pasajeros, una pieza no homologada puede comprometer un permiso de operación, un seguro o la seguridad de los pasajeros. El sello "oficial" tiene peso real, no de marketing.
2. **Importador directo = precio + disponibilidad.** Compra en origen y nacionaliza; compite en precio frente a intermediarios.
3. **Conocimiento técnico.** Quien atiende sabe de carrocerías, modelos y referencias exactas. La marca es un par técnico del cliente, no un vendedor genérico.

**Diferenciador puntual (no es toda la operación):** Cabinas y Conjuntos es **Distribuidor Oficial de repuestos para carrocerías Marcopolo Superpolo** (líder del mercado colombiano, ~70% de participación): Paradiso 1200, Paradiso G7, Paradiso G8, Torino, Viaggio, Senior, Andare e Ideale. Es **una línea destacada y diferenciadora dentro de un portafolio más amplio** — el diseño debe darle una sección/sello propio sin que canibalice el resto del catálogo.

---

## 3. A quién le habla (audiencia y contexto de uso)

**No es B2C de carro particular.** Es un actor del sector transporte:
- **Jefe de mantenimiento / compras** de empresas operadoras (intermunicipal, urbano, escolar, especial). Es el comprador real.
- **Talleres** de latonería, electricidad automotriz y reparación de carrocerías de bus.
- **Conductores propietarios** afiliados que mantienen su propia unidad.

**Implicaciones de diseño (críticas):**
- **Mobile-first no es estética, es la realidad:** se consulta desde el celular, en taller o bodega, con **manos sucias y conexión variable**. Targets de toque grandes, alto contraste, jerarquía clarísima, peso liviano.
- **Decisión técnica:** el cliente suele saber su carrocería y a veces la referencia exacta. El catálogo debe permitir **filtrar por modelo de carrocería + lado (DER/IZQ) + tipo de pieza** y mostrar fichas técnicas legibles.
- **Urgencia crítica:** un bus parado pierde dinero por hora. La acción dominante es **cotizar / contactar ya por WhatsApp**, no "comprar online".
- **Tickets altos y variados:** desde un conector de $20.000 hasta una farola G8 Full LED de $1.800.000.

---

## 4. La realidad del catálogo (datos reales — usar para diseñar)

Extraído de la lista de precios vigente (170 referencias, enero 2026). Esto debe **anclar** las decisiones de UI: cómo se ven las tarjetas, los filtros, las fichas y los badges.

**Líneas por volumen de referencias:**

| Línea | Refs | Rango de precio público (con IVA) |
|---|---|---|
| Stops y luces traseras | 52 | $5.000 – $1.500.000 |
| Faroles / farolas | 39 | $30.000 – $1.800.000 |
| Luces, direccionales y reflectivos | 39 | $15.000 – $175.000 |
| Aletas, esquineros y molduras (biceles) | 12 | $45.000 – $110.000 |
| Chapas, cerraduras, manijas y llaves | 11 | $12.000 – $220.000 |
| Espejos retrovisores | 8 | $800.000 – $1.500.000 |
| Exploradoras | 6 | $55.000 – $300.000 |
| Pistones | 2 | $35.000 – $45.000 |
| Conectores | 1+ | desde $20.000 |

**Hallazgo de diseño nº1 — la marca vive de la luz.** ~80% de las referencias son **iluminación** (faroles + stops + luces + exploradoras). El sistema visual debe apoyarse en la idea de **luz, visibilidad, encendido, LED, brillo controlado** — sin caer en lo infantil ni lo "neón gamer".

**Convención de nomenclatura del catálogo** (respetar en componentes y filtros):
`TIPO + MODELO DE CARROCERÍA + LADO + variante`
Ej.: *"FAROL G8 FULL LED DERECHA 24V"*, *"STOP MAXI IBIZA PEQUEÑO GENÉRICO IZQ"*, *"ESPEJO ELÉCTRICO NEW G7 CON CALEFACCIÓN DER"*.
- **Lado:** DER / IZQ es un eje de filtrado obligatorio (muchas piezas vienen en par).
- **Voltaje 24V** y atributos como *LED, FULL LED, con calefacción, genérico* son metadatos de ficha.

**Modelos / carrocerías presentes en el catálogo** (más allá de Marcopolo, confirma portafolio amplio):
Paradiso, G7, New G7, G8, Andare, Torino (BRT), Senior, Audace, Atlantis, Orion, Maxi Ibiza, Fasccino, Majestic, Modasa, Sigma (Inconcar), Yutong, Invicar, Busscar, Eurocity.

---

## 5. Personalidad de marca

| Es… | No es… |
|---|---|
| Técnica, precisa, confiable | Lujosa, aspiracional, "lifestyle" |
| Robusta, de trabajo pesado | Frágil, delicada, decorativa |
| Oficial / homologada | Genérica, copia, informal |
| Directa y rápida | Corporativa fría / burocrática |
| Sobria con acentos de "energía/luz" | Neón estridente o juvenil |

**Tono de voz:** claro, breve, de par técnico. Habla en términos de carrocería, modelo, lado y referencia. Acción dominante: *"Cotiza por WhatsApp"*.

---

## 6. Encargo para Claude Design (entregables)

### 6.1 Concepto y nombre de marca
- Trabajar con el nombre existente **Cabinas y Conjuntos** (y, si aporta, un descriptor: *"Repuestos oficiales para buses"*).
- Proponer 1–2 conceptos de **gran idea visual** alineados a "oficial + luz + carrocería de bus".

### 6.2 Logotipo / símbolo
- Versiones: principal, horizontal, isotipo compacto (favicon, app, avatar de WhatsApp Business y redes).
- Debe funcionar **muy pequeño y en alto contraste** (se verá en celular a la intemperie).
- Considerar un símbolo que evoque **luz/farola, carrocería de bus o "conjunto/módulo"** sin volverse literal ni caricaturesco.

### 6.3 Paleta de color
- Definir **color primario, secundarios, neutros, y estados** (éxito, alerta, error, info).
- Recomendación de partida (a validar/iterar): un **base oscuro/industrial** (grafito o azul profundo) que haga lucir el producto, con un **acento de "luz"** de alta visibilidad (ámbar/amarillo señalético o un rojo-stop controlado) que conecte con la categoría dominante (iluminación) y con la señalética del sector transporte.
- Requisito: **contraste AA/AAA** y legibilidad bajo luz solar directa.

### 6.4 Tipografía
- Una familia **sans robusta, geométrica/industrial** para títulos y UI; legibilidad alta en números y referencias técnicas (DER/IZQ, 24V, códigos).
- Definir escala tipográfica y pesos. Priorizar densidad de información sin ruido.

### 6.5 Iconografía y sistema visual
- Set de íconos por **línea de producto** (faroles, stops, luces, espejos, chapas/cerraduras, biceles/molduras, exploradoras, conectores, pistones) y por **carrocería**.
- Patrón/textura opcional de soporte (sutil, industrial). Evitar adornos.

### 6.6 Tratamiento de imagen / fotografía
- Estilo para **foto de producto sobre fondo limpio** (catálogo) y **foto de contexto** (bus, taller).
- Reglas de recorte, fondo, sombra y badges sobre la imagen.

### 6.7 Componentes de UI (catálogo-focused, mobile-first)
Diseñar y documentar como design system:
- **Tarjeta de producto:** imagen, nombre técnico (TIPO + MODELO + LADO), badges, precio/“cotizar”, botón rápido WhatsApp.
- **Ficha técnica de producto:** atributos (modelo de carrocería, lado, voltaje, LED/genérico, U/M), galería, CTA de cotización.
- **Sistema de filtros y búsqueda:** por **categoría / modelo de carrocería / lado (DER-IZQ) / atributos**. Pensado para dedo grande y conexión lenta.
- **Badges/sellos:** "Oficial · Homologado", "Importación directa", y un **sello especial Marcopolo Superpolo**.
- **Módulo de cotización estructurado** (carrito de cotización, no checkout de e-commerce).
- **Botón / barra flotante de WhatsApp Business** como canal central, siempre accesible.
- **Bloque B2B / Flotas:** llamado a registro de empresa, atención a jefes de compras/mantenimiento.
- Navegación, header/footer, estados de carga vacíos, mensajes de "consulta disponibilidad".

### 6.8 Design tokens
- Entregar tokens de **color, tipografía, espaciado, radios, sombras, breakpoints** listos para traducir a Squarespace (CSS custom properties / variables).

### 6.9 Accesibilidad y rendimiento
- Mobile-first real: targets ≥ 44px, contraste alto, jerarquía fuerte, pocas fuentes/pesos, imágenes optimizadas, todo legible con conexión variable.

---

## 7. Restricciones y contexto técnico
- **Plataforma:** Squarespace (la empresa ya tiene dominio propio allí). El sistema debe ser **implementable** en Squarespace (color/tipografía/secciones/CSS).
- **El sitio es la puerta de un sistema mayor:** cada cotización, registro de cliente y producto consultado debe poder alimentar después CRM/KPIs/inventario. Diseñar pensando en **captura de datos** (formularios de cotización y registro B2B claros).
- **Multicanal:** WhatsApp Business es el canal central; teléfono y visita presencial son reales. El diseño no asume e-commerce transaccional.

## 8. Qué evitar
- Estética "genérica de IA" o de plantilla corporativa sin carácter.
- Neón estridente / lenguaje juvenil-gamer pese a que la categoría sea iluminación.
- Lujo/aspiracional de carro particular: el cliente es técnico de flota, no entusiasta.
- Sobrecarga visual: el usuario tiene prisa, manos ocupadas y mala señal.
- Tratar a Marcopolo como si fuera toda la marca: es una **línea destacada**, no el todo.

## 9. Entregables esperados de Claude Design
1. Tablero de **identidad de marca** (concepto, logo en variantes, color, tipografía, iconografía, tratamiento de imagen, do/don't).
2. **Design system / UI kit** con los componentes de la sección 6.7 en estados móvil y escritorio.
3. **Tokens** exportables y guía de aplicación en Squarespace.
4. 1–2 **pantallas clave maquetadas**: home catálogo y ficha de producto (mobile), más el bloque/sección Marcopolo.
