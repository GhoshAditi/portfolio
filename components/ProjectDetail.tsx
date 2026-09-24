'use client'

import { useState } from 'react'
import type { Project } from '@/lib/projects'

export function FeatureExplorer({ features }: { features: Project['features'] }) {
  const [active, setActive] = useState(0)
  const f = features[active]

  return (
    <div className="explorer">
      <div className="explorer-tabs" role="tablist" aria-label="Features">
        {features.map((item, i) => (
          <button
            key={item.title}
            role="tab"
            id={`feature-tab-${i}`}
            aria-selected={i === active}
            aria-controls="feature-panel"
            className="explorer-tab"
            onClick={() => setActive(i)}
          >
            <span>{String(i + 1).padStart(2, '0')}</span>
            {item.title}
          </button>
        ))}
      </div>
      <div key={active} id="feature-panel" role="tabpanel" aria-labelledby={`feature-tab-${active}`} className="card explorer-panel">
        <span className="project-num">{String(active + 1).padStart(2, '0')}</span>
        <h3>{f.title}</h3>
        <p>{f.body}</p>
        <div className="explorer-nav">
          <button className="pill" onClick={() => setActive((active - 1 + features.length) % features.length)}>
            ← Prev
          </button>
          <button className="pill" onClick={() => setActive((active + 1) % features.length)}>
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

export function FlowSteps({ flow }: { flow: Project['flow'] }) {
  const [step, setStep] = useState(0)

  return (
    <div className="flow">
      <ol className="flow-track" style={{ ['--progress' as string]: step / Math.max(flow.length - 1, 1) }}>
        {flow.map((s, i) => (
          <li key={s.title}>
            <button
              className={`flow-dot ${i <= step ? 'is-done' : ''}`}
              aria-current={i === step ? 'step' : undefined}
              onClick={() => setStep(i)}
            >
              {i + 1}
            </button>
            <span className="flow-label">{s.title}</span>
          </li>
        ))}
      </ol>
      <p key={step} className="flow-body">
        <em>{flow[step].title}.</em> {flow[step].body}
      </p>
    </div>
  )
}

export function LanguageBar({ languages }: { languages: Record<string, number> }) {
  const total = Object.values(languages).reduce((a, b) => a + b, 0)
  const rows = Object.entries(languages).map(([name, bytes]) => ({ name, pct: (bytes / total) * 100 }))
  const [hover, setHover] = useState<string | null>(null)

  return (
    <div className="langs">
      <div className="lang-bar">
        {rows.map((r, i) => (
          <span
            key={r.name}
            className={`lang-seg lang-${i % 4} ${hover === r.name ? 'is-hover' : ''}`}
            style={{ width: `${Math.max(r.pct, 1.5)}%` }}
            onMouseEnter={() => setHover(r.name)}
            onMouseLeave={() => setHover(null)}
          />
        ))}
      </div>
      <ul className="lang-legend">
        {rows.map((r, i) => (
          <li
            key={r.name}
            className={hover === r.name ? 'is-hover' : ''}
            onMouseEnter={() => setHover(r.name)}
            onMouseLeave={() => setHover(null)}
          >
            <i className={`lang-${i % 4}`} /> {r.name} <b>{r.pct < 0.1 ? '<0.1' : r.pct.toFixed(1)}%</b>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function VideoFacade({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false)

  return (
    <div className="card video">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={`${title} demo video`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button className="video-poster" onClick={() => setPlay(true)} aria-label={`Play ${title} demo video`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="pill pill--ink">▶ Watch the demo</span>
        </button>
      )}
    </div>
  )
}
