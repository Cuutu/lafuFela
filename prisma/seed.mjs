import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Crear categorías
  const hombre = await prisma.category.create({
    data: {
      name: 'Hombre',
      description: 'Ropa para hombres',
    },
  })

  const mujer = await prisma.category.create({
    data: {
      name: 'Mujer',
      description: 'Ropa para mujeres',
    },
  })

  // Crear tamaños
  const sizes = await Promise.all([
    prisma.size.create({ data: { name: 'S' } }),
    prisma.size.create({ data: { name: 'M' } }),
    prisma.size.create({ data: { name: 'L' } }),
    prisma.size.create({ data: { name: 'XL' } }),
  ])

  // Crear colores
  const colors = await Promise.all([
    prisma.color.create({ data: { name: 'Negro', hex: '#000000' } }),
    prisma.color.create({ data: { name: 'Blanco', hex: '#FFFFFF' } }),
    prisma.color.create({ data: { name: 'Azul', hex: '#0000FF' } }),
  ])

  // Crear productos
  await prisma.product.create({
    data: {
      name: 'Camisa Casual',
      description: 'Camisa casual para hombre',
      price: 29.99,
      images: ['/images/camisa-1.jpg'],
      categoryId: hombre.id,
      stock: 100,
      sizes: {
        connect: sizes.map(size => ({ id: size.id })),
      },
      colors: {
        connect: colors.map(color => ({ id: color.id })),
      },
    },
  })

  await prisma.product.create({
    data: {
      name: 'Vestido Floral',
      description: 'Vestido floral para mujer',
      price: 49.99,
      images: ['/images/vestido-1.jpg'],
      categoryId: mujer.id,
      stock: 50,
      sizes: {
        connect: sizes.map(size => ({ id: size.id })),
      },
      colors: {
        connect: colors.map(color => ({ id: color.id })),
      },
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 