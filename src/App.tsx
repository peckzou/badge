import React, { useState, useEffect } from 'react';
import { APPLE_LEARNING_AWARDS_CATALOG } from './data/prototypes';
import { BadgeModel, BadgePrototypeId } from './types/badge';
import { AppleAwardsGrid } from './components/AppleAwardsGrid';
import { AppleAwardDetailView } from './components/AppleAwardDetailView';
import { AppleTabBar } from './components/AppleTabBar';
import { AppleUnlockModal } from './components/AppleUnlockModal';
import { BadgeCanvas } from './components/BadgeCanvas';
import { CollectionSummary } from './components/CollectionSummary';
import { spatialAudio } from './utils/spatialAudio';
import { triggerHaptic } from './utils/haptics';

export default function App() {
  const [awards, setAwards] = useState<BadgeModel[]>(APPLE_LEARNING_AWARDS_CATALOG);
  const [selectedAward, setSelectedAward] = useState<BadgeModel | null>(null);
  const [unlockModalBadge, setUnlockModalBadge] = useState<BadgeModel | null>(null);
  const [activeTab, setActiveTab] = useState<'awards' | 'summary' | 'decks' | 'focus'>('awards');
  const [galleryMode, setGalleryMode] = useState<'grid' | 'comparison'>('grid');
  const [audioState, setAudioState] = useState(() => spatialAudio.getState());

  useEffect(() => {
    return spatialAudio.subscribe((s) => setAudioState(s));
  }, []);

  const handleTriggerUnlock = (badgeId: string) => {
    const badge = awards.find((b) => b.id === badgeId) || awards[0];
    setUnlockModalBadge(badge);
  };

  const handleConfirmUnlock = (badgeId: string) => {
    setAwards((prev) =>
      prev.map((b) => {
        if (b.id === badgeId) {
          return {
            ...b,
            state: 'unlocked',
            earnedDate:
              b.earnedDate ||
              new Date()
                .toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                .toUpperCase(),
            earnedCount: (b.earnedCount || 0) + 1,
            progressCurrent: b.progressTotal,
          };
        }
        return b;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-[#FA114F]/30 selection:text-white">
      {/* Top Segmented Mode Bar (Subtle Apple-style segment) */}
      <header className="sticky top-0 z-30 w-full bg-[#000000]/80 backdrop-blur-xl border-b border-white/[0.06] px-4 py-2.5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-white">
              Minest Learning Awards
            </span>
            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-white/10 text-[#8E8E93]">
              Apple Design Grammar
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Spatial Audio Quick Status & Toggle Button */}
            <button
              onClick={() => {
                triggerHaptic('selection');
                spatialAudio.toggleMute();
              }}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-all shadow-sm active:scale-95 ${
                audioState.isMuted
                  ? 'bg-[#1C1C1E] text-[#8E8E93] border-white/[0.08]'
                  : 'bg-[#1C1C1E] text-[#00F0FF] border-[#00F0FF]/30'
              }`}
              title={audioState.isMuted ? 'Unmute Spatial Audio (Soundscape & Chimes)' : 'Mute Spatial Audio'}
            >
              {audioState.isMuted ? (
                <>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                  <span className="hidden sm:inline">Muted</span>
                </>
              ) : (
                <>
                  <div className="relative flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                    </svg>
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                  </div>
                  <span className="hidden sm:inline text-white/90">Spatial Audio</span>
                </>
              )}
            </button>

            <div className="flex items-center p-0.5 rounded-full bg-[#1C1C1E] border border-white/[0.08]">
              <button
                onClick={() => {
                  triggerHaptic('selection');
                  spatialAudio.playClink('facet', -0.2);
                  setActiveTab('awards');
                  setGalleryMode('grid');
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeTab === 'awards' && galleryMode === 'grid'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-[#8E8E93] hover:text-white'
                }`}
              >
                Awards Grid
              </button>
              <button
                onClick={() => {
                  triggerHaptic('selection');
                  spatialAudio.playClink('facet', 0);
                  setActiveTab('summary');
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === 'summary'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-[#8E8E93] hover:text-white'
                }`}
              >
                <div className="flex items-center -space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FA114F]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A6FF00]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                </div>
                <span>Summary</span>
              </button>
              <button
                onClick={() => {
                  triggerHaptic('selection');
                  spatialAudio.playClink('facet', 0.2);
                  setActiveTab('awards');
                  setGalleryMode('comparison');
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeTab === 'awards' && galleryMode === 'comparison'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-[#8E8E93] hover:text-white'
                }`}
              >
                3 Directions
              </button>
            </div>

            <a
              href="/badge3.0.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                triggerHaptic('tap');
                spatialAudio.playClink('facet', 0);
              }}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-white/[0.12] text-white/90 hover:text-white flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
              title="Open Standalone badge3.0.html Archive (Direct Preview)"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
              <span>badge3.0.html</span>
              <svg className="w-3 h-3 text-[#8E8E93]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Viewport */}
      <main className="flex-1 pb-16">
        {activeTab === 'summary' ? (
          <CollectionSummary
            awards={awards}
            onSelectAward={(award) => setSelectedAward(award)}
            onTriggerUnlock={handleTriggerUnlock}
            onViewAllAwards={() => {
              setActiveTab('awards');
              setGalleryMode('grid');
            }}
          />
        ) : activeTab === 'decks' ? (
          <div className="w-full max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-[#1C1C1E] border border-white/[0.08] mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-[#00F0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M7 8h10M7 12h10M7 16h6" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Active Curriculum Decks</h2>
              <p className="text-xs sm:text-sm text-[#8E8E93] mt-1 max-w-md mx-auto">
                10 Mastered knowledge decks fueling your 50 Learning Awards and Spaced Repetition queue.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  triggerHaptic('selection');
                  spatialAudio.playClink('facet', 0);
                  setActiveTab('awards');
                }}
                className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs transition-all active:scale-95"
              >
                Explore Awards Grid
              </button>
              <button
                onClick={() => {
                  triggerHaptic('selection');
                  spatialAudio.playClink('facet', 0);
                  setActiveTab('summary');
                }}
                className="px-5 py-2.5 rounded-full bg-[#1C1C1E] text-white border border-white/[0.08] font-medium text-xs transition-all active:scale-95"
              >
                View Collection Summary
              </button>
            </div>
          </div>
        ) : activeTab === 'focus' ? (
          <div className="w-full max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-[#1C1C1E] border border-white/[0.08] mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-[#A6FF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Deep Focus Immersion</h2>
              <p className="text-xs sm:text-sm text-[#8E8E93] mt-1 max-w-md mx-auto">
                500+ cumulative Pomodoro focus hours logged across your intellectual journey.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  triggerHaptic('selection');
                  spatialAudio.playClink('facet', 0);
                  setActiveTab('awards');
                }}
                className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs transition-all active:scale-95"
              >
                Explore Awards Grid
              </button>
              <button
                onClick={() => {
                  triggerHaptic('selection');
                  spatialAudio.playClink('facet', 0);
                  setActiveTab('summary');
                }}
                className="px-5 py-2.5 rounded-full bg-[#1C1C1E] text-white border border-white/[0.08] font-medium text-xs transition-all active:scale-95"
              >
                View Collection Summary
              </button>
            </div>
          </div>
        ) : galleryMode === 'grid' ? (
          <AppleAwardsGrid
            awards={awards}
            onSelectAward={(award) => setSelectedAward(award)}
            onTriggerUnlock={handleTriggerUnlock}
            onViewSummary={() => setActiveTab('summary')}
          />
        ) : (
          /* 3 Directions Studio Side-by-Side Comparison */
          <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Three Apple Learning Award Directions
              </h2>
              <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                Slim, dished concave physical medals with parabolic dish curvature and laser-engraved space gray unibody backs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Direction 1: Perfect Week Concave Shield (IMG_2949 & IMG_2950) */}
              <div
                onClick={() => setSelectedAward(awards[0])}
                className="rounded-[22px] bg-[#1C1C1E] p-5 cursor-pointer hover:bg-[#252528] transition-all flex flex-col justify-between"
                style={{ minHeight: '380px' }}
              >
                <div>
                  <div className="text-xs font-semibold text-[#FA114F] uppercase tracking-wider">
                    Direction A
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Perfect Week (Study)
                  </h3>
                  <p className="text-xs text-[#8E8E93] mt-1">
                    Slim concave parabolic dish, mirror chamfer bevel, Study crimson lacquer, satin bone enamel, and laser back shell.
                  </p>
                </div>
                <div className="w-full h-[220px]">
                  <BadgeCanvas
                    prototypeId="perfect-week-study"
                    state="unlocked"
                    viewAngle="angled"
                    className="w-full h-full pointer-events-none"
                  />
                </div>
                <div className="text-center">
                  <span className="text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full font-medium">
                    Tap to Inspect in 3D
                  </span>
                </div>
              </div>

              {/* Direction 2: Tricentric Mastery Rings (IMG_2952) */}
              <div
                onClick={() => setSelectedAward(awards[4])}
                className="rounded-[22px] bg-[#1C1C1E] p-5 cursor-pointer hover:bg-[#252528] transition-all flex flex-col justify-between"
                style={{ minHeight: '380px' }}
              >
                <div>
                  <div className="text-xs font-semibold text-[#F5C518] uppercase tracking-wider">
                    Direction B
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    100 Cards Mastered
                  </h3>
                  <p className="text-xs text-[#8E8E93] mt-1">
                    Slim fluted gold chassis, dished toroidal concentric tubular rings, and intersecting ribbon loops.
                  </p>
                </div>
                <div className="w-full h-[220px]">
                  <BadgeCanvas
                    prototypeId="tricentric-learning"
                    state="unlocked"
                    viewAngle="angled"
                    className="w-full h-full pointer-events-none"
                  />
                </div>
                <div className="text-center">
                  <span className="text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full font-medium">
                    Tap to Inspect in 3D
                  </span>
                </div>
              </div>

              {/* Direction 3: Challenge Hexagon (IMG_2948 & IMG_2951) */}
              <div
                onClick={() => setSelectedAward(awards[6])}
                className="rounded-[22px] bg-[#1C1C1E] p-5 cursor-pointer hover:bg-[#252528] transition-all flex flex-col justify-between"
                style={{ minHeight: '380px' }}
              >
                <div>
                  <div className="text-xs font-semibold text-[#FF9F0A] uppercase tracking-wider">
                    Direction C
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    September Learning Sprint
                  </h3>
                  <p className="text-xs text-[#8E8E93] mt-1">
                    Slim concave dished golden chassis, multi-plane landscape enamel plates, and continuous 3D ribbon.
                  </p>
                </div>
                <div className="w-full h-[220px]">
                  <BadgeCanvas
                    prototypeId="challenge-september-sprint"
                    state="unlocked"
                    viewAngle="angled"
                    className="w-full h-full pointer-events-none"
                  />
                </div>
                <div className="text-center">
                  <span className="text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full font-medium">
                    Tap to Inspect in 3D
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Full-Screen Apple Award 3D Detail View (IMG_2949 & IMG_2950) */}
      {selectedAward && (
        <AppleAwardDetailView
          badge={selectedAward}
          onBack={() => setSelectedAward(null)}
          onTriggerUnlock={handleTriggerUnlock}
        />
      )}

      {/* Apple Award Unlock Animation Overlay */}
      <AppleUnlockModal
        badge={unlockModalBadge}
        isOpen={unlockModalBadge !== null}
        onClose={() => setUnlockModalBadge(null)}
        onConfirmUnlock={handleConfirmUnlock}
      />

      {/* Floating Apple Bottom Tab Bar */}
      <AppleTabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
