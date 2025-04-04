import { NextResponse } from 'next/server'
import { getProductsByCategory } from '@/lib/db'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const products = await getProductsByCategory(params.id)
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener los productos de la categoría' },
      { status: 500 }
    )
  }
} 