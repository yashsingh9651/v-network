export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-02'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const useCdn = false

// Used for authentication in Sanity Studio
export const token = process.env.SANITY_API_TOKEN
