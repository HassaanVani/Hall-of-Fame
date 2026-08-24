import { useEffect, useRef, useState } from 'react'
import { recommendationPortalUrl, teachers, type ArchiveAsset, type Teacher } from './data'

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

function useChapterNavigation() {
  useEffect(() => {
    let locked = false
    let unlockTimer = 0
    let touchStartY = 0
    const scenes = () => [...document.querySelectorAll<HTMLElement>('.scene')]
    const keepLocked = () => {
      window.clearTimeout(unlockTimer)
      unlockTimer = window.setTimeout(() => { locked = false }, 650)
    }
    const move = (direction: 1 | -1) => {
      if (locked) return
      const chapterList = scenes()
      const first = chapterList[0]
      const last = chapterList.at(-1)
      const footer = document.querySelector<HTMLElement>('main > footer')
      if (!first || !last) return
      if (direction === 1 && window.scrollY < first.offsetTop - 4) {
        locked = true; keepLocked(); first.scrollIntoView({ behavior: 'smooth', block: 'start' }); return
      }
      if (direction === -1 && footer && window.scrollY > last.offsetTop + 8) {
        locked = true; keepLocked(); last.scrollIntoView({ behavior: 'smooth', block: 'start' }); return
      }
      const current = chapterList.reduce((closest, scene, index) => Math.abs(scene.getBoundingClientRect().top) < Math.abs(chapterList[closest].getBoundingClientRect().top) ? index : closest, 0)
      if (direction === -1 && current === 0) {
        locked = true; keepLocked(); window.scrollTo({ top: 0, behavior: 'smooth' }); return
      }
      if (direction === 1 && current === chapterList.length - 1 && footer) {
        locked = true; keepLocked(); footer.scrollIntoView({ behavior: 'smooth', block: 'start' }); return
      }
      const next = chapterList[Math.max(0, Math.min(chapterList.length - 1, current + direction))]
      if (!next || next === chapterList[current]) return
      locked = true; keepLocked()
      next.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const onWheel = (event: WheelEvent) => { if (Math.abs(event.deltaY) < 8) return; event.preventDefault(); if (locked) { keepLocked(); return }; move(event.deltaY > 0 ? 1 : -1) }
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLDetailsElement || event.target instanceof HTMLButtonElement) return
      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); move(1) }
      if (['ArrowUp', 'PageUp'].includes(event.key)) { event.preventDefault(); move(-1) }
    }
    const onTouchStart = (event: TouchEvent) => { touchStartY = event.changedTouches[0]?.clientY ?? 0 }
    const onTouchMove = (event: TouchEvent) => { event.preventDefault() }
    const onTouchEnd = (event: TouchEvent) => { const delta = touchStartY - (event.changedTouches[0]?.clientY ?? touchStartY); if (Math.abs(delta) > 36) move(delta > 0 ? 1 : -1) }
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => { window.clearTimeout(unlockTimer); window.removeEventListener('wheel', onWheel); window.removeEventListener('keydown', onKey); window.removeEventListener('touchstart', onTouchStart); window.removeEventListener('touchmove', onTouchMove); window.removeEventListener('touchend', onTouchEnd) }
  }, [])
}

type LightboxImage = { src: string; label: string }

function PhotoPanel({ label, image, images, index, onOpen }: { label: string | string[]; image?: string; images?: string[]; index: number; onOpen: (image: LightboxImage) => void }) {
  const labels = Array.isArray(label) ? label : [label]
  const sources = images ?? (image ? [image] : [])
  const gallery = labels.length > 1 || sources.length > 1
  return <div className={`photo-slot${sources.length ? ' has-image' : ''}${gallery ? ' photo-gallery' : ''}`} aria-label={sources.length ? `Photo: ${labels.join(', ')}` : `Photo placeholders: ${labels.join(', ')}`}>
    {gallery ? <div className={`photo-grid count-${labels.length}`}>{labels.map((item, itemIndex) => <div className="photo-tile" key={item}>{sources[itemIndex] && <button className="image-open" type="button" onClick={() => onOpen({ src: sources[itemIndex], label: item })} aria-label={`Open ${item} full screen`}><img src={sources[itemIndex]} alt={item} loading="eager" /></button>}<small>{item}</small></div>)}</div> : image && <button className="image-open" type="button" onClick={() => onOpen({ src: image, label: labels[0] })} aria-label={`Open ${labels[0]} full screen`}><img src={image} alt={labels[0]} loading="eager" /></button>}
    <span className="photo-index">0{index + 1}</span><span>{gallery ? 'PHOTO SEQUENCE' : 'PHOTO MOMENT'}</span><small>{gallery ? `${labels.length} RELATED MOMENTS` : label}</small>
  </div>
}

