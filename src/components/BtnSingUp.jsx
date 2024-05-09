import { NavLink } from "react-router-dom"

function BtnSinUp() {
return(
<section>
<NavLink to={"/sing up"}><span className="hover:underline">Sing up now</span></NavLink>
</section>
)
}
export default BtnSinUp