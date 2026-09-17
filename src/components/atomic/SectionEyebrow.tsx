import React from 'react';

export interface SectionEyebrowProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  children,
  align = 'left',
  className = '',
}) => {
  const alignClass = align === 'center' ? 'justify-center' : '';
  
  return (
    <div className={`section__label ${alignClass} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default SectionEyebrow;
