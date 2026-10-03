import React from "react";
import { useSearchParams } from "react-router-dom";

import products from "../data/product";
import { ProductCard} from "../assets/Components/productCard";


const SearchResult = () => {

    const [searchParams] = useSearchParams();

    const query = searchParams.get("query") || "";

    const fp = products.filter((products)=>
    
    products.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );

    return (
    <div className="p-6">

        <h2 className="text-2xl font-bold mb-6">
            Search Results for : {query}
        </h2>

{fp.length === 0?(
    <p>
        No Products Found .
    </p>
):(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

   {fp.map((products) => (

   <ProductCard
   key={products.id}
   product={products}
   />

   ))}


</div>



)}






    </div>


    );


};

export default SearchResult;