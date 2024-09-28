"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FoodIcon } from "@/components/icon";
import useMenu from "@/hooks/useMenu";
import { useSearchParams } from "next/navigation";
import useCart from "@/hooks/use-cart";
import { SkeletonCard } from "@/components/skeleton-card";


export default function Makanan() {
  const { data, isLoading } = useMenu(); // Add isLoading from hook
  const { addCartItem } = useCart();
  const category = useSearchParams().get("category");

  const filteredMenu = category
    ? data?.filter((item: any) => item.category_id == category)
    : data;

  return (
    <section className="flex flex-col gap-5 h-screen "> {/* Container full height */}
      <h1 className="flex items-center gap-3 justify-center text-xl text-black text-center font-bold">
        Pilih makananmu!
      </h1>

      <div className="flex-1 overflow-y-auto px-4 mb-24">
        {isLoading ? (
          <div className="flex flex-col gap-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          filteredMenu?.map((item, index) => (
            <Card key={index} className="flex w-auto mb-4">
              <img
                className="w-32 h-24 object-cover rounded-md"
                src={item.image.toString()}
                alt={item.name}
              />
              <CardContent className="flex items-center justify-center pt-5 p-0">
                <div className="flex flex-col items-left ml-4">
                  <h1 className="text-xl text-yellow-700">{item.name}</h1>
                  <p className="text-[14px] text-foreground">Rp. {item.price}</p>
                  <Button
                    className="text-[10px] text-yellow-200 bg-black h-6 w-24 my-3"
                    onClick={() => addCartItem(item)}
                  >
                    Tambah
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </section>
  );
}
