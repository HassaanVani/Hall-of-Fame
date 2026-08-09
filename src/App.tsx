import { useEffect, useState } from 'react'
import { recommendationPortalUrl, teachers, type Teacher } from './data'

const validSlugs = Object.keys(teachers) as Teacher['slug'][]

function useTeacher() {
  const slug = window.location.pathname.replace(/^\//, '').split('/')[0] as Teacher['slug']
  return validSlugs.includes(slug) ? teachers[slug] : undefined
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

function PhotoPanel({ label, image, index }: { label: string; image?: string; index: number }) {
  return <div className={`photo-slot${image ? ' has-image' : ''}`} aria-label={image ? `Photo: ${label}` : `Photo placeholder: ${label}`} role="img">
    {image && <img src={image} alt="" loading="lazy" />}
    <span className="photo-index">0{index + 1}</span><span>PHOTO MOMENT</span><small>{label}</small>
  </div>
}

function Home() {
  useSceneTransitions()
  useEffect(() => {
    document.title = 'Hassaan Vani — Hall of Fame'
    document.documentElement.style.setProperty('--accent', '#CCFF00')
    document.documentElement.style.setProperty('--accent-soft', '#e1ff6b')
  }, [])
  return <main className="intro-page">
    <Progress />
    <div className="scanlines" aria-hidden="true" />
    <header className="masthead"><span className="signal" /><span>HASSAAN VANI // PRIVATE EDITION</span><span>ORIGIN FILE</span></header>
    <section className="intro-hero scene">
      <p className="eyebrow">2026 RECAP // CLASS OF 2027</p>
      <p className="subject">HASSAAN VANI PRESENTS</p>
      <h1>THE <span>CANDIDATE.</span></h1>
      <p>One curious mind. A growing collection of improbable projects. Still just getting started.</p>
      <a className="scroll-cue" href="#hype">SCROLL TO UNWRAP <b>↓</b></a>
    </section>
    <section id="hype" className="intro-manifesto scene"><p className="eyebrow">TOP GENRES // 2026</p><h2>BUILD.<br /><span>ARGUE.</span><br />TEST.<br /><span>REPEAT.</span></h2><p>History gave the questions. Physics made them measurable. Code made them useful. Debate made them impossible to ignore.</p></section>
    <section className="intro-stats scene" aria-label="Year in numbers"><p className="eyebrow">THE YEAR, DECODED</p><div className="wrapped-stats"><article><strong>4 × 5</strong><span>AP PHYSICS EXAMS</span></article><article><strong>38/38</strong><span>ELECTROMAGNETISM</span></article><article><strong>3RD</strong><span>SIENA GOLD</span></article><article><strong>1ST</strong><span>ADVENT OF CODE</span></article></div><p className="stats-caption">Not a list of outcomes. Evidence of a habit: go one layer deeper.</p></section>
    <section className="intro-collage scene"><p className="eyebrow">MOST-REPLAYED MODE</p><h2>MAKE THE THING<br />THAT MAKES THE<br /><span>ROOM BETTER.</span></h2><div className="collage-grid" aria-hidden="true"><i /><i /><i /><i /></div><p>From modeling a movie fall a million times to rebuilding a school resource, the goal stayed constant: turn curiosity into something other people can use.</p></section>
    <section className="intro-outro scene"><p className="eyebrow">NEXT UP // 2027 AND BEYOND</p><p className="ask-intro">THE QUEUE IS STILL GROWING.</p><h2>More questions.<br />More systems.<br /><span>More to build.</span></h2><p>Thanks for being part of the beginning.</p></section>
    <footer><span>END OF INTRODUCTION</span><span>HASSAAN VANI // THE CANDIDATE</span></footer>
  </main>
}

function App() {
  const teacher = useTeacher()
  if (!teacher) return <Home />
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
        <PhotoPanel label={highlight.media} image={highlight.image} index={index} />
      </article>)}
    </div>

    {teacher.quotes.length > 0 && <section className="quote-bank scene" aria-label="Words worth keeping"><p className="eyebrow">FIELD NOTES // WORDS WORTH KEEPING</p><div className="quote-stack">{teacher.quotes.map((quote, index) => <blockquote className="quote-card" key={`${quote.text}-${index}`}><p>{quote.text}</p>{(quote.source || quote.context) && <div className="quote-meta"><span>{quote.source}</span><span>{quote.context}</span></div>}</blockquote>)}</div></section>}

    <section className="archive scene"><p className="eyebrow">THE ARCHIVE // MORE THAT STAYED WITH ME</p><div>{teacher.archive.map((memory, index) => <details key={memory.title}><summary><span>0{index + 1}</span>{memory.title}<b>+</b></summary><p>{memory.copy}</p></details>)}</div></section>

    <section className="ask scene"><p className="eyebrow">FINAL TRANSMISSION // THE ASK</p><p className="ask-intro">Every achievement here has your fingerprint on it.</p><h2>{teacher.request}</h2>{portalReady ? <a className="portal-button" href={recommendationPortalUrl}>OPEN RECOMMENDATION PORTAL <span>↗</span></a> : <button className="portal-button" disabled title="A recommendation portal URL will be added here">RECOMMENDATION PORTAL — COMING SOON <span>↗</span></button>}<p className="portal-note">Thank you for being part of this chapter.</p></section>

    <footer><span>END OF TRANSMISSION</span><span>{teacher.honorific.toUpperCase()} // {teacher.archetype}</span></footer>
  </main>
}

export { App }
