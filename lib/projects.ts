export type Project = {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  category: 'security' | 'ai' | 'education' | 'social-impact'
}

export const projects: Project[] = [
  {
    slug: 'beacon-email-security',
    title: 'Beacon',
    description:
      "Beacon is an email security solution that inserts tracking and PIN-protected links into emails, providing visibility, control, and AI-led insights to mitigate misuse and forwarding.",
    image: '/beacon.webp',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Gemini'],
    liveUrl: 'https://beacon-running-rrq5.vercel.app/',
    githubUrl: 'https://beacon-running-rrq5.vercel.app/',
    featured: true,
    category: 'security',
  },
  {
    slug: 'hershield-women-safety-platform',
    title: 'HerShield',
    description:
      'HerShield helps women in distress with SOS alerts, fake call functionality, real-time location sharing, and safe route mapping for immediate assistance.',
    image: '/hershield.png',
    technologies: ['Next.js', 'Python', 'NLP', 'Web Server', 'Socket.io'],
    liveUrl: 'https://hershield-xi.vercel.app/',
    githubUrl: 'https://github.com/GhoshAditi/Hershield---Woman-Safety-Platform',
    featured: true,
    category: 'social-impact',
  },
  {
    slug: 'bitshred-secure-data-wiper',
    title: 'BitShred',
    description:
      'BitShred is a secure data wiping tool that irreversibly overwrites device data, making it unrecoverable by standard recovery tools.',
    image: '/bitshred.png',
    technologies: ['Next.js', 'TypeScript', 'Python'],
    liveUrl: 'https://www.youtube.com/watch?v=w6mCLpcqOdM',
    githubUrl: 'https://github.com/GhoshAditi',
    featured: true,
    category: 'security',
  },
  {
    slug: 'aarya-threat-detection-system',
    title: 'Aarya',
    description:
      'AARYA is a women safety monitoring platform that detects threats via CCTV based on SOS signals, gender context, and social cues to notify authorities.',
    image: '/aarya.png',
    technologies: ['Next.js', 'Python', 'OpenCV', 'DeepFace', 'MediaPose', 'TensorFlow'],
    liveUrl: 'https://www.youtube.com/watch?v=zbQVtpCLYeE',
    githubUrl: 'https://github.com/GhoshAditi/womansafety',
    featured: true,
    category: 'ai',
  },
  {
    slug: 'paws-animal-rescue-platform',
    title: 'Paws',
    description:
      'Paws enables users to report injured stray animals to nearby NGOs and hospitals, backed by AI models for animal and injury classification.',
    image: '/paws.png',
    technologies: ['React', 'Azure', 'Azure AI Vision', 'PostgreSQL', 'Firebase'],
    liveUrl: 'https://pawss.vercel.app/',
    githubUrl: 'https://github.com/GhoshAditi/Paws-frontend',
    featured: true,
    category: 'ai',
  },
  {
    slug: 'engidocs-learning-hub',
    title: 'EngiDocs',
    description:
      'EngiDocs provides engineering resources like PDFs, lecture links, PYQs, and summarization support for multiple branches and semesters.',
    image: '/engidocs.png',
    technologies: ['Next.js', 'TypeScript', 'Python', 'MongoDB'],
    liveUrl: 'https://engidocs.vercel.app/',
    githubUrl: 'https://github.com/GhoshAditi/EngiDocs',
    featured: true,
    category: 'education',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
