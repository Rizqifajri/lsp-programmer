"use client";
import { supabase } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface MenuItem {
  id: string; 
  name: string;
  description: string;
  price: number;
  image: string;
  category_id: number;
  quantity: number;
}

export default function useMenu() {
  const [data, setData] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllMenu = async () => {
    setIsLoading(true);
    try {
      const { data: menus, error } = await supabase
        .from("menu_items")
        .select("*");

      if (error) throw error;

      setData(menus || []);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllMenu();
  }, []);

  return { data, isLoading };
}
