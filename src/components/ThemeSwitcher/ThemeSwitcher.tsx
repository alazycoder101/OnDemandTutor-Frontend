
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { lightTheme, darkTheme } from '../../themes';

const ThemeSwitcher: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 9999 }}>
      <button onClick={() => setTheme(lightTheme)}>Light</button>
      <button onClick={() => setTheme(darkTheme)}>Dark</button>
    </div>
  );
};

export default ThemeSwitcher;
