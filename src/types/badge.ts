export type BadgeId = string;

export type BadgePrototypeId =
  | 'perfect-week-study'
  | 'tricentric-learning'
  | 'challenge-september-sprint'
  | 'teardrop-streak'
  | 'octagon-milestone'
  | 'infinity-mastery'
  | 'circular-coin'
  | 'shield-crested'
  | 'rhombus-diamond'
  | 'pentagon-star'
  | 'rounded-squircle'
  | 'clover-quatrefoil'
  | 'oval-cameo'
  | 'triangle-prism'
  | 'decagon-wheel'
  | 'shield-arch'
  | 'wave-crescent'
  | 'interlocking-rings'
  | 'hourglass-nexus'
  | 'sunburst-radiant'
  | 'owl-wisdom'
  | 'octopus-polymath'
  | 'octopus-abyss'
  | 'octopus-quantum'
  | 'jellyfish-flow'
  | 'jellyfish-nebula'
  | 'eagle-sovereign'
  | 'owl-clockwork'
  // 10 Cute Animals
  | 'cute-panda'
  | 'cute-shiba'
  | 'cute-red-panda'
  | 'cute-koala'
  | 'cute-hamster'
  | 'cute-fennec-fox'
  | 'cute-penguin'
  | 'cute-bunny'
  | 'cute-otter'
  | 'cute-alpaca'
  // 10 Ocean Animals
  | 'ocean-whale'
  | 'ocean-manta'
  | 'ocean-turtle'
  | 'ocean-dolphin'
  | 'ocean-hammerhead'
  | 'ocean-seahorse'
  | 'ocean-narwhal'
  | 'ocean-octopus'
  | 'ocean-jellyfish'
  | 'ocean-flying-fish'
  // 10 Cartoon Characters
  | 'cartoon-wizard'
  | 'cartoon-astronaut'
  | 'cartoon-mecha'
  | 'cartoon-knight'
  | 'cartoon-prince'
  | 'cartoon-pirate'
  | 'cartoon-pixel-hero'
  | 'cartoon-aviator'
  | 'cartoon-elf'
  | 'cartoon-ninja';

export type BadgeCategory =
  | 'Close Your Study Rings'
  | 'Learning Milestones'
  | 'Academic Disciplines & Mastery'
  | 'Limited Edition Challenges'
  | 'Knowledge Competitions'
  | 'Cute Animals'
  | 'Ocean Animals'
  | 'Cartoon Characters';

export type BadgeState = 'unlocked' | 'progress' | 'locked';

export type ViewAngle = 'front' | 'angled' | 'profile' | 'back' | 'free';

export type BadgeStyleType =
  | 'faceted-shield'
  | 'concentric-rings'
  | 'challenge-hex'
  | 'teardrop-flame'
  | 'faceted-octagon'
  | 'infinity-loop'
  | 'circular-coin'
  | 'shield-crested'
  | 'rhombus-diamond'
  | 'pentagon-star'
  | 'rounded-squircle'
  | 'clover-quatrefoil'
  | 'oval-cameo'
  | 'triangle-prism'
  | 'decagon-wheel'
  | 'shield-arch'
  | 'wave-crescent'
  | 'interlocking-rings'
  | 'hourglass-nexus'
  | 'sunburst-radiant'
  | 'owl-wisdom'
  | 'octopus-polymath'
  | 'octopus-abyss'
  | 'octopus-quantum'
  | 'jellyfish-flow'
  | 'jellyfish-nebula'
  | 'eagle-sovereign'
  | 'owl-clockwork'
  // 10 Cute Animals
  | 'cute-panda'
  | 'cute-shiba'
  | 'cute-red-panda'
  | 'cute-koala'
  | 'cute-hamster'
  | 'cute-fennec-fox'
  | 'cute-penguin'
  | 'cute-bunny'
  | 'cute-otter'
  | 'cute-alpaca'
  // 10 Ocean Animals
  | 'ocean-whale'
  | 'ocean-manta'
  | 'ocean-turtle'
  | 'ocean-dolphin'
  | 'ocean-hammerhead'
  | 'ocean-seahorse'
  | 'ocean-narwhal'
  | 'ocean-octopus'
  | 'ocean-jellyfish'
  | 'ocean-flying-fish'
  // 10 Cartoon Characters
  | 'cartoon-wizard'
  | 'cartoon-astronaut'
  | 'cartoon-mecha'
  | 'cartoon-knight'
  | 'cartoon-prince'
  | 'cartoon-pirate'
  | 'cartoon-pixel-hero'
  | 'cartoon-aviator'
  | 'cartoon-elf'
  | 'cartoon-ninja'
  | 'wireframe-dark';

