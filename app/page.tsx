import Link from "next/link";
import { MessageCircle, ShieldCheck, Ship, ArrowRight } from "lucide-react";
import { enlaceWhatsAppGeneral } from "@/lib/config";

// Inicio: hero grafito (concepto "LUZ OFICIAL") + CTA dominante de WhatsApp.
export default function Home() {
  return (
    <div>
      {/* Hero sobre base grafito, con halo ámbar muy sutil */}
      <section
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
          <Link href="/productos" className="btn btn-primary">
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
      </section>

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
    </div>
  );
}
