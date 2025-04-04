import { NextResponse } from 'next/server'
import { getProducts } from '@/lib/db'

export async function GET() {
  try {
    const products = await getProducts()
    return NextResponse.json(products)
  } catch (error: any) {
    console.error('Error en GET /api/products:', error)
    return NextResponse.json(
      { error: error.message || 'Error al obtener los productos' },
      { status: 500 }
    )
  }
} 