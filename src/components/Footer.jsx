import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { NavLink } from "react-router-dom"
import LogoMobileMoney from "./LogoMobileMoney";

function Footer() {
return(
<footer className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-40 p-6 smartphone:flex-col md:flex md:flex-row md:items-center md:justify-center md:gap-9">
<nav>
<ol className="flex flex-col justify-center items-center gap-4">
<h3 className="text-2xl">Abous us</h3>
<NavLink><li>company history</li></NavLink>
<NavLink><li>Our mission</li></NavLink>  
<NavLink><li>our team</li></NavLink>    
</ol> 
</nav>

<div className="flex flex-col items-center justify-center gap-4">
<h3 className="text-2xl">Secure payment</h3>
<div>
{/* {logo} */}
<LogoMobileMoney/>
</div>
</div>

<nav className="flex flex-col items-center justify-center gap-4">
<h3 className="text-2xl">social networks</h3>
<ol className="flex items-center justify-center gap-10">
<NavLink><FaFacebook className="size-9 hover:bg-blue-600 rounded-full" /></NavLink>
<NavLink><FaInstagram className=" size-9 hover:bg-gradient-to-br from-purple-600 to-yellow-400  rounded-full" /></NavLink>  
</ol> 
</nav>



</footer>
)
}
export default Footer