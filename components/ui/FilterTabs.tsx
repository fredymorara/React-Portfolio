'use client';

interface FilterTabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

const FilterTabs = ({ tabs, active, onChange }: FilterTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-5 py-2 rounded-full text-xs font-Silkscreen uppercase tracking-widest transition-all duration-300 border ${
            active === tab
              ? 'bg-white text-black border-white'
              : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/80 hover:border-white/20'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
