import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/product";
import {
  Package,
  ShoppingCart,
  Users,
  Plus,
  ArrowLeft,
  Clock,
  DollarSign,
} from "lucide-react";

const Adminpage = () => {

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    oldprice: "",
    category: "",
    subCategory: "",
    brand: "Ecom",
    sizes: "",
    colour: "",
    stock: "",
    image: "",

  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,

    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6">



      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-8">

        <div className="bg-white rounded-lg shadow-md p-5">
          <Clock size={24} />
          <p className="text-gray-500 text-sm">Pending Orders</p>
          <h2 className="text-3xl font-bold mt-2">0</h2>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5">
          <Users size={24} />
          <p className="text-gray-500 text-sm">User</p>
          <h2 className="text-3xl font-bold mt-2">0</h2>
        </div>




        <div className="bg-white rounded-lg shadow-md p-5">
          <DollarSign size={24} />
          <p className="text-gray-500 text-sm">Revenue</p>

          <h2 className="text-3xl font-bold mt-2"> ৳ 0</h2>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5">
          <ShoppingCart size={24} />
          <p className="text-gray-500 text-sm">Oders</p>
          <h2 className="text-3xl font-bold mt-2">  0</h2>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5">
          <Package size={24} />
          <p className="text-gray-500 text-sm">Products</p>
          <h2 className="text-3xl font-bold mt-2"> ৳ 0</h2>
        </div>





      </div>













      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-6">
          Add Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label
              className="block font-semibold mb-2">
              Product Name
            </label>


            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Product name"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500"
            ></input>
          </div>

          <div>
            <label className="black font-semibold mb-2">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Enter Price of products"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500"
            />

          </div>

          <div>
            <label className="black font-semibold mb-2">
              Old Price
            </label>

            <input
              type="number"
              name="oldprice"
              value={form.oldprice}
              onChange={handleChange}
              placeholder="Enter Old Price of products"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500"
            />

          </div>

          <div>
            <label className="black font-semibold mb-2">
              Stocks
            </label>

            <input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              placeholder="Stock"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500"
            />

          </div>


          <div>
            <label className="black font-semibold mb-2">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500">

              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Shoes">Sho es</option>
              <option value="Accessories">Accessories</option>

            </select>

          </div>


          <div>
            <label className="black font-semibold mb-2">
              Sub Category
            </label>

            <input
              type="text"
              name="subCategory"
              value={form.subCategory}
              onChange={handleChange}
              placeholder="t-shirt shirt ect"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500"
            />

          </div>

          <div>
            <label className="black font-semibold mb-2">
              Brand
            </label>

            <input
              type="text"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              placeholder="Ecom"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500"
            /></div>

          <div>
            <label className="black font-semibold mb-2">
              Size  </label>

            <select
              name="sizes"
              value={form.sizes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500">

              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>


            </select>

          </div>


          <div>
            <label className="black font-semibold mb-2">
              Colour
            </label>

            <input
              type="text"
              name="colour"
              value={form.colour}
              onChange={handleChange}
              placeholder="Black , White , Blue"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500"
            /></div>


          <div>
            <label className="black font-semibold mb-2">
              Product Image URL
            </label>

            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Paste Cloudinary image URL"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500"
            /></div>

          <div>
            <label className="black font-semibold mb-2">
              Description
            </label>

            <textarea

              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500"
            />

          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg">
              <Plus size={24} />

              Add Product</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">

            <h2 className="text-2xl font-bold mb-6">
              Manage Products
            </h2>

            {products.map((product) => (

              <div
                key={product.id}
                className="flex items-center justify-between border-b py-4"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="font-bold">
                      {product.name}
                    </h3>

                    <p className="text-gray-500">
                      ৳ {product.price}
                    </p>
                  </div>

                </div>

                <div className="flex gap-2">

        
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Update
                  </button>

                  
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>





        </form>

      </div>





      <Link
        to="/"
        className="flex items-center gap-2 text-gray-600"

      ><ArrowLeft size={20} /> Back to Home </Link>


    </div>



  )
};

export default Adminpage;