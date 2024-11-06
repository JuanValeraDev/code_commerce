import {FilterSort} from "../components/FilterSort.tsx";
import {ProductCard} from "../components/ProductCard.tsx";
import {useProducts} from "../hooks/useProducts.ts";
import {useCartItems} from "../hooks/useCartItems.ts";


function App() {

    const {
        products,
        categories,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        setSortBy
    } = useProducts();

    const {addToCart} = useCartItems()


    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 transition-colors">
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



        </div>
    );
}

export default App;
