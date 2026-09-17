import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [time, setTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        STUDIO<span>NOVA</span>
      </Link>

      <nav className="header__nav hidden md:flex">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? 'active' : ''}
          >
            {item.label}
          </Link>
        ))}
        <Link to="/portal" className="btn--ghost !py-2 !px-4 !text-[0.7rem]">
          Portal →
        </Link>
      </nav>

      <div className="header__status hidden sm:flex">
        <div className="header__status-dot" />
        <span className="header__clock">{time}</span>
      </div>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div className="fixed inset-0 top-[64px] bg-[var(--term-bg)] z-50 flex flex-col p-8 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-white text-2xl font-display py-4 border-b border-[#333]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/portal"
            className="text-[var(--safety)] text-2xl font-display py-4"
            onClick={() => setMenuOpen(false)}
          >
            Client Portal →
          </Link>
        </div>
      )}
    </header>
  );
}
