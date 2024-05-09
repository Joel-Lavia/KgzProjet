import data from "../data/Data.json";
import { useParams } from "react-router-dom";
import { SmallBuyBtn } from "./Buy";


function IdemItems() {

  const { itemsId } = useParams();
  const renderItems = data.Articles.find((allItems) => allItems.id == itemsId );
    
    if (!renderItems) {
        return (
            <p className="text-red-700 flex items-center justify-center">
                items not exist
            </p>
        );
    }


const platform = renderItems.plateform;

const itemsWithSamePlatform = data.Articles.filter((item) => item.plateform === platform);
    
return (
<>

<div className="flex justify-center items-center lg:p-8 smartphone:p-4">

<section className="grid grid-cols-1 smartphone:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">


{itemsWithSamePlatform.map((item) => (


<div key={item.id} className="bg-[#010135] p-4 rounded-3xl flex flex-col items-center justify-center">

<div className="flex items-center justify-center gap-2 p-2 max-w-xs overflow-hidden">
<p className="bg-[#000] rounded-xl p-3 text-xs sm:text-sm text-center lg:text-sm">{item.plateform}</p>
<p className="text-xs sm:text-sm text-center">{item.title}</p>
</div>

<div className="smartphone:w-[150px] smartphone:h-[120px] sm:w-[200px] sm:h-[160px] md:w-[220px] md:h-[180px] lg:w-full lg:h-[230px] overflow-hidden">
<img src={item.picture.First} className="rounded-2xl w-full h-full lg:w-full lg:h-full" alt="" />
</div>

<div className="flex justify-center items-center gap-3 relative p-2">
<p>{item.price}</p>
<SmallBuyBtn/>
</div>

</div>
))}

    
</section>


</div>

</>
);
}


export default IdemItems;
