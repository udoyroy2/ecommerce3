import React from "react";
import {
    RotateCcw,
    CreditCard,
    RefreshCcw,
    FileText,
    Headphones,
} from "lucide-react";


const ReturnPolicy = () => {

    return (

        <section className="bg-slate-50 px-6 py-12 lg:px-10">

            <div className="mx-auto max-w-[1100px]">

                <div className="mb-10 text-center">

                    <p className="
                        mb-2
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-green-500
                    ">
                        Customer Care
                    </p>

                    <h1 className="
                        text-4xl
                        font-black
                        text-slate-900
                    ">
                        Return, Refund & Policies
                    </h1>

                    <p className="
                        mx-auto
                        mt-3
                        max-w-2xl
                        text-slate-500
                    ">
                        Please read our return, refund, exchange and
                        terms & conditions before placing your order.
                    </p>

                </div>
           <div className="
                    mb-6
                    rounded-2xl
                    bg-white
                    p-6
                    shadow-sm
                    lg:p-8
                ">

                    <div className="mb-5 flex items-center gap-3">

                        <div className="
                            rounded-xl
                            bg-green-100
                            p-3
                            text-green-600
                        ">
                            <RotateCcw size={22} />
                        </div>

                        <h2 className="
                            text-2xl
                            font-black
                            text-slate-900
                        ">
                            Return Policy
                        </h2>

                    </div>


                    <div className="
                        space-y-3
                        leading-7
                        text-slate-600
                    ">

                        <p>
                            Please open and check the product in front
                            of the delivery rider before accepting the
                            parcel.
                        </p>

                        <p>
                            Once the parcel has been delivered and
                            accepted, a refund will not be applicable.
                        </p>

                        <p>
                            Customers should contact customer support
                            within 24 hours of receiving the product
                            if there is a valid issue.
                        </p>

                    </div>

                </div>
   
                <div className="
                    mb-6
                    rounded-2xl
                    bg-white
                    p-6
                    shadow-sm
                    lg:p-8
                ">

                    <div className="mb-5 flex items-center gap-3">

                        <div className="
                            rounded-xl
                            bg-blue-100
                            p-3
                            text-blue-600
                        ">
                            <CreditCard size={22} />
                        </div>

                        <h2 className="
                            text-2xl
                            font-black
                            text-slate-900
                        ">
                            Refund Policy
                        </h2>

                    </div>


                    <div className="
                        space-y-3
                        leading-7
                        text-slate-600
                    ">

                        <p>
                            Refunds are not applicable after successful
                            delivery of the product.
                        </p>

                        <p>
                            If a product is delivered with a verified
                            manufacturing defect, please contact
                            customer support within 24 hours.
                        </p>

                        <p>
                            Any approved refund will be processed
                            according to the payment method and
                            applicable business policy.
                        </p>

                    </div>

                </div>

                <div className="
                    mb-6
                    rounded-2xl
                    bg-white
                    p-6
                    shadow-sm
                    lg:p-8
                ">

                    <div className="mb-5 flex items-center gap-3">

                        <div className="
                            rounded-xl
                            bg-purple-100
                            p-3
                            text-purple-600
                        ">
                            <RefreshCcw size={22} />
                        </div>

                        <h2 className="
                            text-2xl
                            font-black
                            text-slate-900
                        ">
                            Exchange Policy
                        </h2>

                    </div>


                    <div className="
                        space-y-4
                        leading-7
                        text-slate-600
                    ">

                        <p>
                            Exchange requests must be submitted within
                            <strong className="text-slate-900">
                                {" "}24 hours
                            </strong>
                            {" "}after receiving the product.
                        </p>


                        <div>

                            <p className="
                                mb-2
                                font-bold
                                text-slate-900
                            ">
                                Exchange is applicable only for:
                            </p>

                            <ul className="
                                list-disc
                                space-y-1
                                pl-6
                            ">

                                <li>
                                    Manufacturing defects
                                </li>

                            </ul>

                        </div>


                        <div>

                            <p className="
                                mb-2
                                font-bold
                                text-slate-900
                            ">
                                Exchange is not applicable for:
                            </p>

                            <ul className="
                                list-disc
                                space-y-1
                                pl-6
                            ">

                                <li>Change of mind</li>

                                <li>Personal preference</li>

                                <li>Colour expectations</li>

                                <li>Used or washed products</li>

                            </ul>

                        </div>


                        <div>

                            <p className="
                                mb-2
                                font-bold
                                text-slate-900
                            ">
                                Product condition:
                            </p>

                            <ul className="
                                list-disc
                                space-y-1
                                pl-6
                            ">

                                <li>
                                    Product must be unused.
                                </li>

                                <li>
                                    Product must be unwashed.
                                </li>

                                <li>
                                    Original tags and packaging must
                                    remain intact.
                                </li>

                            </ul>

                        </div>


                        <div className="
                            rounded-xl
                            bg-slate-50
                            p-4
                        ">

                            <p className="font-bold text-slate-900">
                                Exchange Fee
                            </p>

                            <p>
                                Outside & Sub-Dhaka: ৳150
                            </p>

                            <p>
                                Inside Dhaka: ৳100
                            </p>

                        </div>


                        <p className="font-semibold text-slate-900">
                            Only one exchange is allowed per order.
                        </p>

                    </div>

                </div>

                <div className="
                    mb-6
                    rounded-2xl
                    bg-white
                    p-6
                    shadow-sm
                    lg:p-8
                ">

                    <div className="mb-5 flex items-center gap-3">

                        <div className="
                            rounded-xl
                            bg-orange-100
                            p-3
                            text-orange-600
                        ">
                            <FileText size={22} />
                        </div>

                        <h2 className="
                            text-2xl
                            font-black
                            text-slate-900
                        ">
                            Terms & Conditions
                        </h2>

                    </div>


                    <ul className="
                        list-disc
                        space-y-3
                        pl-6
                        leading-7
                        text-slate-600
                    ">

                        <li>
                            Customers should provide accurate delivery
                            information when placing an order.
                        </li>

                        <li>
                            Product colours may vary slightly depending
                            on the customer's device or monitor.
                        </li>

                        <li>
                            Product availability may change without
                            prior notice.
                        </li>

                        <li>
                            Delivery time may vary depending on location
                            and courier service.
                        </li>

                        <li>
                            Customers are responsible for checking the
                            product before accepting the delivery.
                        </li>

                    </ul>

                </div>

                <div className="
                    rounded-2xl
                    bg-slate-900
                    p-6
                    text-white
                    shadow-sm
                    lg:p-8
                ">

                    <div className="flex items-start gap-4">

                        <div className="
                            rounded-xl
                            bg-green-500
                            p-3
                        ">

                            <Headphones size={24} />

                        </div>


                        <div>

                            <h2 className="
                                text-2xl
                                font-black
                            ">
                                Customer Support
                            </h2>

                            <p className="
                                mt-2
                                text-slate-300
                            ">
                                Have a question about your order,
                                return or exchange? Contact our
                                customer support team.
                            </p>


                            <div className="
                                mt-5
                                space-y-2
                                text-sm
                            ">

                                <p>
                                    📞 Phone: +880 1XXXXXXXXX
                                </p>

                                <p>
                                    ✉️ Email: support@ecom.com
                                </p>

                                <p>
                                    🕐 Support Hours: 10:00 AM – 8:00 PM
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </section>

    );
};


export default ReturnPolicy;