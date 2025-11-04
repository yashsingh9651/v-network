"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

interface BlogCardProps {
  post: {
    _id: string
    title: string
    slug: { current: string }
    excerpt: string
    mainImage?: {
      url: string
      alt?: string
    }
    publishedAt: string
    author?: {
      name: string
      image?: {
        url: string
      }
    }
    categories?: Array<{
      title: string
      slug: { current: string }
    }>
  }
  index?: number
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/blog/${post.slug.current}`}>
        <div className="h-full rounded-2xl border border-border bg-card overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
          {/* Image */}
          {post.mainImage && (
            <div className="relative h-56 overflow-hidden">
              <Image
                src={post.mainImage.url}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Categories overlay */}
              {post.categories && post.categories.length > 0 && (
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {post.categories.slice(0, 2).map((category) => (
                    <span
                      key={category.slug.current}
                      className="px-3 py-1 bg-primary/90 text-white text-xs rounded-full backdrop-blur-sm"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              {post.author && (
                <div className="flex items-center gap-2">
                  {post.author.image ? (
                    <Image
                      src={post.author.image.url}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  <span>{post.author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>{publishedDate}</time>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Read more */}
            <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
