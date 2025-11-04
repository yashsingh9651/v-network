"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import BlogCard from "@/components/blog-card"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { useState } from "react"

interface BlogPageProps {
  posts: Array<{
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
  }>
  categories: Array<{
    _id: string
    title: string
    slug: { current: string }
  }>
}

export default function BlogPage({ posts, categories }: BlogPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || 
                           post.categories?.some(cat => cat.slug.current === selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,61,219,0.05),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="px-4 py-2 rounded-full glass-card border border-primary/20">
                  <span className="text-sm font-semibold text-primary">Insights & Updates</span>
                </div>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Our <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest IT trends, insights, and best practices from our expert team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4 mb-8"
            >
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-border bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    !selectedCategory
                      ? "bg-primary text-white"
                      : "bg-card border border-border hover:border-primary"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category._id}
                    onClick={() => setSelectedCategory(category.slug.current)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      selectedCategory === category.slug.current
                        ? "bg-primary text-white"
                        : "bg-card border border-border hover:border-primary"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Results count */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground mb-8"
            >
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
            </motion.p>

            {/* Blog Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post._id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <p className="text-2xl text-muted-foreground mb-4">No articles found</p>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </div>

      <BackToTop />
    </main>
  )
}
