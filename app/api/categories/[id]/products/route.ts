import { NextRequest, NextResponse } from 'next/server'
import { getProductsByCategory } from '@/lib/db'
import { ApiError, ProductParams } from '@/types'

export async function GET(
  request: NextRequest,
  context: ProductParams
) {
  try {
    const products = await getProductsByCategory(context.params.id)
    return NextResponse.json(products)
  } catch (error) {
    const apiError = error as ApiError
    console.error('Error en GET /api/categories/[id]/products:', apiError)
    return NextResponse.json(
      { error: apiError.message || 'Error al obtener los productos de la categoría' },
      { status: 500 }
    )
  }
} 