import { UserCircle2Icon, SearchIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex h-24 grow items-center justify-center gap-8 bg-white px-12">
      <div className="relative w-full">
        <input
          placeholder="Search for property"
          className="w-full grow rounded-xl bg-gray-200 py-3 pl-12"
        />
        <button
          type="button"
          className="hover:bg-test absolute top-1/2 left-1 -translate-y-1/2 rounded-full p-2 hover:cursor-pointer hover:text-white"
          onClick={() => console.log("Pesquisar...")}
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="hover:cursor-pointer">
        <UserCircle2Icon className="h-10 w-10" />
      </div>
    </nav>
  );
}
