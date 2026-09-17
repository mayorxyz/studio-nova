import React from 'react';

export interface MetricsRibbonItem {
  label: string;
  value: string;
}

export interface MetricsRibbonProps {
  items: MetricsRibbonItem[];
  variant?: 'default' | 'safety' | 'dark';
  className?: string;
}

export const MetricsRibbon: React.FC<MetricsRibbonProps> = ({
  items,
  variant = 'default',
  className = '',
}) => {
  const variantClass = {
    default: '',
    safety: 'ribbon--safety',
    dark: 'ribbon--dark',
  }[variant];

  // Duplicate items for infinite scroll effect
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`ribbon ${variantClass} ${className}`.trim()}>
      <div className="ribbon__track">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="ribbon__cell">
            <div className="ribbon__cell-value">{item.value}</div>
            <div className="ribbon__cell-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsRibbon;
