import Link from "next/link";

// Página de inicio: una bienvenida simple y un botón hacia los productos.
export default function Home() {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        Bienvenido a C&amp;C <span className="text-amber-700">online</span>
      </h1>
      <p className="mt-4 text-lg text-stone-600 max-w-xl mx-auto">
        Productos del negocio familiar, hechos con cariño y enviados a tu casa.
      </p>
      <Link
        href="/productos"
        className="inline-block mt-8 rounded-full bg-amber-700 text-white px-8 py-3 font-medium hover:bg-amber-800 transition-colors"
      >
        Ver productos
      </Link>
    </section>
  );
}
