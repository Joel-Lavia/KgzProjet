import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useParams } from "react-router-dom";
import data from "../data/Data.json";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { SmallBuyBtn, UserBuy} from "../components/Buy";
import LogoMobileMoney from "../components/LogoMobileMoney";
import IdemItems from "../components/IdemItems";

function Buy() {

const { itemsId } = useParams();
const renderItems = data.Articles.find((allItems) => allItems.id == itemsId );
    
    if (!renderItems) {
        return (
            <p className="text-red-700 flex items-center justify-center">
                items not exist
            </p>
        );
    }



const buyItems = () => (

<>

{renderItems && (

<section className="text-center lg:flex lg:flex-row smartphone:flex-col">

<div className=" flex flex-col items-center justify-center lg:ml-[12em] grow p-9">

<Carousel autoPlay = {true} interval={5000} infiniteLoop={true} showArrows={false} autoFocus = {true} showStatus = {false} className="text-center">

<div className="max-w-[100%]">
<img src={renderItems.picture.First} alt="" className="rounded-2xl w-[100%] h-[100%] object-cover" />
</div>

<div className="max-w-[100%]">
<img src={renderItems.picture.second} alt="" className="rounded-2xl w-[100%] h-[100%] object-cover" />
</div>

<div className="max-w-[100%]">
<img src={renderItems.picture.Third} alt="" className="rounded-2xl w-[100%] h-[100%] object-cover" />
</div>

<div className="max-w-[100%]">
<img src={renderItems.picture.fore} alt="" className="rounded-2xl w-[100%] h-[100%] object-cover" />
</div>


</Carousel>


<p className="text-sm">{renderItems.description}</p>

</div>



<div className="flex flex-col gap-5 p-9 lg:justify-start smartphone:flex smartphone:items-center smartphone:justify-center">

<div className="flex items-center gap-6 ">
<p className="bg-[#000] rounded-xl p-3 text-sm">{renderItems.plateform}</p>
<p>{renderItems.title}</p>
</div>

<div className="text-left flex items-center gap-24">
<p className="font-bold">{renderItems.price}</p>
<LogoMobileMoney/>
</div>
<UserBuy/>
</div>



</section>

)}
</>
);


// const idemItems = () => {


// };




return (
<body className="bg-[#1e1b4b]" >
<Header/>

<div className="lg:flex smartphone:block">
<Sidebar/>
<div className="bg-[#242465] lg:mr-24">

<div className="lg:flex lg:items-center lg:justify-center smartphone:mr-[2em] ml-[0.4em]">
{buyItems()}
</div>

{/* {idemItems()} */}
<IdemItems/>

</div>

</div>

<Footer/>

</body>
);
}

export default Buy;
