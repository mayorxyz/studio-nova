import React from 'react';

export interface TagProps {
  variant?: 'default' | 'filled' | 'safety' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  variant = 'default',
  children,
  className = '',
}) => {
  const variantClass = {
    default: '',
    filled: 'tag--filled',
    safety: 'tag--safety',
    ghost: 'tag--ghost',
  }[variant];

  return (
    <span className={`tag ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default Tag;
