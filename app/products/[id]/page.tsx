"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProductStore } from '@/lib/store';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const { products } = useProductStore();
  
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart`,
    });
  };

  return (
    <main className="min-h-screen p-6">
      <button 
        onClick={() => router.back()} 
        className="mb-6 hover:opacity-80"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      
      <div className="flex flex-col items-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-64 h-64 rounded-full object-cover mb-8"
        />
        
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{product.rating}</span>
            </div>
          </div>
          
          <p className="text-gray-400 mb-6">{product.description}</p>
          
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4 bg-zinc-900 rounded-lg p-2">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:opacity-80"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span>{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:opacity-80"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <span className="text-2xl font-bold">${(product.price * quantity).toFixed(2)}</span>
          </div>
          
          <Button 
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </main>
  );
}