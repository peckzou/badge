import { BadgeModel } from '../types/badge';

export const APPLE_LEARNING_AWARDS_CATALOG: BadgeModel[] = [
  // =========================================================================
  // 1. CLOSE YOUR STUDY RINGS (Daily Active Habits & Weekly Ring Closures)
  // =========================================================================
  {
    id: 'perfect-week-study',
    name: 'Perfect Week (Study)',
    category: 'Close Your Study Rings',
    earnedDate: 'OCTOBER 20, 2019',
    earnedCount: 14,
    state: 'unlocked',
    colorTheme: {
      primary: '#FA114F', // Apple Crimson
      secondary: '#FAF9F6', // Satin Ceramic White
      bezel: 'silver',
    },
    description: 'Reached your daily Study volume goal every day of a week.',
    longDescription:
      "You've earned this award 14 times for hitting your active flashcard review target every day of a single calendar week.",
    badgeStyle: 'faceted-shield',
    depthMetrics: {
      thickness: '1.8 mm (Slim Concave Wafer)',
      curvature: 'R38mm Parabolic Concave Dish',
      layers: 4,
      enamelFinish: 'Vitreous Crimson & Satin Ceramic Enamel',
    },
  },
  {
    id: 'perfect-week-review',
    name: 'Perfect Week (Spaced Review)',
    category: 'Close Your Study Rings',
    earnedDate: 'AUGUST 16, 2026',
    earnedCount: 32,
    state: 'unlocked',
    colorTheme: {
      primary: '#00F0FF', // Apple Cyan
      secondary: '#FAF9F6',
      bezel: 'silver',
    },
    description: 'Cleared your spaced repetition queue every day of a week.',
    longDescription:
      "You've earned this award 32 times for maintaining a zero-backlog spaced repetition queue every single day of the week.",
    badgeStyle: 'faceted-shield',
    depthMetrics: {
      thickness: '1.8 mm (Slim Concave Wafer)',
      curvature: 'R38mm Parabolic Concave Dish',
      layers: 4,
      enamelFinish: 'Vitreous Cyan & Satin Ceramic Enamel',
    },
  },
  {
    id: 'perfect-week-focus',
    name: 'Perfect Week (Deep Focus)',
    category: 'Close Your Study Rings',
    earnedDate: 'SEPTEMBER 12, 2026',
    earnedCount: 8,
    state: 'unlocked',
    colorTheme: {
      primary: '#A6FF00', // Apple Volt
      secondary: '#FAF9F6',
      bezel: 'silver',
    },
    description: 'Logged 45+ minutes of distraction-free immersion daily.',
    longDescription:
      "You've completed distraction-free Pomodoro deep focus sessions every day for an entire week.",
    badgeStyle: 'faceted-shield',
    depthMetrics: {
      thickness: '1.8 mm (Slim Concave Wafer)',
      curvature: 'R38mm Parabolic Concave Dish',
      layers: 4,
      enamelFinish: 'Vitreous Volt & Satin Ceramic Enamel',
    },
  },
  {
    id: 'perfect-week-all-goals',
    name: 'Perfect Week (All Goals)',
    category: 'Close Your Study Rings',
    earnedDate: 'JULY 4, 2026',
    earnedCount: 3,
    state: 'unlocked',
    colorTheme: {
      primary: '#FA114F',
      secondary: '#A6FF00',
      accent: '#00F0FF',
      bezel: 'gold',
    },
    description: 'Closed Study, Review, and Focus rings every day of the week.',
    longDescription:
      'Awarded for closing all three learning rings (Study Volume, Spaced Retention, and Deep Immersion) 7 days in a row.',
    badgeStyle: 'faceted-shield',
    depthMetrics: {
      thickness: '2.0 mm (Multi-Striped Wafer)',
      curvature: 'R38mm Parabolic Concave Dish',
      layers: 5,
      enamelFinish: 'Triple-Striped Rainbow Vitreous Inlay',
    },
  },
  {
    id: 'daily-ring-200-percent',
    name: '200% Daily Learning Goal',
    category: 'Close Your Study Rings',
    earnedDate: 'AUGUST 28, 2026',
    earnedCount: 19,
    state: 'unlocked',
    colorTheme: {
      primary: '#FF9F0A',
      secondary: '#FAF9F6',
      bezel: 'gold',
    },
    description: 'Doubled your daily study card target in a single session.',
    longDescription:
      'Recognizes academic endurance when completing 200% or more of your active daily card review target.',
    badgeStyle: 'rhombus-diamond',
    depthMetrics: {
      thickness: '2.1 mm (Brilliant Diamond)',
      curvature: 'Crosshair Faceted Dish',
      layers: 5,
      enamelFinish: 'Amber & Platinum Faceted Inlay',
    },
  },
  {
    id: 'daily-ring-300-percent',
    name: '300% Academic Surge',
    category: 'Close Your Study Rings',
    earnedDate: 'SEPTEMBER 5, 2026',
    earnedCount: 4,
    state: 'unlocked',
    colorTheme: {
      primary: '#FF453A',
      secondary: '#FFD60A',
      bezel: 'gold',
    },
    description: 'Tripled your daily knowledge acquisition target.',
    longDescription:
      'Awarded for extraordinary academic output: exceeding 300% of your daily learning quota in 24 hours.',
    badgeStyle: 'sunburst-radiant',
    depthMetrics: {
      thickness: '2.4 mm (12-Spike Sunburst)',
      curvature: 'Multi-Ray Dished Core',
      layers: 5,
      enamelFinish: 'Solar Gold & Flame Crimson Champlevé',
    },
  },
  {
    id: 'perfect-month-study',
    name: 'Perfect Month (Study)',
    category: 'Close Your Study Rings',
    earnedDate: 'AUGUST 31, 2026',
    earnedCount: 2,
    state: 'unlocked',
    colorTheme: {
      primary: '#FA114F',
      secondary: '#00F0FF',
      bezel: 'gold',
    },
    description: 'Closed your Study ring every day of a calendar month.',
    longDescription:
      'A monument to consistency: reaching your daily active study volume without missing a single day for 31 days.',
    badgeStyle: 'circular-coin',
    depthMetrics: {
      thickness: '2.5 mm (Laurel Medallion)',
      curvature: 'Olympic Concave Beaded Basin',
      layers: 5,
      enamelFinish: 'Raised Gold Laurel & Royal Crimson Enamel',
    },
  },
  {
    id: 'perfect-month-review',
    name: 'Perfect Month (Retention)',
    category: 'Close Your Study Rings',
    earnedDate: 'JULY 31, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#00F0FF',
      secondary: '#0A84FF',
      bezel: 'silver',
    },
    description: 'Zero retention backlog for 30 consecutive days.',
    longDescription:
      'Cleared every single due repetition card every day of an entire month without allowing the queue to lapse.',
    badgeStyle: 'shield-arch',
    depthMetrics: {
      thickness: '2.2 mm (Keystone Arch Portal)',
      curvature: 'Roman Archway Recess',
      layers: 5,
      enamelFinish: 'Cobalt & Electric Cyan Ceramic Inlay',
    },
  },
  {
    id: 'perfect-month-all-goals',
    name: 'Perfect Month (All Goals)',
    category: 'Close Your Study Rings',
    earnedDate: 'JUNE 30, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FFD60A',
      secondary: '#30D158',
      bezel: 'gold',
    },
    description: 'All 3 rings closed every single day of the month.',
    longDescription:
      'The crown of daily learning discipline: closing Volume, Spaced Retention, and Deep Immersion every single day of the month.',
    badgeStyle: 'concentric-rings',
    depthMetrics: {
      thickness: '2.4 mm (Openwork Annular Bezel)',
      curvature: 'Concave Toroidal Channels',
      layers: 6,
      enamelFinish: 'Mirror 24K Gold & 3 Floating Activity Rings',
    },
  },
  {
    id: 'weekend-warrior-study',
    name: 'Weekend Academic Sprint',
    category: 'Close Your Study Rings',
    earnedDate: 'SEPTEMBER 20, 2026',
    earnedCount: 12,
    state: 'unlocked',
    colorTheme: {
      primary: '#5E5CE6',
      secondary: '#FAF9F6',
      bezel: 'silver',
    },
    description: 'Logged 4+ hours of review during Saturday and Sunday.',
    longDescription:
      'Awarded for dedication during weekend breaks, logging extensive deep study and spaced review.',
    badgeStyle: 'rounded-squircle',
    depthMetrics: {
      thickness: '2.0 mm (Dished Pebble Squircle)',
      curvature: 'Parabolic Dish & Open Folio Book',
      layers: 4,
      enamelFinish: 'Royal Indigo Enamel & 3D Gold Folio',
    },
  },
  {
    id: 'early-bird-mastery',
    name: 'Dawn Scholar (5 AM Club)',
    category: 'Close Your Study Rings',
    earnedDate: 'SEPTEMBER 15, 2026',
    earnedCount: 7,
    state: 'unlocked',
    colorTheme: {
      primary: '#FF9F0A',
      secondary: '#FAF9F6',
      bezel: 'gold',
    },
    description: 'Closed your daily study ring before 8:00 AM.',
    longDescription:
      'Earned for intellectual vigor at sunrise by completing your entire daily study volume before the workday starts.',
    badgeStyle: 'sunburst-radiant',
    depthMetrics: {
      thickness: '2.2 mm (Helios Sunburst)',
      curvature: 'Radiant Solar Dish',
      layers: 5,
      enamelFinish: 'Sunrise Amber & Satin Ceramic White',
    },
  },
  {
    id: 'night-owl-immersion',
    name: 'Midnight Intellect',
    category: 'Close Your Study Rings',
    earnedDate: 'SEPTEMBER 22, 2026',
    earnedCount: 18,
    state: 'unlocked',
    colorTheme: {
      primary: '#5E5CE6',
      secondary: '#00F0FF',
      bezel: 'silver',
    },
    description: 'Completed 60+ minutes of deep review past midnight.',
    longDescription:
      'Recognizes quiet, solitary late-night breakthroughs during the most peaceful hours of intellectual immersion.',
    badgeStyle: 'wave-crescent',
    depthMetrics: {
      thickness: '2.2 mm (Midnight Crescent)',
      curvature: 'Lunar Dish & Polaris Star',
      layers: 5,
      enamelFinish: 'Twilight Indigo & Silver Crescent Moon',
    },
  },

  // =========================================================================
  // 2. LEARNING MILESTONES (Streaks, Mastered Flashcards & Pomodoro Hours)
  // =========================================================================
  {
    id: 'cards-100-mastered',
    name: '100 Cards Mastered',
    category: 'Learning Milestones',
    earnedDate: 'NOVEMBER 9, 2017',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#F5C518',
      secondary: '#FA114F',
      accent: '#A6FF00',
      bezel: 'gold',
    },
    description: 'Promoted 100 flashcards into permanent recall.',
    longDescription:
      "You've earned this award for mastering 100 flashcards into permanent recall memory. Recorded on 11/9/17.",
    badgeStyle: 'concentric-rings',
    depthMetrics: {
      thickness: '2.2 mm (Openwork Annular Bezel)',
      curvature: 'Concave Toroidal Guide Channels',
      layers: 5,
      enamelFinish: '24K Gold Mirror Bezel & Floating Activity Rings',
    },
  },
  {
    id: 'cards-365-mastered',
    name: '365 Cards Mastered',
    category: 'Learning Milestones',
    earnedDate: 'MARCH 14, 2020',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#30D158',
      secondary: '#00F0FF',
      bezel: 'gold',
    },
    description: 'A full year of knowledge: 365 cards in long-term memory.',
    longDescription:
      'Celebrates cementing 365 distinct concepts, formulae, or vocabulary terms into fluent permanent memory.',
    badgeStyle: 'concentric-rings',
    depthMetrics: {
      thickness: '2.2 mm (Openwork Annular Bezel)',
      curvature: 'Concave Toroidal Guide Channels',
      layers: 5,
      enamelFinish: '24K Gold Chassis & Emerald Enamel Ring',
    },
  },
  {
    id: 'cards-500-mastered',
    name: '500 Cards Mastered',
    category: 'Learning Milestones',
    earnedDate: 'JANUARY 2, 2022',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#0A84FF',
      secondary: '#FAF9F6',
      bezel: 'gold',
    },
    description: 'Promoted 500 academic cards into lifelong retention.',
    longDescription:
      'A major academic milestone: 500 comprehensive knowledge nodes verified in permanent active recall.',
    badgeStyle: 'decagon-wheel',
    depthMetrics: {
      thickness: '2.3 mm (10-Spoke Wheel)',
      curvature: 'Decimal Sunburst Dish',
      layers: 5,
      enamelFinish: 'Cobalt Blue & Golden Bevel Wheels',
    },
  },
  {
    id: 'cards-1000-mastered',
    name: '1,000 Cards Mastered',
    category: 'Learning Milestones',
    earnedDate: 'OCTOBER 10, 2024',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FFD60A',
      secondary: '#FA114F',
      bezel: 'gold',
    },
    description: 'Ascended to Grandmaster: 1,000 concepts in permanent memory.',
    longDescription:
      'The millennium hallmark: 1,000 cards successfully graduated past the Leitner threshold into permanent retention.',
    badgeStyle: 'circular-coin',
    depthMetrics: {
      thickness: '2.6 mm (Millennium Medallion)',
      curvature: 'Deep Olympic Concave Well',
      layers: 6,
      enamelFinish: 'High-Gloss 24K Gold & Champlevé Enamel',
    },
  },
  {
    id: 'cards-2500-mastered',
    name: '2,500 Cards Mastered',
    category: 'Learning Milestones',
    earnedDate: 'MAY 18, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#5E5CE6',
      secondary: '#FFD60A',
      bezel: 'gold',
    },
    description: 'Vast polymath recall across 2,500 active concepts.',
    longDescription:
      'Exceptional intellectual breadth: committing 2,500 cards across multiple domains into flawless recall.',
    badgeStyle: 'pentagon-star',
    depthMetrics: {
      thickness: '2.4 mm (Citadel Pentagon)',
      curvature: 'Faceted Radial Basin',
      layers: 5,
      enamelFinish: 'Imperial Purple & 3D Gold Star Core',
    },
  },
  {
    id: 'cards-5000-mastered',
    name: '5,000 Cards Mastered',
    category: 'Learning Milestones',
    earnedDate: 'SEPTEMBER 1, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#30D158',
      secondary: '#00F0FF',
      bezel: 'gold',
    },
    description: 'Encyclopedic intellect: 5,000 cards in permanent memory.',
    longDescription:
      'An elite distinction held by top academic researchers: 5,000 cards in permanent spaced repetition retention.',
    badgeStyle: 'infinity-loop',
    depthMetrics: {
      thickness: '2.6 mm (Twin-Focal Squircle)',
      curvature: 'Twin Concave Basins & 3D Möbius Ribbon',
      layers: 6,
      enamelFinish: 'Emerald Vitreous Lacquer & Gold Möbius',
    },
  },
  {
    id: 'streak-7-days',
    name: '7-Day Study Streak',
    category: 'Learning Milestones',
    earnedDate: 'SEPTEMBER 20, 2026',
    earnedCount: 14,
    state: 'unlocked',
    colorTheme: {
      primary: '#0A84FF',
      secondary: '#5E5CE6',
      bezel: 'silver',
    },
    description: 'Completed your daily study quota 7 days in a row.',
    longDescription:
      'Building the neural habit: 7 consecutive days of active recall and spaced repetition.',
    badgeStyle: 'faceted-octagon',
    depthMetrics: {
      thickness: '2.1 mm (Symmetrical Octagon)',
      curvature: 'Radial Octagonal Dish Depression',
      layers: 5,
      enamelFinish: 'Alternating Cobalt Lacquer & Platinum Star Inlay',
    },
  },
  {
    id: 'streak-14-days',
    name: '14-Day Study Streak',
    category: 'Learning Milestones',
    earnedDate: 'SEPTEMBER 14, 2026',
    earnedCount: 8,
    state: 'unlocked',
    colorTheme: {
      primary: '#A6FF00',
      secondary: '#00F0FF',
      bezel: 'silver',
    },
    description: 'Two unbroken weeks of daily learning dedication.',
    longDescription:
      'Solidifying academic rhythm: 14 consecutive days of active recall without missing a single review session.',
    badgeStyle: 'clover-quatrefoil',
    depthMetrics: {
      thickness: '2.2 mm (Cathedral Quatrefoil)',
      curvature: '4-Lobe Concave Bloom',
      layers: 5,
      enamelFinish: 'Volt Lime & Electric Cyan Enamel Wells',
    },
  },
  {
    id: 'streak-30-days',
    name: '30-Day Study Streak',
    category: 'Learning Milestones',
    earnedDate: 'AUGUST 30, 2026',
    earnedCount: 4,
    state: 'unlocked',
    colorTheme: {
      primary: '#FF9F0A',
      secondary: '#FA114F',
      bezel: 'gold',
    },
    description: 'One full month of unbroken academic study streak.',
    longDescription:
      'A true milestone of discipline: 30 consecutive days of continuous learning and active recall.',
    badgeStyle: 'decagon-wheel',
    depthMetrics: {
      thickness: '2.3 mm (10-Spoke Wheel)',
      curvature: 'Decimal Sunburst Dish',
      layers: 5,
      enamelFinish: 'Radiant Amber & Gold Core Inlay',
    },
  },
  {
    id: 'streak-100-days',
    name: '100-Day Study Streak',
    category: 'Learning Milestones',
    earnedDate: 'JULY 10, 2026',
    earnedCount: 2,
    state: 'unlocked',
    colorTheme: {
      primary: '#FF453A',
      secondary: '#FF9F0A',
      bezel: 'gold',
    },
    description: 'Century of Knowledge: 100 days of daily learning.',
    longDescription:
      'An extraordinary testament to perseverance: 100 unbroken days of daily card reviews and conceptual mastery.',
    badgeStyle: 'teardrop-flame',
    depthMetrics: {
      thickness: '2.0 mm (Aerodynamic Teardrop)',
      curvature: 'Inward Parabolic Fluid Well',
      layers: 4,
      enamelFinish: 'Gradated Solar Enamel & Sculptural 24K Gold Spine',
    },
  },
  {
    id: 'streak-365-days',
    name: '365-Day Study Streak',
    category: 'Learning Milestones',
    earnedDate: 'JANUARY 1, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#30D158',
      secondary: '#00F0FF',
      bezel: 'gold',
    },
    description: '365 days of unbroken lifelong learning mastery.',
    longDescription:
      'The highest echelon award celebrating 365 days of uninterrupted intellectual pursuit, symbolized by the eternal Möbius ribbon.',
    badgeStyle: 'infinity-loop',
    depthMetrics: {
      thickness: '2.4 mm (Dual-Well Squircle)',
      curvature: 'Twin Focal Parabolic Basins',
      layers: 6,
      enamelFinish: 'Emerald Gradient Vitreous Enamel & Möbius Gold Ribbon',
    },
  },
  {
    id: 'streak-1000-days',
    name: '1,000-Day Study Streak',
    category: 'Learning Milestones',
    earnedDate: 'SEPTEMBER 26, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FFD60A',
      secondary: '#FAF9F6',
      bezel: 'gold',
    },
    description: 'Nearly 3 full years of daily intellectual discipline.',
    longDescription:
      'The legendary 1,000-day streak: unbroken daily learning through every season, holiday, and journey.',
    badgeStyle: 'circular-coin',
    depthMetrics: {
      thickness: '2.8 mm (Grand Imperial Medallion)',
      curvature: 'Deep Laurel Basin',
      layers: 6,
      enamelFinish: '24K Mirror Gold Bezel & Pure White Ceramic Inlay',
    },
  },
  {
    id: 'pomodoro-50-hours',
    name: '50 Deep Focus Hours',
    category: 'Learning Milestones',
    earnedDate: 'JULY 15, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FF9F0A',
      secondary: '#A6FF00',
      bezel: 'gold',
    },
    description: 'Logged 50 cumulative hours of uninterrupted immersion.',
    longDescription:
      'Celebrates your first 50 verified hours of distraction-free academic focus flow.',
    badgeStyle: 'hourglass-nexus',
    depthMetrics: {
      thickness: '2.2 mm (Hourglass Nexus)',
      curvature: 'Hyperbolic Waist Pinch',
      layers: 4,
      enamelFinish: 'Golden Amber & Lime Focus Enamel',
    },
  },
  {
    id: 'pomodoro-250-hours',
    name: '250 Deep Focus Hours',
    category: 'Learning Milestones',
    earnedDate: 'AUGUST 20, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#A6FF00',
      secondary: '#00F0FF',
      bezel: 'silver',
    },
    description: 'Quarter-millennium hours of deep cognitive flow.',
    longDescription:
      'Awarded for reaching 250 verified hours of concentrated academic immersion.',
    badgeStyle: 'hourglass-nexus',
    depthMetrics: {
      thickness: '2.2 mm (Hourglass Nexus)',
      curvature: 'Hyperbolic Waist Pinch',
      layers: 4,
      enamelFinish: 'Volt Focus & Cyan Liquid Sand Glass',
    },
  },
  {
    id: 'pomodoro-500-hours',
    name: '500 Deep Focus Hours',
    category: 'Learning Milestones',
    earnedDate: 'SEPTEMBER 10, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#5E5CE6',
      secondary: '#FFD60A',
      bezel: 'gold',
    },
    description: 'Half-thousand hours of deep academic immersion.',
    longDescription:
      '500 cumulative hours of intense problem-solving, reading, and conceptual retention.',
    badgeStyle: 'hourglass-nexus',
    depthMetrics: {
      thickness: '2.4 mm (Hourglass Nexus)',
      curvature: 'Hyperbolic Waist Pinch',
      layers: 5,
      enamelFinish: 'Deep Indigo & 24K Gold Sand Collar',
    },
  },
  {
    id: 'study-goals-365',
    name: '365 Days of Learning',
    category: 'Learning Milestones',
    progressCurrent: 309,
    progressTotal: 365,
    state: 'progress',
    colorTheme: {
      primary: '#3A3A3C',
      secondary: '#FAF9F6',
      bezel: 'space-gray',
    },
    description: '309 of 365 days completed.',
    longDescription:
      'Reach your daily study goal 365 times to earn this award. You have currently completed 309 of 365 days.',
    badgeStyle: 'faceted-shield',
    depthMetrics: {
      thickness: '1.8 mm (Slim Concave Wafer)',
      curvature: 'R38mm Parabolic Concave Dish',
      layers: 3,
      enamelFinish: 'Dormant Charcoal Gunmetal Silhouette & Active Progress Bar',
    },
  },

  // =========================================================================
  // 3. ACADEMIC DISCIPLINES & MASTERY (Specialized Subject Crowns)
  // =========================================================================
  {
    id: 'discipline-polyglot',
    name: 'Polyglot Linguistics Mastery',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'SEPTEMBER 1, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#00F0FF',
      secondary: '#FA114F',
      bezel: 'gold',
    },
    description: 'Mastered 1,500 vocabulary words across foreign languages.',
    longDescription:
      'Awarded for multi-lingual fluency and spaced repetition mastery across 1,500 idiomatic vocabulary cards.',
    badgeStyle: 'interlocking-rings',
    depthMetrics: {
      thickness: '2.4 mm (Dual-Venn Rings)',
      curvature: 'Overlapping Intertwined Torus',
      layers: 5,
      enamelFinish: 'Interlocking Gold/Silver Bezels with Cyan & Coral Enamel',
    },
  },
  {
    id: 'discipline-mathematics',
    name: 'Abstract Mathematics Proofs',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'AUGUST 12, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#0A84FF',
      secondary: '#FAF9F6',
      bezel: 'silver',
    },
    description: 'Memorized and applied 100 core theorems and axioms.',
    longDescription:
      'Recognizes rigorous recall of linear algebra, calculus, discrete topology, and abstract mathematical proofs.',
    badgeStyle: 'triangle-prism',
    depthMetrics: {
      thickness: '2.2 mm (Delta Prism)',
      curvature: 'Equilateral Delta Dish',
      layers: 5,
      enamelFinish: 'Pure Cobalt & Floating Silver Delta Ring',
    },
  },
  {
    id: 'discipline-computer-science',
    name: 'Systems Architecture & Algorithms',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'JULY 28, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#30D158',
      secondary: '#FAF9F6',
      bezel: 'silver',
    },
    description: 'Full recall of core algorithmic data structures & design patterns.',
    longDescription:
      'Mastery of distributed systems, concurrency primitives, memory layouts, and algorithmic time complexity proofs.',
    badgeStyle: 'rhombus-diamond',
    depthMetrics: {
      thickness: '2.1 mm (Brilliant Diamond)',
      curvature: 'Crosshair Faceted Dish',
      layers: 5,
      enamelFinish: 'Terminal Emerald & Platinum Bevel',
    },
  },
  {
    id: 'discipline-neuroscience',
    name: 'Neuroscience & Synaptic Plasticity',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'JUNE 15, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FA114F',
      secondary: '#5E5CE6',
      bezel: 'gold',
    },
    description: 'Mastered neuroanatomy, neural pathways, and cognitive models.',
    longDescription:
      'Understanding how the mind learns: complete mastery of neural transmission, memory encoding, and brain structures.',
    badgeStyle: 'oval-cameo',
    depthMetrics: {
      thickness: '2.3 mm (Roman Oval Cameo)',
      curvature: 'Stepped Concentric Oval Tiers',
      layers: 5,
      enamelFinish: 'Deep Crimson & Imperial Purple Ceramic Cameo',
    },
  },
  {
    id: 'discipline-classical-history',
    name: 'World Civilizations & Heritage',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'MAY 22, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FFD60A',
      secondary: '#FAF9F6',
      bezel: 'gold',
    },
    description: 'Chronological timeline recall spanning 5,000 years of history.',
    longDescription:
      'Complete mastery of historical turning points, dynasties, treaties, and socio-economic revolutions.',
    badgeStyle: 'shield-crested',
    depthMetrics: {
      thickness: '2.3 mm (Oxford Crested Shield)',
      curvature: 'Heraldic Notch Dish',
      layers: 5,
      enamelFinish: 'Imperial Gold & Ivory Enamel Chevron',
    },
  },
  {
    id: 'discipline-quantum-physics',
    name: 'Quantum Mechanics & Relativity',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'AUGUST 5, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#00F0FF',
      secondary: '#5E5CE6',
      bezel: 'silver',
    },
    description: 'Precision retention of wave equations, tensors, and spin matrices.',
    longDescription:
      'Honoring theoretical mastery of Schrödinger wave functions, relativistic space-time tensors, and field theory.',
    badgeStyle: 'wave-crescent',
    depthMetrics: {
      thickness: '2.2 mm (Midnight Crescent)',
      curvature: 'Lunar Dish & Quantum Particle Star',
      layers: 5,
      enamelFinish: 'Deep Space Indigo & Liquid Cyan Wave',
    },
  },
  {
    id: 'discipline-biomedicine',
    name: 'Genetics & Cellular Biology',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'APRIL 30, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#30D158',
      secondary: '#A6FF00',
      bezel: 'gold',
    },
    description: 'Mastered 300 metabolic pathways and molecular genetic cascades.',
    longDescription:
      'Biomedical excellence: complete active recall of cell signaling, DNA transcription, and biochemical cycles.',
    badgeStyle: 'clover-quatrefoil',
    depthMetrics: {
      thickness: '2.2 mm (Cathedral Quatrefoil)',
      curvature: '4-Lobe Concave Bloom',
      layers: 5,
      enamelFinish: 'Cellular Emerald & Lime Bio-Enamel',
    },
  },
  {
    id: 'discipline-philosophy',
    name: 'Classical Philosophy & Ethics',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'MARCH 10, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FF9F0A',
      secondary: '#FAF9F6',
      bezel: 'gold',
    },
    description: 'Dialectical mastery of Stoicism, Epistemology, and Moral Logic.',
    longDescription:
      'Honoring structured critical inquiry: understanding the foundational dialogues from Socrates to modern ethics.',
    badgeStyle: 'shield-arch',
    depthMetrics: {
      thickness: '2.2 mm (Roman Keystone Arch)',
      curvature: 'Architectural Keystone Dish',
      layers: 5,
      enamelFinish: 'Athenian Amber & Ceramic White Pillars',
    },
  },
  {
    id: 'discipline-economics',
    name: 'Macroeconomics & Game Theory',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'FEBRUARY 18, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#0A84FF',
      secondary: '#FFD60A',
      bezel: 'gold',
    },
    description: 'Mastered Nash equilibria, fiscal models, and monetary systems.',
    longDescription:
      'Analytical mastery of market dynamics, stochastic financial models, and strategic game theory.',
    badgeStyle: 'decagon-wheel',
    depthMetrics: {
      thickness: '2.3 mm (10-Spoke Wheel)',
      curvature: 'Decimal Sunburst Dish',
      layers: 5,
      enamelFinish: 'Monetary Gold & Reserve Blue Enamel',
    },
  },
  {
    id: 'discipline-literary-synthesis',
    name: 'Literary Classics & Poetics',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'JANUARY 25, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FA114F',
      secondary: '#FAF9F6',
      bezel: 'silver',
    },
    description: 'Memorized 50 canonical sonnets and rhetorical structures.',
    longDescription:
      'Celebrating the spoken word and structural rhetoric across world literature from Homer to modern poetry.',
    badgeStyle: 'rounded-squircle',
    depthMetrics: {
      thickness: '2.0 mm (Dished Squircle)',
      curvature: 'Parabolic Dish with 3D Folio',
      layers: 4,
      enamelFinish: 'Poetic Crimson & Ceramic White Book',
    },
  },
  {
    id: 'discipline-data-science',
    name: 'Machine Learning & Neural Nets',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'SEPTEMBER 18, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#00F0FF',
      secondary: '#A6FF00',
      bezel: 'silver',
    },
    description: 'Fluency in attention transformers, backpropagation, and loss surfaces.',
    longDescription:
      'Mastered the mathematical underpinnings of transformer architectures, diffusion models, and optimization gradients.',
    badgeStyle: 'faceted-octagon',
    depthMetrics: {
      thickness: '2.1 mm (Symmetrical Octagon)',
      curvature: 'Radial Octagonal Dish',
      layers: 5,
      enamelFinish: 'Tensor Cyan & Gradient Volt Inlay',
    },
  },
  {
    id: 'discipline-cognitive-psych',
    name: 'Cognitive Science & Memory Theory',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'SEPTEMBER 25, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FF453A',
      secondary: '#00F0FF',
      bezel: 'gold',
    },
    description: 'Understanding the mechanics of chunking and Ebbinghaus forgetting curves.',
    longDescription:
      'The theory behind Minest itself: mastering cognitive load theory, sensory memory, and spaced consolidation.',
    badgeStyle: 'interlocking-rings',
    depthMetrics: {
      thickness: '2.4 mm (Dual-Venn Rings)',
      curvature: 'Overlapping Intertwined Torus',
      layers: 5,
      enamelFinish: 'Synaptic Red & Memory Cyan Double Torus',
    },
  },

  // =========================================================================
  // 4. LIMITED EDITION CHALLENGES & ACADEMIC QUESTS
  // =========================================================================
  {
    id: 'challenge-september-sprint',
    name: 'September Learning Sprint',
    category: 'Limited Edition Challenges',
    earnedDate: 'SEPTEMBER 17, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FF9F0A',
      secondary: '#0A84FF',
      accent: '#FFD60A',
      bezel: 'gold',
    },
    description: 'Completed your personal learning sprint for September.',
    longDescription:
      'You earned this award for exceeding your monthly study card target and active recall goals during the September 2026 Sprint.',
    badgeStyle: 'challenge-hex',
    depthMetrics: {
      thickness: '2.4 mm (Dished Hexagon Plate)',
      curvature: 'Concave Architectural Topography',
      layers: 5,
      enamelFinish: 'Multi-plane Topo Enamel & Continuous 3D Spatial Ribbon',
    },
  },
  {
    id: 'challenge-curators-quest',
    name: "Curator's Knowledge Quest",
    category: 'Limited Edition Challenges',
    earnedDate: 'AUGUST 25, 2019',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FFD60A',
      secondary: '#30D158',
      bezel: 'gold',
    },
    description: 'Organized and published 10 comprehensive knowledge decks.',
    longDescription:
      'Awarded for curating, tagging, and mastering 10 specialized academic subjects on Minest.',
    badgeStyle: 'challenge-hex',
    depthMetrics: {
      thickness: '2.4 mm (Dished Hexagon Plate)',
      curvature: 'Concave Architectural Topography',
      layers: 5,
      enamelFinish: 'Relief Topography Enamel & Gold Chassis',
    },
  },
  {
    id: 'challenge-summer-solstice',
    name: 'Summer Solstice Knowledge Sprint',
    category: 'Limited Edition Challenges',
    earnedDate: 'JUNE 21, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FFD60A',
      secondary: '#FF9F0A',
      bezel: 'gold',
    },
    description: 'Logged 300 card reviews on the longest day of the year.',
    longDescription:
      'Commemorating midsummer daylight: setting an all-time personal study output record on the Summer Solstice.',
    badgeStyle: 'sunburst-radiant',
    depthMetrics: {
      thickness: '2.4 mm (12-Spike Sunburst)',
      curvature: 'Radiant Solar Dish',
      layers: 5,
      enamelFinish: 'Midsummer 24K Gold & Radiant Solar Enamel',
    },
  },
  {
    id: 'challenge-spring-equinox',
    name: 'Spring Equinox Awakening',
    category: 'Limited Edition Challenges',
    earnedDate: 'MARCH 20, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#30D158',
      secondary: '#00F0FF',
      bezel: 'silver',
    },
    description: 'Reviewed 100% of dormant winter decks without errors.',
    longDescription:
      'Refreshing dormant long-term knowledge: achieving a 95%+ retention score across older archival decks.',
    badgeStyle: 'clover-quatrefoil',
    depthMetrics: {
      thickness: '2.2 mm (Cathedral Quatrefoil)',
      curvature: '4-Lobe Concave Bloom',
      layers: 5,
      enamelFinish: 'Vernal Emerald & Cyan Spring Lacquer',
    },
  },
  {
    id: 'challenge-winter-solstice',
    name: 'Winter Solstice Midnight Oil',
    category: 'Limited Edition Challenges',
    earnedDate: 'DECEMBER 21, 2025',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#0A84FF',
      secondary: '#FAF9F6',
      bezel: 'silver',
    },
    description: 'Conquered the longest night with 120 minutes of focus.',
    longDescription:
      'Braving the winter freeze with solitary, uninterrupted focus on the longest night of the year.',
    badgeStyle: 'wave-crescent',
    depthMetrics: {
      thickness: '2.2 mm (Midnight Crescent)',
      curvature: 'Lunar Dish & Glacial Silver Star',
      layers: 5,
      enamelFinish: 'Glacial Blue & Satin Ceramic White',
    },
  },
  {
    id: 'challenge-new-year-resolution',
    name: 'New Year Academic Renaissance',
    category: 'Limited Edition Challenges',
    earnedDate: 'JANUARY 1, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FA114F',
      secondary: '#FFD60A',
      bezel: 'gold',
    },
    description: 'Created 5 new learning decks on New Year’s Day.',
    longDescription:
      'Starting the year with scholarly ambition: curating 5 brand-new curriculum goals on January 1st.',
    badgeStyle: 'circular-coin',
    depthMetrics: {
      thickness: '2.5 mm (Laurel Medallion)',
      curvature: 'Olympic Concave Beaded Basin',
      layers: 5,
      enamelFinish: '24K Gold Mirror Bezel & Jubilee Red Lacquer',
    },
  },
  {
    id: 'challenge-earth-day',
    name: 'Earth Day Ecological Study Quest',
    category: 'Limited Edition Challenges',
    earnedDate: 'APRIL 22, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#30D158',
      secondary: '#00F0FF',
      bezel: 'gold',
    },
    description: 'Completed 150 flashcards on earth science & ecology.',
    longDescription:
      'Celebrating biosphere conservation and climate science through dedicated environmental research study.',
    badgeStyle: 'challenge-hex',
    depthMetrics: {
      thickness: '2.4 mm (Dished Hexagon)',
      curvature: 'Topographic Earth Basin',
      layers: 5,
      enamelFinish: 'Emerald Forest & Ocean Cyan Terraced Enamel',
    },
  },
  {
    id: 'challenge-curie-quest',
    name: "Curie Laboratory Sprint",
    category: 'Limited Edition Challenges',
    earnedDate: 'NOVEMBER 7, 2025',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#A6FF00',
      secondary: '#00F0FF',
      bezel: 'silver',
    },
    description: 'Mastered 200 chemistry & atomic physics cards in 48 hours.',
    longDescription:
      'Honoring Marie Curie’s legacy through intense laboratory synthesis and physical chemistry mastery.',
    badgeStyle: 'triangle-prism',
    depthMetrics: {
      thickness: '2.2 mm (Delta Prism)',
      curvature: 'Equilateral Delta Dish',
      layers: 5,
      enamelFinish: 'Radioactive Volt & Luminescent Cyan Prism',
    },
  },
  {
    id: 'challenge-da-vinci',
    name: 'Da Vinci Polymath Challenge',
    category: 'Limited Edition Challenges',
    earnedDate: 'APRIL 15, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FF9F0A',
      secondary: '#5E5CE6',
      bezel: 'gold',
    },
    description: 'Closed study goals across Science, Art, and Code in one day.',
    longDescription:
      'True Renaissance intellect: active learning spanning art history, structural mechanics, and programming in a single 24-hour cycle.',
    badgeStyle: 'pentagon-star',
    depthMetrics: {
      thickness: '2.4 mm (Citadel Pentagon)',
      curvature: 'Faceted Radial Basin',
      layers: 5,
      enamelFinish: 'Renaissance Amber & Royal Indigo Star',
    },
  },
  {
    id: 'challenge-turing-sprint',
    name: 'Turing Cryptographic Marathon',
    category: 'Limited Edition Challenges',
    earnedDate: 'JUNE 23, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#0A84FF',
      secondary: '#FAF9F6',
      bezel: 'silver',
    },
    description: 'Solved and retained 50 cryptographic proofs & automata.',
    longDescription:
      'Honoring Alan Turing: complete mastery of finite state automata, cipher theory, and computability limits.',
    badgeStyle: 'decagon-wheel',
    depthMetrics: {
      thickness: '2.3 mm (10-Spoke Wheel)',
      curvature: 'Decimal Sunburst Dish',
      layers: 5,
      enamelFinish: 'Cryptographic Cobalt & Platinum Gear Teeth',
    },
  },
  {
    id: 'night-owl-scholar',
    name: 'Night Owl Scholar',
    category: 'Learning Milestones',
    earnedDate: 'OCTOBER 24, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#5E5CE6', // Deep Indigo / Sapphire
      secondary: '#FFD60A', // Radiant Amber Eyes
      accent: '#00F0FF', // Apple Cyan catchlights
      bezel: 'gold',
    },
    description: 'Completed 50 midnight deep immersion study sessions after 10 PM.',
    longDescription:
      'Embodying Athena’s legendary owl of nocturnal wisdom. Awarded for mastering profound intellectual focus under starlight, clocking over 50 quiet nighttime study hours with impeccable retention.',
    badgeStyle: 'owl-wisdom',
    depthMetrics: {
      thickness: '2.5 mm (Nocturnal Silhouette)',
      curvature: 'Scalloped Parabolic Wing Dish',
      layers: 5,
      enamelFinish: 'Midnight Violet & Luminous Amber Dual Ocular Inlay',
    },
  },
  {
    id: 'octopus-polymath',
    name: 'Octopus Polymath',
    category: 'Academic Disciplines & Mastery',
    progressCurrent: 7,
    progressTotal: 8,
    state: 'progress',
    colorTheme: {
      primary: '#FF2D55', // Radiant Coral Pink
      secondary: '#00F0FF', // Electric Ocean Cyan
      accent: '#FFD60A', // Golden Luminous Amber
      bezel: 'gold',
    },
    description: 'Simultaneously mastered flashcard decks across 8 distinct knowledge disciplines.',
    longDescription:
      'Embodying the agile, eight-armed intellect of the cephalopod. Awarded to versatile scholars who achieve mastery across 8 non-overlapping academic disciplines without conceptual cross-interference.',
    badgeStyle: 'octopus-polymath',
    depthMetrics: {
      thickness: '2.4 mm (8-Lobe Radial Star)',
      curvature: 'Radial Undulating Wave Basin',
      layers: 5,
      enamelFinish: 'Coral Amethyst & Marine Cyan Terraced Cloisonné',
    },
  },
  {
    id: 'deep-abyss-octopus',
    name: 'Deep Abyss Octopus',
    category: 'Learning Milestones',
    earnedDate: 'OCTOBER 26, 2026',
    earnedCount: 2,
    state: 'unlocked',
    colorTheme: {
      primary: '#00F0FF', // Abyssal Bio-Cyan
      secondary: '#0A84FF', // Midnight Trench Blue
      accent: '#5E5CE6', // Deep Trench Indigo
      bezel: 'space-gray',
    },
    description: 'Anchored 1,000 flashcards into deep permanent subconscious memory.',
    longDescription:
      'Exploring the deepest neural trenches of human cognition. Awarded for anchoring over 1,000 core concepts into permanent subconscious memory with 98%+ active recall stability over 180 continuous days.',
    badgeStyle: 'octopus-abyss',
    depthMetrics: {
      thickness: '2.6 mm (Abyssal Spiral)',
      curvature: 'Deep Concave Trench Cavity',
      layers: 6,
      enamelFinish: 'Bioluminescent Trench Cyan & Titanium Gray Cloisonné',
    },
  },
  {
    id: 'quantum-weaver-octopus',
    name: 'Quantum Weaver Octopus',
    category: 'Academic Disciplines & Mastery',
    earnedDate: 'OCTOBER 27, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#A6FF00', // Electric Volt Green
      secondary: '#FF2D55', // Quantum Magenta
      accent: '#FFD60A', // Luminous Amber
      bezel: 'gold',
    },
    description: 'Synthesized 50 complex multi-disciplinary knowledge graphs across STEM and Humanities.',
    longDescription:
      'Celebrates multi-threaded cognitive parallel processing. Awarded for constructing cross-disciplinary synthesis nodes that bridge higher mathematics, philosophy, literature, and computational science.',
    badgeStyle: 'octopus-quantum',
    depthMetrics: {
      thickness: '2.5 mm (Synaptic Web)',
      curvature: 'Multi-Torus Interlocking Toroid',
      layers: 6,
      enamelFinish: 'Volt Citron & Hyper-Magenta Vitreous Lacquer',
    },
  },
  {
    id: 'flow-state-jellyfish',
    name: 'Flow State Jellyfish',
    category: 'Close Your Study Rings',
    earnedDate: 'OCTOBER 25, 2026',
    earnedCount: 4,
    state: 'unlocked',
    colorTheme: {
      primary: '#70D7FF', // Iridescent Ethereal Azure
      secondary: '#E5B8F4', // Soft Bioluminescent Lavender
      accent: '#FFFFFF', // Pristine Ceramic White
      bezel: 'silver',
    },
    description: 'Achieved 10 consecutive frictionless 90-minute deep flow sessions without distraction.',
    longDescription:
      'Inspired by the frictionless buoyancy of pelagic scyphozoa. Awarded for entering the transcendent state of effortless deep focus, maintaining 90-minute uninterrupted study flow where challenge and skill merge in perfect harmony.',
    badgeStyle: 'jellyfish-flow',
    depthMetrics: {
      thickness: '2.8 mm (Parabolic Bell Umbrella)',
      curvature: 'Catenary Parabolic Dome Dish',
      layers: 5,
      enamelFinish: 'Opalescent Pelagic Azure with Undulating Tendril Ribbons',
    },
  },
  {
    id: 'nebula-pulse-jellyfish',
    name: 'Cosmic Nebula Jellyfish',
    category: 'Limited Edition Challenges',
    earnedDate: 'OCTOBER 26, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#BF5AF2', // Deep Nebula Violet
      secondary: '#FFD60A', // Solar Gold
      accent: '#00F0FF', // Cosmic Cyan
      bezel: 'space-gray',
    },
    description: 'Completed the 30-Day Galactic Exploration Challenge with 100% daily mastery.',
    longDescription:
      'Commemorates the rhythmic cosmic pulsation of intellectual curiosity. Awarded for conquering the limited-edition 30-Day Galactic Learning Quest, pulsing steadily through advanced curriculum frontiers without missing a single beat.',
    badgeStyle: 'jellyfish-nebula',
    depthMetrics: {
      thickness: '2.7 mm (Cosmic Bell)',
      curvature: 'Dual Concentric Ripple Dish',
      layers: 6,
      enamelFinish: 'Galactic Nebula Purple with Starlight Enamel Dust',
    },
  },
  {
    id: 'sovereign-eagle-vision',
    name: 'Aquila Sovereign Eagle',
    category: 'Learning Milestones',
    earnedDate: 'OCTOBER 28, 2026',
    earnedCount: 1,
    state: 'unlocked',
    colorTheme: {
      primary: '#FA114F', // Imperial Crimson
      secondary: '#FFD60A', // 24K Pure Gold
      accent: '#1C1C1E', // Obsidian Shadow
      bezel: 'gold',
    },
    description: 'Constructed 25 macro-synthesis frameworks unifying entire domains of knowledge.',
    longDescription:
      'Embodying the supreme high-altitude vantage of the sovereign eagle. Awarded to scholars who transcend granular memorization to architect grand, unified conceptual frameworks spanning centuries of thought.',
    badgeStyle: 'eagle-sovereign',
    depthMetrics: {
      thickness: '2.8 mm (Sculpted Wing Crest)',
      curvature: 'Aerodynamic Swept-Wing Parabola',
      layers: 6,
      enamelFinish: 'Imperial Scarlet & Mirror Chamfer Gold Blade Feathers',
    },
  },
  {
    id: 'clockwork-owl-intellect',
    name: 'Archimedes Clockwork Owl',
    category: 'Academic Disciplines & Mastery',
    progressCurrent: 44,
    progressTotal: 50,
    state: 'progress',
    colorTheme: {
      primary: '#30D158', // Precision Emerald Green
      secondary: '#FFD97D', // Brushed Brass Gold
      accent: '#00F0FF', // Sapphire Jewel Pivot
      bezel: 'gold',
    },
    description: 'Logged 50 hours of precision mathematical & algorithmic problem-solving proofs.',
    longDescription:
      'Honoring mechanical analytical rigor and untiring night-owl deduction. Awarded for mastering 50 complex algorithmic and mathematical proofs with clockwork consistency and zero logical regressions.',
    badgeStyle: 'owl-clockwork',
    depthMetrics: {
      thickness: '2.6 mm (Chrono-Aperture)',
      curvature: 'Concentric Epicyclic Gear Cavity',
      layers: 6,
      enamelFinish: 'Emerald Tourmaline & Geared Chrono-Aperture Cloisonné',
    },
  },
];
