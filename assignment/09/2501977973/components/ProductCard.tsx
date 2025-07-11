import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold line-clamp-2 h-[3rem]">{product.title}</h2>
        <Link href={`/products/${product.id}`}>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
