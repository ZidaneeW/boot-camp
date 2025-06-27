import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow">
  <div className="flex justify-between items-center max-w-7xl mx-auto">
    <div className="text-xl font-bold">🛍️ Product Showcase</div>
    <div className="space-x-6">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </div>
  </div>
</nav>
  );
}
