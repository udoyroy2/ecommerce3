import { useState } from "react";
import {
    Mail, Lock, Eye, EyeOff, ArrowRight,
    Link,
} from "lucide-react";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handlelogin = (e) => {
        alert("Login Successful");
    };

    return (

        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl grid md:grid-cols-2">
                <div className="hidden md:flex relative bg-slate-900 text-white p-12 flex-col justify-between">

                <div>
                    <p className="text-3xl font-black">
                        Ecom<span className="text-green-500">.</span>
                    </p>

                    <p className="mt-4 text-slate-300 leading-7">
                        Welcome back! Login to continue shopping and manage your orders.
                    </p>

                </div>
                <div>
                    <h2 className="text-4xl font-black leading-tight">
                        Shop smarter <br />
                        Live better
                    </h2>

                    <p className="mt-5 text-slate-400">
                        Discover products, manage your cart and enjoy a simple shopping experience.
                    </p>

                </div>
                <p className="text-sm text-slate-500">
                    © 2026 Ecom. All rights reserved UR.
                </p>

            </div>

            <div className="p-7 sm:p-10 md:p-12">
                <div className="mb-8">
                    <h1 className="text-3xl font-black text-slate-900"> Welcome Back</h1>

                    <p className="mt-2 text-3xl font-black text-slate-900">
                        Login to your account to continue.
                    </p>


                </div>

                <form onSubmit={handlelogin}>
                    <div className="mb-5">
                        <label className="mb-2 block text-sm font-bold text-slate-700">
                            Email Address
                        </label>

                        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-green-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-500/10">
                            <Mail size={20}
                                className="text-slate-400" />


                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full bg-transparent px-3 py-3.5 text-slate-900 outline-none placeholder:text-slate-400" />



                        </div>


                    </div>

                    <div className="mb-3">
                        <label className="mb-2 block text-sm font-bold text-slate-700">
                            Password
                        </label>

                        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-green-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-500/10">
                            <Lock size={20}
                                className="text-slate-400" />


                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                className="w-full bg-transparent px-3 py-3.5 text-slate-900 outline-none placeholder:text-slate-400" />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                } className="text-slate-400 transition hover:text-green-600"
                            >
                                {showPassword ? (
                                    <EyeOff size={19} />
                                ) : (
                                    <Eye size={19} />
                                )}

                            </button>

                            </div>
                            </div>



<div className="mb-7 flex justify-end">
    <button type="button"
    className="text-sm font-semibold text-green-600 hover:text-green-700">
        Forgot Password ?
    </button>
</div>


<button type="submit"
className="group flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3.5 font-bold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:bg-green-600 hover:shadow-xl">
    Login <ArrowRight size={19}
    className="transition-transform duration-300 group-hover:translate-x-1"></ArrowRight>
</button>
   </form>


<div className="mt-7 text-center text-sm text-slate-500">
    Don't have an account?{""}

<Link to="/register"
className="font-bold text-green-600 hover:text-green-700">
    Create Account
</Link>
</div>


<p className="mt-8 text-center text-xs leading-5 text-slate-400">
    By countinuing , you agree to out {""}

    <Link 
    to="return-policy"
    className="font-semibold text-slate-600 hover:text-green-600">
        Terms And Condition 
    </Link>
</p>


  </div>
                
 </div >
</div>


    );
};
export default Login;