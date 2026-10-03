import products from "../data/product";
import { ProductCard } from "../assets/Components/productCard";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {


    const { category } = useParams();


    const filteredProducts = products.filter(
        (products) => products.category === category
    );

    return (
        <section className="px py-10">
            <div className="mx-auto max-w-[1500px]">
                <div className="mb-8"> <p className=" text-sm font-bold uppercase tracking-[0.2em] text-green-500 "> Category </p>

                    <h2 className="mt-1 text-3xl font-black capitalize text-slate-900">{category}</h2>
                    <p className=" mt-2 text-sm text-slate-500">{filteredProducts.length} products available</p>
                </div>


                {filteredProducts.length > 0 ? (
                    <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 " >
                        {filteredProducts.map((products) => (
                            <ProductCard
                                key={products.id}
                                product={products}
                            />


                        ))}




                    </div>



                ) : (
                <div className=" rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-20 text-center "  >
                    <h3 className=" text-xl font-bold text-slate-700 "> No products found </h3>
                    <p className=" mt-2 text-sm text-slate-500 "> There are currently no products in this category. </p>
                </div>
               )}

            </div>
        </section>
    );
};
export default CategoryProducts;