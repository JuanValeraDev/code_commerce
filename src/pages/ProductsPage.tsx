import { useState } from 'react';
import { ShoppingCart as CartIcon } from 'lucide-react';
import {ThemeToggle} from "../components/ThemeToggle.tsx";
import {FilterSort} from "../components/FilterSort.tsx";
import {ProductCard} from "../components/ProductCard.tsx";
import {Cart} from "../components/Cart.tsx";
import {useProducts} from "../hooks/useProducts.ts";
import {CartItem, Product} from "../types.ts";


function App() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {
        products,
        categories,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        setSortBy
    } = useProducts();

    const addToCart = (product: Product) => {
        setCartItems(items => {
            const existingItem = items.find(item => item.id === product.id);
            if (existingItem) {
                return items.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...items, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id: number, quantity: number) => {
        setCartItems(items =>
            quantity === 0
                ? items.filter(item => item.id !== id)
                : items.map(item =>
                    item.id === id ? { ...item, quantity } : item
                )
        );
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 transition-colors">
            <header className="bg-white dark:bg-zinc-800 shadow-sm transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">TechStore</h1>
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                            >
                                <CartIcon size={24} />
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <FilterSort
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={addToCart}
                        />
                    ))}
                </div>
            </main>

            <Cart
                items={cartItems}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
            />

        </div>
    );
}

export default App;
