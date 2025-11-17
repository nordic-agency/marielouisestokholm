import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Post = {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  mainImage?: { asset?: { url?: string } }
  author?: {
    name?: string
    image?: { _ref?: string; _type?: string }
  }
}

const query = groq`
  *[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage {
      asset-> {
        url
      }
    },
    "author": author->{name, image}
  }
`

export default async function BlogPage() {
  const posts = await client.fetch(query)

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl mb-6 text-center">Min blog</h2>
            <p className="text-lg font-semibold text-gray-900 mb-6 text-center">Indlæg og inspiration. Nye perspektiver.</p>
            <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
              Her finder du korte indlæg og inspiration om ledelse, karriereskifte og trivsel i arbejdslivet – med fokus på klarhed, retning og bæredygtige vaner. Når noget i dit arbejdsliv er i bevægelse – eller måske burde være det – får du her perspektiver, der kan hjælpe dig med at omsætte indsigt til handling. Du er velkommen til at læse med, mærke efter og bruge det, der giver mening.
            </p>
            <div className="mt-16 space-y-6 lg:space-y-20">
              {posts.map((post: Post) => (
                <article key={post._id} className="space-y-6 max-w-3xl mx-auto">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.mainImage?.asset?.url || '/fallback.jpg'}
                      alt={post.title}
                      width={1280}
                      height={720}
                      className="rounded-2xl w-full object-cover aspect-video hover:opacity-90 transition"
                    />
                  </Link>
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug tracking-tight mt-6 mb-4 hover:underline">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  {post.excerpt && (
                    <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
                  )}
                  <div className="mt-6 pt-6 pb-8 border-b border-gray-200">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <Image
                        src={post.author?.image ? urlFor(post.author.image).width(96).height(96).url() : "/images/marielouise-avatar.jpg"}
                        alt={post.author?.name || "Marie Louise Stokholm"}
                        width={48}
                        height={48}
                        className="rounded-full object-cover w-12 h-12"
                      />
                      <p className="text-sm font-semibold text-gray-900">{post.author?.name || "Marie Louise Stokholm"}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString('da-DK', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}