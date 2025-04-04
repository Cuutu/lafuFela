import { prisma } from './prisma'

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        sizes: true,
        colors: true,
      },
    })
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Error al obtener los productos')
  }
}

export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        sizes: true,
        colors: true,
      },
    })
    return product
  } catch (error) {
    console.error('Error fetching product:', error)
    throw new Error('Error al obtener el producto')
  }
}

export async function getProductsByCategory(categoryId: string) {
  try {
    const products = await prisma.product.findMany({
      where: { categoryId },
      include: {
        category: true,
        sizes: true,
        colors: true,
      },
    })
    return products
  } catch (error) {
    console.error('Error fetching products by category:', error)
    throw new Error('Error al obtener los productos por categoría')
  }
}

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany()
    return categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw new Error('Error al obtener las categorías')
  }
} 