import { UserCircle2Icon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex h-24 grow items-center justify-center gap-8 bg-white px-12">
      <input
        placeholder="Search for property"
        className="grow rounded-xl bg-gray-200 px-4 py-3"
      />
      <div className="hover:cursor-pointer">
        <UserCircle2Icon className="h-10 w-10" />
      </div>
    </nav>
  );
}
