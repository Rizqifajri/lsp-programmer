import { FaFireAlt, FaPizzaSlice, FaCoffee, FaPepperHot, FaIceCream } from "react-icons/fa";

export function IconMenu() {
  return (
    <ul className="flex justify-center items-center gap-5 p-4 ">
      <li className="flex flex-col items-center gap-1">
        <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 text-black rounded-full">
          <FaFireAlt className="w-6 h-6" />
        </div>
        <span className="text-sm">Popular</span>
      </li>
      <li className="flex flex-col items-center gap-1">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 text-black rounded-full">
          <FaPizzaSlice className="w-6 h-6" />
        </div>
        <span className="text-sm">Western</span>
      </li>
      <li className="flex flex-col items-center gap-1">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 text-black rounded-full">
          <FaCoffee className="w-6 h-6" />
        </div>
        <span className="text-sm">Drinks</span>
      </li>
      <li className="flex flex-col items-center gap-1">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 text-black rounded-full">
          <FaPepperHot className="w-6 h-6" />
        </div>
        <span className="text-sm">Local</span>
      </li>
      <li className="flex flex-col items-center gap-1">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 text-black rounded-full">
          <FaIceCream className="w-6 h-6" />
        </div>
        <span className="text-sm">Dessert</span>
      </li>
    </ul>
  );
}
