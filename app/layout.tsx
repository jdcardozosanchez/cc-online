import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "C&C online — Autopartes para buses",
  description:
    "Catálogo de autopartes e iluminación para buses y busetas. Cotiza por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        {/* CartProvider envuelve TODA la app para que cualquier página
            pueda leer y modificar el carrito. */}
        <CartProvider>
          <Header />
          <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
