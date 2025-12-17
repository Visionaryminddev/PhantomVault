import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 touch-target active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:shadow-lg hover:shadow-[#D4AF37]/30',
    secondary: 'bg-[#111111] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black',
    outline: 'bg-transparent border border-[#1a1a1a] text-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]',
  };

  const sizes = {
    sm: 'px-4 py-2.5 text-sm min-h-[40px]',
    md: 'px-5 py-3 text-base sm:px-6 min-h-[48px]',
    lg: 'px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg min-h-[52px]',
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}
