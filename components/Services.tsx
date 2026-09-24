import { SectionHead } from '@/components/Sketch'

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with React, Next.js and Node.js, focused on performance, scalability and user experience.',
    features: ['Responsive design', 'Performance', 'SEO friendly', 'Cross-browser'],
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive, considered interfaces with attention to detail, accessibility and modern design principles.',
    features: ['User research', 'Wireframing', 'Prototyping', 'Design systems'],
  },
  {
    title: 'Full Stack Systems',
    description: 'End-to-end products — frontend, backend and database — using stacks like MERN and Next.js.',
    features: ['Frontend', 'Backend', 'Databases', 'API integration'],
  },
  {
    title: 'Cloud Solutions',
    description: 'Deploying and running applications on AWS, Google Cloud and Azure with scalability in mind.',
    features: ['Auto-scaling', 'Load balancing', 'Managed data', 'Security'],
  },
  {
    title: 'SEO Strategy',
    description: 'Better visibility and rankings through technical SEO, content structure and performance work.',
    features: ['Technical SEO', 'Content strategy', 'Analytics', 'Audits'],
  },
  {
    title: 'Performance',
    description: 'Finding and fixing what makes a site slow, so pages load fast and feel effortless.',
    features: ['Code splitting', 'Image optimization', 'Caching', 'Bundle analysis'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHead index="04" note="Ways I can help you and your product">
          What I <em>build</em>
        </SectionHead>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.title} className="service">
              <span>0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <p className="paren">{s.features.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
