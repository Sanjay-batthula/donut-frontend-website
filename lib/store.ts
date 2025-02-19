import { create } from 'zustand';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  image: string;
}

interface ProductStore {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  setProducts: (products: Product[]) => void;
  setCategories: (categories: string[]) => void;
  setSelectedCategory: (category: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  categories: [],
  selectedCategory: 'Donuts',
  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setSelectedCategory: (category) => set({ selectedCategory }),
}));