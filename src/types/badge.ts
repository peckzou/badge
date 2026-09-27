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
  | 'owl-clockwork';

export type BadgeCategory =
  | 'Close Your Study Rings'
  | 'Learning Milestones'
  | 'Academic Disciplines & Mastery'
  | 'Limited Edition Challenges'
  | 'Knowledge Competitions';

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
    default:
      return 'perfect-week-study';
  }
}
