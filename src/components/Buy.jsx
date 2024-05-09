import { NavLink} from "react-router-dom"

function SmallBuyBtn({buyDynamique}) {
    return(
    <>
<NavLink  to={buyDynamique}><button className="bg-[#0F7013] rounded-xl p-2">Buy</button></NavLink>
    </> 
    )   
}
function UserBuy() {
 return(
<>
<button className="bg-[#0F7013] rounded-xl p-4 w-full">buy</button>
</>
 )   
}

function LargeBuy() {
    
    return(
    <NavLink to={"/Buy"}><button className="bg-[#0F7013] rounded-xl p-6 w-full lg:text-xl smartphone:text-2sm smartphone:p-2">Buy</button></NavLink>
    )
    }


export{
    SmallBuyBtn,
    UserBuy,
    LargeBuy
}