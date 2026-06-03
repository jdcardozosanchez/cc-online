import { productos } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

// Catálogo: muestra todos los productos en una grilla de tarjetas.
export default function ProductosPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Nuestros productos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}
