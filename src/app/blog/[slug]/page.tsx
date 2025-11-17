// import { type PageProps } from 'next'
import React from "react"
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { PortableText, PortableTextBlockComponent } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
export const revalidate = 60 // Revalidate every 60 seconds

export async function generateStaticParams() {
  const posts = await client.fetch(groq`*[_type == "post"]{ "slug": slug.current }`)
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}



const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  body,
  "mainImage": mainImage{asset->{url}},
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

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await client.fetch(query, { slug })

  if (!post) {
    return <div className="text-center text-gray-500 py-10">Indlæg ikke fundet.</div>
  }

  return (
    <article className="bg-white text-gray-800">
      {post.mainImage?.asset?.url && (
        <div className="w-full h-[60vh] relative mb-6">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover"
            priority
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

      <div className="max-w-3xl mx-auto px-6 mt-6 pt-8 pb-8 border-b border-gray-200">
        <div className="flex flex-col items-center space-y-2 text-center py-6">
          <Image
            src={post.author?.image ? urlFor(post.author.image).width(96).height(96).url() : "/author.jpg"}
            alt={post.author?.name || "Marie Louise Stokholm"}
            width={80}
            height={80}
            className="rounded-md w-20 h-20 object-cover"
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