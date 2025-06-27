import {
  BathIcon,
  BedDoubleIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import type { House } from "../types";
interface CardProps {
  houses: House[];
  loading: boolean;
}
export default function Card({ houses, loading }: CardProps) {
  if (loading) {
    return (
      <>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex w-52 animate-pulse flex-col gap-4">
            <div className="skeleton h-32 w-full rounded-xl bg-gray-300"></div>
            <div className="skeleton h-4 w-28 rounded bg-gray-300"></div>
            <div className="skeleton h-4 w-full rounded bg-gray-300"></div>
            <div className="skeleton h-4 w-full rounded bg-gray-300"></div>
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      {houses.map((house) => (
        <div
          className="flex w-65 flex-col gap-2 hover:cursor-pointer"
          key={house.id}
        >
          <div className="relative">
            <div className="absolute top-0 mt-3 ml-2 gap-8">
              <div className="flex gap-2">
                {house.isNew && (
                  <span className="rounded-full bg-black px-3 py-1 text-xs text-white uppercase">
                    new
                  </span>
                )}
                {house.isPopular && (
                  <span className="rounded-full bg-red-700 px-3 py-1 text-xs text-white uppercase">
                    popular
                  </span>
                )}
              </div>
            </div>
            <img
              src={house.houseImage}
              alt="House image"
              className="h-46 w-full rounded-xl border-2 border-gray-100 object-cover hover:bg-blend-overlay"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-bold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
              }).format(Number(house.price))}
            </span>
            <div className="flex gap-2">
              <div className="flex gap-2">
                <span className="text-sm font-semibold">{house.beds}</span>
                <BedDoubleIcon className="h-5 w-5" />
              </div>
              <div className="flex gap-2">
                <span className="text-sm font-semibold">{house.bath}</span>
                <BathIcon className="h-5 w-5" />
              </div>
            </div>
          </div>

          <span className="text-sm font-semibold text-neutral-500">
            {house.description}
          </span>

          <div className="flex w-fit rounded-full bg-gray-200">
            <div className="flex rounded-l-full bg-gray-200 px-3 py-2 hover:cursor-pointer hover:bg-gray-300">
              <ThumbsUpIcon className="h-5 w-5 text-neutral-700" />
            </div>
            <div className="h-6 w-px self-center bg-gray-400" />
            <div className="flex w-fit items-center gap-4 rounded-r-full px-3 py-2 hover:cursor-pointer hover:bg-gray-300">
              <ThumbsDownIcon className="h-5 w-5 text-neutral-700" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
