import ArticleSection from "../components/ArticleSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Login from "./Login";
import SingUp from "./SingUp";

function Home(params) {
  return (
    <body className="bg-[#1e1b4b]">
      <Header />
      <div className="flex">
      <Sidebar />
      <ArticleSection />
      </div>
            <Login/>
            <SingUp/>
            <Footer/>  
    </body>
  );
}
export default Home;
