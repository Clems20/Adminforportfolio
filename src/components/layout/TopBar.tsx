import { Search, Menu } from 'lucide-react';

interface TopBarProps {
  title: string;
  subtitle?: string;
  onMenuClick: () => void;
}

export function TopBar({ title, subtitle, onMenuClick }: TopBarProps) {
  return (
    <div className="h-[64px] sm:h-[80px] border-b border-[#374151] bg-[#111827] flex items-center justify-between px-[16px] sm:px-[24px] lg:px-[32px]">
      {/* Left: Menu + Title */}
      <div className="flex items-center gap-[12px] sm:gap-[16px] flex-1 min-w-0">
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden w-[40px] h-[40px] rounded-[8px] bg-[#1f2937] hover:bg-[#374151] transition-all flex items-center justify-center flex-shrink-0"
        >
          <Menu size={20} className="text-[#9ca3af]" />
        </button>

        {/* Title Section */}
        <div className="min-w-0 flex-1">
          <h2 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[18px] sm:text-[24px] leading-[24px] sm:leading-[28px] truncate">
            {title}
          </h2>
          {subtitle && (
            <p className="hidden sm:block font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[14px] mt-[4px] truncate" style={{ fontVariationSettings: "'opsz' 9" }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex items-center gap-[8px] sm:gap-[16px]">
        {/* Search - Hidden on mobile */}
        <div className="relative hidden md:block">
          <Search 
            size={18} 
            className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#9ca3af]"
          />
          <input
            type="text"
            placeholder="Quick search..."
            className="
              w-[200px] lg:w-[300px]
              bg-[#1f2937] 
              border border-[#374151] 
              rounded-[8px] 
              pl-[40px] 
              pr-[16px] 
              py-[8px]
              text-[#fafaf9] 
              font-['DM_Sans:9pt_Regular',sans-serif] 
              text-[14px]
              placeholder:text-[#9ca3af]
              focus:outline-none 
              focus:border-[#F97316] 
              focus:ring-1 
              focus:ring-[#F97316]/20
              transition-all
            "
            style={{ fontVariationSettings: "'opsz' 9" }}
          />
        </div>

        {/* Mobile Search Button */}
        <button className="md:hidden w-[40px] h-[40px] rounded-full bg-[#1f2937] hover:bg-[#374151] transition-all flex items-center justify-center">
          <Search size={18} className="text-[#9ca3af]" />
        </button>
      </div>
    </div>
  );
}