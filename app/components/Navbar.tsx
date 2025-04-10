import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Tienda de Ropa
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/productos" className="text-gray-600 hover:text-gray-900">
              Productos
            </Link>
            <Link href="/categorias" className="text-gray-600 hover:text-gray-900">
              Categorías
            </Link>
            <Link href="/carrito" className="text-gray-600 hover:text-gray-900">
              Carrito
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 