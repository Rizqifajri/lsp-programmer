"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card";
import Image from "next/image";
import food from "../assets/food.jpg";
import drink from "../assets/drinks.jpg";
import appetizer from "../assets/appetizer.jpg";
import { useSearchParams } from "next/navigation";
import { IconMenu } from "./icon-menu";

const dataCategory = [
  {
    id: 1,
    img: food,
    name: "Makanan",
    desc: "Lorem ipsum dolor sit amet",
    href: "/category/makanan"
  },
  {
    id: 2,
    img: drink,
    name: "Minuman",
    desc: "Lorem ipsum dolor sit amet",
    href: "/category/minuman"
  },
  {
    id: 3,
    img: appetizer,
    name: "Appetizer",
    desc: "Lorem ipsum dolor sit amet",
    href: "/category/appetizer"
  }
];

export function ListCategory() {
  return (
    <section className="mx-5 mb-28">
      <IconMenu />
      <h1 className="text-xl text-black font-bold">Pilih Kategori</h1>
      <div className="flex flex-col gap-5">
        {dataCategory.map((item, index) => (
          <Link key={index} href={`${item.href}?category=${item.id}`}>
            <Card className="border-none flex w-full mx-auto p-1 gap-2">
                <Image
                  className="w-32 h-20 rounded-md"
                  src={item.img}
                  alt={item.name}
                />
              <CardContent className="flex flex-col justify-center ">
                <CardTitle className="text-xl text-left text-black">{item.name}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
