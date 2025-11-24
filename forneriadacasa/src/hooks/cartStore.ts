import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  title: string;
  img: string;
  // img_ia: boolean;
  price: number;
  borderPizza: string;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  total: number;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateBorderPizza: (id: string, borderPizza: string) => void;
  updateQuantity: (id: string, quantity: number | string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      total: 0,

      addToCart: (item) => {
        const cart = get().cart;
        const existing = cart.find((i) => i.id === item.id);

        const newCart = existing
          ? cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            )
          : [...cart, { ...item, quantity: 1 }];

        set({
          cart: newCart,
          total: newCart.reduce((acc, i) => acc + i.price * i.quantity, 0),
        });
      },

      removeFromCart: (id) => {
        const newCart = get().cart.filter((i) => i.id !== id);
        set({
          cart: newCart,
          total: newCart.reduce((acc, i) => acc + i.price * i.quantity, 0),
        });
      },

      updateBorderPizza: (id, border) => {
        const newCart = get().cart.map((i) =>
          i.id === id ? { ...i, borderPizza: border } : i
        );

        set({
          cart: newCart,
        });
      },

      updateQuantity: (id, quantity) => {
        const qty =
          typeof quantity === "string" ? parseInt(quantity, 10) : quantity;
        if (isNaN(qty) || qty <= 0) {
          get().removeFromCart(id);
          return;
        }

        const limitedQty = Math.min(qty, 10);

        const newCart = get().cart.map((i) =>
          i.id === id ? { ...i, quantity: limitedQty } : i
        );

        set({
          cart: newCart,
          total: newCart.reduce((acc, i) => acc + i.price * i.quantity, 0),
        });
      },

      clearCart: () => set({ cart: [], total: 0 }),
    }),
    {
      name: "pizza-cart",
    }
  )
);