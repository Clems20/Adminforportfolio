interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      {label && (
        <label className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[14px]">
          {label}
        </label>
      )}
      <input
        className={`
          bg-[#1f2937] 
          border border-[#374151] 
          rounded-[8px] 
          px-[16px] 
          py-[10px] 
          text-[#fafaf9] 
          font-['DM_Sans:9pt_Regular',sans-serif] 
          text-[16px]
          placeholder:text-[#9ca3af]
          focus:outline-none 
          focus:border-[#F97316] 
          focus:ring-1 
          focus:ring-[#F97316]/20
          transition-all
          ${error ? 'border-[#dc2626]' : ''}
          ${className}
        `}
        style={{ fontVariationSettings: "'opsz' 9" }}
        {...props}
      />
      {error && (
        <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#dc2626] text-[14px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          {error}
        </span>
      )}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      {label && (
        <label className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[14px]">
          {label}
        </label>
      )}
      <textarea
        className={`
          bg-[#1f2937] 
          border border-[#374151] 
          rounded-[8px] 
          px-[16px] 
          py-[10px] 
          text-[#fafaf9] 
          font-['DM_Sans:9pt_Regular',sans-serif] 
          text-[16px]
          placeholder:text-[#9ca3af]
          focus:outline-none 
          focus:border-[#F97316] 
          focus:ring-1 
          focus:ring-[#F97316]/20
          transition-all
          resize-vertical
          min-h-[100px]
          ${error ? 'border-[#dc2626]' : ''}
          ${className}
        `}
        style={{ fontVariationSettings: "'opsz' 9" }}
        {...props}
      />
      {error && (
        <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#dc2626] text-[14px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          {error}
        </span>
      )}
    </div>
  );
}
