import React from 'react'
import { useEffect, useState } from 'react';
import products from '../data/product';

import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, } from 'lucide-react';


const Cartpage = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const updateCart = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );

        window.dispatchEvent(new Event("cartUpdated"));

    };

    const remove = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);

        updateCart(updatedCart);
    };


    const increaseQuantity = (index) => {
        const updatedCart = [...cart];

        updatedCart[index].quantity += 1;

        updateCart(updatedCart);

    };

    const decreaseQuantity = (index) => {
        const updatedCart = [...cart];

        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;


            updateCart(updatedCart);


        }


    };

    const total = cart.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
    );

    const deliveryCharge = cart.length > 0 ? 100 : 0;
    const subtotal = total + deliveryCharge;


    const handleCheckout = () => {
        navigate("/checkout")
    };




    return (
        <div className='min-h-screen bg-slate-50 py-10'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

                <div className='mb-8'>

                    <div className='flex items-center gap-3'>

                        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>

                            <ShoppingBag size={24}
                                className='text-green-600' />
                        </div>

                        <div>
                            <h1 className='text-3xl font-black text-slate-900'>
                                Shopping Cart
                            </h1>


                            <p className='mt-1 text-sm text-slate-500'>
                                Review your items before checkout
                            </p>

                        </div>

                    </div>

                </div>



            </div>


            {cart.length === 0 ? (
                <div className='rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm'>
                    <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100' >
                        <ShoppingBag size={30}
                            className='text-slate-400' />

                    </div>

                    <h2 className='mt-6 text-2xl font-bold text-slate-900'>
                        your cart is empty
                    </h2>

                    <p className='mt-2 text-slate-500'>
                        Looks like you haven't added anything to your cart yet.
                    </p>

                    <button onClick={() => navigate("/")}
                        className='mt-6 rounded-xl bg-green-500 px-6 py-3 font-bold'>
                        Continue Shopping
                    </button>


                </div>
            ) : (

                <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>

                    <div className='space-y-4 lg:col-span-2'>
                        {cart.map((product, index) => (
                            <div
                                key={`${product.id}-${product.selectedSize} || " default"}-${index}`}
                                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">

                                <div className='flex flex-col gap-5 sm:flex-row'>

                                    <div className="h-32 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:w-32" >

                                        <img src={product.image} alt={product.name}
                                            className='h-full w-full object-cover' />


                                    </div>


                                    <div className='flex-1'>
                                        <div className='ssName="flex flex-col justify-between gap-3 sm:flex-row'>


                                            <div>
                                                <p className='text-xs font-bold uppercase tracking-wider text-green-600'>
                                                    {product.category}
                                                </p>

                                                <h2 className='mt-1 text-xl font-bold text-slate-900'>
                                                    {product.name}
                                                </h2>

                                                {product.selectedSize && (
                                                    <p className='mt-1 text-sm text-slate-500'>
                                                        Size:{""}
                                                        <span className='font-semibold text-slate-700'>
                                                            {product.selectedSize}
                                                        </span>
                                                    </p>
                                                )}

                                            </div>


                                            <p className='text-xl font-black text-slate-900' >
                                                ৳ {product.price} </p>

                                        </div>

                                        <div className='mt-5 flex flex-wrap items-center justify-between gap-4'>
                                            <div className="flex items-center overflow-hidden rounded-xl border border-slate-200">

                                                <button onClick={() =>
                                                    decreaseQuantity(index)
                                                } className='flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-slate-100'>
                                                    <Minus size={19} />
                                                </button>

                                                <span className='flex h-10 w-10 items-center justify-center border-x border-slate-200 text-sm font-bold'>
                                                    {product.quantity}
                                                </span>


                                                <button onClick={() =>
                                                    increaseQuantity(index)
                                                } className='flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-slate-100'>
                                                    <Plus size={19} />
                                                </button>


                                            </div>

                                            <button
                                                onClick={() =>
                                                    remove(index)
                                                } className='flex items-center gap-2 text-sm font-semibold text-red-500 transition hover:text-red-600'>
                                                <Trash2 size={19} /> Remove
                                            </button>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}


                    </div>

                    <div className='lg:col-span 1'>
                        <div className='sticky top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                            <h2 className='text-xl font-black text-slate-900'>
                                Cart Summary
                            </h2>

                            <div className='mt-6 flex justify-between text-sm'>
                                <span className='text-slate-500'>
                                    Subtotal
                                </span>

                                <span className='font-semibold text-slate-900'>
                                    ৳ {total}
                                </span>
                            </div>


                            <div className='mt-4 flex justify-between text-sm'>
                                <span className='flex items-center gap-2 text-slate-500'>
                                    <Truck size={19} />
                                    Delivery
                                </span>
                            </div>

                            <div className='my-5 border-t border-slate-200'></div>

                            <div className='flex justify-between'>

                                <span className='text-lg font-bold text-slate-900'>
                                    ৳ {subtotal}
                                </span>


                            </div>

                            <button onClick={handleCheckout}
                                className='group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3.5 font-bold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-600'>
                                Checkout <ArrowRight size={19}
                                    className='transition-transform group-hover:translate-x-1' />
                            </button>

                            <button onClick={() => navigate("/")}
                                className='mt-3 w-full rounded-xl border border-slate-200 py-3 font-semibold text-slate-700 transition hover:bg-slate-50'>
                                Continue Shopping
                            </button>



                        </div>

                    </div>
                </div>

            )}





        </div>






    );
};
export default Cartpage;