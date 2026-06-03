// Formatea un número como pesos colombianos.
// Ejemplo: 28000  ->  "$ 28.000"
export function formatearCOP(valor: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(valor);
}
