import { SectionHead } from '@/components/Sketch'
import Doodle from '@/components/Doodle'

const experiences = [
  {
    position: "Software Development Engineer Intern",
    company: "GoAvo AI (DevrelSquad)",
    location: "Remote",
    duration: "Feb 2026 — Jun 2026",
    type: "Full-time",
    description: "Built scalable backend services, AI-driven product features, and performance-focused infrastructure using Next.js, Node.js, and cloud platforms.",
    achievements: [
      "Architected an automated outreach pipeline with MongoDB Vector Search for semantic lead discovery and AWS SES for bulk delivery",
      "Engineered a tiered usage-limits and paywall service with trigger-based quota enforcement in TypeScript and Node.js to support monetization",
      "Drove a 2x surge in organic users (6k → 13k+) in 2 months by overhauling technical SEO, schema metadata, and Core Web Vitals",
      "Co-developed generative AI features by integrating context-aware LLM endpoints to enhance real-time user workflows",
      "Spearheaded modular refactoring of 5,000+ line legacy files into decoupled components and centralized configurations to boost delivery velocity",
      "Resolved critical production link-unfurling issues by fixing Azure Blob storage path mismatches with zero downtime"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AWS", "Azure", "Docker"],
    current: true
  },
  {
    position: "Web Developer Intern",
    company: "PayZoll",
    location: "Remote",
    duration: "Feb 2025 — Apr 2025",
    type: "Full-time",
    description: "Leading the development of modern web applications using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Identified performance bottlenecks in the legacy interface utilizing older templates that hindered user retention",
      "Targeted the specific need to modernize the frontend architecture for better type safety and maintainability",
      "Migrated template components written in Octo SDK into a Next.js environment using TypeScript, maintaining proper typing",
      "Reduced load times by 40% and increased Google Lighthouse scores to 95+, significantly improving Quality Assurance metrics"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Next.js", "MongoDB"],
    current: false
  },
  {
    position: "Open Source Contributor",
    company: "JGEC Winter of Code",
    location: "Remote",
    duration: "Dec 2024 — Jan 2025",
    type: "Open Source Program",
    description: "Contributed to multiple open source projects during the winter program, focusing on meaningful contributions to various repositories and collaborating with developers worldwide.",
    achievements: [
      "Ranked in top 20 out of 1000+ participants",
      "Collaborated with maintainers and fellow contributors globally",
      "Enhanced skills in open source development workflows"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Git", "GitHub", "JavaScript"],
    current: false
  },
  {
    position: "Web Development Lead",
    company: "GDG RCCIIT",
    location: "Kolkata, India",
    duration: "Aug 2025 — Present",
    type: "Leadership Role",
    description: "Led web development initiatives for Google Developer Group RCCIIT, organizing workshops, managing development projects, and mentoring junior developers.",
    achievements: [
      "Organized technical workshops and coding sessions",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Git"],
    current: false
  },
  {
    position: "Tech Lead",
    company: "ACM RCCIIT",
    location: "Kolkata, India",
    duration: "Jan 2026 — Present",
    type: "Leadership Role",
    description: "Serving as Tech Lead for ACM RCCIIT chapter, coordinating technical events, managing web projects, and fostering a community of developers.",
    achievements: [],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "MongoDB", "Express.js"],
    current: false
  },
  {
    position: "Tech Member",
    company: "Student Welfare Committee RCCIIT",
    location: "Kolkata, India",
    duration: "Year 2025",
    type: "Tech Role",
    description: "Served as a Tech Member for SWC RCCIIT chapter, contributing to technical initiatives and supporting the development of web projects.",
    achievements: [
      "Contributed to the website development of the official college events like Techtrix, GOT & Regalia, enhancing its functionality and user experience",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "MongoDB", "Express.js"],
    current: false
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead
          index="03"
          note="Startups, open source and student communities — roles that taught me to ship"
          aside={<Doodle name="coffee" label="Sip the coffee" size={140} says={['sip sip ☕', 'one more commit…', 'powered by caffeine']} />}
        >
          Where I&apos;ve <em>been</em>
        </SectionHead>

        <ol className="exp-list">
          {experiences.map((exp) => (
            <li key={exp.company + exp.position} className="exp-item">
              <div className="exp-meta">
                <span>{exp.duration}</span>
                <span>
                  {exp.location} · {exp.type}
                </span>
                {exp.current && <span className="tag exp-now">Now</span>}
              </div>

              <div>
                <h3>
                  {exp.position} <em>at {exp.company}</em>
                </h3>
                <p className="exp-desc">{exp.description}</p>

                {exp.achievements.length > 0 && (
                  <details>
                    <summary>Highlights</summary>
                    <ul>
                      {exp.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </details>
                )}

                <div className="tag-cloud">
                  {exp.technologies.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
