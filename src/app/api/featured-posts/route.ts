import { NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'

const query = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...2] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage {
      asset-> {
        _id,
        _type,
        url
      },
      alt
    }
  }
`

export const revalidate = 60 // Revalidate every 60 seconds

export async function GET() {
  try {
    const posts = await client.fetch(query)
    return NextResponse.json(posts || [], {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    })
  } catch (error) {
    console.error('Error fetching featured posts:', error)
    return NextResponse.json([], { status: 500 })
  }
}

