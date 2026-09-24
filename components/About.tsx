import { SectionHead } from '@/components/Sketch'
import Doodle from '@/components/Doodle'

const stack = [
  'JavaScript', 'TypeScript', 'Python', 'C++', 'C', 'Go',
  'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase',
  'Docker', 'AWS', 'Linux', 'Git', 'GitHub', 'TensorFlow', 'OpenCV',
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead
          index="01"
          note="Origin story, in a few honest lines"
          aside={<Doodle name="robot" label="Poke the robot" size={170} says={['beep boop!', 'compiling… ✨', 'zero bugs today']} />}
        >
          About <em>me</em>
        </SectionHead>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m a full-stack developer obsessed with building products that are <em>beautiful, useful</em> and
              technically sharp.
            </p>
            <p>
              From frontend interactions to backend architecture, I enjoy owning the <em>full board</em> — and I care
              deeply about speed, code quality and product clarity.
            </p>
            <p>
              Outside projects, I invest in open-source, community work and continuous learning to keep{' '}
              <em>leveling up.</em>
            </p>
          </div>

          <div>
            <div className="stats">
              <div className="stat">
                <b>5+</b>
                <span className="caption">Projects shipped</span>
              </div>
              <div className="stat">
                <b>2+</b>
                <span className="caption">Years building</span>
              </div>
            </div>

            <div id="stack" className="stack-block">
              <span className="caption">Tools I reach for</span>
              <div className="tag-cloud">
                {stack.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
