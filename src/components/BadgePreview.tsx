import React, { useState, useEffect } from 'react';
import { BadgeModel, BadgeStyleType } from '../types/badge';
import { badgePreviewService } from '../services/BadgePreviewService';

interface BadgePreviewProps {
  badge: BadgeModel;
  className?: string;
  priority?: boolean;
}

/**
 * High-Fidelity SVG / CSS 2.5D Vector Fallback
 * Guarantees zero blank cards immediately on first frame render,
 * before the single shared 3D snapshot finishes generating.
 */
const BadgeVectorSilhouette: React.FC<{
  styleType: BadgeStyleType;
  primaryColor: string;
  bezel: 'silver' | 'gold' | 'space-gray';
  isLocked: boolean;
}> = ({ styleType, primaryColor, bezel, isLocked }) => {
  const bezelGradientId = `bezel-grad-${bezel}-${isLocked ? 'locked' : 'unlocked'}`;
  const enamelColor = isLocked ? '#2A2C32' : primaryColor;

  return (
    <svg
      viewBox="0 0 160 160"
      className="w-36 h-36 drop-shadow-2xl transition-transform duration-300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Silver Bezel Chamfer Gradient */}
        <linearGradient id="bezel-grad-silver-unlocked" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#D5D9E0" />
          <stop offset="50%" stopColor="#8E939D" />
          <stop offset="75%" stopColor="#E2E6ED" />
          <stop offset="100%" stopColor="#9CA2AE" />
        </linearGradient>

        {/* Gold Bezel Chamfer Gradient */}
        <linearGradient id="bezel-grad-gold-unlocked" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="30%" stopColor="#E5B94B" />
          <stop offset="60%" stopColor="#9E7624" />
          <stop offset="85%" stopColor="#FFDE7A" />
          <stop offset="100%" stopColor="#B38628" />
        </linearGradient>

        {/* Space Gray Bezel Chamfer Gradient */}
        <linearGradient id="bezel-grad-space-gray-unlocked" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7E8491" />
          <stop offset="35%" stopColor="#454952" />
          <stop offset="70%" stopColor="#2A2D34" />
          <stop offset="100%" stopColor="#5B606B" />
        </linearGradient>

        {/* Locked Muted Gradient */}
        <linearGradient id="bezel-grad-silver-locked" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#555861" />
          <stop offset="100%" stopColor="#25272E" />
        </linearGradient>
        <linearGradient id="bezel-grad-gold-locked" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#555861" />
          <stop offset="100%" stopColor="#25272E" />
        </linearGradient>
        <linearGradient id="bezel-grad-space-gray-locked" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#555861" />
          <stop offset="100%" stopColor="#25272E" />
        </linearGradient>

        {/* Specular Highlight Sheen */}
        <linearGradient id="specular-glint" x1="30" y1="20" x2="130" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Geometry Routing */}
      {renderShapePath(styleType, bezelGradientId, enamelColor, isLocked)}
    </svg>
  );
};

