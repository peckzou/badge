import React from 'react';

interface AppleTabBarProps {
  activeTab: 'awards' | 'summary' | 'decks' | 'focus';
  onTabChange: (tab: 'awards' | 'summary' | 'decks' | 'focus') => void;
}

export const AppleTabBar: React.FC<AppleTabBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none flex justify-center pb-6 px-4">
      <div className="pointer-events-auto h-[60px] w-full max-w-[390px] rounded-full bg-[#1C1C1E]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex items-center justify-around px-3">
        {/* Tab 1: Summary (Triple Learning Rings Icon: Study, Review, Focus) */}
        <button
          onClick={() => onTabChange('summary')}
          className={`flex flex-col items-center gap-1 transition-all ${
            activeTab === 'summary' ? 'text-white' : 'text-[#8E8E93] hover:text-white'
          }`}
        >
          {/* Apple Triple Rings Miniature */}
          <div className="relative w-5 h-5 flex items-center justify-center">
            {/* Outer Study ring */}
            <div className="absolute inset-0 rounded-full border-[2.2px] border-[#FA114F]" />
            {/* Middle Review ring */}
            <div className="absolute inset-[3px] rounded-full border-[2px] border-[#A6FF00]" />
            {/* Inner Focus ring */}
            <div className="absolute inset-[6px] rounded-full border-[1.8px] border-[#00F0FF]" />
          </div>
          <span className="text-[10px] font-medium tracking-tight">Summary</span>
        </button>

        {/* Tab 2: Decks */}
        <button
          onClick={() => onTabChange('decks')}
          className={`flex flex-col items-center gap-1 transition-all ${
            activeTab === 'decks' ? 'text-white' : 'text-[#8E8E93] hover:text-white'
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M7 8h10M7 12h10M7 16h6" />
          </svg>
          <span className="text-[10px] font-medium tracking-tight">Decks</span>
        </button>

        {/* Tab 3: Deep Focus */}
        <button
          onClick={() => onTabChange('focus')}
          className={`flex flex-col items-center gap-1 transition-all ${
            activeTab === 'focus' ? 'text-white' : 'text-[#8E8E93] hover:text-white'
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-[10px] font-medium tracking-tight">Focus</span>
        </button>

        {/* Tab 4: Awards (Active) */}
        <button
          onClick={() => onTabChange('awards')}
          className={`flex flex-col items-center gap-1 transition-all ${
            activeTab === 'awards' ? 'text-[#FA114F]' : 'text-[#8E8E93] hover:text-white'
          }`}
        >
          <div className="relative">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l2.6 5.8 6.4.6-4.8 4.2 1.4 6.2L12 15.6 6.4 18.8l1.4-6.2L3 8.4l6.4-.6L12 2z" />
            </svg>
            <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#FA114F]" />
          </div>
          <span className="text-[10px] font-medium tracking-tight">Awards</span>
        </button>
      </div>
    </div>
  );
};
