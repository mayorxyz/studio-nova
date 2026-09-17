import React from 'react';

export interface SpecCellProps {
  label: string;
  value: string;
  variant?: 'default' | 'dark' | 'safety';
  className?: string;
}

export const SpecCell: React.FC<SpecCellProps> = ({
  label,
  value,
  variant = 'default',
  className = '',
}) => {
  const variantClass = {
    default: '',
    dark: 'spec-cell--dark',
    safety: 'spec-cell--safety',
  }[variant];

  return (
    <div className={`spec-cell ${variantClass} ${className}`.trim()}>
      <div className="spec-cell__label">{label}</div>
      <div className="spec-cell__value">{value}</div>
    </div>
  );
};

export default SpecCell;
