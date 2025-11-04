import { groq } from 'next-sanity'

// Get all posts with author and categories
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  "author": author->{
    name, 
    image{
      asset->{
        _id,
        url
      }
    }
  },
  "categories": categories[]->{title, slug}
}`

// Get a single post by slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  body,
  publishedAt,
  "author": author->{
    name, 
    bio,
    image{
      asset->{
        _id,
        url
      }
    }
  },
  "categories": categories[]->{title, slug}
}`

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`

// Get featured posts (limit to 3)
export const featuredPostsQuery = groq`*[_type == "post" && featured == true && defined(slug.current)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  "author": author->{
    name, 
    image{
      asset->{
        _id,
        url
      }
    }
  },
  "categories": categories[]->{title, slug}
}`

// Get posts by category
export const postsByCategoryQuery = groq`*[_type == "post" && $categorySlug in categories[]->slug.current && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  "author": author->{
    name, 
    image{
      asset->{
        _id,
        url
      }
    }
  },
  "categories": categories[]->{title, slug}
}`

// Get all categories
export const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`
