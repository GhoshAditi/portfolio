// Details sourced from each project's GitHub repo (README, source tree, language stats) and live site.
export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  context: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl?: string
  videoId?: string
  featured: boolean
  category: 'security' | 'ai' | 'education' | 'social-impact'
  problem: string
  features: { title: string; body: string }[]
  flow: { title: string; body: string }[]
  // bytes per language, from the GitHub languages API
  languages?: Record<string, number>
  team?: string[]
  next?: string[]
}

export const projects: Project[] = [
  {
    slug: 'beacon-email-security',
    title: 'Beacon',
    tagline: 'Know exactly what happens to an email after you hit send.',
    description:
      'Beacon is an email security solution that inserts tracking and PIN-protected links into emails, providing visibility, control, and AI-led insights to mitigate misuse and forwarding.',
    context: 'Built for StatusCode 2',
    image: '/beacon.webp',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Firebase', 'Appwrite', 'Gemini'],
    liveUrl: 'https://beacon-running-rrq5.vercel.app/',
    githubUrl: 'https://github.com/GhoshAditi/beacon_running',
    featured: true,
    category: 'security',
    problem:
      'Once a sensitive email leaves your outbox, you lose control of it: it can be forwarded, screenshotted or opened by someone it was never meant for — and you would never know.',
    features: [
      {
        title: 'PIN-protected links',
        body: 'Sensitive content never sits in the inbox. Recipients get a secure token link and must set and enter a PIN before the document, images or attachments unlock.',
      },
      {
        title: 'Invisible beacons',
        body: 'Every open is logged with device type, browser, OS, screen size, language, timezone and — with permission — location, so senders see who opened what, where and when.',
      },
      {
        title: 'AI access review',
        body: 'Gemini reviews the beacon and access logs for an email and decides whether the pattern looks like misuse. If it does, access can be revoked automatically.',
      },
      {
        title: 'One-click revoke',
        body: 'Senders and admins can kill access to any secured email instantly, even after it has been delivered and opened.',
      },
      {
        title: 'Command center',
        body: 'An admin dashboard for companies, users, PIN requests and every secured email, plus a company dashboard with employee management and insights.',
      },
    ],
    flow: [
      { title: 'Compose', body: 'The sender writes the email in Beacon and marks it as secure.' },
      { title: 'Link', body: 'Beacon swaps the content for a tokenised link with an invisible tracker.' },
      { title: 'Unlock', body: 'The recipient verifies with a PIN to read the protected content.' },
      { title: 'Track', body: 'Each access is logged with device, browser, OS and location signals.' },
      { title: 'Defend', body: 'AI flags suspicious patterns and the email can be revoked on the spot.' },
    ],
    languages: { TypeScript: 585962, JavaScript: 16071, CSS: 2921 },
  },
  {
    slug: 'hershield-women-safety-platform',
    title: 'HerShield',
    tagline: 'A pocket-sized safety net for women, online and offline.',
    description:
      'HerShield helps women in distress with SOS alerts, fake call functionality, real-time location sharing, and safe route mapping for immediate assistance.',
    context: 'Smart Bengal Hackathon 2025',
    image: '/hershield.png',
    technologies: ['Next.js', 'TypeScript', 'Go', 'Python', 'Flask', 'NLP', 'WebSockets', 'Gemini'],
    liveUrl: 'https://hershield-xi.vercel.app/',
    githubUrl: 'https://github.com/GhoshAditi/Hershield---Woman-Safety-Platform',
    featured: true,
    category: 'social-impact',
    problem:
      'In a threatening moment there is no time to open five different apps. Help, evidence and a safe way home need to be one tap away — and harassment online deserves the same protection as danger offline.',
    features: [
      { title: 'Send SOS', body: 'A single action alerts trusted contacts and shares your live location in real time.' },
      { title: 'Fake call', body: 'Trigger a realistic incoming call to excuse yourself from an uncomfortable situation.' },
      { title: 'Safe routes', body: 'Maps a safer route to your destination instead of simply the shortest one.' },
      { title: 'Evidence vault', body: 'Store photos, audio and notes as evidence, kept safely in one place.' },
      {
        title: 'Threat detection',
        body: 'A DistilBERT sentiment model (served with Flask) screens messages for hate speech and warns you to stop the conversation and reach a helpline. Gemini analyses text and media for threats.',
      },
      {
        title: 'Community chat',
        body: 'A real-time community space powered by a Go WebSocket server, so women can reach out and support each other instantly.',
      },
    ],
    flow: [
      { title: 'Frontend', body: 'Next.js + TypeScript app on port 3000 with auth, SOS, fake call and maps.' },
      { title: 'Realtime', body: 'A Go (gorilla/websocket) server on port 3001 broadcasts chat messages with keep-alive pings.' },
      { title: 'NLP', body: 'A Flask service on port 5000 runs a Hugging Face transformer to flag abusive messages.' },
      { title: 'AI', body: 'Next.js API routes call Gemini to analyse text and multimedia for threats.' },
    ],
    languages: { TypeScript: 60100, Go: 2613, JavaScript: 1817, Python: 1293, CSS: 345 },
  },
  {
    slug: 'bitshred-secure-data-wiper',
    title: 'BitShred',
    tagline: 'When data has to be gone for good.',
    description:
      'BitShred is a secure data wiping tool that irreversibly overwrites device data, making it unrecoverable by standard recovery tools.',
    context: 'Security tooling',
    image: '/bitshred.png',
    technologies: ['Next.js', 'TypeScript', 'Python'],
    liveUrl: 'https://www.youtube.com/watch?v=w6mCLpcqOdM',
    githubUrl: 'https://github.com/GhoshAditi/bitshred_final',
    videoId: 'w6mCLpcqOdM',
    featured: true,
    category: 'security',
    problem:
      'Deleting a file or formatting a drive only removes the pointers to data — the bytes stay on disk and ordinary recovery tools can bring them back. Old devices leak data long after they are recycled.',
    features: [
      { title: 'Irreversible overwrite', body: 'Data is overwritten at the storage level rather than just unlinked, so nothing is left to restore.' },
      { title: 'Recovery-proof', body: 'Wiped devices are designed to defeat standard file recovery tools.' },
      { title: 'Friendly interface', body: 'A clean Next.js interface guides you through choosing a target and confirming the wipe.' },
    ],
    flow: [
      { title: 'Select', body: 'Pick the device or drive you want to sanitise.' },
      { title: 'Confirm', body: 'Double-check the target — wiping is permanent by design.' },
      { title: 'Overwrite', body: 'The Python engine overwrites the data so it cannot be reconstructed.' },
      { title: 'Done', body: 'The device is safe to reuse, resell or recycle.' },
    ],
    languages: { TypeScript: 24893, CSS: 9203, JavaScript: 1173 },
  },
  {
    slug: 'aarya-threat-detection-system',
    title: 'Aarya',
    tagline: 'CCTV that notices when someone needs help.',
    description:
      'AARYA is a women safety monitoring platform that detects threats via CCTV based on SOS signals, gender context, and social cues to notify authorities.',
    context: 'Computer vision · Safety',
    image: '/aarya.png',
    technologies: ['Next.js', 'Python', 'OpenCV', 'DeepFace', 'MediaPipe', 'TensorFlow'],
    liveUrl: 'https://www.youtube.com/watch?v=zbQVtpCLYeE',
    videoId: 'zbQVtpCLYeE',
    featured: true,
    category: 'ai',
    problem:
      'Cities are full of cameras, but footage is mostly watched after something has already gone wrong. Aarya turns passive CCTV into an early-warning system.',
    features: [
      { title: 'SOS gesture detection', body: 'Pose estimation picks up distress signals made towards a camera in real time.' },
      { title: 'Gender context', body: 'DeepFace estimates the gender mix of a scene, e.g. a lone woman surrounded by a group of men.' },
      { title: 'Social cues', body: 'Body pose and movement patterns are analysed to spot aggressive or threatening behaviour.' },
      { title: 'Authority alerts', body: 'When the signals line up, the nearest authorities are notified with the location and context.' },
    ],
    flow: [
      { title: 'Capture', body: 'OpenCV reads frames from live CCTV feeds.' },
      { title: 'Perceive', body: 'MediaPipe tracks body pose; DeepFace estimates gender context.' },
      { title: 'Reason', body: 'TensorFlow models score the scene for SOS signals and threats.' },
      { title: 'Alert', body: 'A Next.js dashboard surfaces incidents and notifies authorities.' },
    ],
  },
  {
    slug: 'paws-animal-rescue-platform',
    title: 'Paws',
    tagline: '"Pause to save paws" — report an injured stray in seconds.',
    description:
      'Paws enables users to report injured stray animals to nearby NGOs and hospitals, backed by AI models for animal and injury classification.',
    context: 'Smart Bengal Hackathon 2024 · Finalist · GSSoC',
    image: '/paws.png',
    technologies: ['React', 'Tailwind CSS', 'Azure AI Vision', 'Firebase', 'PostgreSQL', 'Chart.js', 'Leaflet'],
    liveUrl: 'https://pawss.vercel.app/',
    githubUrl: 'https://github.com/GhoshAditi/Paws-frontend',
    videoId: 'vrhiuxCzyQY',
    featured: true,
    category: 'ai',
    problem:
      'People want to help when they see an injured animal on the street, but rarely know who to call. By the time an NGO finds out, it is often too late.',
    features: [
      { title: 'Report an animal', body: 'Snap a photo and the report is automatically routed to the nearest NGO or animal hospital based on your location.' },
      { title: 'AI classification', body: 'Azure AI Vision detects the type of animal, how many there are and any visible external injuries from the uploaded image.' },
      { title: 'Campaigns', body: 'Join NGO-run campaigns as a volunteer or donor.' },
      { title: 'NGO statistics', body: 'NGOs get dashboards (Chart.js) with statistics about stray animals in their area.' },
      { title: 'Support Paws', body: 'Users can donate to keep the platform running and improving.' },
    ],
    flow: [
      { title: 'Spot', body: 'A user finds an injured stray and opens Paws.' },
      { title: 'Snap', body: 'They upload a photo — stored via Cloudinary.' },
      { title: 'Classify', body: 'AI identifies the animal, count and injuries.' },
      { title: 'Route', body: 'Leaflet maps find the nearest NGO or hospital and the report is sent.' },
      { title: 'Rescue', body: 'The NGO responds and tracks the case from its dashboard.' },
    ],
    languages: { JavaScript: 250490, CSS: 2969, HTML: 1285 },
    team: ['Shreya', 'Arnab', 'Rishi', 'Anirban', 'Debayudh', 'Aditi'],
    next: ['Adoption page', 'Lost & found', 'Community forum', 'Report feedback', 'Native mobile app'],
  },
  {
    slug: 'engidocs-learning-hub',
    title: 'EngiDocs',
    tagline: 'Everything an engineering student needs the night before the exam.',
    description:
      'EngiDocs provides engineering resources like PDFs, lecture links, PYQs, and summarization support for multiple branches and semesters.',
    context: 'Open source · 5★ on GitHub',
    image: '/engidocs.png',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Clerk', 'Python', 'MongoDB'],
    liveUrl: 'https://engidocs.vercel.app/',
    githubUrl: 'https://github.com/GhoshAditi/EngiDocs',
    featured: true,
    category: 'education',
    problem:
      'Notes, lecture videos and previous-year papers are scattered across drives and group chats — and there is never enough time to read all of it before an exam.',
    features: [
      { title: 'Notes', body: 'Curated notes filtered by year, stream and subject.' },
      { title: 'Video solutions', body: 'Hand-picked lecture videos for the topics that are hard to crack from notes alone.' },
      { title: 'PYQs', body: 'Previous-year question papers to test yourself before the semester exam.' },
      {
        title: 'TL;DR summariser',
        body: 'Open any PDF in TL;DR to get the key points and ask questions about it. Off-topic questions are politely refused so answers stay grounded in the document.',
      },
    ],
    flow: [
      { title: 'Choose', body: 'Pick your year, stream and subject.' },
      { title: 'Study', body: 'Get notes, videos and PYQs for exactly that subject.' },
      { title: 'Summarise', body: 'Send a PDF to TL;DR for a distilled summary.' },
      { title: 'Ask', body: 'Chat with the document to clear doubts quickly.' },
    ],
    languages: { TypeScript: 82207, CSS: 959, JavaScript: 227 },
    team: ['Aditi (project admin)', 'Rishi (idea & TL;DR)'],
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