function Archive({ teacher, onOpen }: { teacher: Teacher; onOpen: (image: LightboxImage) => void }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex === null ? undefined : teacher.archive[activeIndex]
  return <section className="archive scene"><p className="eyebrow">THE ARCHIVE // MORE THAT STAYED WITH ME</p><div className="archive-list">{teacher.archive.map((memory, index) => <button className="archive-entry" type="button" key={memory.title} onClick={() => setActiveIndex(index)}><span>0{index + 1}</span><strong>{memory.title}</strong><b>+</b></button>)}</div>{active && <div className="archive-modal" role="dialog" aria-modal="true" aria-label={active.title}><button className="archive-close" type="button" onClick={() => setActiveIndex(null)} aria-label="Close archive item">×</button><p className="eyebrow">ARCHIVE ENTRY // 0{activeIndex! + 1}</p><h3>{active.title}</h3><p>{active.copy}</p>{active.media && <div className="archive-media">{active.media.map(asset => asset.kind === 'image' ? <button className="archive-image-open" type="button" key={asset.src} onClick={() => onOpen(asset)} aria-label={`Open ${asset.label} full screen`}><img src={asset.src} alt={asset.label} /></button> : <video key={asset.src} controls playsInline preload="metadata" aria-label={asset.label}><source src={asset.src} /></video>)}</div>}</div>}</section>
}

function MiscCollage({ items, onOpen }: { items: ArchiveAsset[]; onOpen: (image: LightboxImage) => void }) {
  return <section className="misc-collage scene"><p className="eyebrow">MISC MOMENTS // THE REST OF THE ALBUM</p><div>{items.map((item, index) => item.kind === 'image' ? <button className="misc-item" type="button" key={item.src} onClick={() => onOpen(item)} aria-label={`Open ${item.label} full screen`}><img src={item.src} alt={item.label} /><span>0{index + 1} // {item.label}</span></button> : <div className="misc-item" key={item.src}><video controls playsInline preload="metadata" aria-label={item.label}><source src={item.src} /></video><span>0{index + 1} // {item.label}</span></div>)}</div></section>
}

function ImageLightbox({ image, onClose }: { image: LightboxImage | null; onClose: () => void }) {
  const [zoomed, setZoomed] = useState(false)
  const [lensEnabled, setLensEnabled] = useState(true)
  const [lensPos, setLensPos] = useState({ x: 0, y: 0, show: false, imgW: 0, imgH: 0 })
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => { setZoomed(false); setLensPos(p => ({ ...p, show: false })) }, [image])
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [onClose])

  if (!image) return null

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current || zoomed) return
    const rect = imgRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setLensPos({ x, y, show: true, imgW: rect.width, imgH: rect.height })
    } else {
      setLensPos(p => ({ ...p, show: false }))
    }
  }

  const handleMouseLeave = () => {
    setLensPos(p => ({ ...p, show: false }))
  }

  const zoomFactor = 2.4
  const lensRadius = 95 // 190px diameter

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.label}>
      <button className="lightbox-backdrop" type="button" onClick={onClose} aria-label="Close image viewer" />
      <div className="lightbox-shell">
        <div className="lightbox-bar">
          <span>{image.label}</span>
          <div>
            <button type="button" onClick={() => setLensEnabled(v => !v)}>
              {lensEnabled ? 'LENS: ACTIVE' : 'LENS: OFF'}
            </button>
            <button type="button" onClick={() => setZoomed(v => !v)}>
              {zoomed ? 'RESET VIEW' : 'FULL ZOOM'}
            </button>
            <button type="button" onClick={onClose}>CLOSE ×</button>
          </div>
        </div>

        <div 
          className={`lightbox-image${zoomed ? ' is-zoomed' : ''}`} 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => setZoomed(v => !v)}
          style={{ position: 'relative' }}
        >
          <img ref={imgRef} src={image.src} alt={image.label} />

          {/* Interactive Magnifying Glass Loupe */}
          {!zoomed && lensEnabled && lensPos.show && (
            <div 
              className="magnifier-lens"
              style={{
                position: 'absolute',
                left: `${lensPos.x - lensRadius}px`,
                top: `${lensPos.y - lensRadius}px`,
                width: `${lensRadius * 2}px`,
                height: `${lensRadius * 2}px`,
                borderRadius: '50%',
                border: '2px solid var(--accent)',
                boxShadow: '0 0 25px var(--accent), inset 0 0 20px rgba(0,0,0,0.6), 0 12px 36px rgba(0,0,0,0.95)',
                backgroundImage: `url("${image.src}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${lensPos.imgW * zoomFactor}px ${lensPos.imgH * zoomFactor}px`,
                backgroundPosition: `${-lensPos.x * zoomFactor + lensRadius}px ${-lensPos.y * zoomFactor + lensRadius}px`,
                pointerEvents: 'none',
                zIndex: 10,
              }}
            >
              <div className="lens-crosshair" />
            </div>
          )}
        </div>

        <p>HOVER MOUSE TO MAGNIFY DETAILS // CLICK IMAGE FOR FULL SCALE ZOOM</p>
      </div>
    </div>
  )
}

