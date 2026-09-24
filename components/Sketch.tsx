import type { CSSProperties, ReactNode } from 'react'

// Hand-drawn connective lines. Slightly uneven curves on purpose.
const PATHS = {
  loop: 'M2 60 C 40 10, 90 5, 120 40 S 150 110, 110 100 S 80 40, 140 20 S 230 30, 260 70',
  wave: 'M2 30 C 30 2, 60 58, 95 28 S 150 4, 185 32 S 245 58, 298 24',
  swoop: 'M4 150 C 30 60, 120 10, 200 30 S 300 120, 250 150 S 190 110, 240 70 S 330 20, 396 40',
  curl: 'M2 90 C 20 40, 70 20, 90 50 S 60 100, 50 70 S 90 10, 160 12',
}

export function Squiggle({
  variant,
  width,
  height,
  style,
}: {
  variant: keyof typeof PATHS
  width: number
  height: number
  style?: CSSProperties
}) {
  const box = { loop: '0 0 262 112', wave: '0 0 300 60', swoop: '0 0 400 160', curl: '0 0 162 104' }[variant]
  return (
    <svg className="squiggle" viewBox={box} width={width} height={height} style={style} aria-hidden="true">
      <path d={PATHS[variant]} pathLength={1} />
    </svg>
  )
}

export function SectionHead({
  index,
  children,
  note,
  aside,
}: {
  index: string
  children: ReactNode
  note?: string
  aside?: ReactNode
}) {
  return (
    <div className="sec-head">
      <span className="sec-index">{index}</span>
      <h2 className="sec-title">{children}</h2>
      {note && <p className="paren">{note}</p>}
      {aside}
    </div>
  )
}
