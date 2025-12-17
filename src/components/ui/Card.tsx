interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  onClick,
  padding = 'md'
}: CardProps) {
  const paddingSizes = {
    sm: 'p-4 sm:p-5',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  return (
    <div 
      onClick={onClick}
      className={`
        bg-[#111111] border border-[#1a1a1a] rounded-2xl ${paddingSizes[padding]}
        ${hover ? 'card-hover' : ''}
        ${glow ? 'border-glow' : ''}
        ${onClick ? 'cursor-pointer active:scale-[0.98] transition-transform' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
