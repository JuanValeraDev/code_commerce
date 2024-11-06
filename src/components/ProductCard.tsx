import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {product.price.toFixed(2)}€
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-100 px-4 py-2 rounded-lg dark:hover:bg-zinc-700 hover:bg-zinc-300 transition-colors"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
