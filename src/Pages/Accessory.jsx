import Footer from "../components/Footer"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import WorkProgressPage from "../components/WorkProgressPage"

function Accessory(params) {
return(
    <body className="bg-[#1e1b4b]">
    <Header/>
    <div className="flex">
    <Sidebar/>
    <WorkProgressPage/>
    </div>
    <Footer/>
    </body>   
)
}
export default Accessory