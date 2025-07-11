import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Product | null>(null);
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);

          // Load favorite status from localStorage
          const isFav = localStorage.getItem(`fav-${id}`) === 'true';
          setFavorite(isFav);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      localStorage.setItem(`fav-${id}`, favorite.toString());
    }
  }, [favorite, id]);

  if (loading || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-6 bg-white rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-72 object-contain"
          />
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-700 mb-3">{product.description}</p>
            <p className="font-semibold mb-1">
              Category: <span className="text-gray-600">{product.category}</span>
            </p>
            <p className="text-xl font-bold text-green-600 mb-4">
              ${product.price}
            </p>
            <button
              onClick={() => setFavorite(!favorite)}
              className={`w-full py-2 rounded text-white font-semibold transition ${
                favorite ? 'bg-red-500' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {favorite ? '❤️ Favorited' : 'Add to Favorite'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
