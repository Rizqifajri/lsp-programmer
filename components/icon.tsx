import Image from "next/image"
import icon from "../assets/diet.png";
import chef from "../assets/cheff.png";

export const FoodIcon = () => {
  return (
    <>
    <Image className="w-12 my-auto " src={icon} alt="makanan" />
    </>
  )
}

export const ChefIcon = () => {
  return (
    <>
    <Image className="w-24 my-auto " src={chef} alt="makanan" />
    </>
  )
}