import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaCartShopping } from "react-icons/fa6";
import { CardOrders } from "./card-orders"

export function CartSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent border-none hover:bg-transparent" size="icon" variant="outline"><FaCartShopping className="w-6 h-6" /></Button>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <SheetTitle>Pesanan anda</SheetTitle>
          <SheetDescription>
            Pastikan pesanan anda sudah benar
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <CardOrders />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
