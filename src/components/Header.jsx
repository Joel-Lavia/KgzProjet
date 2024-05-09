import { NavLink } from "react-router-dom";
import SeachBar from "./SeachBar";
import "../styles/default.css";
import MenuBurger from "./MenuBurger";

export const logo = "https://res.cloudinary.com/dp9skoyde/image/upload/v1713211750/Pictures%20Masterpieces%20project/iaqzbrxocdoroqpatvxf.jpg";

function Header() {
  return (
    <header className="sticky top-0 bg-[#1e1b4b] z-10 w-full">
  {/* NavBar KGZ */}
  <nav className="flex flex-col lg:flex-row items-center justify-between p-3 lg:text-sm ">
  <div className=""></div>
    {/* Logo */}
    <div className="flex">
      <NavLink to={"/"}>
        <img src={logo} className="max-w-14 rounded-full" alt="logo KGZ" />
      </NavLink>
    </div>
    
    {/* seach bar */}
    <div className=" flex justify-around grow mt-2 mb-2">
      <SeachBar />
    </div>

    {/*Link navigation*/}
    <div className="hidden lg:flex flex-grow justify-center items-center gap-[3em] text-2xl">
      <NavLink to={"/"} ClassName="bg-[#242465] p-2 rounded-xl">PC</NavLink>
      <NavLink to={"/"} ClassName="bg-[#242465] p-2 rounded-xl">PS</NavLink>
      <NavLink to={"/"} ClassName="bg-[#242465] p-2 rounded-xl">XBOX</NavLink>
    </div>
  </nav>

  {/* Liens de navigation pour les écrans mobiles */}
  <div className="lg:hidden flex justify-center items-center gap-24 mr-28 p-2">

    <div className=""><MenuBurger/></div>
    <NavLink to={"/"} ClassName="bg-[#242465] p-2 rounded-xl hover:bg-[#242465]">PC</NavLink>
    <NavLink to={"/"} ClassName="bg-[#242465] p-2 rounded-xl">PS</NavLink>
    <NavLink to={"/"} ClassName="bg-[#242465] p-2 rounded-xl">XBOX</NavLink>
  </div>
</header>


  );
}

export default Header;
