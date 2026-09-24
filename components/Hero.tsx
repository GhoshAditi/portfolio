import { Squiggle } from '@/components/Sketch'
import Doodle from '@/components/Doodle'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Squiggle variant="swoop" width={420} height={168} style={{ left: '-60px', top: '18%' }} />
      <Squiggle variant="loop" width={260} height={112} style={{ right: '4%', bottom: '14%' }} />

      <div className="container" style={{ position: 'relative' }}>
        <Doodle
          name="hello"
          label="Say hi back"
          size={170}
          says={['hi hi!', 'nice to meet you!', 'welcome in ✿']}
          className="hero-hello"
        />
        <p className="status">
          <i aria-hidden="true" /> Available for select collaborations
        </p>

        <h1 className="hero-title">
          Hey there! I&apos;m{' '}
          <span className="nowrap">
            Aditi{' '}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="avatar-inline" src="/pfp.jpg" alt="Portrait of Aditi Ghosh" />.
          </span>
          <br />
          I build products for the web
          that feel as <em>sharp</em> as <em>they&nbsp;look.</em>
        </h1>

        <p className="paren">Full stack engineer focused on performance, product clarity and durable UI systems</p>

        <div className="hero-actions">
          <a className="pill" href="/Aditi_Ghosh_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Open CV
          </a>
          <a className="pill pill--ink" href="#contact">
            Say hello →
          </a>
        </div>
      </div>
    </section>
  )
}
