import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/product";
import { useState } from "react";
import {
    ShoppingCart, CreditCard,
    ArrowLeft,
    ShieldCheck,
    Truck,
    Section,
} from "lucide-react";




const ProductDetails = () => {
    const { id } = useParams();


    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState("");

    const product = products.find(
        (product) => product.id === Number(id)
    );

    if (!product) {
        return (
            <div className=" flex min-h-[60vh] flex-col  items-center justify-center px-6 text-center">
                <h2 className="text-2xl font-black text-slate-900">Product Not Found</h2>

                <p className=" mt-2 text-slate-500">
                    The product you are looking for does not exist. </p>


                <button onClick={() => navigate("/")}
                    className="mt-6 rounded-full bg-green-500  px-6 py-3 font-bold text-white transition hover:bg-green-600  " >Back to Home  </button>

            </div>
        );
    }

    const hanleAddtoCart = () => {
        if (!selectedSize) {
            alert("Please Select a Size");
            return;
        }

        const cart = JSON.parse(localStorage.getItem("cart")) || [];


        const existingProduct = cart.find(
            (item) => item.id === product.id && item.selectedSize === selectedSize
        );

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {

            cart.push({
                ...product,
                selectedSize,
                quantity: 1,
            });


        }

        localStorage.setItem("cart", JSON.stringify(cart));

        window.dispatchEvent(new Event("cartUpdated"));

        alert("Product added to cart");

    };

    const hanleOderNow = () => {
        navigate("/checkout");
    };


    return (
        <section className=" bg-slate-50 px-6 py-10 lg:px-10">
            <div className="mx-auto mb-6 max-w-[1400px]">

                <button
                    onClick={() => navigate(-1)}
                    className=
                    " flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-green-600">
                    <ArrowLeft size={16} />
                    Back
                </button>
            </div>

            <div className="mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2">

                    <div className="
                        relative
                        bg-slate-100">


                        <img
                            src={product.image}
                            alt={product.name}
                            className=" h-[450px] w-full object-cover lg:h-[600px]" />


                        <div className="absolute left-6 top-6 rounded-full  bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-widest  text-green-600 shadow backdrop-blur"> {product.category}</div>
                    </div>
                    <div className="
                        flex
                        flex-col
                        p-6
                        lg:p-10 ">

                        <h1 className="text-3xl font-black leading-tight text-slate-900 lg:text-4xl">
                            {product.name}

                        </h1>

                        <div className="mt-4 text-3xl font-black text-green-600">
                            {product.price}

                        </div>

                        <div className="
                            my-6
                            grid
                            grid-cols-1
                            gap-3
                            border-y
                            border-slate-200
                            py-5
                            sm:grid-cols-2
                        ">


                            <div className="
                                flex
                                items-center
                                gap-3
                            ">

                                <div className="
                                    rounded-full
                                    bg-green-100
                                    p-2
                                    text-green-600
                                ">

                                    <Truck size={18} />

                                </div>

                                <div>

                                    <p className="
                                        text-sm
                                        font-bold
                                        text-slate-800
                                    ">
                                        Fast Delivery
                                    </p>

                                    <p className="
                                        text-xs
                                        text-slate-500
                                    ">
                                        Nationwide delivery
                                    </p>

                                </div>

                            </div>


                            <div className="
                                flex
                                items-center
                                gap-3
                            ">

                                <div className="
                                    rounded-full
                                    bg-green-100
                                    p-2
                                    text-green-600
                                ">

                                    <ShieldCheck size={18} />

                                </div>

                                <div>

                                    <p className="
                                        text-sm
                                        font-bold
                                        text-slate-800
                                    ">
                                        Quality Guaranteed
                                    </p>

                                    <p className="
                                        text-xs
                                        text-slate-500
                                    ">
                                        Checked before delivery
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div>

                            <h2 className="
                                mb-3
                                text-lg
                                font-black
                                text-slate-900
                            ">
                                Size Details
                            </h2>


                            <div className="
                                overflow-hidden
                                rounded-xl
                                border
                                border-slate-200
                            ">

                                <div className="
                                    grid
                                    grid-cols-4
                                    bg-slate-100
                                    px-4
                                    py-3
                                    text-xs
                                    font-bold
                                    text-slate-600
                                ">

                                    <span>Size</span>
                                    <span>Length</span>
                                    <span>Chest</span>
                                    <span>Sleeve</span>

                                </div>


                                <div className="
                                    divide-y
                                    divide-slate-200
                                    text-sm
                                    text-slate-600
                                ">

                                    <div className="grid grid-cols-4 px-4 py-3">
                                        <span className="font-bold text-slate-800">S</span>
                                        <span>25"</span>
                                        <span>38"</span>
                                        <span>8.5"</span>
                                    </div>

                                    <div className="grid grid-cols-4 px-4 py-3">
                                        <span className="font-bold text-slate-800">M</span>
                                        <span>26"</span>
                                        <span>40"</span>
                                        <span>9"</span>
                                    </div>

                                    <div className="grid grid-cols-4 px-4 py-3">
                                        <span className="font-bold text-slate-800">L</span>
                                        <span>27"</span>
                                        <span>42"</span>
                                        <span>9.5"</span>
                                    </div>

                                    <div className="grid grid-cols-4 px-4 py-3">
                                        <span className="font-bold text-slate-800">XL</span>
                                        <span>28"</span>
                                        <span>44"</span>
                                        <span>10"</span>
                                    </div>

                                    <div className="grid grid-cols-4 px-4 py-3">
                                        <span className="font-bold text-slate-800">XXL</span>
                                        <span>29"</span>
                                        <span>46"</span>
                                        <span>10.5"</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="mt-6">

                            <label
                                htmlFor="size"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-bold
                                    text-slate-800
                                "
                            >
                                Select Size
                            </label>


                            <select
                                id="size"

                                value={selectedSize}

                                onChange={(e) =>
                                    setSelectedSize(e.target.value)
                                }

                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-300
                                    bg-white
                                    px-4
                                    py-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-green-500
                                    focus:ring-2
                                    focus:ring-green-100
                                    sm:w-56
                                "
                            >

                                <option value="">
                                    Select Size
                                </option>

                                <option value="S">S</option>

                                <option value="M">M</option>

                                <option value="L">L</option>

                                <option value="XL">XL</option>

                                <option value="XXL">XXL</option>

                            </select>

                        </div>

                        <div className="
                            mt-6
                            flex
                            flex-col
                            gap-3
                            sm:flex-row
                        ">


                            <button
                                onClick={hanleAddtoCart}

                                className="
                                    flex
                                    flex-1
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-green-500
                                    px-6
                                    py-3
                                    font-bold
                                    text-white
                                    transition-all
                                    hover:bg-green-600
                                    hover:shadow-lg
                                    hover:shadow-green-200
                                    active:scale-95
                                "
                            >

                                <ShoppingCart size={19} />

                                Add to Cart

                            </button>



                            <button
                                onClick={hanleOderNow}

                                className="
                                    flex
                                    flex-1
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-slate-900
                                    px-6
                                    py-3
                                    font-bold
                                    text-white
                                    transition-all
                                    hover:bg-slate-700
                                    active:scale-95
                                "
                            >

                                <CreditCard size={19} />

                                Order Now

                            </button>

                        </div>

                        <div className="
                            mt-8
                            border-t
                            border-slate-200
                            pt-6
                        ">

                            <h2 className="
                                mb-4
                                text-xl
                                font-black
                                text-slate-900
                            ">
                                Product Details
                            </h2>


                            <div className="
                                space-y-2
                                text-sm
                                leading-6
                                text-slate-600
                            ">

                                <p>
                                    <strong className="text-slate-800">
                                        Colour:
                                    </strong>{" "}
                                    Deep Navy Blue
                                </p>

                                <p>
                                    <strong className="text-slate-800">
                                        Style:
                                    </strong>{" "}
                                    Unisex
                                </p>

                                <p>
                                    <strong className="text-slate-800">
                                        Sleeve:
                                    </strong>{" "}
                                    Full Sleeve
                                </p>

                                <p>
                                    <strong className="text-slate-800">
                                        Fit:
                                    </strong>{" "}
                                    Regular Fit
                                </p>

                                <p>
                                    <strong className="text-slate-800">
                                        Fabric:
                                    </strong>{" "}
                                    Premium cotton blend stripe fabric.
                                    Approx. GSM: 160–170 GSM
                                </p>

                                <p>
                                    <strong className="text-slate-800">
                                        Made in:
                                    </strong>{" "}
                                    Bangladesh
                                </p>

                            </div>

                        </div>

                        <div className="mt-6 border-t pt-5">

                            <p className="text-sm text-slate-500">
                                Please review our return, refund and exchange policies
                                before placing your order.
                            </p>

                            <button
                                onClick={() => navigate("/return-policy")}
                                className="mt-2 font-bold text-green-600 hover:text-green-700"
                            >
                                View Return & Refund Policy →
                            </button>


                            </div>
                          </div>
                         </div>
                     </div>

                    </section>
                    );
                     
};
                    export default ProductDetails;                   