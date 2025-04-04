import { NextResponse } from 'next/server'
import { getProducts } from '@/lib/db'
import { ApiError } from '@/types'

export async function GET() {
  try {
    const products = await getProducts()
    return NextResponse.json(products)
  } catch (error) {
    const apiError = error as ApiError
    console.error('Error en GET /api/products:', apiError)
    return NextResponse.json(
      { error: apiError.message || 'Error al obtener los productos' },
      { status: 500 }
    )
  }
} 