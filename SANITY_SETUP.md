# Sanity.io Blog Integration for V-Networks

This project now includes a complete blog system powered by Sanity.io CMS.

## 🚀 Setup Instructions

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and sign up/login
2. Create a new project
3. Note down your **Project ID**
4. Create a dataset (e.g., "production")

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-11-02"

# Only needed for write operations (Sanity Studio)
SANITY_API_TOKEN="your_api_token_here"
```

To get your API token:
1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to API settings
4. Add a new token with "Editor" permissions
5. Copy the token to your `.env.local` file

### 3. Access Sanity Studio

Once configured, access the Sanity Studio at:
```
http://localhost:3000/studio
```

Here you can:
- Create and edit blog posts
- Manage authors
- Create categories
- Upload images
- Publish content

## 📝 Content Types

### Blog Post
- **Title**: Post title
- **Slug**: URL-friendly identifier
- **Excerpt**: Short description (max 200 chars)
- **Author**: Reference to author
- **Main Image**: Featured image
- **Categories**: Multiple category tags
- **Published Date**: Publication timestamp
- **Body**: Rich text content with images and code blocks
- **Featured**: Mark as featured post
- **SEO**: Meta title, description, and keywords

### Author
- **Name**: Author name
- **Slug**: URL identifier
- **Image**: Author photo
- **Bio**: Author biography
- **Email**: Contact email
- **Role**: Job title/role

### Category
- **Title**: Category name
- **Slug**: URL identifier
- **Description**: Category description

## 🎨 Blog Features

### Public Pages

1. **Blog Listing** (`/blog`)
   - Grid view of all blog posts
   - Search functionality
   - Category filtering
   - Responsive design

2. **Blog Post** (`/blog/[slug]`)
   - Full article view
   - Rich text rendering
   - Author information
   - Reading time calculation
   - Social sharing buttons
   - Schema.org structured data for SEO

### Admin Features

- **Sanity Studio** (`/studio`)
  - Visual editor for content
  - Image upload and management
  - Real-time preview
  - Version control
  - Multi-user collaboration

## 🔧 Schema.org Integration

All blog pages include structured data:
- **BlogPosting**: Article metadata
- **Person**: Author information
- **BreadcrumbList**: Navigation breadcrumbs

This improves SEO and enables rich snippets in search results.

## 📦 Key Components

- `components/blog-card.tsx`: Blog post card component
- `components/blog-post.tsx`: Full blog post page
- `components/blog-page.tsx`: Blog listing page
- `app/blog/page.tsx`: Blog route
- `app/blog/[slug]/page.tsx`: Individual post route
- `app/studio/[[...index]]/page.tsx`: Sanity Studio route

## 🎯 Next Steps

1. Set up your Sanity project and add environment variables
2. Access `/studio` and create your first author
3. Create some categories (e.g., "IT Security", "Cloud Computing", "Best Practices")
4. Write your first blog post
5. Publish and view at `/blog`

## 📚 Sanity Documentation

- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Next.js Integration](https://www.sanity.io/docs/nextjs)
- [Portable Text](https://www.sanity.io/docs/presenting-block-text)

## 🔄 Content Revalidation

The blog uses Incremental Static Regeneration (ISR):
- Pages revalidate every 60 seconds
- New content appears automatically
- Static generation for optimal performance

## 💡 Tips

- Use high-quality images (recommended: 1200x800px for featured images)
- Write compelling excerpts for better engagement
- Use categories to organize content
- Mark important posts as "featured" to highlight them
- Fill in SEO fields for better search engine visibility