function renderShapePath(
  styleType: BadgeStyleType,
  bezelId: string,
  enamelColor: string,
  isLocked: boolean
): React.ReactNode {
  const bezelStroke = `url(#${bezelId})`;

  switch (styleType) {
    case 'faceted-shield':
      return (
        <g>
          <path
            d="M80 18 C115 18 138 28 138 65 C138 105 106 135 80 148 C54 135 22 105 22 65 C22 28 45 18 80 18 Z"
            fill={enamelColor}
            stroke={bezelStroke}
            strokeWidth="7"
          />
          <path
            d="M80 30 C108 30 126 38 126 68 C126 100 100 124 80 135 C60 124 34 100 34 68 C34 38 52 30 80 30 Z"
            fill="url(#specular-glint)"
            opacity="0.6"
          />
          <path d="M80 20 L80 146" stroke={bezelStroke} strokeWidth="2.5" strokeDasharray="4 3" />
        </g>
      );

    case 'concentric-rings':
      return (
        <g>
          {/* Apple 3 Tricentric Rings */}
          <circle cx="80" cy="80" r="58" stroke={isLocked ? '#3A3C42' : '#FA114F'} strokeWidth="10" />
          <circle cx="80" cy="80" r="42" stroke={isLocked ? '#2F3138' : '#A6FF00'} strokeWidth="10" />
          <circle cx="80" cy="80" r="26" stroke={isLocked ? '#24262C' : '#00F0FF'} strokeWidth="10" />
          <circle cx="80" cy="80" r="66" stroke={bezelStroke} strokeWidth="3" />
        </g>
      );

    case 'challenge-hex':
      return (
        <g>
          <polygon
            points="80,18 138,48 138,112 80,142 22,112 22,48"
            fill={enamelColor}
            stroke={bezelStroke}
            strokeWidth="7"
          />
          <polygon
            points="80,32 126,56 126,104 80,128 34,104 34,56"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2.5"
          />
          <polygon
            points="80,48 110,65 110,95 80,112 50,95 50,65"
            fill="url(#specular-glint)"
          />
        </g>
      );

    case 'teardrop-flame':
      return (
        <g>
          <path
            d="M80 16 C95 46 136 78 136 108 C136 138 111 148 80 148 C49 148 24 138 24 108 C24 78 65 46 80 16 Z"
            fill={enamelColor}
            stroke={bezelStroke}
            strokeWidth="7"
          />
          <path
            d="M80 40 C90 62 118 86 118 108 C118 130 101 136 80 136 C59 136 42 130 42 108 C42 86 70 62 80 40 Z"
            fill="url(#specular-glint)"
          />
        </g>
      );

    case 'faceted-octagon':
      return (
        <g>
          <polygon
            points="55,20 105,20 140,55 140,105 105,140 55,140 20,105 20,55"
            fill={enamelColor}
            stroke={bezelStroke}
            strokeWidth="7"
          />
          <line x1="20" y1="55" x2="140" y2="105" stroke={bezelStroke} strokeWidth="1.5" opacity="0.4" />
          <line x1="20" y1="105" x2="140" y2="55" stroke={bezelStroke} strokeWidth="1.5" opacity="0.4" />
        </g>
      );

    case 'infinity-loop':
      return (
        <g>
          <path
            d="M52 60 C38 60 26 70 26 80 C26 90 38 100 52 100 C68 100 78 88 80 80 C82 88 92 100 108 100 C122 100 134 90 134 80 C134 70 122 60 108 60 C92 60 82 72 80 80 C78 72 68 60 52 60 Z"
            fill="none"
            stroke={bezelStroke}
            strokeWidth="14"
          />
          <path
            d="M52 60 C38 60 26 70 26 80 C26 90 38 100 52 100 C68 100 78 88 80 80 C82 88 92 100 108 100 C122 100 134 90 134 80 C134 70 122 60 108 60 C92 60 82 72 80 80 C78 72 68 60 52 60 Z"
            fill="none"
            stroke={enamelColor}
            strokeWidth="7"
          />
        </g>
      );

    case 'circular-coin':
      return (
        <g>
          <circle cx="80" cy="80" r="62" fill={enamelColor} stroke={bezelStroke} strokeWidth="8" />
          <circle cx="80" cy="80" r="48" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="80" cy="80" r="32" fill="url(#specular-glint)" />
        </g>
      );

    case 'shield-crested':
      return (
        <g>
          <path
            d="M30 35 L50 20 L80 35 L110 20 L130 35 L130 80 C130 115 105 138 80 148 C55 138 30 115 30 80 Z"
            fill={enamelColor}
            stroke={bezelStroke}
            strokeWidth="7"
          />
          <path
            d="M40 45 L80 58 L120 45 L120 80 C120 108 98 128 80 136 C62 128 40 108 40 80 Z"
            fill="url(#specular-glint)"
          />
        </g>
      );

    case 'rhombus-diamond':
      return (
        <g>
          <polygon points="80,16 142,80 80,144 18,80" fill={enamelColor} stroke={bezelStroke} strokeWidth="7" />
          <polygon points="80,36 122,80 80,124 38,80" fill="url(#specular-glint)" />
          <line x1="18" y1="80" x2="142" y2="80" stroke={bezelStroke} strokeWidth="2" opacity="0.5" />
          <line x1="80" y1="16" x2="80" y2="144" stroke={bezelStroke} strokeWidth="2" opacity="0.5" />
        </g>
      );

    case 'pentagon-star':
      return (
        <g>
          <polygon points="80,18 140,58 118,136 42,136 20,58" fill={enamelColor} stroke={bezelStroke} strokeWidth="7" />
          <polygon points="80,36 94,68 128,70 102,92 110,124 80,104 50,124 58,92 32,70 66,68" fill={bezelStroke} />
        </g>
      );

    case 'rounded-squircle':
      return (
        <g>
          <rect x="24" y="24" width="112" height="112" rx="36" fill={enamelColor} stroke={bezelStroke} strokeWidth="8" />
          <rect x="36" y="36" width="88" height="88" rx="24" fill="url(#specular-glint)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        </g>
      );

    case 'clover-quatrefoil':
      return (
        <g>
          <path
            d="M80 44 C80 26 64 16 50 26 C36 36 42 56 56 64 C42 66 32 78 36 94 C40 108 58 110 68 98 C66 112 78 124 94 120 C108 116 110 98 98 88 C112 90 124 78 120 62 C116 48 98 46 88 58 C90 44 78 32 64 36 Z"
            fill={enamelColor}
            stroke={bezelStroke}
            strokeWidth="6"
          />
        </g>
      );

    case 'triangle-prism':
      return (
        <g>
          <path
            d="M80 20 C85 20 138 115 135 125 C132 135 28 135 25 125 C22 115 75 20 80 20 Z"
            fill={enamelColor}
            stroke={bezelStroke}
            strokeWidth="7"
          />
          <circle cx="80" cy="90" r="22" fill="url(#specular-glint)" />
        </g>
      );

    case 'sunburst-radiant':
      return (
        <g>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="80"
              y1="80"
              x2={80 + 58 * Math.cos((deg * Math.PI) / 180)}
              y2={80 + 58 * Math.sin((deg * Math.PI) / 180)}
              stroke={bezelStroke}
              strokeWidth="5"
            />
          ))}
          <circle cx="80" cy="80" r="38" fill={enamelColor} stroke={bezelStroke} strokeWidth="6" />
        </g>
      );

    case 'owl-wisdom':
    case 'owl-clockwork':
      return (
        <g>
          <path
            d="M80 22 C110 22 130 45 130 85 C130 125 105 145 80 145 C55 145 30 125 30 85 C30 45 50 22 80 22 Z"
            fill={enamelColor}
            stroke={bezelStroke}
            strokeWidth="6"
          />
          {/* Owl Eyes */}
          <circle cx="60" cy="65" r="16" fill="#1C1C1E" stroke={bezelStroke} strokeWidth="4" />
          <circle cx="100" cy="65" r="16" fill="#1C1C1E" stroke={bezelStroke} strokeWidth="4" />
          <circle cx="60" cy="65" r="6" fill="#00F0FF" />
          <circle cx="100" cy="65" r="6" fill="#00F0FF" />
          <polygon points="80,78 74,92 86,92" fill={bezelStroke} />
        </g>
      );

    case 'octopus-polymath':
    case 'octopus-abyss':
    case 'octopus-quantum':
      return (
        <g>
          <ellipse cx="80" cy="60" rx="38" ry="32" fill={enamelColor} stroke={bezelStroke} strokeWidth="6" />
          <circle cx="65" cy="60" r="6" fill="#00F0FF" />
          <circle cx="95" cy="60" r="6" fill="#00F0FF" />
          <path
            d="M50 85 Q35 110 40 135 M65 90 Q60 115 65 140 M95 90 Q100 115 95 140 M110 85 Q125 110 120 135"
            stroke={bezelStroke}
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>
      );

    case 'jellyfish-flow':
    case 'jellyfish-nebula':
      return (
        <g>
          <path
            d="M36 78 C36 40 124 40 124 78 C124 88 36 88 36 78 Z"
            fill={enamelColor}
            stroke={bezelStroke}
            strokeWidth="6"
          />
          <path
            d="M50 88 Q45 115 50 140 M70 88 Q65 115 72 142 M90 88 Q95 115 88 142 M110 88 Q115 115 110 140"
            stroke={bezelStroke}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      );

    case 'eagle-sovereign':
      return (
        <g>
          <circle cx="80" cy="80" r="58" fill={enamelColor} stroke={bezelStroke} strokeWidth="6" />
          {/* Wing blades */}
          <path d="M40 70 L25 45 L55 58 Z" fill={bezelStroke} />
          <path d="M120 70 L135 45 L105 58 Z" fill={bezelStroke} />
          {/* Beak */}
          <polygon points="80,95 72,75 88,75" fill={bezelStroke} />
        </g>
      );

    default:
      // Generic circular medallion
      return (
        <g>
          <circle cx="80" cy="80" r="58" fill={enamelColor} stroke={bezelStroke} strokeWidth="8" />
          <circle cx="80" cy="80" r="42" fill="url(#specular-glint)" />
        </g>
      );
  }
}

