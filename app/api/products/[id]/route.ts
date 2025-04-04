import { NextResponse } from 'next/server'
import { getProductById } from '@/lib/db'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
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
  } catch (error: any) {
    console.error('Error en GET /api/products/[id]:', error)
    return NextResponse.json(
      { error: error.message || 'Error al obtener el producto' },
      { status: 500 }
    )
  }
} 