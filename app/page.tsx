import Link from "next/link";

// Página de inicio: bienvenida + botón hacia el catálogo.
export default function Home() {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        C&amp;C <span className="text-amber-700">online</span>
      </h1>
      <p className="mt-4 text-lg text-stone-600 max-w-xl mx-auto">
        Autopartes e iluminación para buses y busetas: farols, stops, espejos,
        direccionales y más. Encuentra tu repuesto y cotízalo por WhatsApp.
      </p>
      <Link
        href="/productos"
        className="inline-block mt-8 rounded-full bg-amber-700 text-white px-8 py-3 font-medium hover:bg-amber-800 transition-colors"
      >
        Ver catálogo
      </Link>
    </section>
  );
}
