// import { type PageProps } from 'next'
import React from "react"
import Link from 'next/link'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { PortableText, PortableTextBlockComponent } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import type { Metadata } from 'next'

export const revalidate = 60 // Revalidate every 60 seconds

export async function generateStaticParams() {
  const posts = await client.fetch(groq`*[_type == "post"]{ "slug": slug.current }`)
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}



const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  excerpt,
  publishedAt,
  body,
  mainImage,
  "slug": slug.current,
  author->{name, image},
  category->{title}
}`

const components = {
  types: {
    image: ({ value }: { value: { asset?: { _ref?: string }; alt?: string } }) =>
      value?.asset?._ref ? (
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || ' '}
          width={800}
          height={600}
          className="my-6 rounded-lg shadow"
          sizes="(max-width: 768px) 100vw, 800px"
          loading="lazy"
        />
      ) : null,
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => <strong className="font-semibold">{children}</strong>,
  },
  block: {
    normal: (({ children }) => <p className="mb-4 text-lg leading-relaxed">{children}</p>) as PortableTextBlockComponent
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const post = await client.fetch(query, { slug })

  if (!post) {
    return {
      title: 'Indlæg ikke fundet',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marielouisestokholm.dk'
  
  // Optimize image for Open Graph (1200x630 is standard OG image size, LinkedIn requires min 1200x627)
  // Ensure absolute URL for LinkedIn compatibility
  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(1200).height(630).url() 
    : ''

  // Ensure absolute URL - LinkedIn requires absolute URLs
  const absoluteImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : imageUrl.startsWith('//') 
      ? `https:${imageUrl}`
      : imageUrl

  const description = post.excerpt || `${post.title} - Blog indlæg fra Marie Louise Stokholm`

  return {
    title: post.title,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      images: absoluteImageUrl ? [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
      type: 'article',
      url: `${siteUrl}/blog/${slug}`,
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : ['Marie Louise Stokholm'],
      siteName: 'Marie Louise Stokholm',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description,
      images: absoluteImageUrl ? [absoluteImageUrl] : [],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await client.fetch(query, { slug })

  if (!post) {
    return <div className="text-center text-gray-500 py-10">Indlæg ikke fundet.</div>
  }

  return (
    <article className="bg-white text-gray-800">
      {post.mainImage && (
        <div className="w-full h-[60vh] relative mb-6">
        <Image
          src={urlFor(post.mainImage).width(1920).height(1080).url()}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white px-6 text-center">
            {post.category?.title && (
              <span className="text-sm font-medium text-white bg-black/50 rounded px-2 py-1 mb-2">{post.category.title}</span>
            )}
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-2 drop-shadow break-words text-center leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      )}

      {/* Breadcrumbs */}
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">Forside</Link>
          <span className="text-gray-400">/</span>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{post.title}</span>
        </nav>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-6 pt-8 pb-8 border-b border-gray-200">
        <div className="flex flex-col items-center space-y-2 text-center py-6">
          <Image
            src={post.author?.image ? urlFor(post.author.image).width(96).height(96).url() : "/author.jpg"}
            alt={post.author?.name || "Marie Louise Stokholm"}
            width={80}
            height={80}
            className="rounded-md w-20 h-20 object-cover"
            sizes="80px"
            loading="lazy"
          />
          <div className="flex flex-col justify-center text-sm text-gray-700">
            <p className="font-semibold text-base">{post.author?.name || "Marie Louise Stokholm"}</p>
            <p className="text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString('da-DK', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-lg max-w-none bg-gray-50 rounded-lg p-8">
          <PortableText value={post.body} components={components} />
        </div>
      </div>
    </article>
  )
}