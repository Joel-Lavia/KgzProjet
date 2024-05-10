import { useForm } from "react-hook-form"
import { logo } from "../components/Header";

function Login({open,close,openSignUp}) {

if(!open){
  return null
}
const {register,handleSubmit,formState:{errors}} = useForm();
const onSubmit = (data) => console.log(data);
  return(
<section className="fixed inset-0  z-[1] backdrop-blur">

{/*login form*/}

<form onSubmit={handleSubmit(onSubmit)} className="bg-[#010135] fixed z-[1] lg:left-0 lg:top-32 lg:right-0 lg:bottom-[18em] lg:flex lg:flex-col gap-5 lg:justify-center lg:place-items-center  lg:m-auto lg:w-[25%] rounded-xl smartphone:m-au smartphone:w-[80%] smartphone:p-2 smartphone:top-[3em] smartphone:bottom-[9em] smartphone:justify-center smartphone:place-items-center smartphone:flex smartphone:flex-col smartphone:right-[1.6em] md:right-[4em]">

<div className="flex items-center gap-5">
<img src= {logo} alt="logo KGZ" className="max-w-14 rounded-full" />
<h2>Login</h2>

 <div className="text-white top-4 left-10 absolute bg-[#242465] flex items-center justify-center hover:text-red-600  rounded-full w-9 h-9">
 <button onClick={close}>X</button>
 </div>
</div>

<p>
<input {...register("Email",{required:true})} placeholder="Email" className="bg-[#1C1C78] p-3  rounded-xl focus:outline-none lg:w-[25em] smartphone:w-full md:w-[25em]" />
{errors.Email && <p className="text-red-600">Email required</p>}
</p>

<p>
<input {...register("Password",{required:true})} placeholder="Password" className="bg-[#1C1C78] p-3  rounded-xl focus:outline-none lg:w-[25em] smartphone:w-full md:w-[25em]" />
{errors.Password && <p className="text-red-600">Password required</p>}
</p>

<button type="submit" className="bg-[#0F7013] p-3  rounded-xl  lg:w-[25em] smartphone:w-full md:w-[25em]">Login</button>
<span className="hover:underline" onClick={openSignUp} >Sing up now</span>

 </form>

{/*login form*/}
</section>
  )  
}
export default Login
