export type Highlight = { eyebrow: string; title: string; copy: string; stat?: string; statLabel?: string; media: string; image?: string }
export type ArchiveAsset = { kind: 'image' | 'video'; src: string; label: string }
export type Memory = { title: string; copy: string; media?: ArchiveAsset[] }
export type Quote = { text: string; source?: string; context?: string }
export type Teacher = {
  slug: 'renaldi' | 'tymeson' | 'hanley'
  name: string; honorific: string; role: string; archetype: string; accent: string; accentSoft: string
  opener: string; thesis: string; highlights: Highlight[]; archive: Memory[]; quotes: Quote[]; unsaid: string[]; request: string
}

export const recommendationPortalUrl = ''

export const teachers: Record<Teacher['slug'], Teacher> = {
  renaldi: {
    slug: 'renaldi', name: 'Renaldi', honorific: 'Mrs. Renaldi', role: 'AP U.S. History · Debate Supervisor', archetype: 'THE DEBATER', accent: '#FF3131', accentSoft: '#ff7777',
    opener: 'A story of finding a voice, rebuilding it, and taking it all the way to Nationals.',
    thesis: 'You gave debate its stakes—and made every hard round, hard loss, and hard-earned win feel like a reason to come back sharper.',
    highlights: [
      { eyebrow: 'ORIGIN STORY // 01', title: 'History with a point of view.', copy: 'The Philippines colonization project was an early reminder that history is not a list of facts. It is an argument: researched, framed, and made worth hearing.', media: 'Debate promotion', image: '/photos/debate-advertising.jpg' },
      { eyebrow: 'FIRST BREAKTHROUGH // 02', title: 'The first first place.', copy: 'My first-ever Public Forum competition ended with a first-place finish—the beginning of discovering that preparation could become confidence.', stat: '1ST', statLabel: 'FIRST PF COMPETITION', media: 'SPADE team', image: '/photos/spade-group.jpg' },
      { eyebrow: 'NATIONAL STAGE // 03', title: 'Chicago, then D.C.', copy: 'From winning a national qualifier and going to Chicago for PF Nationals to qualifying again at the last minute for Washington, D.C., you made the biggest stages feel reachable.', media: 'Nationals, both years', image: '/photos/nationals-both-years.jpg' },
      { eyebrow: 'THE RESET // 04', title: 'The comeback mattered.', copy: 'When the next season began in a slump, you re-motivated us to get back up. We won our self-hosted competition, then found our way back to Nationals.', media: 'Nationals bound, 2026', image: '/photos/nationals-bound-2026.jpg' },
      { eyebrow: 'THE MEMORY // 05', title: 'Standard Oil, but make it comedy.', copy: 'The APUSH final parody of Standard Oil v. U.S. was exactly what made your classroom unforgettable: serious ideas, full commitment, and permission to be funny.', media: 'Nationals in Washington, D.C.', image: '/photos/nationals-dc.jpg' }
    ],
    archive: [
      { title: 'National qualifier', copy: 'A first-place finish that turned “maybe someday” into a national bid.', media: [{ kind: 'image', src: '/photos/nationals-spade-2025.jpg', label: 'SPADE at Nationals, 2025' }] },
      { title: 'Chicago', copy: 'Traveling together for PF Nationals—and getting to see how far the work could take us.', media: [{ kind: 'image', src: '/photos/nationals-both-years.jpg', label: 'Chicago and Nationals wristbands' }] },
      { title: 'Washington, D.C.', copy: 'Nationals, the Aerospace Museum, and the Smithsonian: a final chapter with a lot of momentum behind it.', media: [{ kind: 'image', src: '/photos/nationals-dc.jpg', label: 'Nationals in Washington, D.C.' }, { kind: 'image', src: '/photos/nationals-dc-dinner.jpg', label: 'D.C. Nationals dinner' }] }
    ],
    // Add a quote card here whenever you have an exact Renaldi quote to preserve.
    quotes: [],
    unsaid: [
      'Thank you for treating every round as more than a result. You taught me that a voice becomes meaningful when it is built on preparation, empathy, and the willingness to get back up.',
      'The wins, the travel, and the jokes are unforgettable—but what will stay with me most is that you made me believe I could take up space in rooms that once felt far too big.'
    ],
    request: 'As I take the next step, I would be incredibly grateful if you would consider writing a letter of recommendation for me. Your perspective on my growth—as a student, teammate, and speaker—would mean a great deal.'
  },
  tymeson: {
    slug: 'tymeson', name: 'Tymeson', honorific: 'Mr. Tymeson', role: 'Physics · Science Bowl Supervisor', archetype: 'THE PHYSICIST', accent: '#CCFF00', accentSoft: '#e1ff6b',
    opener: 'A multi-year experiment in curiosity, momentum, and seeing how far an extra layer of analysis can go.',
    thesis: 'Your classroom made physics (and everything else) feel less like an answer key and more like an invitation to test every interesting idea all the way through.',
    highlights: [
      { eyebrow: 'THE LONG ARC // 01', title: 'From a bad physics main to a second year in the room.', copy: 'Science Bowl began in freshman year, when I was a very bad physics main. By junior year, I was in your physics class—and the following semester, I went to 2 seperate Physics classes at once because I did not want the learning to end.', media: 'Physics group', image: '/photos/tymeson-group.jpg' },
      { eyebrow: 'MONTE CARLO // 02', title: 'Could Hans really fall?', copy: 'A debate about Die Hard turned into a million-simulation investigation. Accounting for angular momentum and the fall, the window broke in 48.88% of runs—enough for Hans to fall.', stat: '48.88%', statLabel: 'WINDOW-BREAK SIMULATIONS', media: 'Science Bowl at MIT', image: '/photos/science-bowl-mit.jpg' },
      { eyebrow: 'STUDY SYSTEM // 03', title: 'Practice tests, modeled.', copy: 'For the eight-question midterm, I built both a mathematical decision model and a Gemini-powered test generator with a Monte Carlo layer. Its lesson: beware of Swamp questions.', media: 'Add a screenshot of the exam generator' },
      { eyebrow: 'ELECTROMAGNETISM // 04', title: 'Thirty-eight out of thirty-eight.', copy: 'I was the only student across three classes to earn a 38/38 on the electromagnetism test. You even had to curve the test down.', stat: '38/38', statLabel: 'ELECTROMAGNETISM', media: 'Science Bowl regional second place', image: '/photos/science-bowl-second.jpg' },
      { eyebrow: 'MR. PHYSICS // 05', title: 'Four AP Physics 5s.', copy: 'After self-studying all four AP Physics exams in your orbit, I sent the screenshot and called myself “Mr. Physics.” I never told you but I actually got a 5 in every one of the 10 APs I took.', stat: '4 × 5', statLabel: 'AP PHYSICS SCORES', media: 'Physics group', image: '/photos/tymeson-group.jpg' }
    ],
    archive: [
      { title: 'Science Bowl, regional second', copy: 'We took second at regionals together—with first still squarely in sight next year.', media: [{ kind: 'image', src: '/photos/science-bowl-second.jpg', label: 'Science Bowl regional second place' }] },
      { title: 'Capacitor lore', copy: 'A parallel-plate capacitor, concern over accidental shocks, and a spectacular capacitor explosion caught on video.', media: [{ kind: 'video', src: '/videos/blowing-up-capacitor.mov', label: 'Capacitor explosion video' }] },
      { title: 'Cluster questions', copy: 'When the Regents became cluster-based, the test generator gained another layer and produced a dozen new practice clusters.' },
      { title: 'Final-exam precision', copy: 'The generator forecast two trick questions; the final ended at 119/120, one point short only because an electric-field direction was omitted.' },
      { title: 'Beyond class', copy: 'Your confidence in my coding even led to a job through your pickleball buddies.' }
    ],
    quotes: [
      { text: '“Good work Hassaan!”', source: 'MR. TYMESON', context: 'After the Die Hard Monte Carlo simulation' },
      { text: '“You have too much time on your hands (in a good way).”', source: 'MR. TYMESON', context: 'On the midterm test-generator analysis' },
      { text: '“Truer words were never spoken…”', source: 'MR. TYMESON', context: 'In response to: “Modern quantum mechanics: the biggest conspiracy since the moon landing.”' }
    ],
    unsaid: [
      'Thank you for never making curiosity feel like a distraction. You made room for the question behind the question.',
      'I enjoyed and will remember everything we always talked about in class that wasn\'t on topic, from Lockheed Martin to ping pong on the long table to "sticktoitiveness".',
      'Your class was my first ever formal Physics class, and even though I had a passion I have to attribute my steadfastness to you, especially in the second half. At some points it barely felt like a class, I just had fun time while doing a random physics lab.'
    ],
    request: 'As I move forward, I would be honored if you would write a letter of recommendation for me. I hope it can reflect the curiosity, initiative, and joy in learning that your classroom made possible.'
  },
  hanley: {
    slug: 'hanley', name: 'Hanley', honorific: 'Mr. Hanley', role: 'AP Computer Science · Programming Mentor', archetype: 'THE CODER', accent: '#00F0FF', accentSoft: '#7df8ff',
    opener: 'From learning Java to building tools for other people: a record of getting useful, then getting better.',
    thesis: 'You turned programming into a team sport—one where understanding the system mattered as much as getting the right output.',
    highlights: [
      { eyebrow: 'JAVA // 01', title: 'The first hard test.', copy: 'I started Java in tenth grade with a complicated crossword-game test. Then came “The Hassaan Vani test,” your enhanced array-averaging challenge made specifically for me.', media: 'Hanley classroom', image: '/photos/hanley-shenanigans.jpg' },
      { eyebrow: 'COMPETITION // 02', title: 'First year: humbled.', copy: 'Second place in school Advent of Code was a strong start, but Siena Programming Competition Gold made the gap clear. We got absolutely smoked—and it made the next year matter more.', media: 'Siena Programming Competition, 2025', image: '/photos/hanley-siena-2025.jpg' },
      { eyebrow: 'REBUILD // 03', title: 'Hanley’s Hood.', copy: 'I asked to remake the website every student used. You said yes, and Hanley’s Hood became the project I carried from sophomore to junior summer.', media: 'Hanley’s Hood', image: '/photos/hanleys-hood.png' },
      { eyebrow: 'ROOMMATE CODE // 04', title: 'The helper became an engine builder.', copy: 'In AP Computer Science, I was the person classmates could ask for help. I also built the game engine everyone used to make their final project—early.', media: 'In Mr. Hanley’s room', image: '/photos/hanley-room-smash.jpg' },
      { eyebrow: 'THE PAYOFF // 05', title: 'We cooked.', copy: 'In year two, I won Advent of Code at school, earned 100 on every test, and helped our Siena Gold team take third place—and bring home a trophy.', stat: '3RD', statLabel: 'SIENA GOLD', media: 'Siena Gold trophy, 2026', image: '/photos/siena-trophy-2026.jpg' }
    ],
    archive: [
      { title: 'Perfect tests', copy: 'A run of 100s that made the day-to-day work feel as rewarding as the big competitions.', media: [{ kind: 'image', src: '/photos/hanley-shenanigans.jpg', label: 'In Mr. Hanley’s room' }] },
      { title: 'Advent of Code', copy: 'From second place in year one to first place at school in year two.', media: [{ kind: 'image', src: '/photos/hanley-selfie-2026.jpg', label: 'Programming teammates, 2026' }] },
      { title: 'A better second run', copy: 'The second Siena Gold competition ended in third place, a trophy, and proof that the first-year loss had taught us something.', media: [{ kind: 'image', src: '/photos/hanley-siena-2026.jpg', label: 'Siena Programming Competition, 2026' }, { kind: 'image', src: '/photos/siena-trophy-2026.jpg', label: 'Siena Gold trophy' }] }
    ],
    quotes: [
      { text: '“No can doey Hong Kong Fuey.”', source: 'MR. HANLEY' },
      { text: '“Get back to work you jamokes I don’t pay you to sit around all day.”', source: 'MR. HANLEY' },
      { text: '“Hit windows L on your computadoras ya ding dongs.”', source: 'MR. HANLEY' }
    ],
    unsaid: [
      'Thank you for seeing something in the work before it was polished. You gave me hard problems, trusted me with real systems, and let me become someone other people could rely on.',
      'I came into class to learn Java. I am leaving with a much larger idea of what it means to build: make something useful, make it clear, and make the people around you more capable.'
    ],
    request: 'As I head into what comes next, I would be so grateful if you would write a letter of recommendation for me. Your view of my growth from Java student to builder and collaborator would be especially meaningful.'
  }
}
