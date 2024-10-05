import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaCartShopping } from "react-icons/fa6";
import { CardOrders } from "./card-orders";
import useCart from "@/hooks/use-cart"; // Pastikan ini hook yang mengelola state cart
import { CheckoutPayment } from "./payment-checkout";

export function CartSidebar() {
  const { data: cartItems } = useCart(); // Ambil item cart dari hook
  const totalPrice = cartItems?.reduce((acc, item) => acc + item.totalPrice, 0); // Hitung total secara real-time

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent border-none hover:bg-transparent" size="icon" variant="outline">
          <FaCartShopping className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <SheetTitle>Pesanan anda</SheetTitle>
          <SheetDescription>
            Pastikan pesanan anda sudah benar
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <CardOrders /> {/* Tampilkan daftar pesanan */}
        </div>
        <h1 className="text-xl text-black p-3">
          Total Tagihan: <span className="font-bold">Rp.{totalPrice?.toLocaleString()},-</span>
        </h1>
        <SheetFooter>
          <SheetClose asChild>
            <CheckoutPayment/>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
