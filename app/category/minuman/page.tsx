'use client'

import { FoodIcon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useCart from "@/hooks/use-cart";
import useMenu from "@/hooks/useMenu";
import { useSearchParams } from "next/navigation";


export default function Minuman() {
  const { data } = useMenu();
  const { addCartItem } = useCart();
  const category = useSearchParams().get("category");
  console.log(data);


  const filteredMenu = category ? data.filter((item: any) => item.category_id == category) : data;

  return (
    <section className="flex flex-col gap-5 w-full">
      <h1 className="flex items-center gap-3 mt-2 justify-center text-xl text-yellow-700 text-center font-bold"> <FoodIcon />
        Silahkan Pesan Minuman !</h1>
      {
        filteredMenu?.map((item, index) => (
          <Card key={index} className="flex shadow-md w-auto">
            <img
              className="w-32 h-20 rounded-md"
              src={item.image.toString()}
              alt={item.name}
            />
            <CardContent className="flex items-center justify-center pt-5 p-0">
              <div className="flex flex-col items-left ml-4">
                <h1 className="text-xl text-yellow-700">{item.name}</h1>
                <p className="text-[14px] text-foreground">Rp. {item.price}</p>
                <Button onClick={() => addCartItem(item)} className="text-[10px] bg-yellow-300 h-5" variant={"outline"}>Pesan</Button>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </section>
  )
}
