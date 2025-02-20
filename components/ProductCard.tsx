"use client";

import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Product } from '@/lib/store';
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-zinc-900 rounded-lg p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover rounded-lg mb-4"
        />
        <div className="flex items-center mb-1">
          <span className="text-yellow-400">★</span>
          <span className="ml-1 text-sm">{product.rating}</span>
        </div>
        <h3 className="font-bold mb-1">{product.name}</h3>
        <p className="text-sm text-gray-400 truncate">{product.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold">${product.price}</span>
          <button className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <Plus className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </Link>
  );
}