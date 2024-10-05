' use client'

import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, } from "./ui/card";
import { foodData } from "@/data/data.food";
import useCart from "@/hooks/use-cart";

export const CardOrders = () => {
  const { data: cartItems, addQuantity, removeQuantity, removeCartItem } = useCart()


  return (
    <>
      {
        cartItems?.map((item, index) => (
          <Card key={index} className=" shadow-md w-auto p-5">
            <CardContent className="flex items-center justify-center pt-5 p-0">
              <img
                className="w-24 md:w-60 rounded-md"
                src={item.image}
                alt={item.name}
              />
              <div className="flex flex-col items-left ml-4">
                <h1 className="text-sm text-yellow-700">{item.name}</h1>
                <p className="text-[10px] text-foreground">{item.totalPrice}</p>
                <div className="flex gap-3">
                  <Button onClick={() => removeQuantity(item.id)} className="font-bold text-[10px] rounded-full bg-yellow-300 h-5" variant={"outline"}>-</Button>
                  <p className="text-[10px] text-foreground">{item.quantity}</p>
                  <Button onClick={() => addQuantity(item.id)} className="font-bold text-[10px] rounded-full bg-yellow-300 h-5" variant={"outline"}>+</Button>
                  <Button onClick={() => removeCartItem(item.id)} className="text-[10px] rounded-full text-white bg-red-700 h-5" variant={"outline"}>X</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )
        )}


    </>

  );
}