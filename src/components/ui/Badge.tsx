interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'dark' | 'success';
  className?: string;
  size?: 'sm' | 'md';
}

export default function Badge({ 
  children, 
  variant = 'gold',
  className = '',
  size = 'md'
}: BadgeProps) {
  const variants = {
    gold: 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30',
    dark: 'bg-[#1a1a1a] text-gray-300 border-[#2a2a2a]',
    success: 'bg-green-500/10 text-green-400 border-green-500/30',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1.5 text-xs sm:text-sm',
  };

  return (
    <span 
      className={`
        inline-flex items-center font-medium rounded-full border whitespace-nowrap
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
