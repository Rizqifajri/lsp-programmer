import { Button } from "@/components/ui/button";
import logo from "../../../assets/logo_dbb.png"
import Image from "next/image";
import { ChartOrders } from "@/components/chart-orders";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { title } from "process";
import { FaCartArrowDown } from "react-icons/fa";

export const metadata = {
  title: "Dashboard",
};

const OrderAndSales = () => [
  {
    title: "Stock",
    icon: FaCartArrowDown,
    value: 0
  },
  {
    title: "Sales",
    icon: FaCartArrowDown,
    value: 0
  },
  {
    title: "Orders",
    icon: FaCartArrowDown,
    value: 0
  }
]

export default function Page() {
  return (
    <>
      <section className="flex gap- max-h-screen">
        <div className="flex-col gap-2 shadow-md h-screen justify-start p-5 w-[200px]">
          <Image className="mx-auto w-24" src={logo} alt="logo" />
          <Button className="text-[24px] p-5 font-normal bg-white hover:bg-yellow-300 h-5" variant="outline">Dashboard</Button>
          <Button className="text-[24px] p-5 font-normal bg-white hover:bg-yellow-300 h-5" variant="outline">Foodstock</Button>
        </div>
        <div className="flex-1 w-full flex flex-col gap-12">
          <div className="grid grid-cols-3 gap-5 my-auto">
            {
              OrderAndSales().map((item, index) => (
                <Card key={index} className="w-full h-[300px] p-6">
                  <CardContent className="flex flex-col items-center justify-center pt-5 p-0">
                    <CardTitle className="text-3xl text-yellow-700 font-bold">{item.title}</CardTitle>
                    <item.icon className="text-3xl text-yellow-700 font-bold" />
                    <p className="text-[40px]">{item.value}</p>
                  </CardContent>
                </Card>
              ))
            }
          </div>

          <ChartOrders />
        </div>

      </section>

    </>
  )
}