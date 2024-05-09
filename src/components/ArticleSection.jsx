import Articles from "./Articles";
// import CarrousselImg from "./CarrousselImg";
import HeroSection from "./HeroSection";

function ArticleSection() {
  return (
    <section className="bg-[#242465] rounded-lg lg:mr-16 smartphone:pb-6">
    <HeroSection/> 
    <Articles/>
    </section>
  );
}
export default ArticleSection;
