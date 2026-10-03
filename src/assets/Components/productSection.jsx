import product from "../../data/product";
import { ProductCard } from "./productCard";





 const ProductSection = () => {
  return (
      
<section  className=" px-6 py-12 lg:px-10 ">
 
<div className="
                mx-auto
                mb-8
                max-w-[1500px]
            ">

                <p className="
                    mb-2
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-green-500
                ">
                    Featured Collection
                </p>


                <h2 className="
                    text-3xl
                    font-black
                    text-slate-900
                    sm:text-4xl
                ">
                    Featured Products
                </h2>


                <p className="
                    mt-2
                    text-sm
                    text-slate-500
                ">
                    Discover our most popular products.
                </p>

            </div>



    <div className=" mx-auto grid max-w-[1500px] grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {product.slice(0,5).map((product) => (

            

            <ProductCard
               key={product.id}
               product={product}>

            </ProductCard>
         ))}


    </div>

    </section>
  );
};


export default ProductSection;
