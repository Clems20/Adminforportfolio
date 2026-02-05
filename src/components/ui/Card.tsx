interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ children, className = '', padding = 'md' }: CardProps) {
  const paddingStyles = {
    sm: 'p-[16px]',
    md: 'p-[24px]',
    lg: 'p-[32px]'
  };
  
  return (
    <div className={`relative bg-[#1f2937] rounded-[16px] ${paddingStyles[padding]} ${className}`}>
      <div 
        aria-hidden="true" 
        className="absolute border-[#374151] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" 
      />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
