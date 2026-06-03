"use client";

// ─────────────────────────────────────────────────────────────────────────────
// El carrito vive SOLO en el navegador (localStorage) para que no se pierda al
// recargar. NO maneja precios: es una lista de productos + cantidades que al final
// se envía como pedido por WhatsApp.
// ─────────────────────────────────────────────────────────────────────────────

import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "@/lib/products";

type CartItem = { producto: Product; cantidad: number };

type CartContextType = {
  items: CartItem[];
  agregar: (producto: Product) => void;
  quitar: (id: string) => void;
  cambiarCantidad: (id: string, cantidad: number) => void;
  vaciar: () => void;
  totalItems: number; // suma de cantidades (para el contador de la barra)
};

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "cc-carrito";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cargado, setCargado] = useState(false);

  // Al abrir la página: leer lo que estaba guardado en el navegador.
  useEffect(() => {
    try {
      const guardado = localStorage.getItem(STORAGE_KEY);
      if (guardado) setItems(JSON.parse(guardado));
    } catch {
      // Datos corruptos → empezamos vacíos.
    }
    setCargado(true);
  }, []);

  // Cada cambio del carrito: volver a guardarlo en el navegador.
  useEffect(() => {
    if (cargado) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, cargado]);

  function agregar(producto: Product) {
    setItems((prev) => {
      const existente = prev.find((i) => i.producto.id === producto.id);
      if (existente) {
        return prev.map((i) =>
          i.producto.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i,
        );
      }
      return [...prev, { producto, cantidad: 1 }];
    });
  }

  function quitar(id: string) {
    setItems((prev) => prev.filter((i) => i.producto.id !== id));
  }

  function cambiarCantidad(id: string, cantidad: number) {
    // Nunca permitimos cantidades menores a 1 ni decimales.
    const segura = Math.max(1, Math.floor(cantidad || 1));
    setItems((prev) =>
      prev.map((i) => (i.producto.id === id ? { ...i, cantidad: segura } : i)),
    );
  }

  function vaciar() {
    setItems([]);
  }

  const totalItems = items.reduce((s, i) => s + i.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ items, agregar, quitar, cambiarCantidad, vaciar, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
