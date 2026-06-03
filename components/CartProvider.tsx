"use client";

// ─────────────────────────────────────────────────────────────────────────────
// El carrito vive SOLO en el navegador del cliente (por ahora).
// Lo guardamos en "localStorage" para que no se pierda al recargar la página.
// No hay servidor ni dinero involucrado: esto es 100% reversible.
//
// Cuando lleguemos a Pedidos (Fase 4) y Pagos (Fase 5), el carrito tendrá que
// hablar con el servidor. Por eso lo aislamos aquí: el resto de la app pide
// el carrito con el hook useCart() y no le importa CÓMO está guardado.
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
  total: number;       // valor total en COP
  totalItems: number;  // suma de cantidades (para el contador de la barra)
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
      // Si los datos guardados están corruptos, simplemente empezamos vacíos.
    }
    setCargado(true);
  }, []);

  // Cada vez que cambia el carrito: volver a guardarlo en el navegador.
  useEffect(() => {
    if (cargado) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, cargado]);

  function agregar(producto: Product) {
    setItems((prev) => {
      const existente = prev.find((i) => i.producto.id === producto.id);
      if (existente) {
        // Ya estaba: sumamos una unidad.
        return prev.map((i) =>
          i.producto.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i,
        );
      }
      // Nuevo en el carrito: lo agregamos con cantidad 1.
      return [...prev, { producto, cantidad: 1 }];
    });
  }

  function quitar(id: string) {
    setItems((prev) => prev.filter((i) => i.producto.id !== id));
  }

  function cambiarCantidad(id: string, cantidad: number) {
    // Defensa: nunca permitimos cantidades menores a 1 ni decimales.
    // (Probar "romperlo" con números negativos es justamente lo que pide la guía.)
    const segura = Math.max(1, Math.floor(cantidad || 1));
    setItems((prev) =>
      prev.map((i) => (i.producto.id === id ? { ...i, cantidad: segura } : i)),
    );
  }

  function vaciar() {
    setItems([]);
  }

  const total = items.reduce((s, i) => s + i.producto.precio * i.cantidad, 0);
  const totalItems = items.reduce((s, i) => s + i.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ items, agregar, quitar, cambiarCantidad, vaciar, total, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar el carrito desde cualquier componente.
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
