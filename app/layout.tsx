import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const metadata: Metadata = {
  title: "Cabinas y Conjuntos — Autopartes para buses",
  description:
    "Catálogo de iluminación y repuestos para buses y carrocerías. Distribuidor autorizado. Cotice por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <main
            className="container flex-1 w-full"
            style={{ paddingTop: "calc(var(--header-h) + 24px)", paddingBottom: 40 }}
          >
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
        </CartProvider>
      </body>
    </html>
  );
}
