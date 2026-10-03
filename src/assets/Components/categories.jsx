import React, { useState } from 'react'
import products from '../../data/product';
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";


export const Category = () => {


    const navigate = useNavigate();

    const categories = [
        {
            name: "Men",
            image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Women",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Shoes",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Accessories",
            image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80"
        }



    ];

    return (
        <section className='px-6 py-12 lg:px-10'>
            <div>
                <p className=" mb-2 text-sm font-bold uppercase tracking-[0.2em] text-green-500 ">Explore Collection</p>
                <h2 className='text-3xl font-black text-slate-900 sm:text-4xl'>
                    Shop by Category
                </h2>

                <p className="mt-2 text-sm text-slate-500">Find your perfect match and explore our collections</p>
            </div>






            <div className='mx-auto grid max-w-[1500px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>

                {categories.map((category) => (

                    <button
                        key={category.name} onClick={() => navigate(`/category/${category.name}`)}
                        className='group relative h-[300px] overflow-hidden rounded-2xl text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'>
                        <img src={category.image} alt={category.name}
                            className=" absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 " />

                        <div
                            className='absolute bottom-0 left-0 right-0 flex items-end justify-between p-6'>
                            <div>
                                <p className=" mb-1 text-xs font-semibold uppercase tracking-widest text-green-400 ">Explore</p>
                                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                            </div>


                        </div>

                        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white'>



                            <ArrowRight size={25}
                            className= "transition-transform   duration-300 group-hover:translate-x-1" />

                        </div>

                    


                    </button>

                ))}
            </div>



        </section>
    );
};

export default Category;