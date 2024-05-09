import {LargeBuy} from "./Buy";
// import CarrousselImg from "./CarrousselImg";
import {Largesell} from "./Sell";

function HeroSection() {

return(
<section className="bg-heroImg lg:bg-cover lg:bg-center lg:min-h-screen  lg:bg-fixed rounded-xl lg:flex items-center lg:justify-around lg:gap-96 smartphone:bg-cover smartphone:bg-center smartphone:min-h-[40vh]  smartphone:flex smartphone:justify-center">

<div className="flex items-center gap-10 lg:pt-[21em] ml-8 smartphone:flex smartphone:justify-end smartphone:ml-8 smartphone:gap-2 smartphone:pt-[12em]">
  <LargeBuy/>
  <Largesell/>
</div>
<p className="lg:text-3xl leading-[2em] lg:text-wrap  smartphone:text-wrap smartphone:text-[0.8em] smartphone:leading-[1.6em]">Turn Your Passion into Profit <br/> Sell Your Games and Accessories Here!</p>

{/* <CarrousselImg/> */}

</section>
  )  
}
export default HeroSection;