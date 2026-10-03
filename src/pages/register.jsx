import { useState} from "react";
import { UserRound,Mail, Lock , Eye,EyeOff,ArrowRight, } from "lucide-react";
import {Link} from "react-router-dom";

const Register = () => {
 const [name, setName] = useState("");
 const [email, setemail] = useState("");
 const [password, setpassword] = useState("");


const [showPassword, setShowPassword] = useState(false);

 const handelRegister = (e) => {
  e.preventDefault();

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
 };

 
return(
    <div className= "min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 px-6 py-12">


            <div className=" mx-auto  flex  min-h-[650px] max-w-5xl overflow-hidden rounded-3xl  bg-white shadow-2xl">


 <div className="hidden w-1/2 flex-col justify-between bg-slate-900 p-10  text-white lg:flex">

<div>  

<p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400" > 
Welcome to ECOM
</p>

<h1 className="mt-4 text-5xl font-black leading-tight">
Create your <br/>account</h1>

<p className="mt-5 max-w-md leading-7 text-slate-300">
 Join our shopping platform and discover the latest fashion, accessories and  exclusive collections.
</p>


  </div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">

 <p className="text-sm font-semibold text-slate-300" >
  "Your style, your choice "
 </p>

<p className="mt-2 text-xs text-slate-500">
  Shop smarter . Shop better
</p>



 </div>



</div>

<div className="w-full p-6 sm:p-10 lg:w-1/2">
<div className="mb-8">

<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600">
 <UserRound size={20} />

</div>
<h2 className="text-3xl font-black text-slate-900">Create Account</h2>

<p className="mt-2 text-sm text-slate-500">
  Create your account to start shopping.
</p>

</div>

 <form 
  onSubmit={handelRegister}

  className="space-y-5">

<div>
<label className=" mb-2 block text-sm font-bold text-slate-700">
Full Name
</label>

<div className="flex items-center  rounded-xl  border border-slate-300  bg-slate-50  px-4  transition focus-within:border-green-500  focus-within:bg-white  focus-within:ring-2 focus-within:ring-green-100">
<UserRound size ={19}
className="text-slate-400"/>

<input 
type="text" value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Name"
className="w-full bg-transparent px-3 py-3 text-sm text-slate-900 outline-none"required
 
            

/> 
</div>
</div>
    
<div>

<label className=" mb-2 block text-sm font-bold text-slate-700">
Email Address
</label>
<div className="flex items-center  rounded-xl  border border-slate-300  bg-slate-50  px-4  transition focus-within:border-green-500  focus-within:bg-white  focus-within:ring-2 focus-within:ring-green-100">
<Mail  size ={19}
className="text-slate-400"/>

<input 
type="text" value={email}
onChange={(e) =>setemail(e.target.value)}
placeholder="Enter your email"
className="w-full bg-transparent px-3 py-3 text-sm text-slate-900 outline-none"required />

</div>

</div>
<div>

<label className=" mb-2 block text-sm font-bold text-slate-700">
Password
</label>
<div className="flex items-center  rounded-xl  border border-slate-300  bg-slate-50  px-4  transition focus-within:border-green-500  focus-within:bg-white  focus-within:ring-2 focus-within:ring-green-100">
<Lock  size ={19}
className="text-slate-400"/>

<input 
type={
  showPassword
  ? "text"
  : "password"
} value={password}
onChange={(e) =>setPassword(e.target.value)}
placeholder="Create a password"
className="w-full bg-transparent px-3 py-3 text-sm text-slate-900 outline-none"
required minLength={6}/>



<button 
type="button"
onClick={()=>
  setShowPassword(
    !showPassword
  )
} className="text-slate-400 transition hover:text-green-600"
>
{showPassword?(
  <EyeOff size={19}/>
):(
  <Eye size={19}/>
)}

</button>


</div>

</div>


<button 
type="submit"
className="flex w-full  items-center  justify-center gap-2  rounded-xl  bg-green-500 px-6  py-3.5 font-bold  text-white  shadow-lg  shadow-green-200  transition-all  hover:bg-green-600 hover:shadow-xl active:scale-[0.98]">
Create Account <ArrowRight size = {19}/>
     
</button>

  </form>

<p className="mt-6 text-center text-sm text-slate-500">
  Already have an account

  <Link to="/Login"
  className="mt-1 font-bold text-green-600 hover:text-green-700"> 
  Login
  
  </Link>
</p>

<p className="mt-5 text-center text-xs leading-5 text-slate-400">
  By creating an account , you agree to our{""}
  <Link
  to="/return-policy"
  className="text-green-600 hover:underline">
    terms and Condition
  </Link>
</p>


</div>




</div>


</div>
);

};

export default Register;
