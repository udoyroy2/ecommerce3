const products = [
    {
        id: 1,
        name: "Men T-shirt",
        category: "Men",
        price: 500,
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
    },

    {

        id: 2,
        name: "Classic Denim Jacket",
        category: "Men",
        price: 1500,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    },

    {
        id: 3,
        name: "Women Dress",
        category: "Women",
        price: 1500,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    },

    {

        id: 5,
        name: "Running Shoes",
        category: "Shoes",
        price: 2000,


        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",

    },


    {
        id: 6,
        name: "Leather Wallet",
        category: "Accessories",
        price: 700,




        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",

    },
    {
        id: 7,
        name: "Elegant Dress",
        category: "Women",
        price: 2200,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Women Casual Outfit",
        category: "Women",
        price: 1600,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Black Fashion Dress",
        category: "Women",
        price: 1900,
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 10,
        name: "Running Shoes",
        category: "Shoes",
        price: 2500,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "White Sneakers",
        category: "Shoes",
        price: 2200,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        name: "Sports Shoes",
        category: "Shoes",
        price: 2800,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 13,
        name: "Casual Sneakers",
        category: "Shoes",
        price: 2000,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 14,
        name: "Leather Watch",
        category: "Accessories",
        price: 1500,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 15,
        name: "Classic Sunglasses",
        category: "Accessories",
        price: 900,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 16,
        name: "Leather Wallet",
        category: "Accessories",
        price: 700,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 17,
        name: "Fashion Bag",
        category: "Accessories",
        price: 1800,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 18,
        name: "Blue Jeans",
        category: "Men",
        price: 1300,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 19,
        name: "Hoodie",
        category: "Men",
        price: 1200,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 20,
        name: "Women Handbag",
        category: "Women",
        price: 1700,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 21,
        name: "Leather Boots",
        category: "Shoes",
        price: 3200,
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80"
    },
{
    id: 22,
    name: "Men Casual Shirt",
    category: "Men",
    price: 900,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
},

{
    id: 23,
    name: "Women Casual Top",
    category: "Women",
    price: 800,
    image: "https://images.unsplash.com/photo-1564257577054-8c6d4f6a6b7d?auto=format&fit=crop&w=800&q=80",
},

{
    id: 24,
    name: "White Sneakers",
    category: "Shoes",
    price: 1800,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
},

{
    id: 25,
    name: "Leather Handbag",
    category: "Accessories",
    price: 2200,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
},

{
    id: 26,
    name: "Men Formal Shirt",
    category: "Men",
    price: 1200,
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=80",
},

{
    id: 27,
    name: "Women Summer Dress",
    category: "Women",
    price: 1800,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80",
},

{
    id: 28,
    name: "Black Running Shoes",
    category: "Shoes",
    price: 2200,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
},

{
    id: 29,
    name: "Classic Sunglasses",
    category: "Accessories",
    price: 600,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
},

{
    id: 30,
    name: "Men Black T-Shirt",
    category: "Men",
    price: 550,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
},

{
    id: 31,
    name: "Women Blazer",
    category: "Women",
    price: 2500,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80",
},

{
    id: 32,
    name: "Casual Canvas Shoes",
    category: "Shoes",
    price: 1400,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
},

{
    id: 33,
    name: "Classic Leather Belt",
    category: "Accessories",
    price: 500,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
},
];

export default products;