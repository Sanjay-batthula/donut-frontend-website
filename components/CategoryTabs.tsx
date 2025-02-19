"use client";

import { useProductStore } from '@/lib/store';

export default function CategoryTabs() {
  const { categories, selectedCategory, setSelectedCategory } = useProductStore();

  return (
    <div className="flex gap-4 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedCategory === category
              ? 'bg-yellow-400 text-black'
              : 'bg-zinc-800 text-white'
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}