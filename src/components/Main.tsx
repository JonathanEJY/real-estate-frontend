import Card from "./Card";
import type { House } from "../types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Main() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRooms, setSelectedRooms] = useState<number | null>(null);
  // const [allHouses, setAllHouses] = useState<House[]>([]);
  // const [selectedType, setSelectedType] = useState<string | null>(null);

  useEffect(() => {
    async function getHouses() {
      try {
        const houses = await axios.get(
          "https://real-estate-backend-bxzf.onrender.com/#",
        );
        setHouses(houses.data);
        // setAllHouses(houses.data);
      } catch (e) {
        console.log("Error while getting houses: " + e);
      } finally {
        setLoading(false);
      }
    }
    getHouses();
  }, []);

  return (
    <>
      <main className="mt-10 flex flex-col gap-10 pb-14 md:px-12">
        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          <div className="grid grid-cols-2 place-items-center gap-2 sm:flex sm:flex-row sm:items-center md:gap-0">
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
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-0">
            <div>
              <span className="mr-4 font-semibold text-gray-400">Rooms</span>
              <button
                onClick={() => setSelectedRooms(4)}
                className={`rounded-md p-3 font-semibold hover:cursor-pointer ${
                  selectedRooms === 4 ? "bg-gray-300" : "hover:bg-gray-200"
                }`}
              >
                {"+ 4"}
              </button>
              <button
                onClick={() => setSelectedRooms(5)}
                className={`rounded-md p-3 font-semibold hover:cursor-pointer ${
                  selectedRooms === 5 ? "bg-gray-300" : "hover:bg-gray-200"
                }`}
              >
                {"+ 5"}
              </button>
              <button
                onClick={() => setSelectedRooms(6)}
                className={`rounded-md p-3 font-semibold hover:cursor-pointer ${
                  selectedRooms === 6 ? "bg-gray-300" : "hover:bg-gray-200"
                }`}
              >
                {"+ 6"}
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
          <Card houses={houses} loading={loading} />
        </div>
      </main>
    </>
  );
}
