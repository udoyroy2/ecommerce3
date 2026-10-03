import React from 'react'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronDown, ArrowRight, ChevronRight } from 'lucide-react';

const OfferCarousel = () => {


    const images = [
        {
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80',
            smallText: "LIMITED TIME OFFER",
            title: "Up to 50% Off",
            description: "Discover amazing deals on our latest collection.",
        },


        {
            image: 'https://res.cloudinary.com/nei9se6v/image/upload/v1788880091/CSMOVSRT7609_3_52eadbc3-3c06-4480-abda-47bf3a54c0dd.webp',
            smallText: "NEW ARRIVALS",
            title: "Buy 1 Get 1 Free",
            description: "Mix and match your favorite styles today.",
        },



        {
            image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80',
            smallText: "CLEARANCE EVENT",
            title: "Starting at 1080TK",
            description: "Grab your favorite pieces before they're gone."
        }


    ];

    const [currentIndex, setCurrentIndex] = useState(0);



    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevSlide) => {
                if (prevSlide === images.length - 1) {
                    return 0;
                }

                return prevSlide + 1;
            });
        }, 5000);

        return () => clearInterval(timer);
    }, []);



    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === images.length - 1) {
                return 0;
            }
            return prevIndex + 1;
        });

    };




    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return images.length - 1;
            }
            return prevIndex - 1;
        });
    };


    const goToSlide = (index) => {
        setCurrentIndex(index);
    };


    const currentSlide = images[currentIndex];






    return (
        <section className="w-full px-4 py-6 sm:px-6 lg:px-10">
            <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-3xl shadow-2xl">
                <img src={images[currentIndex].image} alt={images[currentIndex].title}
                    className="h-[430px] w-full object-cover transition-all duration-700 sm:h-[500px] lg:h-[580px]" />



                <div className=" absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent ">
                    <div className=" absolute inset-0 flex items-center ">
                        <div className=" max-w-xl px-7 text-white sm:px-12 lg:px-20 ">


                            <p className=
                                'mb-3 text-xs font-bold tracking-[0.25em] text-green-400 sm:text-sm'>
                                {currentSlide.smallText} </p>


                            <h2 className='max-w-lg text-4xl font-black leading-tight sm:text-5xl lg:text-7xl'>
                                {currentSlide.title}
                            </h2>

                            <p className='mt-5 max-w-md text-sm leading-6 text-slate-200 sm:text-base'>
                                {currentSlide.description}
                            </p>



                            <button className=" mt-7 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-900/30 transition duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-xl ">
                                Shop Now
                                <ArrowRight size={18}
                                    className='transition group-hover:translate-x-1' />
                            </button>

                        </div>
                    </div>


                    <button onClick={prevSlide}
                        aria-label="Previous slide"
                        className=" absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition hover:scale-110 hover:bg-green-500 sm:left-6 ">
                        <ChevronLeft size={24} />
                    </button>



                    <button
                        onClick={nextSlide}
                        aria-label="Next slide"

                        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition hover:scale-110 hover:bg-green-500 sm:right-6">
                        <ChevronRight size={24} />
                    </button>



                    <div className=" absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 ">

                        {images.map((_, index) => (
                            <button key={index} onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-2.5 rounded-full transition-all duration-300
                                ${currentIndex === index ? 'bg-emerald-600' : 'bg-white/50 hover:bg-green-300'}`}>
                            </button>
                        ))}

                    </div>



                </div>


         </div>
        
    </section>

)


};

export default OfferCarousel;