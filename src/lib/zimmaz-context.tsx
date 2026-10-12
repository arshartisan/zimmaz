"use client";
import { createContext, useContext, useSyncExternalStore } from "react";
import {
  CrochetProduct,
  Order,
  SiteContent,
  initialContent,
  initialProducts,
} from "./zimmaz";
type Data = {
  products: CrochetProduct[];
  orders: Order[];
  content: SiteContent;
};
const initial: Data = {
  products: initialProducts,
  orders: [],
  content: initialContent,
};
const key = "zimmaz-phase-one-v1";
let cached: Data = initial;
let raw: string | null | undefined;
const listeners = new Set<() => void>();
function snapshot() {
  try {
    const value = localStorage.getItem(key);
    if (value !== raw) {
      raw = value;
      cached = value ? JSON.parse(value) : initial;
    }
  } catch {
    cached = initial;
  }
  return cached;
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}
function update(next: Data) {
  localStorage.setItem(key, JSON.stringify(next));
  raw = undefined;
  listeners.forEach((listener) => listener());
}
type Store = Data & {
  saveProduct: (product: CrochetProduct) => void;
  deleteProduct: (id: string) => void;
  saveOrder: (order: Order) => void;
  deleteOrder: (id: string) => void;
  saveContent: (content: SiteContent) => void;
};
const Context = createContext<Store | null>(null);
export function ZimmazProvider({ children }: { children: React.ReactNode }) {
  const data = useSyncExternalStore(subscribe, snapshot, () => initial);
  const value: Store = {
    ...data,
    saveProduct: (product) => {
      const current = snapshot();
      update({
        ...current,
        products: current.products.some((p) => p.id === product.id)
          ? current.products.map((p) => (p.id === product.id ? product : p))
          : [...current.products, product],
      });
    },
    deleteProduct: (id) => {
      const current = snapshot();
      update({
        ...current,
        products: current.products.filter((p) => p.id !== id),
      });
    },
    saveOrder: (order) => {
      const current = snapshot();
      update({
        ...current,
        orders: current.orders.some((o) => o.id === order.id)
          ? current.orders.map((o) => (o.id === order.id ? order : o))
          : [order, ...current.orders],
      });
    },
    deleteOrder: (id) => {
      const current = snapshot();
      update({ ...current, orders: current.orders.filter((o) => o.id !== id) });
    },
    saveContent: (content) => update({ ...snapshot(), content }),
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useZimmaz() {
  const value = useContext(Context);
  if (!value) throw new Error("ZimmazProvider is required");
  return value;
}
