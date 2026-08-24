export type Highlight = { eyebrow: string; title: string; copy: string; stat?: string; statLabel?: string; media: string | string[]; image?: string; images?: string[] }
export type ArchiveAsset = { kind: 'image' | 'video'; src: string; label: string }
export type Memory = { title: string; copy: string; media?: ArchiveAsset[] }
export type Quote = { text: string; source?: string; context?: string }
export type Teacher = {
  slug: 'renaldi' | 'tymeson' | 'hanley'
  name: string; honorific: string; role: string; archetype: string; accent: string; accentSoft: string
  opener: string; thesis: string; highlights: Highlight[]; archive: Memory[]; misc: ArchiveAsset[]; quotes: Quote[]; unsaid: string[]; request: string
}

export const recommendationPortalUrl = 'https://docs.new'

export const teachers: Record<Teacher['slug'], Teacher> = {
  renaldi: {
    slug: 'renaldi', name: 'Renaldi', honorific: 'Mrs. Renaldi', role: 'AP U.S. History · Debate Supervisor', archetype: 'THE DEBATER', accent: '#FF3131', accentSoft: '#ff7777',
    opener: 'A story of finding a voice, rebuilding it, and taking it all the way to Nationals.',
    thesis: 'You gave debate its stakes, and made every hard round, hard loss, and hard-earned win feel like a reason to come back sharper.',
    highlights: [
      { eyebrow: 'ORIGIN STORY // 01', title: 'History with a point of view.', copy: 'The Philippines colonization project was our first big APUSH project together. It was an introduction to the level of excellence you expected: research with ambition, a real point of view, and work worth standing behind.', media: 'Philippines colonization project', image: '/photos/philippines-presentation.png' },
      { eyebrow: 'FIRST BREAKTHROUGH // 02', title: 'The first first place.', copy: 'My first-ever Public Forum competition ended with a first-place finish, the beginning of discovering that preparation could become confidence.', stat: '1ST', statLabel: 'FIRST PF COMPETITION', media: 'SPADE team', image: '/photos/spade-group.jpg' },
      { eyebrow: 'NATIONAL STAGE // 03', title: 'Chicago, then D.C.', copy: 'From winning a national qualifier and going to Chicago for PF Nationals to qualifying again at the last minute for Washington, D.C., you made the biggest stages feel reachable.', media: ['Chicago // PF Nationals', 'Washington, D.C. // PF Nationals'], images: ['/photos/nationals-spade-2025.jpg', '/photos/nationals-dc.jpg'] },
      { eyebrow: 'THE RESET // 04', title: 'The comeback mattered.', copy: 'When the next season began in a slump, you re-motivated us to get back up. We won our self-hosted competition, then found our way back to Nationals.', media: ['New season // SPADE', 'Nationals bound // 2026'], images: ['/photos/spade-new-year-2026.jpg', '/photos/nationals-bound-2026.jpg'] },
      { eyebrow: 'THE MEMORY // 05', title: 'Standard Oil, but make it comedy.', copy: 'The APUSH final parody of Standard Oil v. U.S. was exactly what made your classroom unforgettable: serious ideas, full commitment, and permission to be funny.', media: 'Standard Oil v. U.S. comedy final', image: '/photos/standard-oil.png' }
    ],
    archive: [
      { title: 'National qualifier', copy: 'A first-place finish that turned “maybe someday” into a national bid.', media: [{ kind: 'image', src: '/photos/spade-group.jpg', label: 'SPADE team' }] },
      { title: 'Chicago', copy: 'Traveling together for PF Nationals and getting to see how far the work could take us.', media: [{ kind: 'image', src: '/photos/nationals-spade-2025.jpg', label: 'PF Nationals, Chicago' }] },
      { title: 'Washington, D.C.', copy: 'Nationals, the Aerospace Museum, and the Smithsonian: a final chapter with a lot of momentum behind it.', media: [{ kind: 'image', src: '/photos/nationals-dc.jpg', label: 'Nationals in Washington, D.C.' }, { kind: 'image', src: '/photos/nationals-dc-dinner.jpg', label: 'D.C. Nationals dinner' }] }
    ],
    misc: [{ kind: 'image', src: '/photos/debate-advertising.jpg', label: 'Debate promotion' }, { kind: 'image', src: '/photos/nationals-both-years.jpg', label: 'Nationals, both years' }, { kind: 'image', src: '/photos/nationals-dc-dinner.jpg', label: 'D.C. Nationals dinner' }, { kind: 'image', src: '/photos/states-nyc-car.jpg', label: 'States trip to New York City' }],
    // Add a quote card here whenever you have an exact Renaldi quote to preserve.
    quotes: [],
    unsaid: [
      'Thank you for treating every round as more than a result. You taught me that a voice becomes meaningful when it is built on preparation, empathy, and the willingness to get back up.',
      'The wins, the travel, and the jokes are unforgettable, but what will stay with me most is that you made me believe I could take up space in rooms that once felt far too big.'
    ],
    request: 'As I take the next step, I would be incredibly grateful if you would consider writing a letter of recommendation for me. Your perspective on my growth as a student, teammate, and speaker would mean a great deal.'
  },
  tymeson: {
    slug: 'tymeson', name: 'Tymeson', honorific: 'Mr. Tymeson', role: 'Physics · Science Bowl Supervisor', archetype: 'THE PHYSICIST', accent: '#CCFF00', accentSoft: '#e1ff6b',
    opener: 'A multi-year experiment in curiosity, momentum, and seeing how far an extra layer of analysis can go.',
    thesis: 'Your classroom made physics (and everything else) feel less like an answer key and more like an invitation to test every interesting idea all the way through.',
    highlights: [
      { eyebrow: 'THE LONG ARC // 01', title: 'A very fast transformation.', copy: 'Freshman-year Science Bowl started with me as a really bad physics main. Two years later, I was taking your physics class twice at once because I wanted more time in the room. The before-and-after was accelerated, but it was real.', media: ['Freshman year // getting started', 'Junior year // physics twice over'], images: ['/photos/tymeson-freshman.jpg', '/photos/tymeson-group.jpg'] },
      { eyebrow: 'MONTE CARLO // 02', title: 'Monte Carlo was the answer.', copy: 'I got obsessed with the idea that a simulation could settle a question when intuition could not. The Die Hard argument became one million trials, angular momentum, falling dynamics, and a 48.88% window-break result. Later, that same Monte Carlo instinct helped me clutch a Science Bowl regionals question.', stat: '48.88%', statLabel: 'WINDOW-BREAK SIMULATIONS', media: 'Die Hard Monte Carlo analysis', image: '/photos/die-hard-analysis.png' },
      { eyebrow: 'STUDY SYSTEM // 03', title: 'Too much time, in a good way.', copy: 'I formulated the system in class, built the material, and made practice tests with Monte Carlo so we could talk about Swamp questions. Then I remade it for Regents cluster questions and used it to predict final-exam questions. It became less of a study guide and more of a whole test-making platform.', media: ['Whiteboard plan', 'Midterm Monte Carlo', 'Regents cluster questions', 'Finals prediction'], images: ['/photos/jeff-whiteboard.jpg', '/photos/midterm-monte-carlo.png', '/photos/cluster-questions.png', '/photos/finals-prediction.png'] },
      { eyebrow: 'ELECTROMAGNETISM // 04', title: 'Thirty-eight out of thirty-eight.', copy: 'I was the only student across three classes to earn a 38/38 on the electromagnetism test. You even had to curve the test down. I took the picture for the accomplishment please let it slide...', stat: '38/38', statLabel: 'ELECTROMAGNETISM', media: '38/38 electromagnetism result', image: '/photos/physics-38-38.jpg' },
      { eyebrow: 'MR. PHYSICS // 05', title: 'Four AP Physics 5s.', copy: 'After self-studying all four AP Physics exams in your orbit, I sent the screenshot and called myself “Mr. Physics.” I never told you, but I actually got a 5 in every one of the 10 APs I took.', stat: '4 × 5', statLabel: 'AP PHYSICS SCORES', media: 'Four AP Physics 5s', image: '/photos/four-fives.png' }
    ],
    archive: [
      { title: 'Science Bowl, regional second', copy: 'We took second at regionals together, with first still squarely in sight next year.', media: [{ kind: 'image', src: '/photos/science-bowl-second.jpg', label: 'Science Bowl regional second place' }] },
      { title: 'Capacitor lore', copy: 'A parallel-plate capacitor, concern over accidental shocks, and a spectacular capacitor explosion caught on video.', media: [{ kind: 'video', src: '/videos/blowing-up-capacitor.mov', label: 'Capacitor explosion video' }] },
      { title: 'Cluster questions', copy: 'When the Regents became cluster-based, the test generator gained another layer and produced a dozen new practice clusters.' },
      { title: 'Final-exam precision', copy: 'The generator forecast two trick questions; the final ended at 119/120, one point short only because an electric-field direction was omitted.' },
      { title: 'Beyond class', copy: 'Your confidence in my coding even led to a job through your pickleball buddies.' }
    ],
    misc: [{ kind: 'image', src: '/photos/tymeson-six-flags.jpg', label: 'Six Flags with Mr. Tymeson' }, { kind: 'image', src: '/photos/science-bowl-mit.jpg', label: 'Science Bowl at MIT' }, { kind: 'image', src: '/photos/science-bowl-second.jpg', label: 'Science Bowl regional second place' }, { kind: 'video', src: '/videos/blowing-up-capacitor.mov', label: 'Capacitor explosion' }],
    quotes: [
      { text: '“Good work Hassaan!”', source: 'MR. TYMESON', context: 'After the Die Hard Monte Carlo simulation' },
      { text: '“You have too much time on your hands (in a good way).”', source: 'MR. TYMESON', context: 'On the midterm test-generator analysis' },
      { text: '“Truer words were never spoken…”', source: 'MR. TYMESON', context: 'In response to: “Modern quantum mechanics: the biggest conspiracy since the moon landing.”' }
    ],
    unsaid: [
      'Thank you for never making curiosity feel like a distraction. You made room for the question behind the question.',
      'I enjoyed and will remember everything we always talked about in class that wasn\'t on topic, from Lockheed Martin to ping pong on the long table to "sticktoitiveness".',
      'Your class was my first ever formal Physics class (I didn\'t actually know too much mathematical Physics before!), and even though I had a passion I have to attribute my steadfastness to you, especially in the second half. At some points it barely felt like a class, I just had fun time while doing a random physics lab.'
    ],
    request: 'As I move forward, I would be honored if you would write a letter of recommendation for me. I hope it can reflect the curiosity, initiative, and joy in learning that your classroom made possible.'
  },
  hanley: {
    slug: 'hanley', name: 'Hanley', honorific: 'Mr. Hanley', role: 'AP Computer Science · Programming Mentor', archetype: 'THE CODER', accent: '#00F0FF', accentSoft: '#7df8ff',
    opener: 'From learning Java to building tools for other people: a record of getting useful, then getting better.',
    thesis: 'You turned programming into a team sport, one where understanding the system mattered as much as getting the right output.',
    highlights: [
      { eyebrow: 'JAVA // 01', title: 'The first hard test.', copy: 'I started Java in tenth grade with a complicated crossword-game test. Then came “The Hassaan Vani test,” your enhanced array-averaging challenge made specifically for me.', media: 'The first crossword-game test', image: '/photos/crossword-test.png' },
      { eyebrow: 'COMPETITION // 02', title: 'First year: humbled.', copy: 'Second place in school Advent of Code was a strong start, but Siena Programming Competition Gold made the gap clear. We got absolutely smoked, and it made the next year matter more.', media: 'Siena Programming Competition, 2025', image: '/photos/hanley-siena-2025.jpg' },
      { eyebrow: 'REBUILD // 03', title: 'Hanley’s Hood.', copy: 'I asked to remake the website every student used. You said yes, and Hanley’s Hood became the project I carried from sophomore to junior summer.', media: 'Hanley’s Hood overhaul', image: '/photos/hanleys-hood-2.png' },
      { eyebrow: 'ROOMMATE CODE // 04', title: 'The helper became an engine builder.', copy: 'In AP Computer Science, I was the person classmates could ask for help. I also built the game engine everyone used to make their final project early.', media: 'In Mr. Hanley’s room', image: '/photos/hanley-room-smash.jpg' },
      { eyebrow: 'THE PAYOFF // 05', title: 'We cooked.', copy: 'In year two, I won Advent of Code at school, earned 100 on every test, and helped our Siena Gold team take third place and bring home a trophy.', stat: '3RD', statLabel: 'SIENA GOLD', media: 'Siena Gold trophy, 2026', image: '/photos/siena-trophy-2026.jpg' }
    ],
    archive: [
      { title: 'Perfect tests', copy: 'A run of 100s that made the day-to-day work feel as rewarding as the big competitions.', media: [{ kind: 'image', src: '/photos/hanley-shenanigans.jpg', label: 'In Mr. Hanley’s room' }] },
      { title: 'Advent of Code', copy: 'From second place in year one to first place at school in year two.', media: [{ kind: 'image', src: '/photos/hanley-selfie-2026.jpg', label: 'Programming teammates, 2026' }] },
      { title: 'A better second run', copy: 'The second Siena Gold competition ended in third place, a trophy, and proof that the first-year loss had taught us something.', media: [{ kind: 'image', src: '/photos/hanley-siena-2026.jpg', label: 'Siena Programming Competition, 2026' }, { kind: 'image', src: '/photos/siena-trophy-2026.jpg', label: 'Siena Gold trophy' }] }
    ],
    misc: [{ kind: 'image', src: '/photos/hanleys-hood.png', label: 'Hanley’s Hood, original view' }, { kind: 'image', src: '/photos/hanley-selfie-2026.jpg', label: 'Programming teammates, 2026' }, { kind: 'image', src: '/photos/hanley-shenanigans.jpg', label: 'Room shenanigans' }, { kind: 'image', src: '/photos/hanley-siena-2026.jpg', label: 'Siena Gold, 2026' }],
    quotes: [
      { text: '“No can doey Hong Kong Fuey.”', source: 'MR. HANLEY' },
      { text: '“Get back to work you jamokes I don’t pay you to sit around all day.”', source: 'MR. HANLEY' },
      { text: '“Hit windows L on your computadoras ya ding dongs.”', source: 'MR. HANLEY' }
    ],
    unsaid: [
      'Thank you for seeing something in the work before it was polished. You gave me hard problems, trusted me with real systems, and let me become someone other people could rely on.',
      'I came into class to learn Java. I am leaving with a much larger idea of what it means to build: make something useful, make it clear, and make the people around you more capable.',
      'I did NOT know programming that well at all, but I knew I wanted to. It was your push that made me truly exceptional'
    ],
    request: 'As I head into what comes next, I would be so grateful if you would write a letter of recommendation for me. Your view of my growth from Java student to builder and collaborator would be especially meaningful.'
  }
}
