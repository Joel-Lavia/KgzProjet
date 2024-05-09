// import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import data from "../data/Data.json"
import {SmallBuyBtn } from "./Buy";


function Articles() {
return (
<div className="flex justify-center items-center lg:p-8 smartphone:p-4">
<section className="grid grid-cols-1 smartphone:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
{data &&
data.Articles.map((allArticles) => (
<div key={allArticles.id} className="bg-[#010135] p-4 rounded-3xl flex flex-col items-center justify-center">
<div className="flex items-center justify-center gap-2 p-2 max-w-xs overflow-hidden">
  <p className="bg-[#000] rounded-xl p-3 text-sm sm:text-sm text-center">{allArticles.plateform}</p>
  <NavLink to={`items/${allArticles.id}`}><p className="text-xs sm:text-sm text-center">{allArticles.title}</p></NavLink>
</div>

  <div className="smartphone:w-[150px] smartphone:h-[120px] sm:w-[200px] sm:h-[160px] md:w-[220px] md:h-[180px] lg:w-full lg:h-[230px] overflow-hidden">
    <NavLink to={`items/${allArticles.id}`} ><img src={allArticles.picture.First} className="rounded-2xl w-full h-full lg:w-full lg:h-full" alt="" /></NavLink>
  </div>

<div className="flex justify-center items-center gap-3 relative p-2">
  <p className="text-xs sm:text-sm">{allArticles.price}</p>
  <SmallBuyBtn buyDynamique={`items/${allArticles.id}`} />
</div>
</div>
))}
</section>
</div>
);
}

export default Articles;

