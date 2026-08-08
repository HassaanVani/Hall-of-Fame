import { useEffect, useState } from 'react'
import { recommendationPortalUrl, teachers, type Teacher } from './data'

const validSlugs = Object.keys(teachers) as Teacher['slug'][]

function useTeacher() {
  const slug = window.location.pathname.replace(/^\//, '').split('/')[0] as Teacher['slug']
  return teachers[validSlugs.includes(slug) ? slug : 'renaldi']
}

function Progress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => setProgress((window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100)
    update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update)
  }, [])
  return <div className="progress" aria-hidden="true"><i style={{ height: `${progress}%` }} /></div>
}

function useSceneTransitions() {
  useEffect(() => {
    const scenes = [...document.querySelectorAll<HTMLElement>('.scene')]
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting)),
      { threshold: 0.58 },
    )
    scenes.forEach(scene => observer.observe(scene))
    return () => observer.disconnect()
  }, [])
}

function PhotoPlaceholder({ label, index }: { label: string; index: number }) {
  return <div className="photo-slot" aria-label={`Photo placeholder: ${label}`} role="img">
    <span className="photo-index">0{index + 1}</span><span>PHOTO MOMENT</span><small>{label}</small>
  </div>
}

function App() {
  const teacher = useTeacher()
  const portalReady = Boolean(recommendationPortalUrl)
  useSceneTransitions()
  useEffect(() => { document.title = `${teacher.honorific} — Hall of Fame`; document.documentElement.style.setProperty('--accent', teacher.accent); document.documentElement.style.setProperty('--accent-soft', teacher.accentSoft) }, [teacher])

  return <main>
    <Progress />
    <div className="scanlines" aria-hidden="true" />
    <header className="masthead"><span className="signal" /><span>HASSAAN VANI // PRIVATE EDITION</span><span>SUBJECT 0{validSlugs.indexOf(teacher.slug) + 1}</span></header>

    <section className="hero scene">
      <p className="eyebrow">RECOMMENDATION HALL OF FAME // 2026</p>
      <p className="subject">FOR {teacher.honorific.toUpperCase()}</p>
      <h1>{teacher.archetype.split(' ').map((word, i) => <span key={word} className={i ? 'accent' : ''}>{word} </span>)}</h1>
      <p className="hero-copy">{teacher.opener}</p>
      <a className="scroll-cue" href="#story">SCROLL TO INITIATE <b>↓</b></a>
    </section>

    <section id="story" className="thesis scene"><p className="eyebrow">{teacher.role.toUpperCase()}</p><h2>{teacher.thesis}</h2></section>

    <div className="highlights" aria-label="Curated highlights">
      {teacher.highlights.map((highlight, index) => <article className={`highlight scene highlight-${index % 2}`} key={highlight.title}>
        <div className="highlight-copy"><p className="eyebrow">{highlight.eyebrow}</p><h3>{highlight.title}</h3><p>{highlight.copy}</p>{highlight.stat && <div className="stat"><strong>{highlight.stat}</strong><span>{highlight.statLabel}</span></div>}</div>
        <PhotoPlaceholder label={highlight.media} index={index} />
      </article>)}
    </div>

    <section className="quote-bank scene" aria-label="Words worth keeping"><p className="eyebrow">FIELD NOTES // WORDS WORTH KEEPING</p>{teacher.quotes.map(quote => <blockquote key={quote}>{quote}</blockquote>)}</section>

    <section className="archive scene"><p className="eyebrow">THE ARCHIVE // MORE THAT STAYED WITH ME</p><div>{teacher.archive.map((memory, index) => <details key={memory.title}><summary><span>0{index + 1}</span>{memory.title}<b>+</b></summary><p>{memory.copy}</p></details>)}</div></section>

    <section className="ask scene"><p className="eyebrow">FINAL TRANSMISSION // THE ASK</p><p className="ask-intro">Every achievement here has your fingerprint on it.</p><h2>{teacher.request}</h2>{portalReady ? <a className="portal-button" href={recommendationPortalUrl}>OPEN RECOMMENDATION PORTAL <span>↗</span></a> : <button className="portal-button" disabled title="A recommendation portal URL will be added here">RECOMMENDATION PORTAL — COMING SOON <span>↗</span></button>}<p className="portal-note">Thank you for being part of this chapter.</p></section>

    <footer><span>END OF TRANSMISSION</span><span>{teacher.honorific.toUpperCase()} // {teacher.archetype}</span></footer>
  </main>
}

export { App }
