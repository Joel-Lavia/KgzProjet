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

<form onSubmit={handleSubmit(onSubmit)} className="bg-[#010135] fixed z-[1] left-0 top-32 right-0 bottom-[18em] flex flex-col gap-5 justify-center place-items-center m-auto w-[25%] rounded-xl">

<div className="flex items-center gap-5">
<img src= {logo} alt="logo KGZ" className="max-w-14 rounded-full" />
<h2>Login</h2>

 <div className="text-white top-4 left-10 absolute bg-[#242465] flex items-center justify-center hover:text-red-600  rounded-full w-9 h-9">
 <button onClick={close}>X</button>
 </div>
</div>

<p>
<input {...register("Email",{required:true})} placeholder="Email" className="bg-[#1C1C78] p-3  rounded-xl focus:outline-none w-[25em]" />
{errors.Email && <p className="text-red-600">Email required</p>}
</p>

<p>
<input {...register("Password",{required:true})} placeholder="Password" className="bg-[#1C1C78] p-3  rounded-xl focus:outline-none w-[25em]" />
{errors.Password && <p className="text-red-600">Password required</p>}
</p>

<button type="submit" className="bg-[#0F7013] p-3  rounded-xl focus:outline-none w-[25em]">Login</button>
<span className="hover:underline" onClick={openSignUp} >Sing up now</span>

 </form>

{/*login form*/}
</section>
  )  
}
export default Login
