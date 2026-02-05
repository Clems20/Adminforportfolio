import { Card } from '../ui/Card';
import { FolderKanban, FileText, MessageSquare, TrendingUp, TrendingDown, Clock } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { 
      label: 'Projects', 
      value: '12', 
      change: '+2', 
      trending: 'up',
      icon: FolderKanban,
      color: '#F97316'
    },
    { 
      label: 'Case Studies', 
      value: '8', 
      change: '+1', 
      trending: 'up',
      icon: FileText,
      color: '#F97316'
    },
    { 
      label: 'Testimonials', 
      value: '24', 
      change: '-3', 
      trending: 'down',
      icon: MessageSquare,
      color: '#F97316'
    },
  ];

  const recentActivity = [
    { type: 'Project', title: 'Finance Dashboard Redesign', action: 'Updated', time: '2 hours ago' },
    { type: 'Case Study', title: 'E-commerce Platform', action: 'Published', time: '5 hours ago' },
    { type: 'Project', title: 'Mobile Banking App', action: 'Created', time: '1 day ago' },
    { type: 'Testimonial', title: 'John Smith Review', action: 'Added', time: '2 days ago' },
    { type: 'Case Study', title: 'SaaS Product Design', action: 'Updated', time: '3 days ago' },
  ];

  return (
    <div className="flex flex-col gap-[24px] sm:gap-[32px]">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[24px]">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trending === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <Card key={stat.label} padding="md">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[14px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    {stat.label}
                  </p>
                  <p className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[36px] leading-[42px] mt-[8px]">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-[6px] mt-[12px]">
                    <TrendIcon 
                      size={14} 
                      className={stat.trending === 'up' ? 'text-[#10b981]' : 'text-[#dc2626]'}
                    />
                    <span 
                      className={`font-['DM_Sans:9pt_Regular',sans-serif] text-[12px] ${stat.trending === 'up' ? 'text-[#10b981]' : 'text-[#dc2626]'}`}
                      style={{ fontVariationSettings: "'opsz' 9" }}
                    >
                      {stat.change} this month
                    </span>
                  </div>
                </div>
                <div className="bg-[rgba(249,115,22,0.1)] rounded-full p-[12px]">
                  <Icon size={24} className="text-[#F97316]" strokeWidth={1.5} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card padding="md">
        <div className="flex items-center justify-between mb-[24px]">
          <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[18px]">
            Recent Activity
          </h3>
          <button className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#F97316] text-[14px] hover:underline" style={{ fontVariationSettings: "'opsz' 9" }}>
            View all
          </button>
        </div>

        <div className="space-y-[16px]">
          {recentActivity.map((activity, index) => (
            <div 
              key={index}
              className="flex items-center justify-between py-[12px] border-b border-[#374151] last:border-0"
            >
              <div className="flex items-center gap-[16px] flex-1">
                <div className="flex items-center gap-[12px] flex-1">
                  <div className="bg-[rgba(249,115,22,0.6)] rounded-full w-[6px] h-[6px]" />
                  <div>
                    <p className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[14px]">
                      {activity.title}
                    </p>
                    <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[12px] mt-[2px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                      {activity.type} • {activity.action}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[6px] text-[#9ca3af]">
                  <Clock size={14} />
                  <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}