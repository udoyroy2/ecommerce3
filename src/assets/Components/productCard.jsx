import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';

export const ProductCard = ({ product }) => {

    const navigate = useNavigate();



    const addtocard = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];


        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {

            cart.push({
                ...product,
                quantity: 1,
            });
        }


        localStorage.setItem("cart", JSON.stringify(cart));

        window.dispatchEvent(new Event("cartUpdated"));

        alert("Product added to cart");

    };



    const OderNow = () => {
        navigate("/checkout");


    };

    const openProductDetails = () => {
        navigate(`/product/${product.id}`);
    }




    return (
        <div className=' group
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl' >
            <div onClick={openProductDetails} className='relative h-64 cursor-pointer overflow-hidden '>

                <img

                    src={product.image}
                    alt={product.name}

                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110"/>



                <div className='absolute
                    inset-0
                    bg-black/0
                    transition
                    duration-300
                    group-hover:bg-black/10'>

                    <div className="
                    absolute
                    bottom-4
                    left-1/2
                    flex
                    -translate-x-1/2
                    translate-y-16
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-slate-800
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                "> View Details <ArrowRight size={18} /> </div>
                </div>
            </div>
            <div className='p-5'>

                <p className=" mb-1 text-xs font-bold uppercase tracking-widest text-green-500">{product.category}</p>


                <h2
                    onClick={openProductDetails}


                    className='cursor-pointer truncate text-lg font-bold text-slate-900 transition hover:text-green-600'>
                    {product.name}
                </h2>

                <div className="mt-2 text-xl font-black text-slate-900 "> ৳ {product.price}</div>



                <div className=' mt-5 flex gap-2' >
                    <button
                        onClick={addtocard} className="
                             flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-emerald-600
                            px-3
                            py-2.5
                            text-sm
                            font-bold
                            text-white
                            shadow-sm
                            transition-all
                            duration-300
                            hover:bg-green-600
                            hover:shadow-lg
                            hover:shadow-green-200
                            active:scale-95 ">  <ShoppingCart size={20} /> Add to Cart </button>


                    <button
                        onClick={OderNow} className=" rounded-full bg-slate-900 px-4 py-2.5 text-sm font-bold text-white  transition-all duration-300 hover:bg-slate-700 active:scale-95 "> 
                          <ShoppingCart size={20} /> Order Now </button>
                     </div>

            </div>

        </div>


    );
}
