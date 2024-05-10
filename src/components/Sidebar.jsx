import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiSolidGame } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";
import BtnLogin from "./BtnLogin";
// import MenuBurger from "./MenuBurger";


function Sidebar() {

const user = "https://www.prajwaldesai.com/wp-content/uploads/2021/02/Find-Users-Last-Logon-Time-using-4-Easy-Methods.jpg";

return(
<aside className="hidden lg:flex flex-col justify-between p-5">

{/*nav-sidebar*/}
<nav className="flex flex-col gap-7 sticky top-24 text-xl">
        <NavLink to={"/"}><ol className="flex items-center gap-5 hover:bg-[#242465] p-2 rounded-xl"><span><FaHome/></span>Home</ol></NavLink> 
        <NavLink to={"/Games"}><ol className="flex items-center gap-5 hover:bg-[#242465] p-2 rounded-xl "><span><BiSolidGame/></span>Game</ol></NavLink>
        <NavLink to={"/Accessory"}><ol className="flex items-center gap-5 hover:bg-[#242465] p-2 rounded-xl"><span><IoGameController/></span>Accessory</ol></NavLink>
</nav>
{/*Login-User*/}
<div  className="flex flex-col gap-1">
 <ol><img src= {user} className="w-36 h-36 rounded-full" alt="user" /></ol>
 <BtnLogin/>
</div>
{/*  */}
</aside>
)
}
export default Sidebar