import { client } from '@/sanity/lib/client'
import { postsQuery, categoriesQuery } from '@/sanity/lib/queries'
import BlogPage from '@/components/blog-page'
import { urlForImage } from '@/sanity/lib/image'

export const revalidate = 60 // Revalidate every 60 seconds

export const metadata = {
  title: 'Blog - V-Networks',
  description: 'Stay updated with the latest IT trends, insights, and best practices from our expert team.',
}

async function getPosts() {
  const posts = await client.fetch(postsQuery)
  
  // Transform image URLs
  return posts.map((post: any) => ({
    ...post,
    mainImage: post.mainImage ? {
      url: urlForImage(post.mainImage).width(800).height(600).url(),
      alt: post.mainImage.alt || post.title
    } : undefined,
    author: post.author ? {
      ...post.author,
      image: post.author.image?.asset ? {
        url: post.author.image.asset.url
      } : undefined
    } : undefined
  }))
}

async function getCategories() {
  return await client.fetch(categoriesQuery)
}

export default async function Blog() {
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories()
  ])

  return <BlogPage posts={posts} categories={categories} />
}
