import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SeachBar() {
  return (
    <form action="" className="flex items-center gap-2 text-lg md:text-2xl bg-[#1C1C78] p-1 rounded-2xl">
      <button className="border-r-2 pr-2">
        <HiMiniMagnifyingGlass />
      </button>
      <input className="bg-[#1C1C78] p-1 rounded-2xl focus:outline-none flex-grow" type="search" placeholder="Search..." />
    </form>
  );
}

export default SeachBar;
