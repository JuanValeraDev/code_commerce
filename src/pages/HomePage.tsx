import {Image, ShoppingBag, TrendingUp} from "lucide-react";
import {categories, products} from "../data/products";
import Button from '@mui/material/Button';
import {ProductCard} from "../components/ProductCard.tsx";
import {useCartItems} from "../hooks/useCartItems.ts";
import {useEffect, useState} from "react";


function HomePage() {

    const {addToCart} = useCartItems()
    const [randomProducts, setRandomProducts] = useState(products);

    useEffect(() => {
        const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
        setRandomProducts(shuffledProducts.slice(0, 6));
    }, []);

    return (<div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
            {/* Hero Section */}
            <div className="relative h-[70vh] overflow-hidden mb-1">
                <img
                    src="/src/assets/home_picture3.jpg"
                    alt="Hero"
                    className="w-full h-full object-cover brightness-70"
                />
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-zinc-100 bg-black bg-opacity-30">
                    <div className="flex gap-2 text-4xl md:text-7xl font-medium mb-8 text-zinc-100
                    border-4 md:border-8 p-4 bg-zinc-900  bg-opacity-90 ">
                        FashionTrends
                    </div>
                    <div className="block w-full">

                    <p className="text-xl md:text-2xl mb-8 text-center px-4 py-1 bg-zinc-900 bg-opacity-60">
                        Your place for discovering what's good
                    </p>
                    </div>
                    <button
                        className="flex items-center gap-2 bg-zinc-600 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 transition-colors"
                    >
                        Shop Now
                        <ShoppingBag className="ml-2 h-5 w-5"/>
                    </button>
                </div>
            </div>


            {/* Categories Section */}
            <section className="max-w-7xl mx-auto py-16 px-4 relative">
                <h2 className="text-3xl font-bold text-center mb-12 dark:text-white z-1">Browse Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 z-1">
                    {categories.map((category) => (
                        <button
                            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors z-1"
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <img
                    src="/src/assets/home_waves.jpg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
                />
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
            <section className="max-w-7xl mx-auto py-16 px-4">
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

