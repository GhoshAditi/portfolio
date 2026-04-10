type QuestBannerProps = {
  quest: string
  reward: string
}

export default function QuestBanner({ quest, reward }: QuestBannerProps) {
  return (
    <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-600/55 bg-slate-900/55 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-200">
      <span className="text-accent-cyan">{quest}</span>
      <span className="text-orange-300">| {reward}</span>
    </div>
  )
}
