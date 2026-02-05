interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-[8px] transition-all duration-200 font-[\'Space_Grotesk:Regular\',sans-serif]';
  
  const variants = {
    primary: 'bg-[#F97316] text-[#fafaf9] hover:bg-[#ea6a0f] active:bg-[#dc6108]',
    secondary: 'bg-[rgba(249,115,22,0.1)] text-[#F97316] hover:bg-[rgba(249,115,22,0.15)] border border-[#F97316]/20',
    ghost: 'bg-transparent text-[#9ca3af] hover:bg-[#1f2937] hover:text-[#fafaf9]',
    danger: 'bg-[#dc2626] text-[#fafaf9] hover:bg-[#b91c1c] active:bg-[#991b1b]'
  };
  
  const sizes = {
    sm: 'px-[12px] py-[6px] text-[14px]',
    md: 'px-[16px] py-[10px] text-[16px]',
    lg: 'px-[24px] py-[14px] text-[18px]'
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
