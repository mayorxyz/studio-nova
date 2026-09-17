import React from 'react';

export interface FeatCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'dark' | 'safety';
  className?: string;
}

export const FeatCard: React.FC<FeatCardProps> = ({
  icon,
  title,
  description,
  variant = 'default',
  className = '',
}) => {
  const variantClass = {
    default: '',
    dark: 'feat-card--dark',
    safety: 'feat-card--safety',
  }[variant];

  return (
    <div className={`feat-card ${variantClass} ${className}`.trim()}>
      {icon && <div className="feat-card__icon">{icon}</div>}
      <h3 className="feat-card__title">{title}</h3>
      <p className="feat-card__desc">{description}</p>
    </div>
  );
};

export default FeatCard;
