import React from 'react'

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  Heart,
} from "lucide-react";





export const Navbar = () => {

  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const count = cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCartCount(count);
    };
    window.addEventListener
      ("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener
        ("cartUpdated",
          updateCartCount);
    };
  }, []);





  const handleSearch = () => {

    if (search.trim() === "") {
      return
    }

    navigate(`/search?query=${encodeURIComponent(search)}`);
  };





  return (



    <header className="sticky top-0 z-50 w-full border-b border-green-700 bg-stone-100 backdrop-blur-md shadow-sm">
      <div className=" mx-auto flex min-h-[80px] max-w-[1500px] items-center gap-8  px-6 lg:px-10">
        <h1 className="text-2xl font-bold text-green-600 ">Ecom</h1>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400"  >Online based shoping Platform</p>



        <nav className="hidden xl:block flex-1  " >
          <ul className="flex items-center justify-center gap-8 text-sm font-semibold text-sm text-slate-700">
            <li> <Link to="/"
              className="relative transition hover:text-green-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all hover:after:w-full"
            >home </Link></li>

            <li> <Link to="/category/Men"
              className="relative transition hover:text-green-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all hover:after:w-full"

            >Men </Link></li>
            <li> <Link to="/category/Women"
              className="relative transition hover:text-green-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all hover:after:w-full"

            >Women </Link></li>
            <li> <Link to="/category/Shoes"
              className="relative transition hover:text-green-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all hover:after:w-full"

            >Shoes 
            </Link></li>
            <li> <Link to="/category/Accessories"
              className="relative transition hover:text-green-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all hover:after:w-full">Accessories </Link></li>

            <li><a href='#'
              className="relative transition hover:text-green-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all hover:after:w-full"
            >contact </a></li>
            <li><a href='#'
              className="relative transition hover:text-green-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all hover:after:w-full"

            >about us </a></li>

          </ul>
        </nav>

        <div
          className=" hidden md:flex w-full max-w-[340px]
      items-center rounded-full border border-slate-200
      bg-slate-50 p-1 transition-all duration-300
      focus-within:border-green-400 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-green-700">        <Search
            size={30}
            className="ml-3 text-slate-400"
          />

          <input type="text"
            placeholder="Search Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full  bg-transparent px-3 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400">

          </input>


          <button
            onClick={handleSearch}
            className="
        rounded-full bg-gradient-to-r from-green-400 to-emerald-600 
        px-5
        py-2.5 text-sm font-bold text-white shadow-md shadow-green-300
        transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300 active:translate-y-0 "

          >Search</button>
        </div>


        <div className=" flex items-center gap-2 ml-auto  text-white">
          <Link to="/cart"
            className="group relative flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-green-200 hover:bg-green-50 hover:text-green-600" >

            <div className='relative'>
              <ShoppingBag size={22}
                className="transition group-hover:scale-110"
              />
              {cartCount > 0 && (
                <span className='absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-500 px-1 text-[10px] font-bold text-white ring-2 ring-white'>
                  {cartCount}
                </span>
              )}
            </div>

            <span className='hidden 2xl:inline'>Cart</span>
          </Link>

          <Link to="/Register"
            className="hidden lg:flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">

            <UserRound size={20} />
            <span>Register</span>
          </Link>

          <Link to="/Login"
            className=" flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-green-600 hover:shadow-lg hover:shadow-green-200">
            <UserRound size={20} />
            <span>Login</span>


          </Link>
        </div>

      </div>


    </header>










  )
}
