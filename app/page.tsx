import Link from "next/link";
import {
  MessageCircle,
  ShieldCheck,
  Ship,
  ArrowRight,
  Search,
  Wrench,
  MapPin,
} from "lucide-react";
import { enlaceWhatsAppGeneral } from "@/lib/config";
import { listaCategorias } from "@/lib/categorias";
import { CategoryCard } from "@/components/CategoryCard";

// Home de una sola tira (scroll): Inicio (hero) → Producto (clusters) → Nosotros.
// El menú del header salta a cada sección con scroll suave.
export default function Home() {
  const categorias = listaCategorias();

  return (
    <div className="flex flex-col gap-20">
      {/* ───────────────── INICIO ───────────────── */}
      <section id="inicio" className="scroll-section">
        {/* Hero sobre base grafito, con halo ámbar muy sutil */}
        <div
          className="rounded-2xl px-6 py-14 sm:px-12 sm:py-20 text-center"
          style={{
            background:
              "radial-gradient(420px 220px at 50% 25%, rgba(255,158,0,0.14), transparent 70%), var(--graphite-900)",
          }}
        >
          <div className="kicker" style={{ color: "var(--amber-400)" }}>
            Luz oficial · Autopartes para buses
          </div>
          <h1
            className="text-3xl sm:text-5xl font-black tracking-tight mt-3"
            style={{ color: "#fff", lineHeight: 1.05 }}
          >
            La pieza correcta para su carrocería,
            <br className="hidden sm:block" /> y la tenemos.
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--gray-300)" }}>
            Faroles, stops, espejos, direccionales y más para buses y busetas.
            Importación directa y distribuidor autorizado. ¿Bus parado? Cotice en
            minutos por WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link href="/#producto" className="btn btn-primary">
              Ver catálogo <ArrowRight size={18} />
            </Link>
            <a
              href={enlaceWhatsAppGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
            >
              <MessageCircle size={18} /> Cotizar por WhatsApp
            </a>
          </div>
        </div>

        {/* Franja de confianza */}
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <div
            className="flex items-start gap-3 p-5 rounded-xl"
            style={{ background: "#fff", border: "1px solid var(--border)" }}
          >
            <ShieldCheck size={22} color="var(--amber-600)" />
            <div>
              <p className="font-bold" style={{ color: "var(--fg1)" }}>
                Distribuidor autorizado y homologado
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--fg3)" }}>
                Origen verificable. En transporte de pasajeros, la homologación
                protege permisos, seguros y seguridad.
              </p>
            </div>
          </div>
          <div
            className="flex items-start gap-3 p-5 rounded-xl"
            style={{ background: "#fff", border: "1px solid var(--border)" }}
          >
            <Ship size={22} color="var(--amber-600)" />
            <div>
              <p className="font-bold" style={{ color: "var(--fg1)" }}>
                Importación directa
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--fg3)" }}>
                Compramos en origen y nacionalizamos: mejor precio y disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── PRODUCTO ───────────────── */}
      <section id="producto" className="scroll-section">
        <div className="kicker">Catálogo · {categorias.length} categorías</div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1" style={{ color: "var(--fg1)" }}>
          Nuestros productos por categoría
        </h2>
        <p className="mt-2 max-w-2xl" style={{ color: "var(--fg2)" }}>
          Elija una categoría para ver sus referencias. Filtre por línea Marcopolo
          dentro de cada una.
        </p>

        <div className="cat-grid mt-6">
          {categorias.map((c) => (
            <CategoryCard key={c.slug} categoria={c} />
          ))}
        </div>

        <div className="mt-6">
          <Link href="/productos" className="btn btn-outline">
            <Search size={18} /> Buscar en todo el catálogo
          </Link>
        </div>
      </section>

      {/* ───────────────── NOSOTROS ───────────────── */}
      <section id="nosotros" className="scroll-section">
        <div className="kicker">Nosotros</div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1" style={{ color: "var(--fg1)" }}>
          Quiénes somos
        </h2>
        <p className="mt-3 max-w-2xl" style={{ color: "var(--fg2)" }}>
          <strong>Cabinas y Conjuntos SAS</strong> es un importador directo y
          comercializador colombiano de repuestos para buses y carrocerías de
          transporte de pasajeros, con foco en iluminación, espejos, chapas, biceles
          y accesorios. Negocio familiar fundado en 2012, somos una fuente oficial,
          homologada y de origen verificable —no genérica.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <div className="p-5 rounded-xl" style={{ background: "#fff", border: "1px solid var(--border)" }}>
            <ShieldCheck size={22} color="var(--amber-600)" />
            <p className="font-bold mt-2" style={{ color: "var(--fg1)" }}>Oficial y homologado</p>
            <p className="text-sm mt-1" style={{ color: "var(--fg3)" }}>
              Piezas con origen verificable, no copias genéricas.
            </p>
          </div>
          <div className="p-5 rounded-xl" style={{ background: "#fff", border: "1px solid var(--border)" }}>
            <Ship size={22} color="var(--amber-600)" />
            <p className="font-bold mt-2" style={{ color: "var(--fg1)" }}>Importador directo</p>
            <p className="text-sm mt-1" style={{ color: "var(--fg3)" }}>
              Compramos en origen: mejor precio y disponibilidad.
            </p>
          </div>
          <div className="p-5 rounded-xl" style={{ background: "#fff", border: "1px solid var(--border)" }}>
            <Wrench size={22} color="var(--amber-600)" />
            <p className="font-bold mt-2" style={{ color: "var(--fg1)" }}>Par técnico</p>
            <p className="text-sm mt-1" style={{ color: "var(--fg3)" }}>
              Atendemos por carrocería, modelo y referencia exacta.
            </p>
          </div>
        </div>

        {/* Sello Marcopolo + datos del negocio */}
        <div className="marco-seal mt-6">
          <span className="dot" />
          <span>
            <span className="t">Distribuidor Oficial Marcopolo Superpolo</span>
            <br />
            <span className="s">Paradiso · G7 · G8 · Torino · Senior · Andare · Viaggio</span>
          </span>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 text-sm" style={{ color: "var(--fg3)" }}>
          <MapPin size={16} /> Av. Carrera 80 # 13 A 64, Bogotá, Colombia · NIT 900.511.016-5
        </p>

        <div className="mt-6">
          <a
            href={enlaceWhatsAppGeneral()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa"
          >
            <MessageCircle size={18} /> Cotizar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
