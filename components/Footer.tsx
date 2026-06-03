// Pie de página simple. El año se calcula solo.
export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-stone-500">
        © {new Date().getFullYear()} C&amp;C online — Negocio familiar. Hecho con cariño.
      </div>
    </footer>
  );
}
