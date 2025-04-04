import { NextResponse } from 'next/server'
import { getProductById } from '@/lib/db'
import { ApiError, RouteParams } from '@/types'

export async function GET(
  request: Request,
  { params }: RouteParams
) {
  try {
    const product = await getProductById(params.id)
    
    if (!product) {
      return NextResponse.json(
        { error: 'Producto no encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    const apiError = error as ApiError
    console.error('Error en GET /api/products/[id]:', apiError)
    return NextResponse.json(
      { error: apiError.message || 'Error al obtener el producto' },
      { status: 500 }
    )
  }
} 