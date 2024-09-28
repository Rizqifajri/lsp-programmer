'use client'

import { useEffect, useState } from "react";

// Define the type for a CartItem
interface CartItem {
  image: string | undefined;
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

// Update local storage return type (could return `null`)
type StoredCartItems = CartItem[] | null;

// Custom Hook: useCart with TypeScript
export default function useCart() {
  // State Types
  const [data, setData] = useState<CartItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [trigger, setTrigger] = useState<boolean>(false);

  // Helper function to retrieve cart items from local storage with proper typing
  const getAllCartItem = () => {
    try {
      const cartItems: StoredCartItems = JSON.parse(window.localStorage.getItem("cartItems") || "[]");
      
      if (!cartItems || cartItems.length === 0) {
        window.localStorage.setItem("cartItems", JSON.stringify([]));
        setData([]);
        return;
      }

      const validCartItems = cartItems.filter(item => item.quantity > 0);
      if (validCartItems.length !== cartItems.length) {
        window.localStorage.setItem("cartItems", JSON.stringify(validCartItems));
      }

      setData(validCartItems);
    } catch (error) {
      setError("Failed to fetch cart items");
      console.error(error);
    }
  };

  // Add item to cart
  const addCartItem = (cartItem: Omit<CartItem, "quantity" | "totalPrice">) => {
    try {
      const cartItems: StoredCartItems = JSON.parse(window.localStorage.getItem("cartItems") || "[]");

      const isExist = cartItems?.find(item => item.id === cartItem.id);

      if (!isExist) {
        const newCartItems: CartItem[] = [...(cartItems || []), {
          ...cartItem,
          quantity: 1,
          totalPrice: cartItem.price
        }];
        window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        setTrigger(!trigger);
      } else {
        const newCartItems = cartItems!.map(item => {
          if (item.id === cartItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1)
            };
          }
          return item;
        });
        window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        setTrigger(!trigger);
      }
    } catch (error) {
      setError("Failed to add item to cart");
      console.error(error);
    }
  };

  // Add quantity
  const addQuantity = (id: string) => {
    try {
      const cartItems: StoredCartItems = JSON.parse(window.localStorage.getItem("cartItems") || "[]");
      const newCartItems = cartItems!.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.price * (item.quantity + 1)
          };
        }
        return item;
      });
      window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      setTrigger(!trigger);
    } catch (error) {
      setError("Failed to update quantity");
      console.error(error);
    }
  };

  // Remove quantity
  const removeQuantity = (id: string) => {
    try {
      const cartItems: StoredCartItems = JSON.parse(window.localStorage.getItem("cartItems") || "[]");
      const newCartItems = cartItems!.map(item => {
        if (item.id === id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.price * (item.quantity - 1)
          };
        }
        return item;
      });
      window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      setTrigger(!trigger);
    } catch (error) {
      setError("Failed to decrease quantity");
      console.error(error);
    }
  };

  // Remove item from cart
  const removeCartItem = (id: string) => {
    try {
      const cartItems: StoredCartItems = JSON.parse(window.localStorage.getItem("cartItems") || "[]");
      const newCartItems = cartItems!.filter(item => item.id !== id);
      window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      setTrigger(!trigger);
    } catch (error) {
      setError("Failed to remove item from cart");
      console.error(error);
    }
  };

  // Update on trigger changes
  useEffect(() => {
    getAllCartItem();
  }, [trigger]);

  return {
    data,
    error,
    addCartItem,
    removeCartItem,
    addQuantity,
    removeQuantity,
  };
}