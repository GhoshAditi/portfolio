import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'
import { SITE_URL } from '@/lib/site'

// Clean base URL to prevent double slashes
const baseUrl = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // SEO Target Slugs
  const seoSlugs = [
    'aditi-ghosh-full-stack-engineer',
    'full-stack-developer-kolkata',
    'nextjs-typescript-developer',
    'backend-engineer-node-python',
    'software-engineer-intern-goavo-ai',
  ]

  const seoRoutes: MetadataRoute.Sitemap = seoSlugs.map((slug) => ({
    url: `${baseUrl}/seo/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const categories = ['security', 'ai', 'education', 'social-impact']
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/projects/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.65,
  }))

  return [...staticRoutes, ...seoRoutes, ...projectRoutes, ...categoryRoutes]
}