function Home() {
  useSceneTransitions()
  useChapterNavigation()
  useEffect(() => {
    document.title = 'Hassaan Vani | Hall of Fame'
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
    <section className="intro-collage scene"><p className="eyebrow">MOST-REPLAYED MODE</p><h2>MAKE THE<br />THING THAT MAKES<br /><span>THE ROOM BETTER.</span></h2><div className="signal-orbit" aria-hidden="true"><i /><i /><span>IDEAS → SYSTEMS → IMPACT</span></div><p>From modeling a movie fall a million times to rebuilding a school resource, the goal stayed constant: turn curiosity into something other people can use.</p></section>
    <section className="intro-outro scene"><p className="eyebrow">NEXT UP // 2027 AND BEYOND</p><p className="ask-intro">THE QUEUE IS STILL GROWING.</p><h2>More questions.<br />More systems.<br /><span>More to build.</span></h2><p>Thanks for being part of the beginning.</p></section>
    <footer><span>END OF INTRODUCTION</span><span>HASSAAN VANI // THE CANDIDATE</span></footer>
  </main>
}

function App() {
  const teacher = useTeacher()
  if (!teacher) return <Home />
  const portalReady = Boolean(recommendationPortalUrl)
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null)
  useSceneTransitions()
  useChapterNavigation()
  useEffect(() => { document.title = `${teacher.honorific} | Hall of Fame`; document.documentElement.style.setProperty('--accent', teacher.accent); document.documentElement.style.setProperty('--accent-soft', teacher.accentSoft) }, [teacher])

  return <><main className={`teacher-page ${teacher.slug}`}>
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
        <PhotoPanel label={highlight.media} image={highlight.image} images={highlight.images} index={index} onOpen={setLightboxImage} />
      </article>)}
    </div>

    {teacher.quotes.length > 0 && <section className="quote-bank scene" aria-label="Words worth keeping"><p className="eyebrow">FIELD NOTES // WORDS WORTH KEEPING</p><div className="quote-stack">{teacher.quotes.map((quote, index) => <blockquote className="quote-card" key={`${quote.text}-${index}`}><p>{quote.text}</p>{(quote.source || quote.context) && <div className="quote-meta"><span>{quote.source}</span><span>{quote.context}</span></div>}</blockquote>)}</div></section>}

    <Archive teacher={teacher} onOpen={setLightboxImage} />

    <MiscCollage items={teacher.misc} onOpen={setLightboxImage} />

    <section className="unsaid scene"><p className="eyebrow">THINGS I NEVER GOT TO SAY TO YOU</p><div>{teacher.unsaid.map((thought, index) => <p key={thought}><span>0{index + 1}</span>{thought}</p>)}</div></section>

    <section className="ask scene"><p className="eyebrow">FINAL TRANSMISSION // THE ASK</p><p className="ask-intro">Every achievement here has your fingerprint on it.</p><h2>{teacher.request}</h2>{portalReady ? <a className="portal-button" href={recommendationPortalUrl}>OPEN RECOMMENDATION PORTAL <span>↗</span></a> : <button className="portal-button" disabled title="A recommendation portal URL will be added here">RECOMMENDATION PORTAL | COMING SOON <span>↗</span></button>}<p className="portal-note">Thank you for being part of this chapter.</p></section>
    <footer><span>END OF TRANSMISSION</span><span>{teacher.honorific.toUpperCase()} // {teacher.archetype}</span></footer>

  </main><ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} /></>
}

export { App }
