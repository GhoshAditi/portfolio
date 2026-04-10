'use client'

import { motion } from 'framer-motion'
import { Target, Shield, Rocket } from 'lucide-react'

const metrics = [
  { label: 'Level', value: '18', hint: 'Builder Rank' },
  { label: 'XP', value: '12,480', hint: 'Engineering XP' },
  { label: 'Quest Wins', value: '15', hint: 'Shipped Projects' },
  { label: 'Streak', value: '143', hint: 'Learning Days' },
]

const achievements = [
  'Built AI + social-impact apps',
  'Full-stack rapid prototyping',
  'Performance-first UI execution',
]

export default function GamifiedOverview() {
  return (
    <section className="px-6 pb-16 -mt-8 relative z-20">
      <div className="container mx-auto max-w-6xl">
        <div className="im-card p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent-orange">Player Dashboard</p>
              <h2 className="text-2xl md:text-3xl font-black text-slate-100 mt-2">Command Center</h2>
            </div>
            <div className="flex items-center gap-2">
              <a href="#projects" className="chip-link">
                Quests
              </a>
              <a href="#services" className="chip-link">
                Skill Tree
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-6">
            {metrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="im-card p-4 hover:border-accent-cyan/35 transition-colors"
              >
                <p className="text-sm text-slate-300">{metric.label}</p>
                <p className="text-3xl font-black text-accent-cyan leading-tight mt-2">{metric.value}</p>
                <p className="text-xs uppercase tracking-[0.13em] text-slate-400 mt-1">{metric.hint}</p>
              </motion.article>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-accent-orange/35 bg-accent-orange/10 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-accent-orange mb-3">Unlocked Achievements</p>
              <div className="grid gap-3">
                {achievements.map((achievement) => (
                  <div key={achievement} className="rounded-xl bg-slate-900/70 border border-white/10 p-3 text-sm text-slate-200">
                    {achievement}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-accent-cyan/35 bg-accent-cyan/10 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-accent-cyan mb-4">Current Mission Loadout</p>
              <div className="space-y-3 text-slate-200">
                <p className="inline-flex items-center gap-2"><Target size={16} className="text-accent-cyan" /> Build impactful products</p>
                <p className="inline-flex items-center gap-2"><Shield size={16} className="text-accent-orange" /> Ship resilient systems</p>
                <p className="inline-flex items-center gap-2"><Rocket size={16} className="text-fuchsia-300" /> Scale with performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
