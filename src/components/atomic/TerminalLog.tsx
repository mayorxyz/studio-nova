import React from 'react';

export interface TerminalLogEntry {
  type: 'prompt' | 'output' | 'success' | 'warning' | 'error';
  text: string;
}

export interface TerminalLogProps {
  entries: TerminalLogEntry[];
  showCursor?: boolean;
  title?: string;
  className?: string;
}

export const TerminalLog: React.FC<TerminalLogProps> = ({
  entries,
  showCursor = true,
  title = 'nova@studio:~',
  className = '',
}) => {
  const getColorClass = (type: TerminalLogEntry['type']) => {
    switch (type) {
      case 'prompt':
        return 'terminal__prompt';
      case 'success':
        return 'text-[var(--term-green)]';
      case 'warning':
        return 'text-[var(--term-amber)]';
      case 'error':
        return 'text-red-400';
      default:
        return '';
    }
  };

  return (
    <div className={`terminal ${className}`.trim()}>
      <div className="terminal__header">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="text-[var(--muted)] text-[var(--fs-micro)] ml-2">
          {title}
        </span>
      </div>
      {entries.map((entry, index) => (
        <div key={index} className="terminal__line">
          {entry.type === 'prompt' && (
            <span className="terminal__prompt">$ </span>
          )}
          <span className={getColorClass(entry.type)}>{entry.text}</span>
        </div>
      ))}
      {showCursor && (
        <div className="terminal__line">
          <span className="terminal__prompt">$ </span>
          <span className="terminal__cursor" />
        </div>
      )}
    </div>
  );
};

export default TerminalLog;
