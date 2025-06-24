import Card from "./Card";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Main() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    async function getHouses() {
      const houses = await axios.get(
        "https://real-estate-backend-bxzf.onrender.com/#",
      );
      setHouses(houses.data);
    }
    getHouses();
  }, []);

  return (
    <main className="mt-10 flex flex-col gap-10 pb-14 md:px-12">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-0">
          <button className="w-1/2 rounded-md px-1 py-2 font-semibold hover:cursor-pointer hover:bg-gray-200 md:px-4">
            Apartment
          </button>
          <button className="w-1/2 rounded-md px-1 py-2 font-semibold hover:cursor-pointer hover:bg-gray-200 md:px-4">
            Condominium
          </button>
          <button className="w-1/2 rounded-md px-1 py-2 font-semibold hover:cursor-pointer hover:bg-gray-200 md:px-4">
            Townhouse
          </button>
          <button className="w-1/2 rounded-md px-1 py-2 font-semibold hover:cursor-pointer hover:bg-gray-200 md:px-4">
            Multifamily
          </button>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2 sm:mt-0 sm:flex-row sm:gap-4">
          <div>
            <span className="mr-4 font-semibold text-gray-400">Rooms</span>
            <button className="rounded-md p-3 font-semibold hover:cursor-pointer hover:bg-gray-200">
              4
            </button>
            <button className="rounded-md p-3 font-semibold hover:cursor-pointer hover:bg-gray-200">
              5
            </button>
            <button className="rounded-md p-3 font-semibold hover:cursor-pointer hover:bg-gray-200">
              6
            </button>
          </div>

          <div className="h-6/10 border-l-2 border-gray-300"></div>
          <select className="rounded-md bg-gray-200 p-2 font-semibold hover:cursor-pointer">
            <option>Sort by price</option>
            <option>Sort by date</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-4">
        <Card houses={houses} />
      </div>
    </main>
  );
}
