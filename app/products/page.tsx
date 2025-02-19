"use client";

import { useEffect } from 'react';
import { useProductStore } from '@/lib/store';
import ProductCard from '@/components/ProductCard';
import CategoryTabs from '@/components/CategoryTabs';

const dummyProducts = [
  {
    id: 1,
    name: 'Unicorn Sprinkles',
    description: 'A fluffy fresh cooked donut covered by a creamy strawberry flavour with rainbow sprinkles.',
    price: 7.8,
    rating: 4.0,
    category: 'Donuts',
    image: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Dark Sprinkles',
    description: 'Chocolate with sprinkles',
    price: 6.8,
    rating: 4.0,
    category: 'Donuts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Choco Avocado',
    description: 'Avocado creamy with chocolate',
    price: 8.8,
    rating: 4.0,
    category: 'Donuts',
    image: 'https://images.unsplash.com/photo-1556913396-7a3c459ef219?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    name: 'Vanilla Splash',
    description: 'Vanilla creamy with sprinkles',
    price: 8.8,
    rating: 4.0,
    category: 'Donuts',
    image: 'https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&q=80&w=400'
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