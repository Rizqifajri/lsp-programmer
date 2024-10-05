import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useCart from "@/hooks/use-cart";
import useMenu from "@/hooks/useMenu";

export function CheckoutPayment() {
  const { data: cartItems } = useCart(); 
  const totalPrice = cartItems?.reduce((acc, item) => acc + item.totalPrice, 0); 
  const accountNumber = "1234567890";
  const paymentInfo = `Transfer Rp.${totalPrice?.toLocaleString()} ke rekening ${accountNumber}`;

 
  const handleCopyOrder = () => {
    const orderDetails = cartItems
      ?.map((item) => `${item.quantity} x ${item.name}: Rp.${item.totalPrice.toLocaleString()}`)
      .join("\n");
    const total = `Total: Rp.${totalPrice.toLocaleString()}`;
    const copyText = `${orderDetails}\n\n${total}`;
    navigator.clipboard.writeText(copyText);
    alert("Pesanan disalin ke clipboard!");
  };

  // Fungsi untuk menyalin nomor rekening
  const handleCopyAccount = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Nomor rekening disalin ke clipboard!");
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Pesan</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Pesanan Anda</DialogTitle>
          <DialogDescription>
            Cek dan pastikan kembali pesanan Anda sudah benar.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span>{item.quantity} x {item.name}</span>
                <span>Rp.{item.totalPrice.toLocaleString()}</span>
              </div>
            ))
          ) : (
            <p>Keranjang Anda kosong.</p>
          )}
        </div>

        {cartItems && cartItems.length > 0 && (
          <h1 className="text-xl text-black p-3 font-bold">
            Total Tagihan: Rp.{totalPrice?.toLocaleString()},-
          </h1>
        )}

        {/* Nomor Rekening */}
        <div className="mt-4">
          <p>Silakan transfer ke rekening berikut:</p>
          <div className="flex items-center space-x-2">
            <span className="font-bold">{accountNumber}</span>
            <Button
              type="button"
              size="sm"
              className="px-3"
              onClick={handleCopyAccount}
            >
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Selesai
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
