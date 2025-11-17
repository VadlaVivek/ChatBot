import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
      className="px-3 py-1 rounded border"
    >
      {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}
