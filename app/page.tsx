import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/hero-image.jpg"
          alt="Colección de moda"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white space-y-4">
          <h1 className="text-5xl font-bold">Nueva Colección 2024</h1>
          <p className="text-xl">Descubre las últimas tendencias en moda</p>
          <Link
            href="/productos"
            className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Ver Colección
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Categorías Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Hombre', 'Mujer', 'Accesorios'].map((category) => (
            <div
              key={category}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={`/${category.toLowerCase()}.jpg`}
                alt={category}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Envío Gratis</h3>
              <p className="text-gray-600">En compras mayores a $50</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Devolución Gratuita</h3>
              <p className="text-gray-600">30 días para cambios</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Pago Seguro</h3>
              <p className="text-gray-600">Transacciones protegidas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
