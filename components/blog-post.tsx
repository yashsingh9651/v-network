"use client"

import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import Script from 'next/script'

// Portable Text components
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8 rounded-xl overflow-hidden">
          <Image
            src={value.url || '/placeholder.svg'}
            alt={value.alt || 'Blog image'}
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold mt-6 mb-3">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg leading-relaxed mb-6 text-muted-foreground">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-muted-foreground">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}

interface BlogPostProps {
  post: {
    _id: string
    title: string
    slug: { current: string }
    excerpt: string
    mainImage?: {
      url: string
      alt?: string
    }
    body: any
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
}

export default function BlogPost({ post }: BlogPostProps) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Calculate reading time
  const wordsPerMinute = 200
  const textContent = JSON.stringify(post.body)
  const wordCount = textContent.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)

  // Schema.org Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.mainImage?.url || '',
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "V-Networks Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "V-Networks",
      "logo": {
        "@type": "ImageObject",
        "url": "https://v-networks.co.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://v-networks.co.in/blog/${post.slug.current}`
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://v-networks.co.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://v-networks.co.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://v-networks.co.in/blog/${post.slug.current}`
      }
    ]
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Schema.org structured data */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation />

      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link href="/blog">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </motion.button>
          </Link>

          {/* Article header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <Link
                    key={category.slug.current}
                    href={`/blog/category/${category.slug.current}`}
                  >
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                      {category.title}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              {post.author && (
                <div className="flex items-center gap-3">
                  {post.author.image ? (
                    <Image
                      src={post.author.image.url}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <span className="font-medium">{post.author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>{publishedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>

            {/* Featured image */}
            {post.mainImage && (
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
                <Image
                  src={post.mainImage.url}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </motion.div>

          {/* Article content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <PortableText value={post.body} components={portableTextComponents} />
          </motion.div>

          {/* Share section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://v-networks.co.in/blog/${post.slug.current}`)}&via=vnetworks&hashtags=IT,Technology,Enterprise`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-all shadow-lg hover:shadow-xl font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Share on Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://v-networks.co.in/blog/${post.slug.current}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-all shadow-lg hover:shadow-xl font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share on LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://v-networks.co.in/blog/${post.slug.current}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#0d65d9] transition-all shadow-lg hover:shadow-xl font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Share on Facebook
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`https://v-networks.co.in/blog/${post.slug.current}`)
                  alert('Link copied to clipboard!')
                }}
                className="flex items-center gap-2 px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Link
              </button>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
      <BackToTop />
    </main>
  )
}
