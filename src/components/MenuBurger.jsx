import Hamburger from 'hamburger-react'
import { useRef, useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiSolidGame } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";
import BtnLogin from "./BtnLogin";


function MenuBurger() {
  const user = "https://www.prajwaldesai.com/wp-content/uploads/2021/02/Find-Users-Last-Logon-Time-using-4-Easy-Methods.jpg";
const [isOpen, setOpen] = useState(false);
const ref = useRef(null);

return(

<div className=''>
  <div className='lg:hidden absolute left-[1em] top-1'>
    <Hamburger toggled={isOpen} toggle={setOpen} />
    {isOpen && (
      <nav className="flex flex-col gap-2 sticky top-24 text-xl bg-[#1e1b4b] p-2 rounded-lg border">
        <NavLink to={"/"}><ol className="flex items-center gap-5 hover:bg-[#242465] p-2 rounded-xl"><span><FaHome /></span>Home</ol></NavLink>
        <NavLink to={"/"}><ol className="flex items-center gap-5 hover:bg-[#242465] p-2 rounded-xl"><span><BiSolidGame /></span>Game</ol></NavLink>
        <NavLink to={"/"}><ol className="flex items-center gap-5 hover:bg-[#242465] p-2 rounded-xl"><span><IoGameController /></span>Accessory</ol></NavLink>

<div  className="flex items-center  gap-1">
 <ol><img src= {user} className="w-7 h-7  rounded-full" alt="user" /></ol>
 <BtnLogin/>
</div>


      </nav>
    )}
  </div>
</div>
)
}

export default MenuBurger