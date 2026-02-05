import { LayoutDashboard, FolderOpen, User, Settings, ChevronRight } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'about', label: 'About & Bio', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-[260px] h-screen bg-[#111827] border-r border-[#374151] flex flex-col">
      {/* Logo/Brand */}
      <div className="p-[24px] border-b border-[#374151]">
        <h1 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[24px]">
          Portfolio <span className="text-[#F97316]">Admin</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-[16px]">
        <div className="flex flex-col gap-[8px]">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px]
                  font-['DM_Sans:9pt_Regular',sans-serif] text-[16px]
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-[rgba(249,115,22,0.1)] text-[#F97316] border border-[#F97316]/20' 
                    : 'text-[#9ca3af] hover:bg-[#1f2937] hover:text-[#fafaf9]'
                  }
                `}
                style={{ fontVariationSettings: "'opsz' 9" }}
              >
                <Icon size={20} strokeWidth={1.5} />
                <span className="flex-1 text-left">{item.label}</span>
                {isActive && <ChevronRight size={16} />}
              </button>
            );
          })}
        </div>
      </nav>

      {/* User info */}
      <div className="p-[24px] border-t border-[#374151]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[40px] h-[40px] rounded-full bg-[rgba(249,115,22,0.1)] flex items-center justify-center">
            <span className="font-['Space_Grotesk:Regular',sans-serif] text-[#F97316] text-[16px]">
              AD
            </span>
          </div>
          <div>
            <p className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[14px]">
              Admin User
            </p>
            <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
              admin@portfolio.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}