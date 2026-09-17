import React from 'react';

export interface SignalVizProps {
  data: number[];
  color?: 'green' | 'amber' | 'safety';
  height?: number;
  className?: string;
}

export const SignalViz: React.FC<SignalVizProps> = ({
  data,
  color = 'green',
  height = 120,
  className = '',
}) => {
  const colorClass = {
    green: 'signal__bar',
    amber: 'signal__bar signal__bar--amber',
    safety: 'signal__bar signal__bar--safety',
  }[color];

  return (
    <div className={`signal__viz ${className}`.trim()} style={{ height: `${height}px` }}>
      {data.map((value, index) => (
        <div
          key={index}
          className={colorClass}
          style={{ height: `${value}%` }}
        />
      ))}
    </div>
  );
};

export default SignalViz;