export const BadgePreview: React.FC<BadgePreviewProps> = ({
  badge,
  className = '',
  priority = false,
}) => {
  const [snapshotUrl, setSnapshotUrl] = useState<string | null>(() =>
    badgePreviewService.getCachedPreview(badge)
  );
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(Boolean(snapshotUrl));

  useEffect(() => {
    // Check initial cached snapshot
    const cached = badgePreviewService.getCachedPreview(badge);
    if (cached) {
      setSnapshotUrl(cached);
      setIsImgLoaded(true);
      return;
    }

    // Subscribe to snapshot generation updates
    const unsubscribe = badgePreviewService.subscribe(badge.id, (url) => {
      setSnapshotUrl(url);
    });

    // Enqueue request in the lightweight background generator
    badgePreviewService.requestPreview(badge, priority);

    return () => {
      unsubscribe();
    };
  }, [badge.id, badge.state, badge.colorTheme?.primary, priority]);

  const isLocked = badge.state === 'locked';
  const bezel = badge.colorTheme?.bezel || 'silver';
  const primaryColor = badge.colorTheme?.primary || '#FA114F';

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ minHeight: '160px' }}
    >
      {/* 1. High-Fidelity SVG Vector Silhouette (Immediate, 0ms, Zero Blank Frame) */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
          isImgLoaded ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <BadgeVectorSilhouette
          styleType={badge.badgeStyle}
          primaryColor={primaryColor}
          bezel={bezel}
          isLocked={isLocked}
        />
      </div>

      {/* 2. Real 3D PBR Studio WebGL Pre-Rendered Snapshot (Crisp WebP/PNG, 0 WebGL Context) */}
      {snapshotUrl && (
        <img
          src={snapshotUrl}
          alt={badge.name}
          onLoad={() => setIsImgLoaded(true)}
          className={`w-40 h-40 object-contain drop-shadow-2xl transition-all duration-500 ease-out pointer-events-none ${
            isImgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
    </div>
  );
};
