'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type FeaturedPost = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  mainImage?: {
    asset?: {
      _id?: string
      _type?: string
      url?: string
    }
    alt?: string
  }
}

export default function FeaturedPosts() {
  const [posts, setPosts] = useState<FeaturedPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/featured-posts')
        if (response.ok) {
          const data = await response.json()
          setPosts(data || [])
        }
      } catch (error) {
        console.error('Error fetching featured posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (loading) {
    return null
  }

  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {posts.map((post) => (
        <Link 
          key={post._id} 
          href={`/blog/${post.slug}`} 
          className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="relative h-64 overflow-hidden">
            {post.mainImage?.asset?.url ? (
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Ingen billede</span>
              </div>
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-sans font-semibold text-gray-900 mb-3 group-hover:text-[#8B4513] transition-colors">
              {post.title}
            </h3>
            {post.excerpt && (
              <p className="text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

