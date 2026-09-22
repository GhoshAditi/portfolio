import type { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cleanTitle = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${cleanTitle} | Aditi Ghosh - Full Stack Engineer`,
    description: `Technical profile, projects, and systems engineering portfolio of Aditi Ghosh (${cleanTitle}).`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://yourdomain.com/seo/${slug}`,
    },
  }
}

export default async function DynamicSeoPage({ params }: Props) {
  const { slug } = await params

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aditi Ghosh',
    jobTitle: 'Full Stack Software Engineer',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'RCC Institute of Information Technology',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'GoAvo AI / DevrelSquad',
    },
    knowsAbout: [
      'Full Stack Web Development',
      'Distributed Systems',
      'Artificial Intelligence & LLMs',
      'Cloud Architecture',
      'Next.js',
      'TypeScript',
      'Python',
    ],
  }

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'monospace', color: '#e4dfda', backgroundColor: '#12130f', lineHeight: 1.6 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav style={{ marginBottom: '2rem', fontSize: '0.85rem', color: '#888' }}>
        <Link href="/" style={{ color: '#e4dfda' }}>Home</Link>
        {' / '}
        <span>SEO Directory</span>
        {' / '}
        <span style={{ color: '#f5c2c8' }}>{slug}</span>
      </nav>

      <header style={{ borderBottom: '1px solid #3c3c38', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#e4dfda' }}>
          Aditi Ghosh — Full Stack Software Engineer
        </h1>
        <p style={{ color: '#aaa' }}>
          Portfolio index and technical profile for keyword target: <strong>{slug}</strong>
        </p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#f5c2c8' }}>Core Technical Matrix</h2>
        <p style={{ color: '#aaa' }}>
          <strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python 3, Java, C, C++, Go (Golang), SQL.<br />
          <strong>Frontend:</strong> React.js, Next.js (App Router, Server Components, SSR, SSG), Tailwind CSS, ThreeJS.<br />
          <strong>Backend & Data:</strong> Node.js, Express.js, Django, Flask, PostgreSQL, MongoDB (Vector Search), Supabase.<br />
          <strong>Cloud & DevOps:</strong> AWS (SES, S3, EC2), Microsoft Azure, Docker, Vercel Edge, Git.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#f5c2c8' }}>Featured Engineering Work</h2>
        <ul style={{ color: '#aaa', paddingLeft: '1.25rem' }}>
          <li><strong>GoAvo AI (DevrelSquad):</strong> Software Development Engineer Intern (MongoDB Vector Search, AWS SES, technical SEO, paywall engine).</li>
          <li><strong>Beacon:</strong> Secure communication platform with AES-256 encryption, MFA, and LLM intrusion detection.</li>
          <li><strong>HerShield:</strong> AI women safety platform using NLP distress detection (87% recall) and Google Maps routing.</li>
          <li><strong>BitShred:</strong> Cryptographic multi-pass data wiper ensuring 0% data recoverability.</li>
        </ul>
      </section>

      <footer style={{ borderTop: '1px solid #3c3c38', paddingTop: '1.5rem' }}>
        <Link href="/" style={{ color: '#f5c2c8' }}>&larr; Return to main portfolio</Link>
      </footer>
    </main>
  )
}