import React from 'react';

export interface SidebarItem {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface SidebarProps {
  items: SidebarItem[];
  collapsed?: boolean;
  onToggle?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  collapsed = false,
  onToggle,
  header,
  footer,
  className = '',
}) => {
  const collapsedClass = collapsed ? 'sidebar--collapsed' : '';

  return (
    <aside className={`sidebar ${collapsedClass} ${className}`.trim()}>
      <div className="sidebar__header">
        {header || (
          <button
            onClick={onToggle}
            className="sidebar-toggle"
            aria-label="Toggle sidebar"
          >
            {collapsed ? '▶' : '◀'}
          </button>
        )}
      </div>

      <nav>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className={`sidebar__item ${item.active ? 'sidebar__item--active' : ''}`}
          >
            <span className="text-lg">{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {footer && <div className="sidebar__log">{footer}</div>}
    </aside>
  );
};

export default Sidebar;
