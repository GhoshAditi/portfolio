import { SectionHead } from '@/components/Sketch'
import Doodle from '@/components/Doodle'
import { LINKEDIN_URL } from '@/lib/site'

const posts = [
  {
    emoji: '🎤',
    date: '2 months ago',
    content:
      'Had the wonderful opportunity to be a speaker at RCCIIT WEBVERSE 1.0! Introduced juniors to Web Development alongside Rivu Chatterjee and Rishi Paul. My first speaking session and it was an incredible experience conducting hands-on sessions and seeing the energy from students. Grateful for this opportunity to grow and contribute!',
    likes: 541,
    comments: 2,
    shares: 2,
  },
  {
    emoji: '🏆',
    date: '2 years ago',
    content:
      'Thrilled to announce that The Hack-ators successfully boarded the ship for offline hackathon participation with StatusCode2! Our project VVote — a Decentralized Voting Application built using Ethereum Blockchain. Worked on front-end development and AI Chatbot implementation. Big thanks to my amazing team and all sponsors including Avalanche, GitHub, and others!',
    likes: 236,
    comments: 10,
    shares: 2,
  },
]

export default function LinkedInPosts() {
  return (
    <section id="notes" className="section">
      <div className="container">
        <SectionHead
          index="05"
          note="Talks, hackathons and moments from the community"
          aside={<Doodle name="dog" label="Pat the dog" size={150} says={['woof!', 'good human!', '*wags tail*']} />}
        >
          Notes from the <em>road</em>
        </SectionHead>

        <div className="notes-grid">
          {posts.map((post) => (
            <article key={post.date} className="card note">
              <div className="note-head">
                <span className="caption">{post.date}</span>
                <span className="badge" style={{ position: 'static' }} aria-hidden="true">
                  {post.emoji}
                </span>
              </div>
              <blockquote>{post.content}</blockquote>
              <div className="note-stats">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
                <span>{post.shares} shares</span>
                <a className="link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  On LinkedIn ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
