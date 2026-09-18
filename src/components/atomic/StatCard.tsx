import React from 'react';

export interface StatCardProps {
  value: string;
  label: string;
  dark?: boolean;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  dark = false,
  className = '',
}) => {
  const darkClass = dark ? 'stat-card--dark' : '';
  
  return (
    <div className={`stat-card ${darkClass} ${className}`.trim()}>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
};

export default StatCard;
