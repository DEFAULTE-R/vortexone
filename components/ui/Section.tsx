import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const Section = ({
  id,
  children,
  className = '',
  fullWidth = false,
}: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={fullWidth ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8'}>
        {children}
      </div>
    </section>
  );
};
