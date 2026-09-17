import React from 'react';

export interface BentoCardProps {
  variant?: 'default' | 'dark' | 'safety';
  span?: 'wide' | 'mid' | 'narrow' | 'tall';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  variant = 'default',
  span,
  children,
  className = '',
  onClick,
}) => {
  const variantClass = {
    default: '',
    dark: 'bento-card--dark',
    safety: 'bento-card--safety',
  }[variant];

  const spanClass = span ? `bento-card--${span}` : '';

  return (
    <div
      className={`bento-card ${variantClass} ${spanClass} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BentoCard;
