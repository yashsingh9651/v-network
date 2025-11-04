import { client } from '@/sanity/lib/client'
import { postQuery, postPathsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import BlogPost from '@/components/blog-post'
import { notFound } from 'next/navigation'

export const revalidate = 60

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

async function getPost(slug: string) {
  const post = await client.fetch(postQuery, { slug })
  
  if (!post) {
    return null
  }

  // Transform image URLs
  return {
    ...post,
    mainImage: post.mainImage ? {
      url: urlForImage(post.mainImage).width(1200).height(800).url(),
      alt: post.mainImage.alt || post.title
    } : undefined,
    author: post.author ? {
      ...post.author,
      image: post.author.image?.asset ? {
        url: post.author.image.asset.url
      } : undefined
    } : undefined,
    body: post.body.map((block: any) => {
      if (block._type === 'image') {
        return {
          ...block,
          url: urlForImage(block).width(1200).url(),
          alt: block.alt || ''
        }
      }
      return block
    })
  }
}

export async function generateStaticParams() {
  const paths = await client.fetch(postPathsQuery)
  return paths.map((path: any) => ({
    slug: path.params.slug
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vnetworks.com'
  const postUrl = `${siteUrl}/blog/${slug}`

  return {
    title: `${post.title} | V Networks Blog`,
    description: post.excerpt,
    authors: post.author ? [{ name: post.author.name }] : [],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: 'V Networks',
      locale: 'en_US',
      images: post.mainImage ? [
        {
          url: post.mainImage.url,
          width: 1200,
          height: 800,
          alt: post.mainImage.alt || post.title,
        }
      ] : [],
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: post.author ? [post.author.name] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      site: '@vnetworks',
      creator: '@vnetworks',
      images: post.mainImage ? [post.mainImage.url] : [],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
}
