import { useMemo, useState } from 'react';
import { products as initialProducts, categories } from '../data/products';

export function useProducts() {
  const [sortBy, setSortBy] = useState('name-asc');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = selectedCategory === 'All'
      ? initialProducts
      : initialProducts.filter(product => product.category === selectedCategory);

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }, [sortBy, selectedCategory]);

  return {
    products: filteredAndSortedProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy
  };
}
