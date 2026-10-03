import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, CreditCard, Truck, ShoppingBag, } from "lucide-react";
import products from '../data/product';


const Checkoutpage = () => {

    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
    const [cart, setCart] = useState([]);



    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

        setCart(savedCart);
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const subtotal = cart.reduce(
        (sum, product) =>
            sum + product.price * product.quantity, 0
    );

    const deliveyCharge = cart.lenght > 0 ? 100 : 0;

    const total = subtotal + deliveyCharge;



    const handlePlaceOder = (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is Empty");
            return;
        }

        alert("Oder placed SuccessFully");
        localStorage.removeItem("cart");

        window.dispatchEvent(
            new Event("cartUpdated")
        );

        navigate("/")
    };





    return (
        <div className='min-h-screen bg-slate-50 py-10 px-4'>
            <div className='max-w-7xl mx-auto'>

                <div className='mb-8'>

                    <h1 className='"text-3xl md:text-4xl font-black text-slate-900'>Checkout</h1>
                    <p className="mt-2 text-slate-500">
                        Complete your delivery information
                        and place your order.
                    </p>
                </div>


                {cart.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center" >
                        <ShoppingBag size={50}
                            className='mx-auto text-slate-400' />

                        <h2 className='mt-5 text-2xl font-bold'> Your cart is empty </h2>

                        <p className='mt-2 text-slate-500'>
                            Add some products before going to checkout
                        </p>

                        <button onClick={() => navigate("/")}
                            className='mt-6 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl'>
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handlePlaceOder}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" >

                            <div className="lg:col-span-2">

                                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                    <h2 className='text-xl font-black text-slate-900 mb-6'>
                                        Delivery Information
                                    </h2>


                                    <div className='mb-5'>

                                        <label className='block font-semibold text-slate-700 mb-2'>
                                            Full Name
                                        </label>
                                        <div className='flex items-center border border-slate-300 rounded-xl px-4'>
                                            <span className='text-slate-400'>
                                                <MapPin size={22} />
                                            </span>

                                            <input type="text"
                                                name='name'
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder='Enter Your Name'
                                                required
                                                className='w-full border rounded-lg px-4 py-3 '
                                            />


                                        </div>


                                    </div>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                        <div>
                                            <label className='block font-semibold text-slate-700 mb-2'>
                                                Phone Number
                                            </label>

                                            <div className="flex items-center border border-slate-200 rounded-xl px-4">
                                                <Phone size={20}
                                                    className='text-slate-400' />

                                                <input type="tel"
                                                    name='phone'
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder='01xxxxxxxxx'
                                                    required
                                                    className='w-full px-3 py-3 outline-none'
                                                />
                                            </div>



                                        </div>
                                        <div>
                                            <label className='block font-semibold text-slate-700 mb-2'>
                                                Email
                                            </label>

                                            <div className="flex items-center border border-slate-200 rounded-xl px-4">
                                                <Mail size={20}
                                                    className='text-slate-400' />

                                                <input type="email"
                                                    name='email'
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder='example@gmail.com'
                                                    required
                                                    className='w-full px-3 py-3 outline-none'
                                                />
                                            </div>

                                        </div>

                                    </div>

                                    <div className='mt-5'>
                                        <label className="block font-semibold text-slate-700 mb-2">
                                            City
                                        </label>

                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Dhaka"
                                            required
                                            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-green-500"
                                        />
                                    </div>

                                    <div className='mt-5'>
                                        <label className="block font-semibold text-slate-700 mb-2">
                                            Delivery address
                                        </label>

                                        <textarea
                                            name="Address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder='Enter your full address'
                                            required
                                            row="4"
                                            className='w-full border border-slate-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-green-500'></textarea>

                                    </div>


                                    <div className='mt-5'>
                                        <label className='block font-semibold text-slate-700 mb-2'>Postal Code</label>

                                        <input type="text"
                                            name='PostalCode'
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            placeholder='1207 Search Google for your Area Postal Code'
                                            className='w-full md:w-1/2 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-green-500' />

                                    </div>

                                    <div className='mt-8'>

                                        <h2 className='text-xl font-black text-slate-900 mb-4'> Payment Method </h2>


                                        <div className='space-y-3'>
                                            <label className={`flex item-center gap-3 border p-4 rounded-lg cursor-pointer'${paymentMethod === "Cash on Delivery"
                                                ? "border-green-500 bg-green-50"
                                                : "border-slate-200"
                                                }`} >

                                                <input
                                                    type="radio"
                                                    value="Cash on Delivery"
                                                    checked={paymentMethod === "Cash on Delivery"}
                                                    onChange={(e) =>
                                                        setPaymentMethod(e.target.value)
                                                    }

                                                ></input>
                                                <div className="flex items-center gap-3">
                                                    <Truck size={20}
                                                        className='text-green-600' />
                                                    <div>

                                                        <p className='font-bold text-slate-900'>
                                                            Cash on Delivery
                                                        </p>


                                                        <p className='text-sm text-slate-500'>
                                                            Pay when your order arrives.
                                                        </p>

                                                    </div>

                                                </div>


                                            </label>

                                            <label className={`flex item-center gap-3 border p-4 rounded-lg cursor-pointer'${paymentMethod === "Online Payment"
                                                ? "border-green-500 bg-green-50"
                                                : "border-slate-200"
                                                }`} >

                                                <input
                                                    type="radio"
                                                    value="Online Payment"
                                                    checked={paymentMethod === "Online Payment"}
                                                    onChange={(e) =>
                                                        setPaymentMethod(e.target.value)
                                                    }

                                                ></input>

                                                <div className="flex items-center gap-3">
                                                    <CreditCard size={20}
                                                        className='text-green-600' />
                                                    <div>

                                                        <p className='font-bold text-slate-900'>
                                                            Online Payment
                                                        </p>


                                                    </div>

                                                </div>


                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </div >

                            <div>
                                <div className="sticky top-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

                                    <h2 className='text-xl font-black text-slate-900 mb-6'>
                                        Oder Summary </h2>


                                    <div className='space-y-4 mb-6'>
                                        {cart.map((product, index) => (

                                            <div key={`${product.id}-${index}`}
                                                className='flex gap-3'>

                                                <img src={product.image} alt={product.name}
                                                    className='w-16 h-16 rounded-lg object-cover' />

                                                <div className='flex-1'>
                                                    <p className='font-bold text-sm text-slate-900'>
                                                        {product.name}
                                                    </p>
                                                    {product.selectedSize && (
                                                        <p className='text-xs text-slate-500'>
                                                            Size : {product.selectedSize}
                                                        </p>
                                                    )}

                                                    <p className="text-xs text-slate-500">
                                                        Qty : {product.quantity}
                                                    </p>

                                                </div>

                                                <p className='font-bold text-sm'>
                                                    ৳{" "}
                                                    {product.price * product.quantity}   </p>


                                            </div>

                                        ))}


                                    </div>

                                    <div className='border-t border-slate-200 pt-4 '>

                                        <div className='flex justify-between mb-3'>
                                            <span className='text-slate-500'>
                                                Subtotal
                                            </span>

                                            <span className='font-semibold'>
                                                ৳ {subtotal}
                                            </span>

                                        </div>

                                        <div className='flex justify-between mb-3'>
                                            <span className='text-slate-500'>
                                                Delivery Charge
                                            </span>

                                            <span className='font-semibold'>
                                                ৳{deliveyCharge}
                                            </span>
                                        </div>


                                        <div className='border-t border-slate-200 pt-4 flex justify-between'>

                                            <span className='text-lg font-black'>
                                                Total
                                            </span>

                                            <span className='text-2xl font-black text-green-600'>
                                                ৳ {total}
                                            </span>


                                        </div>




                                    </div>



                                    <button type="submit"
                                        className='w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition'>
                                        Place Order
                                    </button>


                                    <button
                                        type="button"
                                        onClick={() => navigate("/cart")}
                                        className='w-full mt-3 border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50 transition'>
                                        Bace to Cart
                                    </button>

                                </div>


                            </div>
                        </div >

                    </form >

                )}


            </div >

        </div >


    );
};

export default Checkoutpage;