export interface BadgeModel {
  id: BadgeId;
  name: string;
  category: BadgeCategory;
  earnedDate?: string;
  earnedCount?: number;
  progressCurrent?: number;
  progressTotal?: number;
  state: BadgeState;
  colorTheme: {
    primary: string;
    secondary?: string;
    accent?: string;
    bezel: 'silver' | 'gold' | 'space-gray';
  };
  description: string;
  longDescription: string;
  badgeStyle: BadgeStyleType;
  depthMetrics: {
    thickness: string;
    curvature: string;
    layers: number;
    enamelFinish: string;
  };
}

export function getBadgePrototypeId(style: BadgeStyleType): BadgePrototypeId {
  switch (style) {
    case 'concentric-rings':
      return 'tricentric-learning';
    case 'challenge-hex':
      return 'challenge-september-sprint';
    case 'teardrop-flame':
      return 'teardrop-streak';
    case 'faceted-octagon':
      return 'octagon-milestone';
    case 'infinity-loop':
      return 'infinity-mastery';
    case 'circular-coin':
      return 'circular-coin';
    case 'shield-crested':
      return 'shield-crested';
    case 'rhombus-diamond':
      return 'rhombus-diamond';
    case 'pentagon-star':
      return 'pentagon-star';
    case 'rounded-squircle':
      return 'rounded-squircle';
    case 'clover-quatrefoil':
      return 'clover-quatrefoil';
    case 'oval-cameo':
      return 'oval-cameo';
    case 'triangle-prism':
      return 'triangle-prism';
    case 'decagon-wheel':
      return 'decagon-wheel';
    case 'shield-arch':
      return 'shield-arch';
    case 'wave-crescent':
      return 'wave-crescent';
    case 'interlocking-rings':
      return 'interlocking-rings';
    case 'hourglass-nexus':
      return 'hourglass-nexus';
    case 'sunburst-radiant':
      return 'sunburst-radiant';
    case 'owl-wisdom':
      return 'owl-wisdom';
    case 'octopus-polymath':
      return 'octopus-polymath';
    case 'octopus-abyss':
      return 'octopus-abyss';
    case 'octopus-quantum':
      return 'octopus-quantum';
    case 'jellyfish-flow':
      return 'jellyfish-flow';
    case 'jellyfish-nebula':
      return 'jellyfish-nebula';
    case 'eagle-sovereign':
      return 'eagle-sovereign';
    case 'owl-clockwork':
      return 'owl-clockwork';
    // 10 Cute Animals
    case 'cute-panda':
      return 'cute-panda';
    case 'cute-shiba':
      return 'cute-shiba';
    case 'cute-red-panda':
      return 'cute-red-panda';
    case 'cute-koala':
      return 'cute-koala';
    case 'cute-hamster':
      return 'cute-hamster';
    case 'cute-fennec-fox':
      return 'cute-fennec-fox';
    case 'cute-penguin':
      return 'cute-penguin';
    case 'cute-bunny':
      return 'cute-bunny';
    case 'cute-otter':
      return 'cute-otter';
    case 'cute-alpaca':
      return 'cute-alpaca';
    // 10 Ocean Animals
    case 'ocean-whale':
      return 'ocean-whale';
    case 'ocean-manta':
      return 'ocean-manta';
    case 'ocean-turtle':
      return 'ocean-turtle';
    case 'ocean-dolphin':
      return 'ocean-dolphin';
    case 'ocean-hammerhead':
      return 'ocean-hammerhead';
    case 'ocean-seahorse':
      return 'ocean-seahorse';
    case 'ocean-narwhal':
      return 'ocean-narwhal';
    case 'ocean-octopus':
      return 'ocean-octopus';
    case 'ocean-jellyfish':
      return 'ocean-jellyfish';
    case 'ocean-flying-fish':
      return 'ocean-flying-fish';
    // 10 Cartoon Characters
    case 'cartoon-wizard':
      return 'cartoon-wizard';
    case 'cartoon-astronaut':
      return 'cartoon-astronaut';
    case 'cartoon-mecha':
      return 'cartoon-mecha';
    case 'cartoon-knight':
      return 'cartoon-knight';
    case 'cartoon-prince':
      return 'cartoon-prince';
    case 'cartoon-pirate':
      return 'cartoon-pirate';
    case 'cartoon-pixel-hero':
      return 'cartoon-pixel-hero';
    case 'cartoon-aviator':
      return 'cartoon-aviator';
    case 'cartoon-elf':
      return 'cartoon-elf';
    case 'cartoon-ninja':
      return 'cartoon-ninja';
    default:
      return 'perfect-week-study';
  }
}
