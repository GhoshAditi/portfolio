type QuestBannerProps = {
  quest: string
  reward: string
}

export default function QuestBanner({ quest, reward }: QuestBannerProps) {
  return (
    <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-accent-cyan/35 bg-slate-900/60 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-accent-cyan">
      <span>{quest}</span>
      <span className="text-accent-orange">• Reward: {reward}</span>
    </div>
  )
}
