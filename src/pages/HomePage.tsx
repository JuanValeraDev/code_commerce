import {ShoppingBag, TrendingUp} from "lucide-react";
import { categories, products } from "../data/products";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
            {/* Hero Section */}
            <header className="relative h-[70vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80"
                    alt="Hero"
                    className="w-full h-full object-cover brightness-75"
                />
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30">
                    <div className="flex items-center gap-2 text-4xl md:text-6xl font-bold mb-4">
                        <TrendingUp className="w-12 h-12"/>
                        FashionTrend
                    </div>
                    <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl px-4">
                        Discover the latest trends in fashion and express your unique style
                    </p>
                    <button
                        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                    Shop Now
                    <ShoppingBag className="ml-2 h-5 w-5"/>
                    </button>
        </div>
</header>

    {/* Categories Section */}
    <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category) => (
                        <button
                            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
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
                        {products.map((product) => (
                            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                  <CardMedia>
                                    <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                                />
                                  </CardMedia>
                                <CardContent>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold dark:text-white">{product.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mt-1">{product.price}</p>
                                    <Button className="w-full mt-4">Add to Cart</Button>
                                </div>
                                </CardContent>
                            </Card>
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

