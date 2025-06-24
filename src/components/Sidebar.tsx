import {
  BellIcon,
  HomeIcon,
  MessagesSquareIcon,
  SearchIcon,
  SettingsIcon,
  TextSearchIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";

import logo from "../assets//logo.svg";

export default function Sidebar() {
  return (
    <aside className="top-0 flex h-screen w-20 shrink-0 flex-col items-center border-r border-gray-200 py-14 pt-6">
      <img className="size-12 hover:cursor-pointer" src={logo} />
      <div className="flex h-full flex-col gap-4 pt-20">
        <button className="hover:bg-test rounded-xl p-3 hover:cursor-pointer hover:text-white">
          <HomeIcon />
        </button>
        <button className="hover:bg-test rounded-xl p-3 hover:cursor-pointer hover:text-white">
          <ThumbsUpIcon />
        </button>
        <button className="hover:bg-test rounded-xl p-3 hover:cursor-pointer hover:text-white">
          <ThumbsDownIcon />
        </button>
        <button className="hover:bg-test rounded-xl p-3 hover:cursor-pointer hover:text-white">
          <SearchIcon />
        </button>
        <button className="hover:bg-test rounded-xl p-3 hover:cursor-pointer hover:text-white">
          <TextSearchIcon />
        </button>
        <button className="hover:bg-test rounded-xl p-3 hover:cursor-pointer hover:text-white">
          <MessagesSquareIcon />
        </button>
        <button className="hover:bg-test rounded-xl p-3 hover:cursor-pointer hover:text-white">
          <BellIcon />
        </button>
      </div>

      <button className="hover:bg-test rounded-xl p-3 hover:cursor-pointer hover:text-white">
        <SettingsIcon />
      </button>
    </aside>
  );
}
