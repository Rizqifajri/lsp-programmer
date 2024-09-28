"use client";

import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import Image from "next/image";
import { CartSidebar } from "./cart-sidebar";
import { RiDrinksFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { FaBowlFood } from "react-icons/fa6";
import { SiCakephp } from "react-icons/si";
import { usePathname } from "next/navigation"; 

export function Navigation() {
  const pathname = usePathname(); 

  return (
    <section className="w-full">
      <nav className="fixed bottom-2 left-5 rounded-lg right-5 bg-black text-white z-50">
        <div className="flex justify-around items-center max-w-[700px] mx-auto p-4 rounded-t-xl shadow-t-lg">
          <Link href="/" className="text-lg font-bold">
            <GoHomeFill
              className={`w-6 h-6 ${pathname === "/" ? "text-yellow-500" : ""}`}
            />
          </Link>
          <Link href="/category/makanan?category=1" className="text-lg font-bold">
            <FaBowlFood
              className={`w-6 h-6 ${pathname === "/category/makanan" ? "text-yellow-500" : ""}`}
            />
          </Link>
          <Link href="/category/minuman?category=2" className="text-lg font-bold">
            <RiDrinksFill
              className={`w-6 h-6 ${pathname === "/category/minuman" ? "text-yellow-500" : ""}`}
            />
          </Link>
          <Link href="/category/appetizer?category=3" className="text-lg font-bold">
            <SiCakephp
              className={`w-6 h-6 ${pathname === "/category/appetizer" ? "text-yellow-500" : ""}`}
            />
          </Link>
          <CartSidebar />
        </div>
      </nav>
    </section>
  );
}
