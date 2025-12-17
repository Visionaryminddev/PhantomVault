interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  spacing?: 'sm' | 'md' | 'lg';
}

export default function Section({ 
  children, 
  className = '', 
  id,
  fullWidth = false,
  spacing = 'lg'
}: SectionProps) {
  const spacingClasses = {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20 lg:py-24',
    lg: 'py-16 sm:py-24 lg:py-32',
  };

  return (
    <section id={id} className={`${spacingClasses[spacing]} ${className}`}>
      <div className={fullWidth ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        {children}
      </div>
    </section>
  );
}
