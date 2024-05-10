import { NavLink } from "react-router-dom";

function Sell() {
  return (
    <button className="bg-[#291371] rounded-xl p-2">Sell your items</button>
  );
}

function Largesell(params) {
  return (
    <NavLink to={"/seles"}><button className="bg-[#291371] rounded-xl p-6 w-full lg:text-xl smartphone:text-2sm  text-nowrap smartphone:p-2">Sell your items</button></NavLink>
  );
}
export{
    Sell,
    Largesell
};
