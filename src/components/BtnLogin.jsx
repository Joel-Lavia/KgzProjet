import { useState } from "react";
import { MdOutlineLogin } from "react-icons/md";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";

function BtnLogin() {
// const [openloginpage, setOpenloginpage] = useState(false);
// const [openSunguppage, setOpenSunguppage] = useState(false);
// return(
//     <div>
//     <button onClick={()=>setOpenloginpage(true)} className="flex items-center gap-5 text-2xl">Login<span><MdOutlineLogin/></span></button>
//     <Login open = {openloginpage} close={()=>setOpenloginpage(false)}/>
//     <SingUp open ={openSunguppage} close={()=> setOpenSunguppage(false)}/>
//     </div>
// )


  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const openLogin = () => {
    setLoginOpen(true);
    setSignUpOpen(false);
  };

  const closeLogin = () => {
    setLoginOpen(false);
  };

  const openSignUp = () => {
    setLoginOpen(false);
    setSignUpOpen(true);
  };

  const closeSignUp = () => {
    setSignUpOpen(false);
  };

  return (
    <div>
      <button onClick={openLogin} className="flex items-center gap-5 text-2xl">
        Login<span><MdOutlineLogin/></span>
      </button>
      <Login open={loginOpen} close={closeLogin} openSignUp={openSignUp} />
      <SingUp open={signUpOpen} closeLogin={closeLogin} close={closeSignUp} />
    </div>
  );






}
export default BtnLogin

