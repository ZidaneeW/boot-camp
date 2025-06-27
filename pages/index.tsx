import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../lib/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(5).then(setProducts);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
  <Navbar />
  <div className="p-6 max-w-7xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
</div>

    </>
  );
}
