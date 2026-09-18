import React from 'react';

export interface TickerProps {
  items: string[];
  variant?: 'default' | 'safety';
  reverse?: boolean;
  className?: string;
}

export const Ticker: React.FC<TickerProps> = ({
  items,
  variant = 'default',
  reverse = false,
  className = '',
}) => {
  const variantClass = variant === 'safety' ? 'ticker--safety' : '';
  const reverseClass = reverse ? 'ticker--reverse' : '';

  // Duplicate items for infinite scroll effect
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`ticker ${variantClass} ${reverseClass} ${className}`.trim()}>
      <div className="ticker__track">
        {duplicatedItems.map((item, index) => (
          <span key={index} className="ticker__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
