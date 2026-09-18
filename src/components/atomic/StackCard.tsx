import React from 'react';

export interface StackCardProps {
  title: string;
  items: string[];
  variant?: 'default' | 'dark' | 'safety';
  headerRight?: React.ReactNode;
  className?: string;
}

export const StackCard: React.FC<StackCardProps> = ({
  title,
  items,
  variant = 'default',
  headerRight,
  className = '',
}) => {
  const variantClass = {
    default: '',
    dark: 'stack__card--dark',
    safety: 'stack__card--safety',
  }[variant];

  return (
    <div className={`stack__card ${variantClass} ${className}`.trim()}>
      <div className="stack__card-header">
        <h3 className="stack__card-title">{title}</h3>
        {headerRight && <div>{headerRight}</div>}
      </div>
      <ul className="stack__card-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default StackCard;
