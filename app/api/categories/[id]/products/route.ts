import { NextResponse } from 'next/server'
import { getProductsByCategory } from '@/lib/db'
import { ApiError } from '@/types'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const products = await getProductsByCategory(params.id)
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