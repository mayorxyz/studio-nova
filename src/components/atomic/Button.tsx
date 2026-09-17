import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'ghost';
  safety?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  safety = false,
  children,
  onClick,
  href,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  const variantClass = variant === 'primary' ? 'btn--primary' : 'btn--ghost';
  const safetyClass = safety ? 'btn--primary--safety' : '';
  const classes = `${variantClass} ${safetyClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
