import { ShoppingBag} from "lucide-react";
import {categories, products} from "../data/products";
import Button from '@mui/material/Button';
import {ProductCard} from "../components/ProductCard.tsx";
import {useCartItems} from "../hooks/useCartItems.ts";
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';


function HomePage() {

    const {addToCart} = useCartItems()
    const [randomProducts, setRandomProducts] = useState(products)
    const navigate= useNavigate()

    useEffect(() => {
        const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
        setRandomProducts(shuffledProducts.slice(0, 6));
    }, []);

    const handleCategoryClick = (category: string) => {
        navigate(`/products?category=${category}`);
    };

    return (<div className="min-h-screen bg-gray-50 dark:bg-zinc-900 mt-16">
            {/* Hero Section */}
            <div className="relative h-[70vh] overflow-hidden mb-10">
                <img
                    src="/src/assets/home_picture2.jpg"
                    alt="Hero"
                    className="w-full h-full object-cover brightness-75 "
                />
                <div className="absolute inset-0 flex flex-row items-start justify-around text-zinc-100 bg-black bg-opacity-30">
                    <div className="flex flex-col  items-center self-center ">

                    <div className="flex flex-col gap-2 text-5xl  md:text-6xl  text-center font-bold mb-8 text-zinc-100
                     ">
                        <img src="/src/assets/logo-dark.webp" alt="Logo" className="max-w-44 rounded-lg"/>
                    </div>
                        <p className="text-xs text-center px-2 py-2  font-normal">
                            Your place for discovering what's good
                        </p>
                    </div>

                    <button
                        className="flex items-center self-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-zinc-900 transition-colors"
                    onClick={()=>navigate("/products")}
                    >
                        Shop Now
                        <ShoppingBag className="ml-2 h-5 w-5"/>
                    </button>
                </div>
            </div>


            {/* Categories Section */}
            <section className="max-w-7xl mx-6 py-16 px-4 rounded-2xl mb-10"
                     style={{backgroundImage: "url('/src/assets/home_waves.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>

                <h2 className="text-3xl font-bold text-center mb-12 text-zinc-100">Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="flex items-center gap-2 bg-zinc-800 text-zinc-100 px-2 py-10 rounded-lg hover:bg-zinc-900 transition-colors justify-center border-2 border-zinc-500"
                            onClick={()=>handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

            </section>


            {/* Featured Products */}
            <section className="bg-white dark:bg-zinc-800 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Collection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {randomProducts.map((product) => (
                            <ProductCard product={product} onAddToCart={() => addToCart(product)}/>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="max-w-7xl mx-auto py-16 px-4"   style={{backgroundImage: "url('/src/assets/home_waves.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 dark:text-white">Stay in Trend</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                        Subscribe to our newsletter for the latest updates and exclusive offers
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-zinc-900 dark:text-white"
                        />
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;

