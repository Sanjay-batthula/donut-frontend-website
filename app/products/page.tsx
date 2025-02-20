"use client";

import { useEffect } from 'react';
import { useProductStore } from '@/lib/store';
import ProductCard from '@/components/ProductCard';
import CategoryTabs from '@/components/CategoryTabs';
// Add imports for all local images
import donut1 from '../images/1.png';
import donut2 from '../images/2.png';
import donut3 from '../images/3.png';
import donut4 from '../images/4.png';

const dummyProducts = [
  {
    id: 1,
    name: 'Unicorn Sprinkles',
    description: 'A fluffy fresh cooked donut covered by a creamy strawberry flavour with rainbow sprinkles.',
    price: 7.8,
    rating: 4.0,
    category: 'Donuts',
    image: donut1.src
  },
  {
    id: 2,
    name: 'Dark Sprinkles',
    description: 'Chocolate with sprinkles',
    price: 6.8,
    rating: 4.0,
    category: 'Donuts',
    image: donut2.src
  },
  {
    id: 3,
    name: 'Choco Avocado',
    description: 'Avocado creamy with chocolate',
    price: 8.8,
    rating: 4.0,
    category: 'Donuts',
    image: donut3.src
  },
  {
    id: 4,
    name: 'Vanilla Splash',
    description: 'Vanilla creamy with sprinkles',
    price: 8.8,
    rating: 4.0,
    category: 'Donuts',
    image: donut4.src
  }
];

const categories = ['Donuts', 'Ice Cream', 'Bomboloni'];

export default function ProductsPage() {
  const { products, setProducts, setCategories } = useProductStore();

  useEffect(() => {
    setProducts(dummyProducts);
    setCategories(categories);
  }, [setProducts, setCategories]);

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <CategoryTabs />
      <div className="grid grid-cols-2 gap-4 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}